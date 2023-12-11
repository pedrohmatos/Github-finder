import { useState } from "react";

import Search from "../../components/Search";
import User from "../../components/User";
import UserNotFound from "../../components/UserNotFound";

import { UserPropsType } from "../../types/user";


const Home = () => {
    const [user, setUser] = useState<UserPropsType | null>(null);
    const [error, setError] = useState<boolean>(false);

    const loadUser = async (userName: string): Promise<void> => {
        setError(false);

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (res.status === 404) {
            setError(true);
            setUser(null);
            return;
        }

        const { avatar_url, login, location, followers, following }: UserPropsType = data;

        const userData = {
            avatar_url,
            login,
            location,
            followers,
            following
        };

        setUser(userData);

    };

    return (
        <div>
            <Search fetchUserData={loadUser} />
            {
                user &&
                <User {...user} />
            }
            {
                error &&
                <UserNotFound />
            }
        </div>
    )
};

export default Home