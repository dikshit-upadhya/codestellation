import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"

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
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        })
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* <TextField
									autoComplete="given-name"
									name="club_name"
									required
									fullWidth
									id="club_name"
									label="Club Name"
									autoFocus
								/> */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="club_description"
                                    label="Club Description"
                                    name="club_description"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="number"
                                    name="fees"
                                    label="Club Joining Fees"
                                    id="club_joining_fees"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Club
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
