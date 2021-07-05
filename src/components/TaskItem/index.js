import React, { Component } from 'react'
import { Icon, withStyles } from '@material-ui/core';
import styles from './styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
class TaskItem extends Component {
    render() {
        const { classes, task, status } = this.props;
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
                    <Fab color="primary" aria-label="edit" className={classes.fab} size="small">
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
export default withStyles(styles)(TaskItem)
