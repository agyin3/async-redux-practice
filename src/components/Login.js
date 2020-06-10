import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [creds, setCreds] = useState({username: '', password: ''})

    const handleChanges = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://better-professor-app-1.herokuapp.com/api/auth/login/?type=p', creds)
            .then(res => history.push('/players'))
            .catch(err => console.log(err))
    }
    return (
        <div 
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}
        >
            <input 
                type='text' 
                name='username' 
                value={creds.username} 
                placeholder='username'
                onChange={handleChanges} 
            />
            <input 
                type='password' 
                name='password' 
                value={creds.password} 
                placeholder='password'
                onChange={handleChanges} 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login