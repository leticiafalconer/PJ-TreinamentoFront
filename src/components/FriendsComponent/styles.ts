import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    gap: 16px;
    width: fit-content;
`;

export const Name = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: #322c1e;

    @media only screen and (min-width: 1150px) {
        font-size: 16px;
    }
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;
