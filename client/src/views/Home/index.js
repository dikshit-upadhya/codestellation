import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { connect } from "react-redux"
import types from "../../store/types"
import homepageImage from '../../assets/homepage.jpg'
import ButtonGroup from './button-group'
import Box from '@mui/material/Box'

const Home = (props) => {
	return (
		<Box
            sx={{padding: '50px 10vw'}}
        >
            <Grid container justifyContent="center" alignItems="center">
					<Grid item xs={6} >
						<Typography variant="body1">
							Welcome to AEC Official
							Club Management Website.
							Here, you can get all
							the information about
							the clubs in AEC. You
							can also get a list of
							events.<br /><br /> Signup to any
							club to enjoy the
							benefits of the club.
						</Typography>
					</Grid>
					<Grid item xs={6}>
                        <img src={homepageImage} alt="homepageImage" />
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonGroup />
                    </Grid>
				</Grid>
		</Box>
	)
}

const mapDispatchToProps = (dispatch) => ({
	openErrorMessage: (message) =>
		dispatch({
			type: types.OPEN_ERROR,
			payload: { description: message },
		}),
	openSuccessMessage: (message) =>
		dispatch({ type: types.OPEN_SUCCESS, payload: { message } }),
})

export default connect(null, mapDispatchToProps)(Home)

{
	/* <Wrapper1>
            <Typography>
                This is the homepage that you were looking for...
            </Typography>
            
            <Button onClick={() => props.openErrorMessage("This is a sample error message that you just triggered")}>Trigger Error</Button>
            <Button onClick={() => props.openSuccessMessage("This is a sample success message that you just triggered")}>Trigger Success</Button>
        </Wrapper1> */
}
