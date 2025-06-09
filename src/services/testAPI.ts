import axios from 'axios';

export const testAPI = async () => {
  const testAPI = `{사용할 API 주소}`;
  const reponse = await axios.get(testAPI);
  return reponse;
};
