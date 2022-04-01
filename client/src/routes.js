import React from 'react'
import CreateEvent from './views/AdminDashboard/Event/create-event'
import JoinClub from './views/UserDashboard/Club/join-club'
import ClubWelCome from './views/UserDashboard/Club/welcome'
import JoinEvent from './views/UserDashboard/Event/join-welcome'

const Home = React.lazy(() => import('./views/Home'))
const Login = React.lazy(() => import('./views/Login'))
const Signup = React.lazy(() => import('./views/Signup'))
const Clubs = React.lazy(() => import('./views/Clubs'))
const Events = React.lazy(() => import('./views/Events'))
const UserDashboard = React.lazy(() => import('./views/UserDashboard'))
const UserDashboardClub = React.lazy(() => import('./views/UserDashboard/Club'))
const UserDashboardEvent = React.lazy(() => import('./views/UserDashboard/Event'))
const UserDashboardClubAnnouncements = React.lazy(() => import('./views/UserDashboard/Announcements'))
const EventDetails = React.lazy(() => import('./views/Events/event-details'))
const ClubDetails = React.lazy(() => import('./views/Clubs/club-details'))
const CreateClub = React.lazy(() => import('./views/AdminDashboard/Club/create-club'))

const routes = [
    { path: '/', name: 'Landing', exact: true, component: Home }, 
    { path: '/login', name: 'Login', exact: true, component: Login }, 
    { path: '/signup', name: 'Signup', exact: true, component: Signup },
    { path: '/events', name: 'All Events', exact: true, component: Events },  
    { path: '/user/dashboard', name: 'User Dashboard', exact: true, component: UserDashboard}, 
    { path: '/user/dashboard/club/:clubId', name: 'User Dashboard Club', exact: true, component: UserDashboardClub }, 
    { path: '/user/dashboard/events', name: 'User Dashboard Event', exact: true, component: UserDashboardEvent }, 
    { path: '/clubs', name: 'All Clubs', exact: true, component: Clubs }, 
    { path: '/events/:eventId', name: 'Event Details', exact: true, component: EventDetails }, 
    { path: '/clubs/:clubId', name: 'Club Details', exact: true, component: ClubDetails }, 
    { path: '/user/dashboard/club/:clubId/announcements', name: 'User Dashboard Club Announcements', exact: true, component: UserDashboardClubAnnouncements},
    { path: '/user/joinclub', name: 'Join Club', exact: true, component: JoinClub }, 
    { path: '/user/joinclub/welcome', name: 'Welcome to the Club', exact: true, component: ClubWelCome}, 
    { path: '/user/joinEvent', name: 'Join Event', exact: true, component: JoinEvent}, 

    { path: '/admin/createclub', name: 'Create Club', exact: true, component: CreateClub }, 
    { path: '/admin/createEvent', name: 'Create Event', exact: true, component: CreateEvent }, 
    
]

export default routes