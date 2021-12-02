import { Card, CardHeader, Typography, CardContent, Box, Grid, TextField, Button, Container } from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import { updatePassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { style } from "typestyle";
import { auth } from "../../firebaseSetup";

const ChangePass: React.FunctionComponent = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const user = useContext(AuthContext);
    let history = useHistory();

    const classNames = {

        mainDiv: style({
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
        }),

        header: style({
            background: '#101010'
        }),

        title: style({
            color: '#fff'
        }),
    }

    const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user) {
            console.log(newPassword)
            user.updatePassword(newPassword).then(() => {
                console.log('success')
                history.push('/')
            }).catch((error) => {
                console.error(error)
            });
        }

    }

    return (
        <div className={classNames.mainDiv}>
            <Card sx={{ maxWidth: 600, maxHeight: 600 }}>

                <CardHeader
                    className={classNames.header}
                    title={
                        <Typography className={classNames.title} component="h1" variant="h5">
                            Change password
                        </Typography>
                    } />

                <CardContent>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.target.value)}
                                    id="password"
                                    label="Password"
                                    name="password"
                                    autoComplete="password"
                                    color='primary'
                                />
                            </Grid>
                        </Grid>

                        <Container>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        onClick={(e: any) => handleChangePassword(e)}
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, mr: 3 }}
                                    >
                                        submit
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        href="/login"
                                        color="secondary"
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid>
                        </Container>

                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}

export default ChangePass