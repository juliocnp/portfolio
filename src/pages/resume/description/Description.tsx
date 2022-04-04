import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { storage } from "../../../services/FirebaseService";
import Loading from "../../../shared/loading/Loading";
import DescriptionUI from "./DescriptionUI";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useTheme, useMediaQuery } from "@material-ui/core";

function DescriptionComponent() {
    const { t } = useTranslation();
    const classes = DescriptionUI();
    const [loading, setLoading] = useState<boolean>(false);
    const [pucLogoURL, setPucLogoURL] = useState<string>();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        setLoading(true);
        const storagePucLogoRef = ref(storage, 'PucMinas.png');
        getDownloadURL(storagePucLogoRef)
            .then(data => {
                setPucLogoURL(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return (
        <div className={classes.pageContainer}>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: '#adadad' }} />} >
                    <h3>{t("DEGREE.TITLE")}</h3>
                </AccordionSummary>
                <AccordionDetails className={classes.degreeContainer}>
                    {matches && 
                        <div className={classes.pucMinasLogo}>
                            <Loading loading={loading} color='#ffffff' />
                            {pucLogoURL &&
                                <img src={pucLogoURL} className={classes.pucMinasLogo} alt="Pucminas logo"></img>}
                        </div>
                    }
                    <div className={classes.degreeInfo}>
                        <p>{t("DEGREE.PUC_NAME")}</p>
                        <p>{t("DEGREE.DEGREE")}</p>
                        <p>{t("DEGREE.INFO")}</p>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon  style={{ color: '#adadad' }}/>} >
                    <h3>teste do teste cabeçalho</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <p>pois é mané</p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default DescriptionComponent;