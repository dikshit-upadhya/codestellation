import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useHistory } from "react-router-dom"


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const theme = createTheme()

export default function JoinClub() {
    const history = useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        })
    }

    const [clubs, setclubs] = React.useState('');

    const handleChange = (event) => {
        setclubs(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor:
                                "secondary.main",
                        }}
                    >
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Join Club
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                            >
                                <FormControl fullWidth style={{minWidth: 150}}>
                                    <InputLabel id="demo-simple-select-label">Select Club</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        fullWidth
                                        id="demo-simple-select"
                                        value={clubs}
                                        label="Select Club"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="Coding Club">Coding Club</MenuItem>
                                        <MenuItem value="Basketball Club">Basketball Club</MenuItem>
                                        <MenuItem value="Cricket Club">Cricket Club</MenuItem>
                                    </Select>
                                </FormControl>



                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={() => history.push('/user/dashboard')}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Pay
                        </Button>
                        <Grid
                            container
                            justifyContent="flex-end"
                        >

                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    )
}
