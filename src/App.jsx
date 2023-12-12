import ArticlePage from "./components/ArticlePage";
import NewsList from "./components/NewsList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";



function App() {
  return (
      <BrowserRouter>

       <Navbar/>
        <Routes>
          <Route path='/' element={<NewsList />} />
          <Route path='/articles' element={<NewsList />} />
          <Route path='articles/:id'element ={<ArticlePage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
