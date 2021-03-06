import React, { Component } from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/styles'
import LoadingIcon from '../../assets/images/loading.gif'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
class GlobalLoading extends Component {
    render() {
        const { classes, showLoading } = this.props;
        let xhtml = null;
        if (showLoading) {
            xhtml = (<div className={classes.globalLoading}>
                <img src={LoadingIcon} alt="loading" className={classes.icon} />
            </div>
            );

        }
        return xhtml;
    }
}
GlobalLoading.propTypes = {
    classes: PropTypes.object,
    showLoading: PropTypes.bool
}
const mapStateToProps = (state, ownProps) => {
    return {
        showLoading: state.ui.showLoading
    }
}


const withConnect = connect(mapStateToProps)

export default compose(
    withStyles(styles),
    withConnect,
)(GlobalLoading)