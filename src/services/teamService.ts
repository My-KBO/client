import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE_URL;

const fetchTeamData = async (teamName: string, endpoint: string) => {
  const response = await axios.get(
    `${API_BASE}/api/v1/teams/${teamName}/${endpoint}`,
  );
  return response.data;
};

export const getTeamSchedule = (teamName: string) =>
  fetchTeamData(teamName, 'schedule');

export const getTeamRecord = (teamName: string) =>
  fetchTeamData(teamName, 'results');

export const getTeamPlayer = (teamName: string) =>
  fetchTeamData(teamName, 'topplayers');

export const getTeamNews = (teamName: string) =>
  fetchTeamData(teamName, 'news');

export const getTeamHighlight = (teamName: string) =>
  fetchTeamData(teamName, 'highlight');
