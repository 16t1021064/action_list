import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles'
import TaskItem from '../TaskItem/index'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'
class TaskList extends Component {
    render() {
        const { classes, tasks, status, onClickEdit } = this.props;
        return (

            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>

                <div className={classes.wrapperListTask}>
                    {
                        tasks.map(task => {
                            return (
                                <TaskItem
                                    task={task}
                                    status={status}
                                    key={task.id}
                                    onClickEdit={() => onClickEdit(task)}
                                />
                            )
                        })
                    }
                </div>
            </Grid>
        )
    }
}
TaskList.propTypes = {
    classes: PropTypes.object,
    task: PropTypes.array,
    status: PropTypes.object,
    onClickEdit: PropTypes.func
}
export default withStyles(styles)(TaskList)