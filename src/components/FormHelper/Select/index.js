import React from 'react'
import { Select, FormControl, InputLabel, FormHelperText, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import styles from './styles'
const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}
renderFromHelper.propTypes = {
    touched: PropTypes.bool,
    error: PropTypes.bool
}
const renderSelectField = ({
    classes,
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
    <FormControl className={classes.formControl} error={touched && error}>
        <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
        <Select
            {...input}
            {...custom}
            inputProps={{
                name: input.name,
                id: 'color-native-simple'
            }}
            value={input.value}
        >
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
)
renderSelectField.propTypes = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
    children: PropTypes.array,
    classes: PropTypes.object
}

export default withStyles(styles)(renderSelectField);