import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../TaskForm';
import SearchBox from '../../components/SearchBox';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as taskActions from '../../actions/task'
import * as modalActions from '../../actions/modal'
import PropTypes from 'prop-types';
class TaskBoard extends Component {

    state = {
        open: false,
    }

    componentDidMount() {
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }
    loadData = () => {
        const { taskActionCreators } = this.props;
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }
    handleClose = () => {
        this.setState({
            open: false,
        })
    }
    openForm = () => {
        const { modalActionCreators, taskActionCreators } = this.props;
        const { setTaskEditing } = taskActionCreators;
        setTaskEditing(null);
        const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;

        showModal();
        changeModalTitle('Thêm mới công việc');
        changeModalContent(<TaskForm />)
    }
    handleFilter = (e) => {
        const { value } = e.target;
        const { taskActionCreators } = this.props;
        const { filterTask } = taskActionCreators;
        filterTask(value);
    }
    handleEditTask = task => {
        const { taskActionCreators, modalActionCreators } = this.props;
        const { setTaskEditing } = taskActionCreators;
        const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
        setTaskEditing(task);
        showModal();
        changeModalTitle('Cập nhật công việc');
        changeModalContent(<TaskForm />)
    }
    renderBoard = () => {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value)
                        return <TaskList
                            tasks={taskFiltered}
                            status={status}
                            key={index}
                            onClickEdit={this.handleEditTask}
                        />
                    })
                }
            </Grid >
        );
        return xhtml;
    }
    renderSearchBox = () => {
        let xhtml = null;
        xhtml = (
            <SearchBox handleChange={this.handleFilter} />
        );
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard} >
                <Button variant="contained" color="primary" className={classes.button} onClick={this.loadData} style={{ marginRight: 20 }}>
                    Load Data
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm}>
                    <AddIcon className="fa fa-plus-circle" /> Thêm mới công việc
                </Button>
                {
                    this.renderSearchBox()
                }
                {
                    this.renderBoard()
                }

            </div >
        )
    }
}
TaskBoard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTaskRequest: PropTypes.func,
        filterTask: PropTypes.func,
        setTaskEditing: PropTypes.func,
    }),
    modalActionCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func,
    }),
    listTask: PropTypes.array,
}
const mapStateToProps = (state, ownProps) => {
    return {
        listTask: state.task.listTask
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
        modalActionCreators: bindActionCreators(modalActions, dispatch)
    }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard))
