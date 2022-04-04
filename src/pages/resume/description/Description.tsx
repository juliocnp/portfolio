import { Card, CardContent } from "@material-ui/core";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { storage } from "../../../services/FirebaseService";
import Loading from "../../../shared/loading/Loading";
import DescriptionUI from "./DescriptionUI";

function DescriptionComponent() {
    const { t } = useTranslation();
    const classes = DescriptionUI();
    const [loading, setLoading] = useState<boolean>(false);
    const [pucLogoURL, setPucLogoURL] = useState<string>();
    
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
            <Card className={classes.degreeCard}>
                <CardContent className={classes.degreeContainer}>
                    <div className={classes.pucMinasLogo}>
                        <Loading loading={loading} color='#ffffff'/>
                        {pucLogoURL && 
                            <img src={pucLogoURL} className={classes.pucMinasLogo} alt="Pucminas logo"></img>}
                    </div>
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