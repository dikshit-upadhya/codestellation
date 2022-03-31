import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button1 from "../../components/Button/button1.js"
import DashboardDrawer from "./dashboardDrawer"
import Paper from "@mui/material/Paper"
import ClubCard from "../../components/Card/club-card1"
import {useHistory} from 'react-router-dom'

export default function UserDashboard() {
    const history = useHistory()

	return (
		<Box
			sx={{
				marginLeft: "240px",
				padding: "30px 0 0 30px",
			}}
		>
			<DashboardDrawer />
			<Grid
				container
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={8}>
					<Typography variant="h4">
						Clubs you're a part of
					</Typography>
					<Typography variant="body2">
						Click on any one of them to open
						their chat room/notification..
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Button1>Join Club</Button1>
				</Grid>
			</Grid>
			<Paper
				elevation={16}
				sx={{
					marginTop: "30px",
					padding: "30px",
				}}
			>
                <Grid container spacing={4}>

                
				{[
					"Coding Club",
					"Debate Club",
                    "Robotics Club",
                    "Yoga Club",
                    "Dance Club", 
                    "Ninja Club"
				].map((club, index) => (
                    <Grid item xs={3} key={`${club}${index}`}>
					<ClubCard
						title={club}
						onClick={() => history.push('/user/dashboard/club/coding')}
						imageUrl={
							"https://media.istockphoto.com/vectors/literature-fans-people-with-books-vector-id1212702257?k=20&m=1212702257&s=612x612&w=0&h=_bjkUve9ITd3FPCqt8Q-RZla_4X7MYZBKZ5BfXFPBIU="
						}
						imageAlt={`image${index}`}
					/>
                    </Grid>
				))}
                </Grid>
			</Paper>
		</Box>
	)
}
