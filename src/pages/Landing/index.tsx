import React from 'react';
import { Title, Form, Repositories } from './styles';
import logo from '../../images/github_explorer-logo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Landing : React.FC = () => {
    return (
        <>
            <img src={logo} alt="Github Explorer"/>
            <Title>Explore repositórios no Github.</Title>
            <Form>
                <input type="text" name="repo-name" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
                <a href="dgtgbds">
                    <img src="https://avatars0.githubusercontent.com/u/58866268?s=460&u=fdafb8d175565604591f4fc4b1478ad0b2658b38&v=4" alt="Tales Garcia"/>
                    <div>
                        <strong>tales-garcia/github-explorer</strong>
                        <p>Um projeto para facilitar a navegação entre repositórios no Github</p>
                    </div>
                    <FiChevronRight color="#3D3D4D" size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Landing;