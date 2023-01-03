import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';
import {
  Button,
  Header,
  Input,
  ButtonAnchor,
  SearchBar,
  MenuOptions,
  ButtonsMenu,
  Label,
  User,
} from './styled';
import SearchIcon from '../../images/search.png';
import MenuIcon from '../../images/menu.png';
import EntrarIcon from '../../images/enter.png';
import VehiclesIcon from '../../images/vehicles.png';
import HomeIcons from '../../images/home.png';

type userType = {
  isLoged: boolean;
  id: string;
  name: string;
  email: string;
  root: boolean;
  token: boolean;
};

const userRoot = import.meta.env.VITE_APP_USER_ROOT;

function Index() {
  const [drawer, setDrawer] = useState(false);

  const use = useSelector(({ user }: { user: userType }) => user);

  const navigate = useNavigate();

  return (
    <Header>
      <SearchBar>
        <ButtonAnchor type="image" src={MenuIcon} onClick={() => setDrawer((prev) => !prev)} />
        <Input placeholder="Search" />
        <Button type="image" src={SearchIcon} />
      </SearchBar>
      <Drawer anchor="top" open={drawer} onClose={() => setDrawer(false)} className="flex w-1">
        <MenuOptions onClick={() => setDrawer(false)} onKeyDown={() => setDrawer(false)}>
          <Label>
            Home
            <ButtonsMenu type="image" src={HomeIcons} onClick={() => navigate('/')} />
          </Label>
          <User>
            {use.isLoged ? (
              <Label>{use.name}</Label>
            ) : (
              <>
                <Label>
                  SingIn
                  <ButtonsMenu type="image" src={EntrarIcon} onClick={() => navigate('/login')} />
                </Label>
                <Label>
                  SingUp
                  <ButtonsMenu type="image" src={EntrarIcon} onClick={() => navigate('/singup')} />
                </Label>
              </>
            )}
          </User>
          {use.id === userRoot && (
            <Label>
              vehicles
              <ButtonsMenu
                type="image"
                src={VehiclesIcon}
                onClick={() => navigate('/vehiclesadd')}
              />
            </Label>
          )}
        </MenuOptions>
      </Drawer>
    </Header>
  );
}

export default Index;
