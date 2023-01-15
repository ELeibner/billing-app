import { CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    LoadingForm,
    LoadingHome,
    LoadingInvoice,
    LoadingProfile,
    LoadingStatistics
} from './components/loading';

const Login = lazy(() => import('./pages/login/Login'));
const Layout = lazy(() => import('./components/layout/Layout'));
const Home = lazy(() => import('./pages/home/Home'));
const Invoices = lazy(() => import('./pages/invoices/Invoices'));
const NewInvoice = lazy(() => import('./pages/new-invoice/NewInvoice'));
const EditInvoice = lazy(() => import('./pages/edit-invoice/EditInvoice'));
const Profile = lazy(() => import('./pages/profile/Profile'));
const Statistics = lazy(() => import('./pages/statistics/Statistics'));

function App() {
    return (
        <Suspense fallback={<CircularProgress />}>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route
                            path={'/'}
                            element={
                                <Suspense fallback={<LoadingHome />}>
                                    <Home />
                                </Suspense>
                            }
                        />
                        <Route
                            path={'/invoices'}
                            element={
                                <Suspense fallback={<LoadingInvoice />}>
                                    <Invoices />
                                </Suspense>
                            }
                        />
                        <Route
                            path={'/invoices/new'}
                            element={
                                <Suspense fallback={<LoadingForm />}>
                                    <NewInvoice />
                                </Suspense>
                            }
                        />
                        <Route
                            path={'/invoice/:id'}
                            element={
                                <Suspense fallback={<LoadingForm />}>
                                    <EditInvoice />
                                </Suspense>
                            }
                        />
                        <Route
                            path={'/statistics'}
                            element={
                                <Suspense fallback={<LoadingStatistics />}>
                                    <Statistics />
                                </Suspense>
                            }
                        />
                        <Route
                            path={'/profile'}
                            element={
                                <Suspense fallback={<LoadingProfile />}>
                                    <Profile />
                                </Suspense>
                            }
                        />
                    </Route>
                    <Route
                        path="/login"
                        element={
                            <Suspense fallback={<CircularProgress />}>
                                <Login />
                            </Suspense>
                        }
                    />
                </Routes>
            </Router>
        </Suspense>
    );
}

export default App;
