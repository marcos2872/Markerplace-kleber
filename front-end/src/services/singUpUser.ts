import api from '../api/index';

type singUpData = {
  name: string;
  email: string;
  number: string;
  password: string;
};

const singUpUser = async (objUser: singUpData) => {
  try {
    const userData = await api.post('singup', objUser);

    return { ...userData.data.payload };
  } catch (err) {
    return err;
  }
};

export default singUpUser;
