import * as React from "react";
import TextField from "@material-ui/core/TextField";
import '../App.css';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import * as actionCreators from "../actions/login";
import MyButton from "./MyComponent";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: (props.account) ? props.account : "",
      password: '',
      showAccountError: false,
      showPasswordError: false,
      isLogin: (props.isLogin) ? props.isLogin : false,
    };
    this.checkForm = this.checkForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: event.target.value
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
    this.props.login(this.state.account);
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
        <form noValidate autoComplete="off" onSubmit={this.checkForm}>
          <Grid item md={12}>
            <FormControl>
              <TextField variant="outlined" name="account" label={"Name"} onChange={this.handleInput} value={this.state.account}/>
            </FormControl>
            {this.state.showAccountError ?
                <FormHelperText error={true} margin={'dense'} variant={'outlined'}>Your account</FormHelperText> : null}
          </Grid>
          <Grid item md={12}>&nbsp;</Grid>
          <Grid item md={12}>
            <FormControl>
              <TextField type="password" name="password" label="Password" variant="outlined" onChange={this.handleInput} value={this.state.password}/>
            </FormControl>
            {this.state.showPasswordError ? <FormHelperText error={'true'} margin={'dense'} variant={'outlined'}>Your
              password</FormHelperText> : null}
          </Grid>
          <Grid style={{'marginLeft': '145px', 'marginTop': '20px'}}>
            <Button color="primary" type={'submit'} variant="contained">登入</Button>&nbsp;
            <Button color="secondary" onClick={this.Reset} variant="contained">重設</Button>
          </Grid>
        </form>
      </Grid>
    }

    return <Grid container>
      <Grid item md={12}/>
      <Grid item md={5}/>
      {loginForm}
    </Grid>
  };
}

const mapStateToProps = (store) => {
  return {
    account: (store.loginInfo.user) ? store.loginInfo.user.name : '',
    isLogin: !!(store.loginInfo.user)
  };
};
export default connect(mapStateToProps, actionCreators)(MyForm)
