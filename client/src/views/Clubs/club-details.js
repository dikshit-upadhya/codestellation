import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { connect } from "react-redux"
import types from "../../store/types"
import homepageImage from '../../assets/coding-club.png'
import Box from '@mui/material/Box'
import Button3 from "../../components/Button/button3"
import { temp } from "../UserDashboard/Announcements"
import Paper from '@mui/material/Paper'

const ClubDetails = (props) => {
    return (

        <Box
            sx={{
                padding: '30px 30px 30px 30px',
                marginLeft: "0px",
                marginRight: "0px",
            }}
        >
            <Grid alignItems="center" spacing={5} padding="10px">
                <Grid item xs={2}>
                    <Button3>Get Push Notifications</Button3>
                </Grid>
                {/* <Grid item xs={2}>
                    <Button2>For Non-AECians</Button2>
                </Grid> */}
            </Grid>
            <Typography variant="h4" sx={{
                fontWeight: "Bold"
            }}>
                STACCATO CLUB
            </Typography>


            <Grid container justifyContent="center" alignItems="center" spacing={10}>
                <Grid item xs={6} >
                    <Typography variant="h7">
                        This is baiscally the club descirption. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={homepageImage} alt="homepageImage" height={200} />
                </Grid>
                {/* <Grid item xs={12}>
                            <ButtonGroup />
                        </Grid> */}
            </Grid>
            <Typography gutterBottom variant="h6" sx={{
                fontWeight: "Bold",
                textDecoration: "Underline"
            }}>
                Announcements   
            </Typography>

            {/* <Paper elevation={8} sx={{
                marginBottom: '25px',
                padding: '15px 0 25px 15px'
            }}> */}
            {/* <Typography variant="h6" sx={{
                color: '#001AFF',
                fontSize: '23px'
            }}>
            </Typography> */}
            <br />
            {temp.map((ele, index) =>
                <Paper elevation={8} sx={{
                    marginBottom: '25px',
                    padding: '15px 0 25px 15px'
                }}>
                    <Box sx={{
                        marginBottom: '30px'
                    }}>
                        <Typography variant="subtitle2" sx={{
                            fontWeight: "bold",
                            paddingBottom: "5px"
                        }}>
                            {ele.date}
                        </Typography>
                        <Typography variant="body2">
                            {ele.description}
                        </Typography>
                    </Box>
                </Paper>
            )}
            {/* </Paper> */}

        </Box>
    )
}

const mapDispatchToProps = (dispatch) => ({
    openErrorMessage: (message) =>
        dispatch({
            type: types.OPEN_ERROR,
            payload: { description: message },
        }),
    openSuccessMessage: (message) =>
        dispatch({ type: types.OPEN_SUCCESS, payload: { message } }),
})

export default connect(null, mapDispatchToProps)(ClubDetails)


