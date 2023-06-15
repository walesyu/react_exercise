import * as React from "react";
import '../App.css';
import {connect} from "react-redux";
import {useState} from "react";
import {useDispatch} from 'react-redux'
import {
  Button,
  Card,
  CardContent,
  FormControl, FormHelperText, Grid,
  TextField,
  Typography
} from "@mui/material";
import {login, logout} from '../actions/login'

function MyForm({isUserLogin, account}) {
  console.log("account：", account)
  const [userAccount, setUserAccount] = useState(account ? account : "");
  const [password, setPassword] = useState("");
  const [showAccountError, setShowAccountError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(isUserLogin ? isUserLogin : false);
  const dispatch = useDispatch()

  const handleInput = (event) => {
    const target = event.target;
    const fieldName = target.name;
    switch (fieldName) {
      case "account":
        setUserAccount(event.target.value)
        break;
      case "password":
        setPassword(event.target.value)
        break
    }
  };

  const checkForm = (e) => {
    e.preventDefault();
    if (userAccount === '') {
      setShowAccountError(true);
      return false;
    } else {
      setShowAccountError(false);
    }
    if (password === '') {
      setShowPasswordError(true);
      return false;
    } else {
      setShowPasswordError(false)
    }
    setIsLogin(true);
    dispatch(login(userAccount));
  };

  const reset = (e) => {
    setUserAccount('')
    setPassword("")
    setShowAccountError(false)
    setShowPasswordError(false)
  };

  const signOut = (e) => {
    setUserAccount('')
    setPassword("")
    setShowAccountError(false)
    setShowPasswordError(false)
    setIsLogin(false)
    dispatch(logout());
  };

  let loginForm = null;
  if (isLogin) {
    loginForm = <Card variant="outlined">
      <CardContent>
        <Typography variant="h5"
                    component="h2">Welcome {userAccount}</Typography>
        <Button color="primary"
                variant="contained" onClick={signOut}>登出</Button>&nbsp;
      </CardContent>
    </Card>
  } else {
    loginForm = <Grid item md={7}>
      <form noValidate autoComplete="off" onSubmit={checkForm}>
        <Grid item md={12}>
          <FormControl>
            <TextField variant="outlined" name="account" label={"Name"}
                       onChange={handleInput} value={userAccount}/>
          </FormControl>
          {showAccountError ?
              <FormHelperText error={true} margin={'dense'}
                              variant={'outlined'}>Your account</FormHelperText>
              : null}
        </Grid>
        <Grid item md={12}>&nbsp;</Grid>
        <Grid item md={12}>
          <FormControl>
            <TextField type="password" name="password" label="Password"
                       variant="outlined" onChange={handleInput}
                       value={password}/>
          </FormControl>
          {showPasswordError ? <FormHelperText error={true}
                                               margin={'dense'}
                                               variant={'outlined'}>Your
            password</FormHelperText> : null}
        </Grid>
        <Grid style={{'marginLeft': '145px', 'marginTop': '20px'}}>
          <Button color="primary" type={'submit'}
                  variant="contained">登入</Button>&nbsp;
          <Button color="secondary" onClick={reset}
                  variant="contained">重設</Button>
        </Grid>
      </form>
    </Grid>
  }

  return <Grid container>
    <Grid item md={12}/>
    <Grid item md={5}/>
    {loginForm}
  </Grid>
}

const mapStateToProps = (store) => {
  console.log(store.loginInfo.user)
  return {
    account: (store.loginInfo.user) ? store.loginInfo.user.name : '',
    isUserLogin: !!(store.loginInfo.user)
  };
};
export default connect(mapStateToProps)(MyForm)
