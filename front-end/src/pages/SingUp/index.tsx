import React, { useState } from 'react';
import { validate } from 'email-validator';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Body, Button, Form, Input } from './styled';
import singUpUser from '../../services/singUpUser';
import getUser from '../../services/getUser';
import { login } from '../../redux/reduces/user';

function Index() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createUser = async () => {
    const userResponse = await singUpUser({ ...user });

    if (userResponse.response) return window.alert(userResponse.response.data.payload);

    const userData = await getUser(userResponse);

    dispatch(login({ ...userData, token: userResponse.token, isLoged: true }));

    return navigate('/');
  };

  return (
    <Body>
      <Form>
        <Input
          type="text"
          placeholder="Name"
          onChange={({ target }) =>
            setUser((prev) => ({
              ...prev,
              name: target.value,
            }))
          }
        />
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
          type="email"
          placeholder="Number"
          onChange={({ target }) =>
            setUser((prev) => ({
              ...prev,
              number: target.value,
            }))
          }
        />
        <Input
          type="password"
          placeholder="Min password 8 digits"
          onChange={({ target }) =>
            setUser((prev) => ({
              ...prev,
              password: target.value,
            }))
          }
        />
        <Button
          type="button"
          disabled={!(validate(user.email) && user.name.length > 4 && user.password.length > 6)}
          onClick={createUser}
        >
          Create an account
        </Button>
      </Form>
    </Body>
  );
}

export default Index;
