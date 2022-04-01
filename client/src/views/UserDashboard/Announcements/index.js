import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import DashboardDrawer from '../dashboardDrawer'

export const temp = [
    {date: '22-22-2222', description: 'Today is the last date of registration for codewar. Interested students are requested to please register for the event as soon as possible. This is a long notification. This is a long notificationThis is a long notificationThis is a long notificationThis is a long notificationThis is a long notificationThis is a long notificationThis is a long notificationThis is a long notificationThis is a long noti'}, 
    {date: '11-11-1111', description: "Today is the last date of registration for codewar. Interested students are requested to please register for the event as soon as possible."}
]

const UserDashboardClubAnnouncements = (props) => {
    return (
        <>
        <DashboardDrawer />
        <Box sx={{
            marginLeft: "240px",
            padding: "30px 0 0 30px",
        }}>
            <Paper elevation={8} sx={{
                marginBottom: '25px',
                padding: '15px 0 25px 15px'
            }}>
                <Typography variant="h6" sx={{
                    color: '#001AFF',
                    fontSize: '23px'
                }}>
                    PRIVATE ANNOUNCEMENTS (ONLY FOR CODING CLUB MEMBERS)
                </Typography>
                <br />
                {temp.map((ele, index) => <Box sx={{
                    marginBottom: '30px'
                }}>
                    <Typography variant="subtitle2">
                    {ele.date}
                    </Typography>
                    <Typography variant="body2">
                        {ele.description}
                    </Typography>
                </Box>)}
            </Paper>
            <Paper elevation={8} sx={{
                padding: '15px 0 25px 15px'
            }}>
            <Typography variant="h6" sx={{
                    color: '#001AFF',
                    fontSize: '23px'
                }}>
                    PUBLIC ANNOUNCEMENTS
                </Typography>
                <br />
                {temp.map((ele, index) => <Box sx={{
                    marginBottom: '30px'
                }}>
                    <Typography variant="subtitle2">
                    {ele.date}
                    </Typography>
                    <Typography variant="body2">
                        {ele.description}
                    </Typography>
                </Box>)}
            </Paper>
        </Box>
        </>
        
    )
}

export default UserDashboardClubAnnouncements