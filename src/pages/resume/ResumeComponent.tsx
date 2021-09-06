import { Card, CardContent, CardMedia, createStyles, makeStyles, Theme, Chip } from '@material-ui/core';
import './ResumeComponent.scss';
import { storage } from '../../services/FirebaseService';
import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import Loading from '../../shared/loading/Loading';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        margin: 8,
        maxWidth: 400,
        minWidth: 400,
        background: '#1D1D1D',
        color: 'white'
    },
    media: {
        height: 250, // 16:9
    },
    gradient: {
        position: 'absolute',
        height: 250,
        width: 400,
        background: 'linear-gradient(0deg, rgba(29,29,29,1) 0%, rgba(29,29,29,0) 50%)'
    },
    name: {
        fontSize: 28
    },
    description: {
        fontSize: 14
    },
    tags: {
        color: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexFlow: 'wrap',
    }
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
                <CardContent>
                    <h1 className={classes.name}>Júlio César Nunes de Paula</h1>
                    <h2 className={classes.description}>Desenvolvedor líder fullstack - 3 anos de experiência</h2>
                    <p>Acredito que com trabalho em equipe, uma boa metodologia e uma boa arquitetura, podemos entregar soluções incríveis.</p>
                    <div className={classes.tags}>
                        <Chip label='.Net' variant="outlined" color="primary" />
                        <Chip label='React' variant="outlined" color="primary" />
                        <Chip label='React Native' variant="outlined" color="primary" />
                        <Chip label='Angular' variant="outlined" color="primary" />
                        <Chip label='SQL Server' variant="outlined" color="primary" />
                        <Chip label='Azure' variant="outlined" color="primary" />
                        <Chip label='SCRUM' variant="outlined" color="primary" />
                        <Chip label='Inglês' variant="outlined" color="primary" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default ResumeComponent;