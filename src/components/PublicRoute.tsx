
import {Navigate, Outlet} from 'react-router-dom'

export const PublicRoute=() =>{

  const auth= localStorage.getItem('user')

  return !auth ? <Outlet/>: <Navigate to="/profile"/>
}