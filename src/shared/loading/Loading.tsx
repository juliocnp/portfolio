import ClimbingBoxLoader from "react-spinners//ClimbingBoxLoader";
import './Loading.scss';

function Loading(props: any) {
    return (
        <div className={props.loading && "loading-container"}>
            {props.loading && (
                <ClimbingBoxLoader loading={props.loading} />
            )}
        </div>
    )
}

export default Loading;