import axios from 'axios';

export const testAPI = async () => {
  const testAPI = `{사용할 API 주소}`;
  const response = await axios.get(testAPI);
  return response;
};
