import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'

const Login = (props) => {
    const history = useHistory()
    const [creds, setCreds] = useState({username: '', password: ''})

    const handleChanges = (e) => {
        setCreds({...creds, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(creds, history)
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

export default connect(
    null,
    {login}
)(Login)