import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { connect } from "react-redux"
import types from "../../store/types"
import Box from '@mui/material/Box'
import Button1 from "../../components/Button/button1"
import { useHistory } from "react-router-dom"


const EventDetails = (props) => {
    const history = useHistory()
    return (

        <Box
            sx={{ 
                padding: '30px 30px 30px 30px',
                marginLeft: "0px",
                marginRight: "0px",
            }}
        >
            <Typography variant="h4" sx={{
                fontWeight: "bold"
            }}>
                STACCATO    
            </Typography>

            <Grid container alignItems="center" spacing={5} padding="10px">
                <Grid item xs={2}>
                    <Button1 onClick={() => history.push('/user/joinEvent')}>Participate</Button1>
                </Grid>
                <Grid item xs={2}>
                    <Button1>Participate for Non AECians</Button1>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" spacing={10}>
                <Grid item xs={6} >
                    <Typography variant="h7">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. 
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={
                        "https://media.istockphoto.com/vectors/literature-fans-people-with-books-vector-id1212702257?k=20&m=1212702257&s=612x612&w=0&h=_bjkUve9ITd3FPCqt8Q-RZla_4X7MYZBKZ5BfXFPBIU="
                    } alt="homepageImage" height={250} />
                </Grid>
                {/* <Grid item xs={12}>
                            <ButtonGroup />
                        </Grid> */}
            </Grid>
            <Typography variant="h6" sx={{
                fontWeight: "bold",
                textDecoration: "underline",
                paddingBottom: "10px"
                
            }}>
                Prize Money  
            </Typography>
            <Typography variant="h7" > 
                50k worth prize money and goodies    
            </Typography>
            <Typography gutterBottom variant="h6" sx={{
                fontWeight: "bold",
                textDecoration: "underline",
                // paddingBottom: "10px"
            }}>
                Rules    
            </Typography>
            <Typography gutterBottom variant="h7">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                The point of using Lorem Ipsum is that it has a more-or-less normal 
                as opposed to using 'Content here. It is a long established fact that a reader    
            </Typography>
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

export default connect(null, mapDispatchToProps)(EventDetails)


