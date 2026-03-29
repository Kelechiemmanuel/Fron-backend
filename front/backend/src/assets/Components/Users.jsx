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

    const formDate = (isoString) => {
        // if (!isoString) return "N/A";
        const  date = new Date (isoString);
        return date.toLocaleString();
    }

    return (
        <div className="p-20">
            <h1 className='text-center mb-5'>All Users</h1>
       <div >
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-amber-200">
                <th className="py-2 px-4 border">S/N</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Password</th>
                <th className="py-2 px-4 border">Added At</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => (
                <tr key={index} className="text-center hover:bg-amber-100">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{user.name}</td>
                  <td className="py-2 px-4 border">{user.email}</td>
                  <td className="py-2 px-4 border">{user.password}</td>
                  <td className="py-2 px-4 border">{formDate(user.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default Users;