import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';

import TaskList from '../../components/TaskList';
const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "read material ui book",
        status: 0
    },
    {
        id: 2,
        title: "play football",
        description: "with my friend",
        status: 2
    },
    {
        id: 3,
        title: "play game",
        description: "",
        status: 1
    }
];
class Taskboard extends Component {
    renderBoard = () => {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value)
                        return <TaskList tasks={taskFiltered} status={status} key={index} />
                    })
                }
            </Grid >
        );
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard} >
                <Button variant="contained" color="primary" className={classes.button}>
                    <AddIcon className="fa fa-plus-circle" /> Thêm mới công việc
                </Button>
                {
                    this.renderBoard()
                }
            </div >
        )
    }
}
export default withStyles(styles)(Taskboard)
