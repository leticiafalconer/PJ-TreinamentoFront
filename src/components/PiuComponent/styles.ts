import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 16px;
    padding-bottom: 16px;
    gap: 16px;
    background-color: #f4f2ee;
    border-radius: 16px;
    box-shadow: 1px 1px 4px #bebebe;
`;

export const ProfileContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const Username = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #322c1e;
`;

export const Name = styled.span`
    font-weight: lighter;
    font-size: 10px;
    color: #949494;
`;

export const ProfilePicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const DeleteContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Delete = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

export const PiuText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: #545454;
    padding-left: 8px;
    padding-right: 8px;
`;

export const PiuImageContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PiuImage = styled.img`
    width: 85%;
    height: auto;
    border-radius: 8px;
`;

export const PiuLikeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: 8px;
`;

export const PiuBottomWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
`;

export const PiuLike = styled.img`
    width: auto;
    height: 20px;
    cursor: pointer;
`;

export const PiuLikeCount = styled.span`
    width: auto;
    font-size: 16px;
    padding-top: 4px;
    color: #949494;
    font-weight: lighter;
`;

export const CreationDate = styled.p`
    width: auto;
    font-size: 14px;
    color: #949494;
    font-weight: lighter;
    padding-top: 4px;
`;
