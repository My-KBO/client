import axios from 'axios';

export const getTeamSchedule = async (teamName: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/teams/${teamName}/schedule`,
  );
  return response.data;
};

export const getTeamRecord = async (teamName: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/teams/${teamName}/results`,
  );
  return response.data;
};

export const getTeamPlayer = async (teamName: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/teams/${teamName}/topplayers`,
  );
  return response.data;
};
