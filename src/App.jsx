import ArticlePage from "./components/ArticlePage";
import NewsList from "./components/NewsList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewsList />} />
          <Route path='/articles' element={<NewsList />} />
          <Route path='articles/:id'element ={<ArticlePage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
