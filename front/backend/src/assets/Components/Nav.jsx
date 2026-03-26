import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex justify-center text-white gap-20 p-10 bg-black">
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
    </div>
  )
}

export default Nav