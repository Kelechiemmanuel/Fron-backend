import axios from "axios"
import { useState } from "react"

const AddUser = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const[message, setMessage] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('https://user-credentials-2czx.vercel.app/', form);
            setMessage(res.data.Message)
            setForm({name: "", email: "", password: ""})
            console.log("SUCCESS:", res.data);

        } catch (error) {
            setMessage(error.response?.data?.Message || "Something went wrong")
            console.log("REAL ERROR:", error.response?.data);
        }
        console.log("FORM DATA:", form);
    };
    return (
        <div className="grid grid-cols-1 justify-items-center w-screen py-20 px-50">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 justify-items-center min-w-200 border-2 border-amber-300 p-20">
                <p>{message}</p>
                <input
                    className="w-full border-2 border-amber-600 p-4" 
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    className="w-full border-2 border-amber-600 p-4" 
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    className="w-full border-2 border-amber-600 p-4" 
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button type="submit" className="cursor-pointer p-5 border-2 border-amber-500">Add User</button>
            </form>
        </div>
    )
}

export default AddUser