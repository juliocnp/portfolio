import { Avatar, Card, CardHeader, CardMedia, createStyles, makeStyles, Theme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import './ResumeComponent.scss';
import { storage } from '../../services/FirebaseService';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import Loading from '../../shared/loading/Loading';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: 8,
        maxWidth: 345,
    },
    media: {
        height: 200, // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
  }),
);

function ResumeComponent() {
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
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="Júlio César" className={classes.avatar}>
                        J
                    </Avatar>
                    }
                    title="Júlio César Nunes de Paula"
                    subheader="Analista de software"
                />
                <Loading loading={loading} />
               {photoURL &&
                    <CardMedia
                        className={classes.media}
                        image={photoURL}
                        title="Júlio César"
                    />}
            </Card>
        </div>
    )
}
export default ResumeComponent;