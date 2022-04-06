import axios, { AxiosResponse } from 'axios';

const get = async <T>(query: string) => {
  const res: AxiosResponse<T> = await axios.get(
    `http://localhost:3001${query}`
  );
  return res.data;
};

export default {
  get,
};
