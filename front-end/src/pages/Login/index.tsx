import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validate } from 'email-validator';
import { useDispatch } from 'react-redux';
import { Body, Button, Form, Input } from './styled';
import loginUser from '../../services/loginUser';
import getUser from '../../services/getUser';
import { login } from '../../redux/reduces/user';

function Index() {
  const [user, setUser] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginU = async () => {
    const usertoken = await loginUser({ ...user });
    if (usertoken.message) return window.alert(usertoken.message);

    const userData = await getUser(usertoken);

    dispatch(login({ ...userData, token: usertoken.token, isLoged: true }));
    return navigate('/');
  };

  return (
    <Body>
      <Form>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={({ target }) =>
            setUser((prev) => ({
              ...prev,
              email: target.value,
            }))
          }
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={({ target }) =>
            setUser((prev) => ({
              ...prev,
              password: target.value,
            }))
          }
        />
        <Button
          isDisabled={!(validate(user.email) && user.password.length > 6)}
          type="button"
          disabled={!(validate(user.email) && user.password.length > 6)}
          onClick={() => {
            loginU();
          }}
        >
          Login
        </Button>
      </Form>
    </Body>
  );
}

export default Index;
