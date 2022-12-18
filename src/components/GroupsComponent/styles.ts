import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    background-color: #edbd5f;
    gap: 8px;
    width: fit-content;
`;

export const Title = styled.span`
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;

    @media only screen and (min-width: 1150px) {
        font-size: 16px;
    }
`;

export const Icon = styled.img`
    width: 16px;
    height: 16px;
`;
