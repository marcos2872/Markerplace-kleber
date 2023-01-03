import api from '../api/index';

const loginUser = async (objUser: { email: string; password: string }) => {
  try {
    const userData = await api.post('singin', objUser);

    return { ...userData.data.payload };
  } catch (err) {
    return { message: 'Email or password incorrect' };
  }
};

export default loginUser;
