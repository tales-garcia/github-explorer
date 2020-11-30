/* eslint-disable no-loop-func */
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import logo from '../../images/github_explorer-logo.svg';


import { DescriptionSpan, Header, ImageSpan, Issues, LiSpan, RepositoryInfo, TitleSpan } from './styles';
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

interface Issue {
    id: number,
    title: string,
    user: {
        login: string,
        avatar_url: string
    },
    html_url: string,
    state: string
}

const Repository: React.FC = () => {
    const { repository: repositoryName } = useRouteMatch().params as RouteParams;

    const [repo, setRepo] = useState<RepositoryProps>();
    const [issues, setIssues] = useState<Issue[]>([]);

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

    useEffect(() => {
        api.get<Issue[]>(`/repos/${repositoryName}/issues`).then(res => {
            setIssues(res.data.filter(issue => issue.state === 'open'));
        });
    }, [repositoryName]);

    return (
        <>
            <Header>
                <img src={logo} alt="Github Explorer Logo" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                        Voltar
                    </Link>
            </Header>
            {repo ? (
                <RepositoryInfo>
                    <header>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                        <div>
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
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
            ) : (
                <RepositoryInfo>
                    <header>
                        <ImageSpan />
                        <div>
                            <TitleSpan />
                            <DescriptionSpan />
                        </div>
                    </header>
                    <ul>
                        <li>
                            <LiSpan />
                            <span>Stars</span>
                        </li>
                        <li>
                            <LiSpan />
                            <span>Forks</span>
                        </li>
                        <li>
                            <LiSpan />
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}
            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <img src={issue.user.avatar_url} alt={issue.user.login} />
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight color="#3D3D4D" size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
}

export default Repository;