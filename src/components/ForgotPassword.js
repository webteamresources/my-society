import React, { Component } from 'react';
import fire from '../config/Fire';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LoginRegister from './LoginRegister';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



class ForgotPassword extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login Form',
            loginBtn: true
        };
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    resetPassword = e => {
        e.preventDefault();
        fire.auth().sendPasswordResetEmail(this.state.email).then(function() {
            
          }).catch(function(error) {
            // An error happened.
          });
        };


  render(){

    let errorMessage = this.state.fireErrors ?
        (<div>{this.state.fireErrors}</div>) : null;


    return (
        <div>

<Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
      {errorMessage}
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="loginBtn" onClick={this.resetPassword} 
          >
            Submit
          </Button>
        </form>
      </div>

    </Container>
      </div>
    );
  }
}

export default ForgotPassword;
