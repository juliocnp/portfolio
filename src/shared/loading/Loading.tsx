import ClimbingBoxLoader from "react-spinners//ClimbingBoxLoader";
import './Loading.scss';

function Loading(props: any) {
    return (
        <div>
            <span>{props.loading}</span>
            {props.loading && (
                <div className="loading-container">
                    <ClimbingBoxLoader loading={props.loading} />
                </div>
            )}
        </div>
    )
}

export default Loading;