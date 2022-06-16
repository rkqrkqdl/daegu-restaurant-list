import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import Detail from './routes/Detail'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={
            process.env.NODE_ENV === 'develop'
              ? '/detail/:location/:id'
              : `${process.env.PUBLIC_URL}/detail/:location/:id`
          }
          element={<Detail />}
        />
        <Route path={process.env.NODE_ENV === 'develop' ? '/' : `${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
