import { makeStyles } from '@material-ui/core/styles';
import Header from "../Header_Bar/header"

const useStyles = makeStyles((theme) => ({

}));

export default function Project() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <Header />
        </div>
    )
}