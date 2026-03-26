import axios from 'axios';
import { useEffect, useState } from 'react';

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://user-credentials-2czx.vercel.app/')
                setTimeout(() => {
                    setUser(response.data)
                }, 1000);
            } catch (error) {
                console.log("message", error);                
            }
        }
        fetchUsers()
    })
  return (
    <div>
        <h1>All Users</h1>
        {Users.map((user, index) => (
            <p key={index}>
                {user.name} <br />
                {user.name} <br />
                {user.password}
            
            </p>
        ))}
    </div>
  )
}

export default Users