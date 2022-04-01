import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button1 from "../../../components/Button/button1.js"
import DashboardDrawer from "../dashboardDrawer"
import Paper from "@mui/material/Paper"
import ClubCard from "../../../components/Card/event-card1"
import {useHistory} from 'react-router-dom'

export default function UserDashboardEvent() {
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
						Events you've participated in
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Button1>New Event</Button1>
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
					"CP Contests",
                    "Pyro",
                    "Eco Fest", 
                    "Ninja Fest",
                    "Cricket Fest",
                    "Environmental Fest"
				].map((event, index) => (
                    <Grid item xs={3} key={`${event}${index}`}>
					<ClubCard
						title={event}
						onClick={() => history.push('/user/dashboard/event/coding')}
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