import React, {useEffect, useState} from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import {styled} from "@mui/material";
import {useStore} from "../../../store/useStore";
import {IState} from "../../../constants/interfaces";
import {useNavigate} from "react-router-dom";
import MuiCard from "@mui/material/Card";

const Card = styled(MuiCard)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const SignInComponent = () => {
    const login = useStore((state: IState) => state.login)

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(validateInputs()){
            login(email, password)
        }
    };

    const validateInputs = () => {
        let isValid = true;

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
            setEmailErrorMessage('');
        }

        if (!password || password.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }

        return isValid;
    };
    return (
        <Card variant="outlined">
            {/*<SitemarkIcon />*/}
            <Typography
                component="h1"
                variant="h4"
                sx={{width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)'}}
            >
                Sign in
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: 2,
                }}
            >
                <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        autoComplete="Email"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={emailError ? 'error' : 'primary'}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        error={passwordError}
                        helperText={passwordErrorMessage}
                        name="password"
                        placeholder="••••••"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        autoFocus
                        required
                        fullWidth
                        variant="outlined"
                        color={passwordError ? 'error' : 'primary'}
                    />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                {/*<ForgotPassword open={open} handleClose={handleClose} />*/}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                >
                    Sign in
                </Button>
                {/*  <Link*/}
                {/*      component="button"*/}
                {/*      type="button"*/}
                {/*      onClick={handleClickOpen}*/}
                {/*      variant="body2"*/}
                {/*      sx={{ alignSelf: 'center' }}*/}
                {/*  >*/}
                {/*    Forgot your password?*/}
                {/*  </Link>*/}
                {/*</Box>*/}
                {/*<Divider>or</Divider>*/}
                {/*<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>*/}
                {/*  <Button*/}
                {/*      fullWidth*/}
                {/*      variant="outlined"*/}
                {/*      onClick={() => alert('Sign in with Google')}*/}
                {/*      startIcon={<GoogleIcon />}*/}
                {/*  >*/}
                {/*    Sign in with Google*/}
                {/*  </Button>*/}
                {/*  <Button*/}
                {/*      fullWidth*/}
                {/*      variant="outlined"*/}
                {/*      onClick={() => alert('Sign in with Facebook')}*/}
                {/*      startIcon={<FacebookIcon />}*/}
                {/*  >*/}
                {/*    Sign in with Facebook*/}
                {/*  </Button>*/}
                <Typography sx={{textAlign: 'center'}}>
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/material-ui/getting-started/templates/sign-in/"
                        variant="body2"
                        sx={{alignSelf: 'center'}}
                    >
                        Sign up
                    </Link>
                </Typography>
            </Box>
        </Card>
    );
};

export default SignInComponent;