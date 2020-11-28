import styled from 'styled-components';
import { shade } from 'polished';

interface FormProps {
    error: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    line-height: 56px;

    max-width: 450px;
    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        padding: 0 24px;
        border: 1px solid ${props => props.error ? '#c53030' : 'transparent'};
        border-radius: 5px 0 0 5px;
        border-right: 0;

        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        width: 210px;
        height: 70px;
        border-radius: 0 5px 5px 0;
        background: #04D361;
        border: none;
        color: #FFF;
        font-weight: bold;

        &:hover {
            background: ${shade(0.2, '#04D361')}
        }
    }
`;
export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform ease-out .2s;

        &:hover {
            transform: translateX(10px);
        }

        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }
        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }
            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }
        svg {
            margin-left: auto;
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;