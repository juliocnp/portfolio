import { makeStyles, createStyles } from "@material-ui/core";

const ProfileUI = makeStyles(() =>
  createStyles({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    column: {
        flexDirection: 'column',
    }
  }),
);

export default ProfileUI;