import axios from "axios"
import { useState } from "react"

const AddUser = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post(
            'http://localhost:4800/users', form);

        console.log("SUCCESS:", res.data);

    } catch (error) {
        console.log("REAL ERROR:", error.response?.data);
    }
    console.log("FORM DATA:", form);
};
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit">Add User</button>
        </form>
    )
}

export default AddUser