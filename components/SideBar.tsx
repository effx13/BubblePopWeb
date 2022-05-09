import { AccountCircleRounded } from '@mui/icons-material';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { drawer } from 'states';

const SideBar = () => {
  const router = useRouter();
  const [isDrawer, setDrawer] = useRecoilState(drawer);
  const changeTab = (tab: string) => {
    router.push(tab);
    setDrawer(false);
  };
  return (
    <SwipeableDrawer
      anchor="left"
      open={isDrawer}
      onClose={() => {
        setDrawer(false);
      }}
      onOpen={() => {
        setDrawer(true);
      }}>
      <List>
        <ListItemButton onClick={() => changeTab('/')}>
          <ListItemIcon>
            <HomeRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="홈" />
        </ListItemButton>
        <ListItemButton onClick={() => changeTab('/profile')}>
          <ListItemIcon>
            <AccountCircleRounded />
          </ListItemIcon>
          <ListItemText primary="프로필" />
        </ListItemButton>
        <ListItemButton onClick={() => changeTab('/queue')}>
          <ListItemIcon>
            <FactCheckRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="대기열" />
        </ListItemButton>
        <ListItemButton onClick={() => changeTab('/history')}>
          <ListItemIcon>
            <HistoryRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="플레이 기록" />
        </ListItemButton>
      </List>
    </SwipeableDrawer>
  );
};

export default SideBar;
