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

export default function CreateClub() {
	const handleSubmit = (event) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		})
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
						Create your Club
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
									name="club_name"
									required
									fullWidth
									id="club_name"
									label="Club Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="club_description"
									label="Club Description"
									name="club_description"
								/>
							</Grid>
				
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
                                    type="number"
									name="fees"
                                    label="Club Joining Fees"
									id="club_joining_fees"
								/>
							</Grid>
						
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Create Club
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
