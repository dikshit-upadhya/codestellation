import * as React from "react"
import Button from "@mui/material/Button"
import NotificationsIcon from '@mui/icons-material/Notifications';
import { color } from "@mui/system";

export default function Button2(props) {
	return (
		<Button
			variant="contained"
            startIcon={<NotificationsIcon sx={{
                color: "red"
            }}/>}
			sx={{
				padding: "10px",
				fontSize: "10px",
				backgroundColor: "#ffffff",
				color: "#000000",
				borderRadius: "30px"
			}}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	)
}
