import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { Box, Grid, MenuItem, withStyles } from '@material-ui/core';
import styles from './styles'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import * as modalActions from '../../actions/modal'
import * as taskActions from '../../actions/task'
import { reduxForm, Field } from 'redux-form'
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate'
import renderSelectField from '../../components/FormHelper/Select';
class TaskForm extends Component {
    handleSubmitForm = (data) => {
        const { taskActionCreators, taskEditing } = this.props;
        const { addTask, updateTask } = taskActionCreators;
        const { title, description, status } = data;
        if (taskEditing && taskEditing.id) {
            updateTask(title, description, status)
        } else {
            addTask(title, description);
        }
    }
    renderStatusSelection = () => {
        let xhtml = null;
        const { taskEditing, classes } = this.props;
        if (taskEditing && taskEditing.id) {
            xhtml = (
                <Field
                    id="status"
                    className={classes.select}
                    label="Trạng thái"
                    name="status"
                    component={renderSelectField}
                >
                    <MenuItem value={0}>Ready</MenuItem>
                    <MenuItem value={1}>In Progress</MenuItem>
                    <MenuItem value={2}>Completed</MenuItem>
                </Field>
            )
        }
        return xhtml;
    }
    render() {
        const { classes, modalActionCreators, handleSubmit, invalid, submitting } = this.props;
        const { hideModal } = modalActionCreators;

        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            id="title"
                            label="tiêu đề"
                            className={classes.textField}
                            margin="normal"
                            name="title"
                            component={renderTextField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            id="description"
                            label="Mô tả"
                            multiline
                            rowsMax="4"
                            className={classes.textField}
                            margin="normal"
                            name="description"
                            component={renderTextField}
                        />
                    </Grid>
                    {this.renderStatusSelection()}
                    <Grid item md={12}>
                        <Box display="flex" flexDirection="row-reverse" mt={2}>
                            <Box ml={1}>
                                <Button variant="contained" onClick={hideModal}  >
                                    Hủy bỏ
                                </Button>
                            </Box>
                            <Button disabled={invalid || submitting} variant="contained" color="primary" type="submit" >
                                Lưu lại
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        )
    }
}
TaskForm.propTypes = {
    classes: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    }),
    taskActionCreators: PropTypes.shape({
        addTask: PropTypes.func,
        updateTask: PropTypes.func,
    }),
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    submitting: PropTypes.bool,
    taskEditing: PropTypes.object
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        modalActionCreators: bindActionCreators(modalActions, dispatch),
        taskActionCreators: bindActionCreators(taskActions, dispatch),
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        taskEditing: state.task.taskEditing,
        initialValues: {
            title: state.task.taskEditing ? state.task.taskEditing.title : null,
            description: state.task.taskEditing ? state.task.taskEditing.description : null,
            status: state.task.taskEditing ? state.task.taskEditing.status : null
        },
    }
}
const FROM_NAME = 'TASK_MANAGEMENT'

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
    form: FROM_NAME,
    validate
})
export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm
)(TaskForm)