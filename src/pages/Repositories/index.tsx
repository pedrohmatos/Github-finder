import styles from "./Repositories.module.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { RepositoryTypes } from "../../types/repos";
import Repository from "../../components/Repository";

const Repositories = (): JSX.Element => {
    const { login } = useParams<string>();
    const navigate = useNavigate();
    const [repositories, setRepositories] = useState<RepositoryTypes[] | undefined>();

    useEffect(() => {
        searchRepos();
    }, []);

    const searchRepos = async (): Promise<void> => {
        const repos = await fetch(`https://api.github.com/users/${login}/repos`)
            .then(data => data.json())
            .catch((er) => {
                console.log("Error here: ", er);
                return navigate("/");
            });

        const novoArray: RepositoryTypes[] = [];
        repos.forEach((el: RepositoryTypes) => {
            novoArray.push(
                {
                    name: el.name,
                    html_url: el.html_url,
                    language: el.language
                }
            );
        });

        setRepositories(novoArray);
    };

    const handleClick = (): void => {
        navigate("/");
    };

    return (
        <div className={styles.repositories}>
            <div className={styles.cabecalho}>
                <h3>Explore os repositórios <br /> usuário: {login}</h3>
                <button onClick={handleClick} type="button">Voltar</button>
            </div>
            <ul className={styles.repoList}>
                {
                    repositories?.map((obj, index) => {
                        return <Repository key={index} {...obj} />
                    })
                }
            </ul>
        </div>
    )
};

export default Repositories