import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blogs from './pages/Blogs'
import UserLayout from './layout/UserLayout'
import BlogDetail from './pages/BlogDetail'
import PageNotFound from './pages/PageNotFound'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path = "blogs/:id" element = {<BlogDetail/>}/>
        <Route path = "*" element = {<PageNotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App