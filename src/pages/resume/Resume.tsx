import { useMediaQuery, useTheme } from '@material-ui/core';
import DescriptionComponent from './description/Description';
import ProfileComponent from './profile/Profile';
import ResumeUI from './ResumeUI';

function ResumeComponent() {
    const classes = ResumeUI();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <div className={matches ? classes.container : (classes.container, classes.column)}>
            <ProfileComponent/>
            <DescriptionComponent />
        </div>
    )
}
export default ResumeComponent;