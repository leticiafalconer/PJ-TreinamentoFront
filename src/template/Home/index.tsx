
import * as S from './styles';

import PiuComponent from 'components/PiuComponent';
import GroupsComponent from 'components/GroupsComponent';
import FriendsComponent from 'components/FriendsComponent';
import { ChangeEvent, useEffect, useState } from 'react';
import PiuService from 'services/PiuService';
import Piu from 'interfaces/Piu';

const HomeTemplate = () => {

    // const [getUser, setUser] = useState<User>();

    // useEffect(() => {
    //     const getUser = async () => {
    //         const user = await UserService.getUserById("08e5be8d-3225-4816-a36f-d39990a11eba");
    //         setUser(user);
    //     };

    //     getUser();

    // }, []);

    const [piusArray, setPiusArray] = useState<Piu[]>([]);

    const [piusInput, setPiusInput] = useState("");

    const [piuPostado, setPiuPostado] = useState(false);

    const [maxCaractersBoolean, setMaxCaractersBoolean] = useState(false);

    useEffect(() => {
        const asyncGetPius = async () => {
            const response = await PiuService.getPius();
            console.log(response);
            setPiusArray(response.sort((a, b) => (new Date(b.created_at).getTime()>new Date(a.created_at).getTime()? 1 : -1)));
            
        };

        asyncGetPius();

    }, [piuPostado]);

    async function sendPiu() {
        if (piusInput == "") return;
        if (piusInput.length > 140) return;
        await PiuService.postPiu(piusInput);
        setPiuPostado(!piuPostado);
    }
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPiusInput(event.target.value);
        if (event.target.value.length > 140) {
            setMaxCaractersBoolean(true);
        }
        else setMaxCaractersBoolean(false);
    };

    return (
        <>
            <S.MainBody>
                <S.Header>
                    <S.Logo src='/assets/logo.svg' />
                    <S.Titles>Seu Feed</S.Titles>
                    <S.SearchContainer>
                        <S.SearchInput placeholder="Buscar" />
                        <S.SearchButton>
                            <S.SearchImage src='/assets/search.svg' />
                        </S.SearchButton>
                    </S.SearchContainer>
                </S.Header>
                <S.Body>

                    <S.LeftSideBarContainer>
                        <S.GroupsContainer>
                            <S.Titles>Seus Grupos</S.Titles>
                            <GroupsComponent
                                title='Copa do mundo'
                                img='/assets/bola.svg'>
                            </GroupsComponent>
                            <GroupsComponent
                                title='Poli minha vida'
                                img='/assets/poli.svg'>
                            </GroupsComponent>
                            <GroupsComponent
                                title='Nostalgia 22'
                                img='/assets/drink.svg'>
                            </GroupsComponent>
                        </S.GroupsContainer>
                        <S.FriendsContainer>
                            <S.Titles>Amigos</S.Titles>
                            <FriendsComponent
                                name='Amigo 1'
                                img='/assets/profile.svg'>
                            </FriendsComponent>
                            <FriendsComponent
                                name='Amigo 2'
                                img='/assets/profile.svg'>
                            </FriendsComponent>
                            <FriendsComponent
                                name='Amigo 3'
                                img='/assets/profile.svg'>
                            </FriendsComponent>
                            <FriendsComponent
                                name='Amigo 4'
                                img='/assets/profile.svg'>
                            </FriendsComponent>
                            <FriendsComponent
                                name='Amigo 5'
                                img='/assets/profile.svg'>
                            </FriendsComponent>
                            <FriendsComponent
                                name='Amigo 6'
                                img='/assets/profile.svg'>
                            </FriendsComponent>
                        </S.FriendsContainer>
                    </S.LeftSideBarContainer>
                    <S.FeedContainer>
                        <S.Titles>Para Você</S.Titles>
                        <S.NewPiuContainer>
                            <S.NewPiuInputContainer>
                                <S.PiuProfilePicture src='/assets/profile.svg' />
                                <S.NewPiuInput
                                    placeholder='Sobre o que você está pensando?'
                                    onChange={event => handleChange(event)}
                                />
                            </S.NewPiuInputContainer>
                            <S.Divider>
                            </S.Divider>
                            <S.NewPiuSendContainer>
                                <S.CountText colored={maxCaractersBoolean}>{piusInput.length} caracteres</S.CountText>
                                <S.MainButton onClick={() => sendPiu()} >Piar</S.MainButton>
                            </S.NewPiuSendContainer>

                        </S.NewPiuContainer>
                        <S.PiusWrapper>
                            {
                                piusArray.map((piu) => (
                                    <PiuComponent key={piu.id}
                                        id={piu.id}
                                        name={piu.user.username}
                                        profileImg={piu.user.avatar}
                                        likes={piu.likes}
                                        text={piu.text}
                                        setPiuPostado={setPiuPostado}
                                        piuPostado={piuPostado}
                                        created_at={piu.created_at}
                                        user={piu.user}
                                    ></PiuComponent>))
                            }
                        </S.PiusWrapper>
                    </S.FeedContainer>
                    <S.RightSideBarContainer>
                        <S.ProfileContainer>
                            <S.ProfilePicture src='/assets/profile.svg' />
                            <S.Titles>Letícia Falconer</S.Titles>
                            <S.MainButton>Editar Perfil</S.MainButton>
                            <S.ProfileDescription>Essa é minha descrição lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </S.ProfileDescription>
                        </S.ProfileContainer>
                        <S.InterestsContainer>
                            <S.InterestsTitle>Meus Interesses</S.InterestsTitle>
                            <S.InterestButtonsContainer>
                                <S.SecondaryButton>Futebol</S.SecondaryButton>
                                <S.SecondaryButton>Filmes</S.SecondaryButton>
                                <S.SecondaryButton>Arte</S.SecondaryButton>
                                <S.SecondaryButton>Pets</S.SecondaryButton>
                                <S.SecondaryButton>Copa do Mundo</S.SecondaryButton>
                                <S.SecondaryButton>Séries de Comédia</S.SecondaryButton>
                            </S.InterestButtonsContainer>
                        </S.InterestsContainer>
                    </S.RightSideBarContainer>
                </S.Body>
            </S.MainBody>
        </>
    );
};

export default HomeTemplate;
