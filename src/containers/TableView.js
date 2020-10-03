import React, {useEffect, useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';


const StyledTableCell = withStyles((theme) => {
return ({
    head: {
        backgroundColor: "#dbcde6",
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
    })
})(TableCell);

const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
},
}))(TableRow);


const useStyles = makeStyles({
table: {
    minWidth: 700,
},
error: {textAlign: "center", color: "red"}
});

export default function CustomizedTables() {
const classes = useStyles();
const [feedbacks, setFeedbacks] = useState([]);
useEffect(() => {
    setFeedbacks(JSON.parse(localStorage.getItem('feedbacks') || "[]"));
}, []);

const handleDelete = (deleteIndex) => {
    const newFeedbacks = feedbacks.filter((feedback, index) => {
        return deleteIndex != index;
    });
    console.log(newFeedbacks);
    setFeedbacks(() => {
        return newFeedbacks;
    })
    localStorage.setItem("feedbacks", JSON.stringify(newFeedbacks));
}

return (
    <div>
        {!Boolean(feedbacks.length) && <div className={classes.error}>No Feedback is added.</div>}
        {Boolean(feedbacks.length) &&
        <>
            <h3>All Feedback</h3>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Number</StyledTableCell>
                    <StyledTableCell align="center">Service Quality</StyledTableCell>
                    <StyledTableCell align="center">Beverage Quality</StyledTableCell>
                    <StyledTableCell align="center">Restaurant Cleanliness</StyledTableCell>
                    <StyledTableCell align="center">Dining Experience</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {feedbacks.map((feedback, index) => (
                    <StyledTableRow key={feedback.name}>
                        <StyledTableCell align="center">{feedback.name}</StyledTableCell>
                        <StyledTableCell align="center">{feedback.email}</StyledTableCell>
                        <StyledTableCell align="center">{feedback.number}</StyledTableCell>
                        <StyledTableCell align="center">{feedback.userRating1}</StyledTableCell>
                        <StyledTableCell align="center">{feedback.userRating2}</StyledTableCell>
                        <StyledTableCell align="center">{feedback.userRating3}</StyledTableCell>
                        <StyledTableCell align="center">{feedback.userRating4}</StyledTableCell>
                        <StyledTableCell align="center">
                            {/* <IconButton color="primary" aria-label="upload picture" component="span">
                                <EditIcon />
                            </IconButton> */}
                            <IconButton color="secondary" aria-label="upload picture" component="span" onClick={() => handleDelete(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </>
        }
         
    </div>
);
}