import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth/Auth'

import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestions from './pages/AskQuestions/AskQuestions'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserPorfile from './pages/userProfile/UserProfile'

const AllRoutes = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/AskQuestions' element={<AskQuestions/>} />
        <Route path='/Questions/:id' element={<DisplayQuestions/>} />
        <Route path='/Tags' element={<Tags/>} />
        <Route path='/User' element={<Users/>} />
        <Route path= '/User/:id' element={<UserPorfile/>}/>
      </Routes>
    
  )
}

export default AllRoutes
