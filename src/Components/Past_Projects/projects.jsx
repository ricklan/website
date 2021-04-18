import { makeStyles } from '@material-ui/core/styles';

import "../../Global/global.css"

const useStyles = makeStyles((theme) => ({
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
    project: {
        backgroundColor: "white",
        overflowWrap: "break-word",
        color: "lightblue",
        fontWeight: "bold",
        textAlign: "center",
        width: "35%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "5%",
        borderRadius: "10px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "3rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "3rem",
        },
    },
    time: {
        color: "black",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "2rem",
        },
    }
}));

export default function Project() {

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <p className={classes.title}> Here are some of my projects </p>
            <div className={classes.project}>
                Personal Website
                <div className={classes.time}>April 2021 - Present</div>
            </div>

            <div className={classes.project}>
                The Cafe
                <div className={classes.time}>Jan 2021 - April 2021</div>
            </div>

            <div className={classes.project}>
                Sudoku Solver
                <div className={classes.time}>Jan 2021</div>
            </div>

            <div className={classes.project}>
                SportsCred
                <div className={classes.time}>Sep 2020 - Dec 2020</div>
            </div>

            <div className={classes.project}>
                Notes Website
                <div className={classes.time}>Sep 2017 - Present</div>
            </div>
        </div>
    )
}