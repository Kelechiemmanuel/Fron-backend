import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4800/users');
                setUser(response.data);
            } catch (error) {
                console.log("REAL ERROR:", error.response?.data);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            {user.map((user, index) => (
                <p key={index}>
                    {user.name} <br />
                    {user.email} <br />
                    {user.password}
                </p>
            ))}
        </div>
    );
};

export default Users;