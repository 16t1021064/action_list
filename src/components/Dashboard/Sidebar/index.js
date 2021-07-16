import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles'
import Drawer from '@material-ui/core/Drawer';
import { ADMIN_ROUTES } from '../../../constants';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types'
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }
    toggleDrawer = (value) => {
        this.setState({
            open: value
        })
    }
    renderList = () => {
        let xhtml = null;
        const { classes } = this.props
        xhtml = (
            <div className={classes.list}>
                <List component='div'>
                    {ADMIN_ROUTES.map(item => {
                        return (
                            <ListItem key={item.path} className={classes.listItem} button>
                                {item.name}
                            </ListItem>
                        )
                    })}
                </List>
            </div >
        )
        return xhtml;
    }
    render() {
        const { open } = this.state;
        const { classes } = this.props
        return (
            <Drawer

                open={open}
                onClose={() => this.toggleDrawer(false)}
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
            >
                {this.renderList()}
            </Drawer >
        )
    }
}
Sidebar.propTypes = {
    classes: PropTypes.object,
}
export default withStyles(styles)(Sidebar)
