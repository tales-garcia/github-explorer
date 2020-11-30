import styled from 'styled-components';

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