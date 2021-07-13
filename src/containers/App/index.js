import { withStyles } from '@material-ui/core';
import styles from './styles';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react'
import TaskBoard from './../Taskboard/index'
import theme from './../../commons/Theme'
import { Provider } from 'react-redux'
import configureStore from '../../redux/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';
const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <GlobalLoading />
                    <Modal />
                    <TaskBoard />
                </ThemeProvider>
            </Provider>
        )
    }
}

export default withStyles(styles)(App);
