import ClimbingBoxLoader from "react-spinners//ClimbingBoxLoader";
import './Loading.scss';

function Loading(props: any) {
    return (
        props.loading && (
            <div className="loading-container">
            <ClimbingBoxLoader loading={props.loading} color={props.color} />
            </div>
        )
    )
}

export default Loading;