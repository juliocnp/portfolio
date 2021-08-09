import { IconButton } from "@material-ui/core";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';
import i18next from "i18next";
import { useState } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import { useTranslation } from "react-i18next";
import './MenuComponent.scss';
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SidebarContent, SubMenu, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';

function MenuComponent() {
    const { t } = useTranslation();
    const [collapsedMenu, setCollapsedMenu] = useState(false);

    const toggleMenuClick = () => {
      setCollapsedMenu(!collapsedMenu);
    }
  
    const changeLanguage = (language: string) => {
      i18next.changeLanguage(language, (err: any, t: (arg0: string) => void) => {
        if (err) return console.log('something went wrong loading', err);
        t('key'); // -> same as i18next.t
      });
    }

    return (
        <ProSidebar
        collapsed={collapsedMenu}>
        <SidebarHeader>
          <div className="menu-content">
            { !collapsedMenu && (
              <FavoriteIcon />
            )}
            { !collapsedMenu && (
              <span className="welcome">{t('HOME.WELCOME')}</span>
            )}
            <IconButton aria-label="toggle menu" className="toggle-button" onClick={toggleMenuClick}>
              <MenuIcon style={{ color: '#adadad' }}/>
            </IconButton>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<AssignmentIndIcon />}><Link to="/">{t('HOME.RESUME')}</Link></MenuItem>
            <MenuItem icon={<WebAssetIcon />}><Link to="/demos">{t('HOME.DEMOS')}</Link></MenuItem>
            <MenuItem icon={<GitHubIcon />}><Link to="/codes">{t('HOME.GITHUB')}</Link></MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <SubMenu title={t('HOME.LANGUAGE')} icon={<LanguageIcon />}>
              <MenuItem onClick={() => changeLanguage('en')}>{t('HOME.ENGLISH')}</MenuItem>
              <MenuItem onClick={() => changeLanguage('pt')}>{t('HOME.PORTUGUESE')}</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    )
}
export default MenuComponent;