import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "2%",
    },
    headerButton: {
        color: "white",

        // For hovering
        '&:hover': {
            color: "yellow",
            fontStyle: "italic",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.75rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "2.5rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2.75rem",
        },
    },
    link: {
        textDecoration: "None"
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Link className={classes.link} to="/website/">
                <Button className={classes.headerButton}> About Me </Button>
            </Link>

            <Link className={classes.link} to="/website/project/">
                <Button className={classes.headerButton}> Past Projects </Button>
            </Link>

            <Link className={classes.link} to="/website/work/">
                <Button className={classes.headerButton}> Work Experience </Button>
            </Link>
        </div>
    )
}