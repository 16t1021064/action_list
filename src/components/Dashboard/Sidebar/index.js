import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles'
import Drawer from '@material-ui/core/Drawer';
import { ADMIN_ROUTES } from '../../../constants';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
class Sidebar extends Component {
    toggleDrawer = (value) => {
        const { onToggleSidebar } = this.props;
        if (onToggleSidebar) {
            onToggleSidebar(value);
        }
    }
    renderList = () => {
        let xhtml = null;
        const { classes } = this.props
        xhtml = (
            <div className={classes.list}>
                <List component='div'>
                    {ADMIN_ROUTES.map(item => {
                        return (
                            <NavLink to={item.path} exact={item.exact} className={classes.menuLink} activeClassName={classes.menuLinkActive} key={item.path}>
                                <ListItem key={item.path} className={classes.listItem} button>
                                    {item.name}
                                </ListItem>
                            </NavLink>
                        )
                    })}
                </List>
            </div >
        )
        return xhtml;
    }
    render() {
        const { classes, showSidebar } = this.props
        return (
            <Drawer
                open={showSidebar}
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="persistent"
            >
                {this.renderList()}
            </Drawer>
        )
    }
}
Sidebar.propTypes = {
    classes: PropTypes.object,
    showSidebar: PropTypes.bool,
    onToggleSidebar: PropTypes.func
}
export default withStyles(styles)(Sidebar)
