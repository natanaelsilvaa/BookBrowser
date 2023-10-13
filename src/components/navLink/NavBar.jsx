import { NavLink, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useState } from "react"

const NavBar = () => {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleChange = (event) => {
        event.preventDefault()
        navigate('/Search?q=' + query)
    }


    return (
        <nav>

            <h1>BookBrowser</h1>
            
            <form onSubmit={handleChange}>
                <input type="text" placeholder="Buscar por Livros" className="input1" onChange={(e) => setQuery(e.target.value)}/>
                <input type="submit" value='Buscar' className="button"/>
            </form>

            <div className="Link">
                <NavLink to={'/'} onClick={() => setQuery('')}>Home </NavLink>
                <NavLink to={'/Abount'}> Abount </NavLink>
            </div>


        </nav>
    )
}

export default NavBar