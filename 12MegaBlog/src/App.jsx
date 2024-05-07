import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import './App.css'
import {} from './store/authSlice'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect({
    authService.getCurrentUser()
    .then((userD)=>{

    })
    .finally(()=>setLoading(false))
  },[]) 

  return!loading ? (
    <>
      <div className="min-h-screen flex flex-wrap content-between bg-gray-300" >TEST</div>
      <div className='w-full block'> 
      <Header />
      <main> TODO : <Outlet /> </main>
      <Footer />
      </div>
    </>
  ) : null
  
}

export default App
