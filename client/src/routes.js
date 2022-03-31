import React from 'react'

const Home = React.lazy(() => import('./views/Home'))
const Login = React.lazy(() => import('./views/Login'))
const Signup = React.lazy(() => import('./views/Signup'))
const UserDashboard = React.lazy(() => import('./views/UserDashboard'))
const UserDashboardClub = React.lazy(() => import('./views/UserDashboard/Club'))
const UserDashboardClubAnnouncements = React.lazy(() => import('./views/UserDashboard/Announcements'))

const routes = [
    { path: '/', name: 'Landing', exact: true, component: Home }, 
    { path: '/login', name: 'Login', exact: true, component: Login }, 
    { path: '/signup', name: 'Signup', exact: true, component: Signup }, 
    { path: '/user/dashboard', name: 'User Dashboard', exact: true, component: UserDashboard}, 
    { path: '/user/dashboard/club/:clubId', name: 'User Dashboard Club', exact: true, component: UserDashboardClub }, 
    { path: '/user/dashboard/club/:clubId/announcements', name: 'User Dashboard Club Announcements', exact: true, component: UserDashboardClubAnnouncements}
]

export default routes