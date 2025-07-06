const weatherEmojiMap: Record<string, string> = {
  맑음: '☀️',
  '구름 조금': '🌤️',
  '드문드문 구름': '⛅',
  '구름 많음': '🌥️',
  흐림: '☁️',
  '약한 비': '🌦️',
  '보통 비': '🌧️',
  '강한 비': '⛈️',
  '약한 눈': '🌨️',
  눈: '❄️',
  안개: '🌫️',
  천둥번개: '🌩️',
};

export function getWeatherEmoji(weather?: string) {
  return weather && weatherEmojiMap[weather] ? weatherEmojiMap[weather] : '';
}
