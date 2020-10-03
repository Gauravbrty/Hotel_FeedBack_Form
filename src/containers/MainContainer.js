import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBootstrap from './InputBootstrap';
import InputLabel from '@material-ui/core/InputLabel';
import { useSnackbar } from 'notistack';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import ReactCountryFlag from "react-country-flag"

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validate = name => {
    return !(Boolean(name) && name.length === 6);
    }
const useStyles = makeStyles((theme) => ({
root: {
    flexGrow: 1,
},
space :{
    minHeight: 550,
    "@media screen and (max-width: 768px)": {
        minHeight: "auto",
    },
    
},
submitButton: {
    textAlign: "right",
    "@global": {
        "button":{
            backgroundColor: "green",
            color: "white"
        }
    },
    "@media screen and (max-width: 768px)": {
        textAlign: "center",
    },
},
paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
},
}));

export default function CenteredGrid() {
const { enqueueSnackbar } = useSnackbar();
const providerRef = React.useRef();

const classes = useStyles();
const [feedback, setfeedback] = useState({});

const handleFeedback = (e, keyName) => {
    e.persist();
    setfeedback(oldfeedback => {
        return {...oldfeedback, [keyName]: e.target.value}
    })
}

const handleSubmit = () => {
    // if(!Object.keys(feedback).length){
    //     enqueueSnackbar('All fields are empty.', { variant: "error" });
    //     return;
    // }
    // if(!re.test(feedback.email)){
    //     enqueueSnackbar('Check email id!', { variant: "error" });
    //     return;
    // }
    // if(validate(feedback.pincode)){
    //     enqueueSnackbar('Invalid Pincode!', { variant: "error" });
    //     return;
    // }
    if(!feedback.userRating1){
        enqueueSnackbar('User Rating is required!', { variant: "error" });

        return;
    }
    if(!feedback.userRating2){
        enqueueSnackbar('User Rating is required!', { variant: "error" });

        return;
    }
    if(!feedback.userRating3){
        enqueueSnackbar('User Rating is required!', { variant: "error" });

        return;
    }
    if(!feedback.userRating4){
        enqueueSnackbar('User Rating is required!', { variant: "error" });

        return;
    }

    let feedbacks = JSON.parse(localStorage.getItem('feedbacks') || "[]");
    feedbacks = [...feedbacks, feedback];

    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
    setfeedback(() => {
        return {};
    });
    enqueueSnackbar('Sucess,Thank you for completing the information', { variant: "success" });

}



return (
    <div className={classes.root}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <InputBootstrap  label={"Name"}  value={feedback.name || ""} onChange={(e) => handleFeedback(e, 'name')}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputBootstrap  label={"Email"}  value={feedback.email || ""} onChange={(e) => handleFeedback(e, 'email')}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputBootstrap   label={"Phone Number"}   value={feedback.number || ""} onChange={(e) => handleFeedback(e, 'number')}/>
                    </Grid>
                    <Grid item  xs={12} md={6}>
                        <InputBootstrap  label={"Pincode"}  value={feedback.pincode || ""} onChange={(e) => handleFeedback(e, 'pincode')}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel style={{color:"black"}} shrink htmlFor="bootstrap-input" >
                        Please rate the quality of the service you received from your host
                        </InputLabel>
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating1 === 'Bad'} value={"Bad"} onChange={(e) => handleFeedback(e,'userRating1')} />} label="Bad" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating1 === 'Good'} value={"Good"} onChange={(e) => handleFeedback(e,'userRating1')} />} label="Good" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating1 === 'Excellent'} value={"Excellent"} onChange={(e) => handleFeedback(e,'userRating1')} />} label="Excellent" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating1 === 'Out Standing'} value={"Out Standing"} onChange={(e) => handleFeedback(e,'userRating1')} />} label="Out Standing" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel  style={{color:"black"}} shrink htmlFor="bootstrap-input">
                            Please rate the quality of your beverage
                        </InputLabel>
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating2 === 'Bad'} value={"Bad"} onChange={(e) => handleFeedback(e,'userRating2')} />} label="Bad" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating2 === 'Good'} value={"Good"} onChange={(e) => handleFeedback(e,'userRating2')} />} label="Good" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating2 === 'Excellent'} value={"Excellent"} onChange={(e) => handleFeedback(e,'userRating2')} />} label="Excellent" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating2 === 'Out Standing'} value={"Out Standing"} onChange={(e) => handleFeedback(e,'userRating2')} />} label="Out Standing" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel style={{color:"black"}} shrink htmlFor="bootstrap-input">
                              Was our restaurant clean 
                        </InputLabel>
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating3 === 'Bad'} value={"Bad"} onChange={(e) => handleFeedback(e,'userRating3')} />} label="Bad" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating3 === 'Good'} value={"Good"} onChange={(e) => handleFeedback(e,'userRating3')} />} label="Good" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating3 === 'Excellent'} value={"Excellent"} onChange={(e) => handleFeedback(e,'userRating3')} />} label="Excellent" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating3 === 'Out Standing'} value={"Out Standing"} onChange={(e) => handleFeedback(e,'userRating3')} />} label="Out Standing" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel style={{color:"black"}} shrink htmlFor="bootstrap-input">
                            Please rate your overall dining experience
                        </InputLabel>
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating4 === 'Bad'} value={"Bad"} onChange={(e) => handleFeedback(e,'userRating4')} />} label="Bad" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating4 === 'Good'} value={"Good"} onChange={(e) => handleFeedback(e,'userRating4')} />} label="Good" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating4 === 'Excellent'} value={"Excellent"} onChange={(e) => handleFeedback(e,'userRating4')} />} label="Excellent" />
                        <FormControlLabel value="end" control={<Radio color="primary" checked={feedback.userRating4 === 'Out Standing'} value={"Out Standing"} onChange={(e) => handleFeedback(e,'userRating4')} />} label="Out Standing" />
                    </Grid>
                  

                    <Grid item xs={12} md={12} className={classes.submitButton}>
                        <Button size="small" variant="contained" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
    </div>
);
}




