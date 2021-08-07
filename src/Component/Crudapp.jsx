import { Box, Typography, makeStyles } from '@material-ui/core';
import s1 from '../Assets/Images/s1.PNG';
import s2 from '../Assets/Images/s2.PNG';

const useStyles = makeStyles({
    component: {
        textAlign: 'center',
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const Crudapp = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">CRUD Application in React</Typography>
            <Box style={{ display: 'flex' }}>
                <img src={s2} className={classes.image} />
                <img src={s1} className={classes.image} />
            </Box>
        </Box>
    )
}

export default Crudapp;