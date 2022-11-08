import * as S from './styles';
import { useEffect, useState } from 'react';
import PiuService from 'services/PiuService';
import PiuLike from 'interfaces/PiuLike';
import User from 'interfaces/User';

export type PiuComponentProps = {
    id: string;
    name: string;
    profileImg: string;
    likes: PiuLike[];
    text: string;
    setPiuPostado: (x: boolean) => void;
    piuPostado: boolean;
    created_at: Date;
    user: User;
};

const PiuComponent: React.FC<PiuComponentProps> = ({ id, name, profileImg, likes, text, setPiuPostado, piuPostado, created_at, user }) => {

    const [piuBoolean, setPiuBoolean] = useState(false);
    const [likeCount, setLikeCount] = useState(likes.length);

    useEffect(() => {
        const updateLikes = async () => {
            const result = likes.find(({ userId }) => userId === "08e5be8d-3225-4816-a36f-d39990a11eba");
            if (result) setPiuBoolean(true);
        };

        updateLikes();

    }, []);

    async function processDelete() {
        await PiuService.deletePiu(id);
        setPiuPostado(!piuPostado);
    }

    async function processLike() {
        await PiuService.likePiu(id);
        if (piuBoolean) {
            setLikeCount(likeCount - 1);
        }
        else setLikeCount(likeCount + 1);
        setPiuBoolean(!piuBoolean);

    }

    return (
        <S.Container>
            <S.DeleteContainer>
                <S.ProfileContainer>
                    <S.ProfilePicture src={profileImg} />
                    <S.NameWrapper>
                        <S.Username>{name}</S.Username>
                        <S.Name>{user.firstName} {user.lastName}</S.Name>
                    </S.NameWrapper>
                </S.ProfileContainer>
                {(user.id === "08e5be8d-3225-4816-a36f-d39990a11eba") && 
                <S.Delete src='/assets/delete.svg' onClick={processDelete} />}
            </S.DeleteContainer>
            <S.PiuText>{text}</S.PiuText>
            <S.PiuBottomWrapper>
                <S.PiuLikeWrapper>
                    <S.PiuLike onClick={processLike} src={piuBoolean ? '/assets/selectedBird.svg' : '/assets/bird.svg'} />
                    <S.PiuLikeCount>{likeCount}</S.PiuLikeCount>
                </S.PiuLikeWrapper>
                <S.CreationDate>Piado em {new Date(created_at).toLocaleDateString()} às {new Date(created_at).toLocaleTimeString()}</S.CreationDate>
            </S.PiuBottomWrapper>
        </S.Container>
    )
};

export default PiuComponent;
