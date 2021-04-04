import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "2%",
    },
    headerButton: {
        color: "white",
        // For hovering
        '&:hover': {
            color: "red",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1.5rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
        },
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Button className={classes.headerButton}> About Me </Button>
            <Button className={classes.headerButton}> Work Experience </Button>
            <Button className={classes.headerButton}> Past Projects </Button>
            <Button className={classes.headerButton}> Contact Information </Button>
        </div>
    )
}