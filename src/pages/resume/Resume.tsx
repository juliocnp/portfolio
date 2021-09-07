import { useMediaQuery, useTheme } from '@material-ui/core';
import DescriptionComponent from './description/Description';
import ProfileComponent from './profile/Profile';
import './Resume.scss';

function ResumeComponent() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <div className={matches ? 'container' : 'container column'}>
            <ProfileComponent/>
            <DescriptionComponent />
        </div>
    )
}
export default ResumeComponent;