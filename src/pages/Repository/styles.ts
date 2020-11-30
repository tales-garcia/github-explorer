import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #A8A8B3;
        transition: color .2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            height: 120px;
            width: 120px;
            border-radius: 50%;
        }
        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3D3D4D;
            }
            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }
    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            strong {
                display: block;
                font-size: 36px;

                color: #3D3D4D;
            }
            span {
                display: block;
                margin-top: 4px;
                color: #6C6C80;
            }

            & + li {
                margin-left: 80px;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;

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

const gradientMove = keyframes`
    0% {
        background-position: -200px 0px;
    }
    100% {
        background-position: calc(200px + 100%) 0px;
    }
`;

export const ImageSpan = styled.span`
    height: 120px;
    width: 120px;
    border-radius: 50%;

    animation: 1.2s ease-in-out 0s infinite normal none running ${gradientMove};
    background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgb(255, 255, 255), rgba(0, 0, 0, 0));
    background-color: rgb(179, 179, 179);
    background-size: 200px 100%;
    background-repeat: no-repeat;
    opacity: 0.1;
`;

export const TitleSpan = styled.span`
    height: 30px;
    width: 300px;
    display: block;
    border-radius: 4px;

    animation: 1.2s ease-in-out 0s infinite normal none running ${gradientMove};
    background-image: linear-gradient(90deg, #3D3D4D, ${lighten(0.1, '#3D3D4D')}, #3D3D4D);
    background-color: #3D3D4D;
    background-size: 200px 100%;
    background-repeat: no-repeat;
    opacity: 0.4;
`;

export const DescriptionSpan = styled.span`
    height: 20px;
    width: 500px;
    margin-top: 10px;
    display: block;
    border-radius: 4px;

    animation: 1.2s ease-in-out 0s infinite normal none running ${gradientMove};
    background-image: linear-gradient(90deg, #A8A8B3, ${lighten(0.1, '#A8A8B3')}, #A8A8B3);
    background-color: #A8A8B3;
    background-size: 200px 100%;
    background-repeat: no-repeat;
    opacity: 0.4;
`;

export const LiSpan = styled.span`
    height: 40px;
    width: 35px;
    margin-top: 4px;
    opacity: 0.3;
    border-radius: 4px;

    animation: 1.2s ease-in-out 0s infinite normal none running ${gradientMove};
    background-image: linear-gradient(90deg, #3D3D4D, ${lighten(0.2, '#3D3D4D')}, #3D3D4D);
    background-color: #3D3D4D;
    background-size: 200px 100%;
    background-repeat: no-repeat;
`;