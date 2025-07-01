import axios from 'axios';

export const getTeamSchedule = async (teamId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/api/v1/baseball/teams/${teamId}/schedule`,
  );
  return response.data;
};
