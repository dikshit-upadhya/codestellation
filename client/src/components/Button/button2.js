import * as React from "react"
import Button from "@mui/material/Button"

export default function Button2(props) {
	return (
		<Button
			variant="contained"
			sx={{
				padding: "3px",
				backgroundColor: "#b0ffff",
				color: "#001aff",
			}}
			onClick={props.onClick}
		>
			{props.children}
		</Button>
	)
}
