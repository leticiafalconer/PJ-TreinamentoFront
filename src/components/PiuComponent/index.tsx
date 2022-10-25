import * as S from './styles';
import { useState } from 'react';

export type PiuComponentProps = {
    name: string;
    profileImg: string;
    text: string;
    piuImg?: string;
};

const PiuComponent: React.FC<PiuComponentProps> = ({ name, profileImg, text, piuImg }) => {
    const [heartBoolean, setHeartBoolean] = useState(false);

    const [piuBoolean, setPiuBoolean] = useState(false);

    const [deletePiu, setDeletePiu] = useState(false);
    
    return(
    <S.Container displayed = {deletePiu}>
        <S.DeleteContainer>
        <S.ProfileContainer>
            <S.ProfilePicture src={profileImg} />
            <S.Name>{name}</S.Name>
        </S.ProfileContainer>
        <S.Delete src='/assets/delete.svg' onClick={() => setDeletePiu(true)}/>
        </S.DeleteContainer>
        <S.PiuText>{text}</S.PiuText>
        <S.PiuImageContainer>
            <S.PiuImage src={piuImg} />
        </S.PiuImageContainer>
        <S.PiuLikeContainer>
            <S.PiuLike onClick={() => setHeartBoolean(!heartBoolean)} src={heartBoolean? '/assets/selectedHeart.svg' : '/assets/heart.svg'} />
            <S.PiuLike onClick={() => setPiuBoolean(!piuBoolean)} src={piuBoolean? '/assets/selectedBird.svg' : '/assets/bird.svg'} />
        </S.PiuLikeContainer>
    </S.Container>
)};

export default PiuComponent;
