import React from 'react'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div style={{height: '10vh', display: 'flex', justifyContent:'space-around', alignItems: 'center', background:'green'}}>
            <Link to='/dash' style={{color: 'white'}}>Dash</Link>
            <SearchForm />
        </div>
    )
}

export default Header