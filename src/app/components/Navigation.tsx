import { createStyles, makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import logo from '../../images/PP-logo.png';
import { DrawerComponent } from './Drawer';
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { AuthContext } from '../../context/AuthContext';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DoorBackIcon from '@mui/icons-material/DoorBack';

const useStyles = makeStyles(() => createStyles({

    toolbar: {
        justifyContent: 'space-between',
        background: '#ffffff'
    },

    logo: {
        flexGrow: 'initial',
        cursor: 'pointer',
        maxHeight: '50px',
        paddingTop: '3px',
        width: 'auto',
        imageRendering: 'crisp-edges',
    },

}));

export const Navigation: React.FunctionComponent = () => {

    const classes = useStyles();
    const user = useContext(AuthContext);
    const [mouserover, setMouseOver] = useState(false);

    return (
        <AppBar position='sticky'>
            <CssBaseline />
            <Toolbar className={classes.toolbar}>

                <Link to="/" >
                    <img className={classes.logo} src={logo} alt="logo" />
                </Link>
                {user ?
                    <Link to="/login">
                        <PersonIcon fontSize='large' />
                    </Link> :
                    <Link to="/login">
                        <div onMouseLeave={() => { setMouseOver(false) }} onMouseEnter={() => { setMouseOver(true) }}>
                            {mouserover ? <MeetingRoomIcon fontSize='large' /> : <DoorBackIcon fontSize='large' />}

                        </div>
                    </Link>
                }

                <DrawerComponent />
            </Toolbar>
        </AppBar >
    );
}