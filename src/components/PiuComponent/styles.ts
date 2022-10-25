import styled from 'styled-components';

interface ContainerProps {
    displayed: boolean;
}

export const Container = styled.div<ContainerProps>`
    display: ${({displayed}) => (displayed ? "none" : "flex")};
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
    gap: 16px;
    background-color: #F4F2EE;
    border-radius: 16px;
    box-shadow: 1px 1px 4px #BEBEBE;
`;

export const ProfileContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Name = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #322C1E;
`;

export const ProfilePicture = styled.img`
    width: 32px;
    height: 32px;
`;

export const DeleteContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Delete = styled.img`
    width: 24px;
    height: 24px;
`;

export const PiuText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #545454;
    padding-left: 8px;
    padding-right: 8px;
    
`;

export const PiuImageContainer= styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PiuImage= styled.img`
    width: 85%;
    height: auto;
    border-radius: 8px;
`;

export const PiuLikeContainer= styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const PiuLike= styled.img`
    width: auto;
    height: 24px;
`;
