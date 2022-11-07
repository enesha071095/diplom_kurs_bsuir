import DashboardPage from './../pages/DashboardPage';
import ProfilePage from '../pages/ProfilePage';
import ExecutorsPage from './../pages/ExecutorsPage';
import DocumentsPage from './../pages/DocumentsPage';
import StatisticsPage from './../pages/StatisticsPage'
import LoginPage from "../pages/LoginPage";
import AboutPage from "../pages/AboutPage";
import AdminLoader from '../pages/AdminLoader';


export const privateRoutes = [
    {path: '/', component:  ProfilePage, exact: true},
    {path: '/profile', component: ProfilePage, exact: true},
    {path: '/docs', component: DocumentsPage, exact: true},
    {path: '/executors', component: ExecutorsPage, exact: true},
    {path: '/dashboard', component: DashboardPage, exact: true},
    {path: '/statistics', component: StatisticsPage, exact: true},
]

export const publicRoutes = [
    {path: '/sign_in', component: LoginPage, exact: true},
    {path: '/about', component: AboutPage, exact: true},
]
