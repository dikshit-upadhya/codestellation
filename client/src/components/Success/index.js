import React from "react"
import { connect } from "react-redux"
import types from "../../store/types"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Success = (props) => {

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return
		}

		props.closeSuccess();
	}

	return (
		<Snackbar
			open={props.isSuccessOpen}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert
				onClose={handleClose}
				severity="success"
				sx={{ width: "100%" }}
			>
				{props.message}
			</Alert>
		</Snackbar>
	)
}

const mapStateToProps = (state) => {
	return {
		isSuccessOpen: state.success.isOpen,
		message: state.success.message,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		closeSuccess: () => dispatch({ type: types.CLOSE_SUCCESS }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Success)
