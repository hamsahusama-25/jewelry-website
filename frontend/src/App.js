import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import Hero from './component/heroSection/hero';
import About from './pages/about';
import Home from './pages/home';
import NewCollection from './pages/newCollection/newCollection';
import Login from './register/login/login';
import Signin from './register/signin/signin';
import PostDetails from './pages/newCollection/postdetails/postDetails';


function App() {
  return (
    <div>
              <Header/>
                    {/* <PostDetails/> */}

       <Routes >
      <Route path='/' element={<Home/>}></Route>  
      <Route path='/newCollection' element={<NewCollection/>}></Route> 
      <Route path='/signin' element={<Signin/>}></Route> 
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/newCollection/:id' element={<PostDetails/>}></Route>  
  
    </Routes> 
    </div>
  );
}

export default App;
