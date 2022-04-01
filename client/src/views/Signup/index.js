import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from 'axios'
import { useHistory } from 'react-router-dom'

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

export default function Signup() {
	const history = useHistory()

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		let user = {
			name: data.get("name"),
			email: data.get("email"),
			password: data.get("password"),
			phoneNumber: data.get("phoneNumber"),
			astuRollNumber: data.get("astuRollNumber"),
			semester: data.get("semester"),
			branch: data.get("branch")
		}
		if(data.get('adminSecret')) {
			user.adminSecret = data.get('adminSecret')
			axios.post('http://localhost:3333/api/admin/master', user).then(response => {
			console.log(response)
			history.push('/login')
			})
		} else {
				axios.post('http://localhost:3333/api/user', user).then(response => { 
				console.log(response) 
				history.push('/login')
			}).catch(err => console.log(err))	
		}
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
						Sign up
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
									name="name"
									required
									fullWidth
									id="signUp_name"
									label="Name"
									autoFocus
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
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="signUp_password"
									autoComplete="new-password"
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
									name="astuRollNumber"
									label="ASTU Roll Number"
									id="signUp_astuRollNumber"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="semester"
									label="Semester"
									id="signUp_semester"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="branch"
									label="Branch"
									id="signUp_branch"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									name="adminSecret"
									label="Enter Admin Secret (ONly for admins)"
									id="adminSecret_signup"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											value="allowExtraEmails"
											color="primary"
										/>
									}
									label="Remember me"
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
								>
									Sign Up
								</Button>
							</Grid>
						</Grid>
						<Grid
							container
							justifyContent="flex-end"
						>
							<Grid item>
								<Link
									href="/login"
									variant="body2"
								>
									Already
									have an
									account?
									Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 5 }} />
			</Container>
		</ThemeProvider>
	)
}
