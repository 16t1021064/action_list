const styles = theme => ({
    taskboard: {
        display: 'flex',
        alignItems: 'center'
    },
    shape: {
        padding: 20,
        margin: 10,
        backgroundColor: theme.color.primary,
        color: theme.shape.textColor,
        // backgroundColor: 'red',
        // color: 'white',
        // borderColor: '#cccccc',
        // borderRadius: 4

    },
    modalConfirmTextBold: {
        fontWeight: "700"
    }
})
export default styles;