import './SASS/App.scss';
import {Route, Routes, Navigate} from 'react-router-dom';
import Footer from './JSX/modules/footer';
import Nav from './JSX/modules/nav';
import Inicio from './JSX/pages/Inicio';
import Portfolio from './JSX/pages/Portfolio';
import Blog from './JSX/pages/Blog';
import Post from './JSX/pages/blog_articles/Post';
import DevTests from './JSX/pages/Devtests';
import Contacto from './JSX/pages/Contacto';
import { ContextPostsProvider } from './JSX/pages/blog_articles/ContextBlog';

function App() {
  return (
    <>
      <Nav/>
      <ContextPostsProvider>
      <Routes>
        <Route path='/index' element={<Navigate to='/'/>}></Route>
        <Route path='/home' element={<Navigate to='/'/>}></Route>
        <Route path='/inicio' element={<Navigate to='/'/>}></Route>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<Post/>}/>
        <Route path='/devtests' element={<DevTests/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        {/* <Route path='/*' element={<Error404/>}/> */}
      </Routes>
      </ContextPostsProvider>
      <Footer/>
    </>
  )
}
export default App