import './SASS/App.scss';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Footer from './JSX/modules/footer';
import Nav from './JSX/modules/nav';
import Home from './JSX/pages/Home';
import Portfolio from './JSX/pages/Portfolio';
import Blog from './JSX/pages/Blog';
import DevTests from './JSX/pages/Devtests';
import Contacto from './JSX/pages/Contacto';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/index' element={<Navigate to='/'/>}></Route>
        <Route path='/home' element={<Navigate to='/'/>}></Route>
        <Route path='/inicio' element={<Navigate to='/'/>}></Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        {/* Add blog articles here: */}
        {/* <Route path='/blog/article1title' element={<article1title/>}/> */}
        <Route path='/devtests' element={<DevTests/>}/>

        {/* <Route path='/*' element={<Error404/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App