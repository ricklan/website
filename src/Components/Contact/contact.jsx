import "../../Global/global.css"

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    contact: {
        color: "white",
        position: "relative",
        left: 0,
        bottom: 0,
        width: "100%",
        marginTop: "5%"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        marginTop: "0",
        marginBottom: "0",
        color: "#009cda",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "4rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "4rem",
        },
    },
    footerSocialMedia: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    socialMedia: {
        color: "white",
        "&:hover": {
            color: "blue"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "2rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "2.5rem",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "3.5rem"
        },
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.contact}>
            <div className={classes.title}>Contact Me</div>
            <div className={classes.footerSocialMedia}>
                <Button>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/rick-lan-00832b1a7/" target="_blank">
                        <LinkedInIcon className={classes.socialMedia} id="Linkedin"></LinkedInIcon>
                    </a>
                </Button>

                <Button>
                    <a href="mailto: ricklan_blue@hotmail.com">
                        <EmailIcon className={classes.socialMedia}></EmailIcon>
                    </a>
                </Button>

                <Button>
                    <a rel="noreferrer" href="https://github.com/RLQYL" target="_blank">
                        <GitHubIcon className={classes.socialMedia}></GitHubIcon>
                    </a>
                </Button>
            </div>
        </div >
    )
}