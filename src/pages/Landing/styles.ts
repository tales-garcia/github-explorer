import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    line-height: 56px;

    max-width: 450px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;

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
            margin-left: 16px;

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