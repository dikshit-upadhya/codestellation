import React from "react"
import Box from '@mui/material/Box'
import Drawer from "@mui/material/Drawer"
import CssBaseline from "@mui/material/CssBaseline"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import {useHistory} from 'react-router-dom'

const drawerWidth = 240;

const list = [
    {name: 'Clubs', url: '/user/dashboard'}, 
    {name: 'Events', url: '/user/dashboard/events'}
]

const DashboardDrawer = (props) => {
    const history = useHistory()

	return (
		<>
			<CssBaseline />
			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
						position: "fixed",
						top: 64,
						backgroundColor:
							"rgba(0, 167, 189, 0.3)",
					},
				}}
			>
				<Box sx={{ overflow: "auto" }}>
					<List>
						{list.map(
							(ele, index) => (
								<>
									<ListItem
										button
										key={
											ele.name
                                        }
                                        onClick={() => history.push(ele.url)}
									>
										<ListItemText
											primary={
												ele.name
											}
										/>
									</ListItem>
									<Divider />
								</>
							)
						)}
					</List>
				</Box>
			</Drawer>
		</>
	)
}

export default DashboardDrawer
