import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface IAxiosPost {
  url: string;
  data?: IRegUser;
  config?: AxiosRequestConfig;
}

interface IRegUser {
  name: string;
  email: string;
  password: string;
  storeName: string;
}

// interface ILoginUser {
//   email: string;
//   password: string;
// }

function registerUser(user: IRegUser): Promise<any> {
  return axios({
    url: '/user/',
    method: 'post',
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
      storeName: user.storeName,
    },
  });
}

// function loginUser(loginUser: ILoginUser): Promise {
//   return axios.post('/user/login', {
//     email: loginUser.email,
//     password: loginUser.password,
//   });
// }

// function logoutUser() {
//   return axios.post('/user/logout');
// }

export default { registerUser };
