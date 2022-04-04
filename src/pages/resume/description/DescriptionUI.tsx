import { makeStyles, createStyles } from "@material-ui/core";

const DescriptionUI = makeStyles(() =>
  createStyles({
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: 8,
        gap: 8
    },
    accordion: {
        color: 'white',
        backgroundColor: '#1D1D1D',
    },
    degreeContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
    },
    degreeInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4
    },
    pucMinasLogo: {
        width: 115,
        height: 100
    }
  }),
);

export default DescriptionUI;