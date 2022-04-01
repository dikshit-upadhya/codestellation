import React from "react"
import DashboardDrawer from "../dashboardDrawer"
import Button2 from "../../../components/Button/button2"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'	
import Divider from '@mui/material/Divider'
import DeleteRounded from "@mui/icons-material/DeleteRounded"
import IconButton from '@mui/material/IconButton'
import EditRounded from '@mui/icons-material/EditRounded'
import {useHistory} from 'react-router-dom'
import chatImage from '../../../assets/chatimage.png'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'

const UserDashboardClub = (props) => {
    const history = useHistory()

	return (
		<Box sx={{ marginLeft: "240px", padding: "30px 0 0 30px" }}>
			<DashboardDrawer />
			<div>
				<Typography
					variant="h4"
					sx={{ marginBottom: "15px" }}
				>
					Coding Club
				</Typography>
				<Box
					sx={{
						display: "flex",
						marginBottom: "25px",
					}}
				>
					<Button2 onClick={() => history.push('/user/dashboard/club/coding/announcements')}>ANNOUNCEMENTS</Button2>
				</Box>
				<Grid container spacing={4}>
					<Grid item xs={3}>
						<Paper elevation={10}>
                            <Typography variant="h6" sx={{
                                padding: '15px 0 0 15px'
                            }}>
                                Members
                            </Typography>
							<List>
								{[
									"Dikshit Upadhya",
									"Rupangkan Kalita",
									"Dikshit Upadhya",
									"Rupangkan Kalita",
									"Dikshit Upadhya",
									"Rupangkan Kalita",
									"Dikshit Upadhya"
								].map(
									(
										text,
										index
									) => (
										<>
											<ListItem
												key={
													text
                                                }
                                                secondaryAction={
                                                    <>
                                                    <IconButton >
                                                        <EditRounded />
                                                    </IconButton>
                                                    <IconButton edge="end" sx={{
                                                        color: 'red'
                                                    }}>
                                                        <DeleteRounded />
                                                    </IconButton>
                                                    </>
                                                    
                                                }
											>
												<ListItemText
													primary={
														text
													}
												/>
											</ListItem>
											<Divider />
										</>
									)
								)}
							</List>
							
						</Paper>
					</Grid>
					<Grid item xs={9}>
					<img src="https://i.postimg.cc/sXV3pR5S/chatimage.png" alt="image" style={{
						width: '600px'
					}} />
					</Grid>
				</Grid>
			</div>
		</Box>
	)
}

export default UserDashboardClub
