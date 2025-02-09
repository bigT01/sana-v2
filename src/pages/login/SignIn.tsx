
import React, { useState } from 'react';
import '../../App.css';
import {CssBaseline, styled} from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import AppTheme from "../../theme/AppTheme";
import ColorModeSelect from "../../theme/ColorModeSelect";

const Card = styled(MuiCard)(({ theme }) => ({
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
  
  const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      backgroundImage:
          'radial-gradient(ellipse at 50% 50%, hsl(250, 89%, 93%), hsl(220, 43%, 97%))',
      backgroundRepeat: 'no-repeat',
      ...theme.applyStyles('dark', {
        backgroundImage:
            'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
      }),
    },
  }));

const SignIn = (props: { disableCustomTheme?: boolean }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        console.log({
        email, password
        });
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
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
            <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <Card variant="outlined">
                {/*<SitemarkIcon />*/}
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
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
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <TextField
                        error={emailError}
                        helperText={emailErrorMessage}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        id="username"
                        type="text"
                        name="text"
                        placeholder="Steve"
                        autoComplete="username"
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
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                {/*<ForgotPassword open={open} handleClose={handleClose} />*/}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={validateInputs}
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
                <Typography sx={{ textAlign: 'center' }}>
                    Don&apos;t have an account?{' '}
                    <Link
                        href="/material-ui/getting-started/templates/sign-in/"
                        variant="body2"
                        sx={{ alignSelf: 'center' }}
                    >
                    Sign up
                    </Link>
                </Typography>
                </Box>
            </Card>
            </SignInContainer>
        </AppTheme>
    );
}

export default SignIn