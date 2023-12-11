import styles from "./Search.module.css";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
    fetchUserData: (name: string) => Promise<void>;
};

const Search = ({ fetchUserData }: SearchProps): JSX.Element => {
    const [userName, setUserName] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.target.value;
        setUserName(value);
    };

    const sendName = (): void => {
        fetchUserData(userName);
        setUserName("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === "Enter") {
            fetchUserData(userName);
            setUserName("");
        }
    };

    return (
        <div className={styles.search}>
            <h2>Busque por um usuário</h2>
            <p>
                Conheça seus melhores repositórios
            </p>
            <div className={styles.container}>
                <input
                    onChange={handleChange}
                    value={userName}
                    onKeyDown={handleKeyDown}
                    type="text"
                    id="inputUserName"
                    placeholder="Digite o nome do usuário..."
                />
                <button type="button" onClick={sendName}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
};

export default Search