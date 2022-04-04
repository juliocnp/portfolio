import { makeStyles, createStyles } from "@material-ui/core";

const ProfileUI = makeStyles(() =>
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
        position: 'relative',
        height: 250
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

export default ProfileUI;