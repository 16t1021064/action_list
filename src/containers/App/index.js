import { withStyles } from '@material-ui/core';
import styles from './styles';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react'
import Taskboard from './../Taskboard/index'
import theme from './../../commons/Theme'

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Taskboard />
            </ThemeProvider>
        )
    }
}


export default withStyles(styles)(App);
