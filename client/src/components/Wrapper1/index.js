import React from 'react'
import Paper from '@mui/material/Paper'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
        margin: 0
    }
}))

const Wrapper1 = (props) => {
    const classes = useStyles()

    return (
        <Paper elevation={0} className={classes.root} >
            {props.children}
        </Paper>
    )
}

export default Wrapper1