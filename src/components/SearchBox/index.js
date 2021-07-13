import React, { Component } from 'react'
import { withStyles } from '@material-ui/core';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types'
class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;
        return (
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        autoComplete='off'
                        className={classes.textField}
                        onChange={handleChange}
                        margin="normal"
                        placeholder="Nhập từ khóa cần tìm"
                    />
                </form>
            </div>
        )
    }
}
SearchBox.propTypes = {
    classes: PropTypes.object,

}
export default withStyles(styles)(SearchBox)
