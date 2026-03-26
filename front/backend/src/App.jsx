import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AddUser from './assets/Components/AddUser';
import Users from './assets/Components/Users';
import Nav from './assets/Components/Nav';

const App = () => {
  return (

    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<AddUser />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App