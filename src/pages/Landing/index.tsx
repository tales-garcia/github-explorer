import React, { FormEvent, useEffect, useState } from 'react';
import { Title, Form, Repositories, Error } from './styles';
import logo from '../../images/github_explorer-logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

interface Repository {
    full_name: string,
    owner: {
        avatar_url: string,
        login: string
    },
    description: string,
    stargazers_count: number,
    forks_count: number,
    open_issues_count: number
}

const Landing: React.FC = () => {
    const [repositories, setRepositories] = useState<Repository[]>(
        JSON.parse(localStorage.getItem('@githubexplorer:repositories') || '[]')
    );
    const [invalidInputErrorMessage, setInvalidInputErrorMessage] = useState('');
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        localStorage.setItem('@githubexplorer:repositories', JSON.stringify(repositories));
    }, [repositories]);

    async function handleSearchSubmit(e: FormEvent) {
        e.preventDefault();

        if (!searchText) {
            setInvalidInputErrorMessage('Digite autor/nome do repositório');
            return;
        }

        try {

            const res = await api.get(`/repos/${searchText}`);

            setRepositories([res.data as Repository, ...repositories]);
            setSearchText('');
            setInvalidInputErrorMessage('');
        } catch (err) {
            setInvalidInputErrorMessage('Repositório inexistente');
            return;
        }
    }

    return (
        <>
            <img src={logo} alt="Github Explorer" />
            <Title>Explore repositórios no Github.</Title>
            <Form error={!!invalidInputErrorMessage} onSubmit={handleSearchSubmit}>
                <input
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    type="text"
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {invalidInputErrorMessage && <Error>{ invalidInputErrorMessage }</Error>}

            <Repositories>
                {repositories.map(repo => {
                    return (
                        <a key={repo.full_name} href={repo.full_name}>
                            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                            <div>
                                <strong>{repo.full_name}</strong>
                                <p>{repo.description}</p>
                            </div>
                            <FiChevronRight color="#3D3D4D" size={20} />
                        </a>
                    );
                })}
            </Repositories>
        </>
    );
}

export default Landing;