import { makeStyles, createStyles, Card, CardContent } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import PucMinasLogo from './../../../util/images/PucMinas.png';

const useStyles = makeStyles(() =>
  createStyles({
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: 8,
        gap: 8
    },
    degreeCard: {
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

function DescriptionComponent() {
    const { t } = useTranslation();
    const classes = useStyles();
    
    return (
        <div className={classes.pageContainer}>
            <Card className={classes.degreeCard}>
                <CardContent className={classes.degreeContainer}>
                    <img src={PucMinasLogo} className={classes.pucMinasLogo} alt="Pucminas logo"></img>
                    <div className={classes.degreeInfo}>
                        <h3>{t("DEGREE.TITLE")}</h3>
                        <p>{t("DEGREE.PUC_NAME")}</p>
                        <p>{t("DEGREE.DEGREE")}</p>
                    </div>
                </CardContent>
            </Card>
            <Card className={classes.degreeContainer}>
                <CardContent>
                    <span>TAS CERTO ZE?</span>
                </CardContent>
            </Card>
        </div>
    )
}
export default DescriptionComponent;