import React from 'react';
import { Title, Form } from './styles';
import logo from '../../images/github_explorer-logo.svg';

const Landing : React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repositórios no Github.</Title>
            <Form>
                <input type="text" name="repo-name" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
        </>
    );
}

export default Landing;