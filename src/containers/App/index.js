import { withStyles } from '@material-ui/core';
import styles from './styles';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react'
import theme from './../../commons/Theme'
import { Provider } from 'react-redux'
import configureStore from '../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';
import { BrowserRouter, Switch } from 'react-router-dom'
import { ADMIN_ROUTES } from '../../constants';
import AdminLayoutRoute from '../../commons/Layout/AdminLayoutRoute';
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configureStore();


class App extends Component {

    renderAdminRoutes = () => {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map((route) => {
            return (
                <AdminLayoutRoute
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    name={route.name}
                />
            )
        })
        return xhtml;
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ToastContainer />
                        <GlobalLoading />
                        <Modal />
                        <Switch>
                            {this.renderAdminRoutes()}
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default withStyles(styles)(App);
