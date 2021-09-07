import { Card, CardContent, CardMedia, createStyles, makeStyles, Theme, Chip, CardActions, Button } from '@material-ui/core';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Loading from '../../../shared/loading/Loading';
import { storage } from '../../../services/FirebaseService';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: 8,
        maxWidth: 400,
        background: '#1D1D1D',
        color: 'white'
    },
    media: {
        height: 250,
    },
    gradient: {
        position: 'absolute',
        height: 250,
        // width: 400,
        maxWidth: 400,
        background: 'linear-gradient(0deg, rgba(29,29,29,1) 0%, rgba(29,29,29,0) 50%)'
    },
    name: {
        fontSize: '180%',
    },
    role: {
        fontSize: '120%',
    },
    description: {
        fontSize: '100%',
    },
    tags: {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'wrap',
    },
    tagsMargin: {
        margin: 4,
    },
    contactButton: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    iconMargin: {
        marginLeft: 8,
    },
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    cardContent: {
        height: 'calc(100% - 336px)',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column'
    }
  }),
);

function ProfileComponent() {
    const classes = useStyles();
    const [photoURL, setPhotoURL] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const storageRef = ref(storage, 'JulioAgosto.png');
        getDownloadURL(storageRef)
            .then(data => {
                setPhotoURL(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return (
        <Card className={classes.root}>
            <Loading loading={loading} />
            {photoURL &&
                <div>
                    <div className={classes.gradient}></div>
                    <CardMedia
                        className={classes.media}
                        image={photoURL}
                        title="Júlio César"
                    />
                </div>
            }
            <CardContent className={classes.cardContent}>
                <h1 className={classes.name}>Júlio César Nunes de Paula</h1>
                <h2 className={classes.role}>Desenvolvedor líder fullstack</h2>
                <h2 className={classes.role}>3 anos de experiência</h2>
                <p className={classes.description}>Creio em equipe alinhada, metodologias ágeis e arquiteturas elegantes para a construção de soluções magistrais.</p>
                <div className={classes.tags}>
                    <Chip label='.Net' variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label='React' variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label='Angular' variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label='SQL Server' variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label='Azure' variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label='SCRUM' variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label='Inglês' variant="outlined" color="primary" className={classes.tagsMargin} />
                </div>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" className={classes.contactButton}>
                    Contate-me! 
                    <SendIcon className={classes.iconMargin} />
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProfileComponent;