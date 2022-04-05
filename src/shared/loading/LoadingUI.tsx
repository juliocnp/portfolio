import { makeStyles, createStyles } from "@material-ui/core";

const LoadingUI = makeStyles(() =>
  createStyles({
    loadingContainer: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  }),
);

export default LoadingUI;