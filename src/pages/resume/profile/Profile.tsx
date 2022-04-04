import { Card, CardContent, CardMedia, Chip, CardActions, Button } from '@material-ui/core';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Loading from '../../../shared/loading/Loading';
import { storage } from '../../../services/FirebaseService';
import { useTranslation } from "react-i18next";
import ProfileUI from './ProfileUI';



function ProfileComponent() {
    const { t } = useTranslation();
    const classes = ProfileUI();
    const [photoURL, setPhotoURL] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const storagePhotoRef = ref(storage, 'JulioAgosto.png');
        getDownloadURL(storagePhotoRef)
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
            <div className={classes.photoContainer}>
                <div className={classes.gradient}></div>
                    <Loading loading={loading} color='#ffffff' />
                    {photoURL &&
                        <CardMedia
                            className={classes.media}
                            image={photoURL}
                            title="Júlio César"
                        />
                    }
                </div>
            <CardContent className={classes.cardContent}>
                <h1 className={classes.name}>{t('PROFILE.NAME')}</h1>
                <h2 className={classes.role}>{t('PROFILE.ROLE')}</h2>
                <h2 className={classes.role}>{t('PROFILE.EXPERIENCE')}</h2>
                <p className={classes.description}>{t('PROFILE.DESCRIPTION')}</p>
                <div className={classes.tags}>
                    <Chip label={t('PROFILE.NET')} variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label={t('PROFILE.REACT')} variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label={t('PROFILE.ANGULAR')} variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label={t('PROFILE.SQLSERVER')} variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label={t('PROFILE.AZURE')} variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label={t('PROFILE.SCRUM')} variant="outlined" color="primary" className={classes.tagsMargin} />
                    <Chip label={t('PROFILE.ENGLISH')} variant="outlined" color="primary" className={classes.tagsMargin} />
                </div>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" className={classes.contactButton}>
                    {t('PROFILE.CONTACT')}
                    <SendIcon className={classes.iconMargin} />
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProfileComponent;