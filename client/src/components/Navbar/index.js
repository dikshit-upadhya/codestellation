import React from "react"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ButtonBase from "@mui/material/ButtonBase"
import {useHistory} from "react-router-dom"


const Navbar = () => {
    let history = useHistory()

	return (
		<Box sx={{ flexGrow: 1, zIndex: 999 }}>
			<AppBar position="static">
				<Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                    <ButtonBase onClick={() => history.push('/')}>
                    <Typography
						variant="h6"
						component="div"
						
					>
						ClubManagementForAec
					</Typography>
                    </ButtonBase></Box>
					<Button color="inherit" onClick={() => history.push('/login')}>
						Login/Signup
					</Button>
					<Button color="inherit">Clubs</Button>
					<Button color="inherit">Events</Button>
					<Button color="inherit" onClick={() => history.push('/user/dashboard')}>Dashboard</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar
