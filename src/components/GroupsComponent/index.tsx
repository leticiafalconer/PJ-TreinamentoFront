import * as S from './styles';

export type GroupsComponentProps = {
    title: string;
    img: string;
};

const GroupsComponent: React.FC<GroupsComponentProps> = ({ title, img }) => (
    <S.Container>
        <S.Icon src={img} />
        <S.Title>{title}</S.Title>
    </S.Container>
);

export default GroupsComponent;
