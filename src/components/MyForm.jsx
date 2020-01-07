import * as React from "react";
import TextField from "@material-ui/core/TextField";
import '../App.css';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import {Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
      showAccountError: false,
      showPasswordError: false,
      isLogin: false
    };
    this.checkForm = this.checkForm.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleAccount = (e) => {
    this.setState({
      account: e.target.value
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  checkForm = (e) => {
    e.preventDefault();
    if (this.state.account === '') {
      this.setState({showAccountError: true});
      return false;
    } else {
      this.setState({showAccountError: false});
    }
    if (this.state.password === '') {
      this.setState({showPasswordError: true});
      return false;
    } else {
      this.setState({showPasswordError: false});
    }
    this.setState({isLogin: true});
  };

  Reset = (e) => {
    this.setState({
      account: '',
      password: '',
      showAccountError: false,
      showPasswordError: false
    });
  };

  render = () => {
    let loginForm = null;
    if (this.state.isLogin) {
      loginForm = <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">Welcome {this.state.account}</Typography>
        </CardContent>
      </Card>
    } else {
      loginForm = <Grid item md={7}>
        <form noValidate autoComplete="off">
          <Grid item md={12}>
            <FormControl>
              <TextField variant="outlined" label={"Name"} onChange={this.handleAccount} value={this.state.account}/>
            </FormControl>
            {this.state.showAccountError ? <FormHelperText>Your account</FormHelperText> : null}
          </Grid>
          <Grid item md={12}>&nbsp;</Grid>
          <Grid item md={12}>
            <FormControl>
              <TextField type="password" label="Password" variant="outlined" onChange={this.handlePassword} value={this.state.password}/>
            </FormControl>
            {this.state.showPasswordError ? <FormHelperText>Your password</FormHelperText> : null}
          </Grid>
          <Grid style={{'marginLeft': '145px', 'marginTop': '20px'}}>
            <Button color="primary" onClick={this.checkForm} variant="contained">登入</Button>&nbsp;
            <Button color="secondary" onClick={this.Reset} variant="contained">Reset</Button>
          </Grid>
        </form>
      </Grid>
    }

    return <Grid container spacing={3}>
      <Grid item md={12}/>
      <Grid item md={5}/>

      {loginForm}

    </Grid>
  };
}

export default MyForm;
