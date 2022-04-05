import ClimbingBoxLoader from "react-spinners//ClimbingBoxLoader";
import LoadingUI from "./LoadingUI";

function Loading(props: any) {
    const classes = LoadingUI();
    return (
        props.loading && (
            <div className={classes.loadingContainer}>
                <ClimbingBoxLoader loading={props.loading} color={props.color} />
            </div>
        )
    )
}

export default Loading;