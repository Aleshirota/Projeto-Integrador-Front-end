import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Feed } from '../pages/Feed/Feed'
import { Comentario} from '../pages/Comentario/Comentario'
// import {Header} from "../components"
import { Signup } from '../pages/Signup/Signup'
import { Post } from '../pages/Post/Post'

export default function Router (){
return(
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/signup" element={<Signup/>}/>
        <Route path = "/feed" element={<Feed/>}/>
        <Route path = "/post" element={<Post/>}/>
        <Route path = "/comentario/:id" element={<Comentario/>}/>
    </Routes>
    </BrowserRouter>
    )
}