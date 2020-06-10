import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Player from './Player'
import { Card } from 'semantic-ui-react'
import Header from './Header'

const PlayerList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get(`https://www.balldontlie.io/api/v1/players`)
            .then(res => {
                console.log(res)
                setPlayers(res.data.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        <Header />
        <Card.Group centered itemsPerRow={3}>
            {players.map(player => (
                <Player player={player} />
            ))}
        </Card.Group>
        </>
    )
}

export default PlayerList