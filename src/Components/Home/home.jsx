import "../../Global/global.css"

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    aboutMe: {
        color: "white",
        width: "40%",
        marginLeft: "auto",
        marginRight: "auto",
        overflowWrap: "break-word",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.75rem",
            padding: "5%",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "3rem",
            padding: "5%",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
            padding: "3%",
        },
    },
    title: {
        color: "#009cda",
        fontWeight: "bold",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "3rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "3rem",
        },
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <h1 className={classes.title}>Welcome to my website</h1>
            <div className={classes.aboutMe}>
                My name is Rick Lan, a 4th year computer science student at UofT.
                My passion in computer science lies mainly in web dev.
                Outside of school, my hobbies include playing card and board games as well as jogging.
            </div>
        </div>
    )
}