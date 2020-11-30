/* eslint-disable no-loop-func */
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../images/github_explorer-logo.svg';


import { Header, Issues, RepositoryInfo } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface RouteParams {
    repository: string;
}
interface RepositoryProps {
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

const Repository: React.FC = () => {
    const { repository: repositoryName } = useRouteMatch().params as RouteParams;

    const [repo, setRepo] = useState<RepositoryProps>();
    

    useEffect(() => {
        let repositories = JSON.parse(localStorage.getItem('@githubexplorer:repositories') || '[]') as RepositoryProps[];

        const repository = repositories.find(repository => repository.full_name === repositoryName);

        if (!repository) {
            api.get<RepositoryProps>(`/repos/${repositoryName}`).then(res => {
                repositories = [res.data, ...repositories];
                localStorage.setItem('@githubexplorer:repositories', JSON.stringify(repositories));

                setRepo(res.data);
            }).catch(err => {
                throw new Error('Repositorio inexistent');
            });
        }

        setRepo(repository);
    }, [repositoryName]);
    
    if (repo) {
        return (
            <>
                <Header>
                    <img src={logo} alt="Github Explorer Logo" />
                    <Link to="/">
                        <FiChevronLeft size={16} />
                        Voltar
                    </Link>
                </Header>
                <RepositoryInfo>
                    <header>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                        <div>
                            <strong>{repo.full_name}</strong>
                            <p>{repo?.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <strong>{repo.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repo.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repo.open_issues_count}</strong>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
                <Issues>
                    <Link to="issue">
                        <div>
                            <strong>fe</strong>
                            <p>ef</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                </Issues>
            </>
        );
    } else {
        return null;
    }

}

export default Repository;