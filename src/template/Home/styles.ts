import styled from 'styled-components';

interface ContainerProps {
    colored: boolean;
}


export const MainBody = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFFFFF;
`;

export const Header = styled.div`
    height: 8vh;
    width: 100vw;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
    position: fixed;
`;

export const Logo = styled.img`
    height: 5vh;
`;

export const SearchContainer = styled.div`
    width: fit-content;
    height: 6vh;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const SearchInput = styled.input`
    width: 16vw;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    color: #322C1E;
    border-radius: 32px;
    border-color: #949494;
    border-width: 1px;
    border-style: solid;
    padding: 8px;
    padding-left: 16px;
`;

export const SearchButton = styled.button`
    width: 32px;
    height: 4vh;
    cursor: pointer;
    border: none;
    align-items: center;
    background-color: #FFFFFF;
`;

export const SearchImage = styled.img`
    width: 4vh;
    height: 4vh;
`;

export const Body = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 8vh;
    display: flex;
    overflow-y: scroll;
`;
export const LeftSideBarContainer = styled.div`
    height: 88vh;
    width: 32vw;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    padding-left: 32px;
    gap: 72px;
    border-radius: 16px;
    box-shadow: 1px 1px 4px #BEBEBE;
    margin-left: 16px;
    margin-right: 8px;
    margin-top: 8px;
    /* position: fixed; */
`;

export const GroupsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const FriendsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const Titles = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #322C1E;
`;

export const FeedContainer = styled.div`
    min-height: 100%;
    height: fit-content;
    width: 100%;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
    gap: 16px;
    border-radius: 16px;
    box-shadow: 1px 1px 4px #BEBEBE;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 8px;
    overflow-y: hidden;
`;

export const NewPiuContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
    gap: 8px;
    background-color: #F4F2EE;
    border-radius: 16px;
    box-shadow: 1px 1px 4px #BEBEBE;
`;

export const NewPiuInputContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 8px;
`;

export const NewPiuSendContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewPiuInput = styled.input`
    width: 100%;
    height: fit-content;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    color: #322C1E;
    border-radius: 32px;
    border-color: #949494;
    border-width: 1px;
    border-style: solid;
    padding: 8px;
    padding-left: 16px;
`;

export const PiuProfilePicture = styled.img`
    width: 40px;
    height: 40px;
`;

export const Divider = styled.hr`
    height: 1px;
    background-color: #949494;
`;

export const CountText = styled.span<ContainerProps>`
    font-size: 14px;
    color: ${({colored}) => (colored ? "red" : "#545454")};
`;

export const CountTextRed = styled.span`
    font-size: 14px;
    color: #FF0000;
`;

export const MainButton = styled.button`
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    color: #FFFFFF;
    background-color: #EDBD5F;
    border-color: #FFFFFF;
    border-style: none;
    border-radius: 8px;
`;

export const RightSideBarContainer = styled.div`
    height: 88vh;
    width: 40vw;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    padding-top: 64px;
    padding-left: 16px;
    padding-right: 16px;
    gap: 72px;
    border-radius: 16px;
    box-shadow: 1px 1px 4px #BEBEBE;
    margin-left: 8px;
    margin-right: 16px;
    margin-top: 8px;
`;

export const ProfileContainer = styled.div`
    height: fit-content;
    width: 100%;
    gap: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const ProfilePicture = styled.img`
    width: 32%;
    height: auto;
`;

export const ProfileDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #545454;
    text-align: center;
`;

export const InterestsContainer = styled.div`
    height: fit-content;
    width: 100%;
    gap: 8px;
    display: flex;
    flex-direction: column;
`
export const InterestButtonsContainer = styled.div`
    height: fit-content;
    width: 100%;
    gap: 4px;
    display: flex;
    flex-wrap: wrap;
`

export const InterestsTitle = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #322C1E;
`;



export const SecondaryButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 8px;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    color: #EDBD5F;
    background-color: #FFFFFF;
    border-color: #EDBD5F;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
`;



