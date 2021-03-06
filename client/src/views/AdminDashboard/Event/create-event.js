import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useHistory } from "react-router-dom"

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="https://mui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	)
}

const theme = createTheme()

export default function CreateEvent() {
	
	const history = useHistory()

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
		history.push('/user/dashboard/events')
	}

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar
						sx={{
							m: 1,
							bgcolor:
								"secondary.main",
						}}
					>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Create your Event
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid
								item
								xs={12}
							>
								<TextField
									autoComplete="given-name"
									name="event_name"
									required
									fullWidth
									id="event_name"
									label="Event Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="event_description"
									label="Event Description"
									name="event_description"
								/>
							</Grid>
                            <Grid item xs={12}>
								<TextField
									required
									fullWidth
                                    type="number"
									name="prize_money"
                                    label="Prize Money"
									id="prize_money"
								/>
							</Grid>
				
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
                                    type="number"
									name="registration_fees"
                                    label="Registration fees"
									id="registration_fees"
								/>
							</Grid>

                            <Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="rules"
									label="Rules"
									name="rules"
								/>
							</Grid>
                            <Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="venue"
									label="Venue"
									name="venue"
								/>
							</Grid>
                            <Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="phoneNumber"
                                    label="Phone Number"
                                    type="tel"
									id="signUp_phoneNumber"
								/>
							</Grid>
                            <Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="signUp_email"
									label="Email Address"
									name="email"
									autoComplete="email"
								/>
							</Grid>
						
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Create Event
						</Button>
						<Grid
							container
							justifyContent="flex-end"
						>
							
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	)
}
