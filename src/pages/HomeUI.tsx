import { makeStyles, createStyles } from "@material-ui/core";

const LoadingUI = makeStyles(() =>
  createStyles({
    '@global': {
        '*::-webkit-scrollbar': {
            width: '0.5em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.5)',
            borderRadius: 20,
        }
    },
    home: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#d6cdf2'
    },
    content: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
    }
  }),
);

export default LoadingUI;