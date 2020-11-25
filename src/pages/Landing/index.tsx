import React from 'react';
import { Title } from './styles';
import logo from '../../images/github_explorer-logo.svg';

const Landing : React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repositórios no Github.</Title>
        </>
    );
}

export default Landing;