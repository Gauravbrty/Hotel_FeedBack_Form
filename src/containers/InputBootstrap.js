import React from 'react';
import {
fade,
withStyles,
makeStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';


const BootstrapInput = withStyles((theme) => ({
input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
    boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
    },
},
}))(InputBase);

const useStyles = makeStyles(() => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
},
}));


export default function CustomizedInputs(props) {
const classes = useStyles();

return (
    <form className={classes.root} noValidate>
        <InputLabel shrink htmlFor="bootstrap-input">
            {props.label}
        </InputLabel>
        <BootstrapInput {...props} defaultValue="react-bootstrap" id="bootstrap-input" fullWidth />
    </form>
);
}