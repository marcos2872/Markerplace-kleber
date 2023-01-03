import api from '../api/index';

const getUser = async ({ token }: { token: string }) => {
  try {
    const headers = {
      authorization: token,
    };
    const userData = await api.get('user', { headers });

    return { ...userData.data.payload, isLoged: true };
  } catch (err) {
    return { message: 'Email or password incorrect' };
  }
};

export default getUser;
