import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'
import * as modalActions from '../../actions/modal'
class CommonModal extends Component {
    render() {
        const { open, classes, component, modalActionCreators, title } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal open={open} onClose={hideModal}>
                <div className={classes.modal}>
                    <div className={classes.header}>
                        <span className={classes.title}>
                            {title}
                        </span >
                        <CloseIcon className={classes.icon} onClick={hideModal} />
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        )
    }
}
CommonModal.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string,
    open: PropTypes.bool,
    component: PropTypes.object,
    modalActionCreators: PropTypes.shape({
        hideModal: PropTypes.func,
    })
}
const mapStateToProps = state => ({
    open: state.modal.showModal,
    component: state.modal.component,
    title: state.modal.title
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    modalActionCreators: bindActionCreators(modalActions, dispatch)
})
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
    withStyles(styles),
    withConnect,
)(CommonModal)