import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};

    color: #FFFFFF;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    &:hover{
        opacity: 0.5;
    }

    &:active{
        opacity: 0.8;
    }

    img{
         ${props => props.isBack && 'transform: rotateY(180deg)'};
    }
`;