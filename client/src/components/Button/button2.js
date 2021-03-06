import * as React from "react"
import Button from "@mui/material/Button"

export default function Button2(props) {
	return (
		<Button
			variant="contained"
			sx={{
				padding: "10px",
				fontSize: "10px",
				fontWeight: "bold",
				backgroundColor: "#a0f0ff",
				color: "#000000",
				borderRadius: "30px"
			}}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	)
}
