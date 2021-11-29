import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';

const useStyles = makeStyles(() =>
    createStyles({
        link: {
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
        },
        icon: {
            color: "white"
        },
        drawer: {
            marginTop: '64px',
            padding: '15px'
        },
    })
);

export const DrawerComponent: React.FunctionComponent = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const classes = useStyles();

    const CloseDrawer = () => {
        setOpenDrawer(false)
    }

    return (
        <Fragment>
            <Drawer
                open={openDrawer}
                onClose={CloseDrawer}
                anchor={'right'}
                classes={{ paper: classes.drawer }}
            >
                <List>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/"><HomeIcon /> Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/about"><InfoOutlinedIcon /> About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/login"><LockOpenOutlinedIcon /> Login</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/contactsUs">< PhoneInTalkOutlinedIcon /> Contact us</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <Link className={classes.link} to="/tickets"> <BugReportOutlinedIcon /> Tickets</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </Fragment>
    );
}