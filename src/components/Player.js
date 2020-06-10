import React from 'react'
import { Card } from 'semantic-ui-react'

const Player = (props) => {

    return (
        <Card
            href={`/teams/${props.team}`}
            header={`${props.player.first_name} ${props.player.last_name}`}
            meta={`${props.player.team.full_name} | ${props.player.position}`}
            description={`Height: ${props.player.height_feet}' ${props.player.height_inches} | Weight: ${props.player.weight} lbs`}
        />
    )
}

export default Player