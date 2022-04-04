import { makeStyles, createStyles } from "@material-ui/core";

const ProfileUI = makeStyles(() =>
  createStyles({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    column: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
  }),
);

export default ProfileUI;