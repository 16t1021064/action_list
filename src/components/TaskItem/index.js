import React, { Component } from 'react'
import { Icon, withStyles } from '@material-ui/core';
import styles from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types'
class TaskItem extends Component {
    render() {
        const { classes, task, status, onClickEdit } = this.props;
        const { id, title } = task;

        return (
            <Card key={id} className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">{title}</Typography>
                        </Grid>
                        <Grid item md={4}>{status.label}</Grid>
                    </Grid>
                </CardContent>
                <p>{task.description}</p>
                <CardActions className={classes.cardActions}>
                    <Fab color="primary" aria-label="edit" className={classes.fab} size="small" onClick={onClickEdit}>
                        <Icon>
                            edit
                        </Icon>
                    </Fab>
                    <Fab color="secondary" aria-label="delete" size="small" className={classes.fab}>
                        <Icon>
                            delete
                        </Icon>
                    </Fab>
                </CardActions>
            </Card>
        )
    }
}
TaskItem.propTypes = {
    classes: PropTypes.object,
    task: PropTypes.object,
    status: PropTypes.object,
    onClickEdit: PropTypes.func,
}
export default withStyles(styles)(TaskItem)
