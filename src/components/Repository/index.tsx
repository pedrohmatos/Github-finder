import { RepositoryTypes } from '../../types/repos';
import styles from './Repository.module.css';

import { FaExternalLinkAlt } from "react-icons/fa";

const Repository = ({ name, html_url, language }: RepositoryTypes): JSX.Element => {

    return (
        <li className={styles.repo}>
            <div className={styles.container}>
                <p><strong>{name}</strong></p>
                <p>Tecnologia mais utilizada: {language}</p>
                <a href={html_url} target="_blank">Ver código <FaExternalLinkAlt /></a>
            </div>
        </li>
    )
};

export default Repository