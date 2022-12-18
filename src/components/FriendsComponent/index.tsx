import * as S from './styles';

export type FriendsComponentProps = {
    name: string;
    img: string;
    // online: boolean;
};

const FriendsComponent: React.FC<FriendsComponentProps> = ({ name, img }) => (
    <S.Container>
        <S.Icon src={img} />
        <S.Name>{name}</S.Name>
    </S.Container>
);

export default FriendsComponent;
