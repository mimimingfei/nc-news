import ArticlePage from "./components/ArticlePage";
import NewsList from "./components/NewsList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Error from './components/Error'



function App() {
  return (
      <BrowserRouter>

       <Navbar/>
        <Routes>
          <Route path='/' element={<NewsList />} />
          <Route path='/articles' element={<NewsList />} />
          <Route path='articles/:id'element ={<ArticlePage/>}/>
          <Route path="*" element={<Error/>} />

        </Routes>
      </BrowserRouter>
  )
}

export default App
