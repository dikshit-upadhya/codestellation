import React, { Suspense } from "react"
import { connect } from "react-redux"
import { Route, Switch } from "react-router-dom"
import routes from "./routes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import makeStyles from "@mui/styles/makeStyles"
import LinearProgress from "@mui/material/LinearProgress"
import Error from "./components/Error"
import Success from "./components/Success"
import GenericNotFound from "./views/GenericNotFound"

const useStyles = makeStyles((theme) => ({
	"@global": {
		"*::-webkit-scrollbar": {
			width: "0.6em",
		},
		"*::-webkit-scrollbar-track": {
			"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
		},
		"*::-webkit-scrollbar-thumb": {
			backgroundColor: "#707070",
			borderRadius: theme.shape.borderRadius,
		},
	},
	fallback: {
		marginTop: "64px",
		[theme.breakpoints.down("md")]: {
			marginTop: "56px",
		},
    },
}))

const App = (props) => {
	const classes = useStyles(props)

	const menu = routes.map((route, index) => {
		return route.component ? (
			<Route
				key={`${index}-route`}
				exact={route.exact}
				path={route.path}
				name={route.name}
				render={(props) => (
					<route.component {...props} />
				)}
			/>
		) : null
	})

	return (
		<div className="App">
			<Error />
			<Success />
			<Navbar />
			<div className={classes.bodyWrapper}>
				<Suspense
					fallback={
						<LinearProgress
							color="secondary"
							className={
								classes.fallback
							}
						/>
					}
				>
					<Switch>
						{menu}
						<Route
							path="/"
							component={
								GenericNotFound
							}
						/>
					</Switch>
				</Suspense>
			</div>

			<Footer />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
