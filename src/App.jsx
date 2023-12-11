import NewsList from "./components/NewsList"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewsList />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
