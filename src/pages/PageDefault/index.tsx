import styles from "./PageDefault.module.css";

import { Outlet } from "react-router-dom";

const PageDefault = (): JSX.Element => {
    return (
        <div className={styles.pageDefault}>
            <h1>Localizador do GitHub</h1>
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default PageDefault