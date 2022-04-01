import React from "react"
import Grid from "@mui/material/Grid"
import { connect } from "react-redux"
import Paper from "@mui/material/Paper"
import EventCard from "../../components/Card/event-card2"
import types from "../../store/types"
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button2 from "../../components/Button/button2"

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '10%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Search = styled('div')(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
        },
    },
}));

const Events = (props) => {
    const history = useHistory()
    return (
        <>
            <Grid container spacing={2}
            justifyContent="center"
             sx={{
                marginLeft: "0px",
                marginRight: "0px",
                padding: "30px 30px 0px 30px",
            }}>
                <Grid item xs={2}
                   >
                    <Button2>All</Button2>
                </Grid>
                
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search for any clubs in AEC"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>
            <Box
                sx={{
                    marginLeft: "0px",
                    marginRight: "0px",
                    padding: "0px 30px 30px 30px",
                }}
            >

                <Paper
                    elevation={16}
                    sx={{
                        marginTop: "30px",
                        padding: "30px",
                    }}
                >
                    <Grid container spacing={4}>
                        {[
                            "Bihu",
                            "Eco Fest",
                            "Ninja Fest",
                            "CP Contests",
                            "Hackathon",
                            "Pyro",
                            "Android Fest",
                            "Cricket Fest",
                            "Environmental Fest",
                            "World Health Day",
                            "Diwali Fest"
                        ].map((club, index) => (
                            <Grid item xs={3} key={`${club}${index}`}>
                                <EventCard
                                    title={club}
                                    subHeader="This club is cool!"
                                    onClick={() => history.push('/events/coding')}
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
        </>

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

export default connect(null, mapDispatchToProps)(Events)


