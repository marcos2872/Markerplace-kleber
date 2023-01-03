import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyled from './globalStyle';
import Home from './pages/Home';
import Login from './pages/Login/index';
import SingUp from './pages/SingUp/index';
import VehiclesAdd from './pages/VehiclesAdd/index';
import VehiclesEdit from './pages/VehiclesEdit/index';
import Vehicle from './pages/Vehicle/index';
import store from './redux/store';
import './AppCss.css';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/vehiclesadd" element={<VehiclesAdd />} />
          <Route path="/vehiclesedit" element={<VehiclesEdit />} />
          <Route path="/vehicle/:id" element={<Vehicle />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
