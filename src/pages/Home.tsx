import './Home.scss';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <div className="Home">
      <ProSidebar>
        <SidebarHeader>
          {t('Welcome to React')}
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<AccountBalanceWalletIcon />}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<AccessibleForwardIcon />}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          teste
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Home;
