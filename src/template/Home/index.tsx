
import * as S from './styles';

import PiuComponent from 'components/PiuComponent';
import GroupsComponent from 'components/GroupsComponent';
import FriendsComponent from 'components/FriendsComponent';
import { ChangeEvent, useState } from 'react';

const HomeTemplate = () => {
    interface InterfacePiu {
        name: string;
        profileImg: string;
        text: string;
        piuImg?: string;

    }

    const [piusArray, setPiusArray] = useState<InterfacePiu[]>([
        {
            name: 'Letícia Falconer',
            profileImg: '/assets/profile.svg',
            text: 'Quarta tem testinho de circuitos 😩 fui muito mal na P1 e precisava recuperar, mas não vai rolar... quero férias logo aaaaa'

        },
        {
            name: 'Letícia Falconer',
            profileImg: '/assets/profile.svg',
            text: 'Olha que bonita ficou a torrada que eu fiz! 😋😋😋',
            piuImg: '/assets/piu1.png'

        }
    ]);

    function sendPiu() {
        if (piusInput == "") return;
        if (piusInput.length > 140) return;
        setPiusArray([{
            name: 'Letícia Falconer',
            profileImg: '/assets/profile.svg',
            text: piusInput,
        },
        ...piusArray
        ])
    }

    const [piusInput, setPiusInput] = useState("")

    const [maxCaractersBoolean, setMaxCaractersBoolean] = useState(false);

    function caractersBoolean() {
        if (piusInput.length > 140) {
            setMaxCaractersBoolean(true);
        }
        else setMaxCaractersBoolean(false);
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPiusInput(event.target.value);
        caractersBoolean();
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
                                <S.MainButton onClick={sendPiu} >Piar</S.MainButton>
                            </S.NewPiuSendContainer>
                        </S.NewPiuContainer>
                        {
                            piusArray.map((piu) => (
                                <PiuComponent
                                    name={piu.name}
                                    profileImg={piu.profileImg}
                                    text={piu.text}
                                    piuImg={piu.piuImg}
                                ></PiuComponent>))
                        }
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
                                <S.SecondaryButton>Animais</S.SecondaryButton>
                                <S.SecondaryButton>Séries de Comédia</S.SecondaryButton>
                                <S.SecondaryButton>Copa do Mundo</S.SecondaryButton>
                            </S.InterestButtonsContainer>
                        </S.InterestsContainer>
                    </S.RightSideBarContainer>
                </S.Body>
            </S.MainBody>
        </>
    );
};

export default HomeTemplate;
