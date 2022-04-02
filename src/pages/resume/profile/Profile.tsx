import { Card, CardContent, CardMedia, createStyles, makeStyles, Chip, CardActions, Button } from '@material-ui/core';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Loading from '../../../shared/loading/Loading';
import { storage } from '../../../services/FirebaseService';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        margin: 8,
        maxWidth: 400,
        background: '#1D1D1D',
        color: 'white',
        minHeight: 540
    },
    media: {
        height: 250,
    },
    photoContainer: {
        position: 'relative'
    },
    gradient: {
        position: 'absolute',
        height: 250,
        width: 400,
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
    const { t } = useTranslation();
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
                <div className={classes.photoContainer}>
                    <div className={classes.gradient}></div>
                    <CardMedia
                        className={classes.media}
                        image={photoURL}
                        title="Júlio César"
                    />
                </div>
            }
            <CardContent className={classes.cardContent}>
                <h1 className={classes.name}>{t('PROFILE.NAME')}</h1>
                <h2 className={classes.role}>{t('PROFILE.ROLE')}</h2>
                <h2 className={classes.role}>{t('PROFILE.EXPERIENCE')}</h2>
                <p className={classes.description}>{t('PROFILE.DESCRIPTION')}</p>
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