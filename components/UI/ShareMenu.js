import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './ShareMenu.module.css'

const ShareMenu = () => (
    <div className = { classes.ShareMenu }>
        <p className = { classes.Heading }>Share This Blog On</p>
        <FontAwesomeIcon
            icon = { [ 'fab', 'facebook' ] }
            className = { [ classes.Icon, classes.FacebookBlue ].join(' ') } />
        <FontAwesomeIcon
            icon = { [ 'fab', 'twitter' ] }
            className = { [ classes.Icon, classes.TwitterBlue ].join(' ')} />
    </div>
)

export default ShareMenu