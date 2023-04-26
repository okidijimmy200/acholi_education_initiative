import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
    </Routes>
    </>
  )
}
