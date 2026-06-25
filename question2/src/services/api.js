import axios from "axios";

const API = axios.create({
  baseURL: "http://4.224.186.213/evaluation-service",
  headers: {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2IwMWEwNTkwQHN2ZWN3LmVkdS5pbiIsImV4cCI6MTc4MjM4MzIwNywiaWF0IjoxNzgyMzgyMzA3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNjkzOTg5NmUtMGRjZi00N2ZlLTk5ZjMtZTc0ZGZlOTJlNGZhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFyc2hpdGhhIGtoYW5kYXZhbGxpIiwic3ViIjoiZmFjZjUwODQtMTFiZi00OWM5LWI3ZDAtODY3MWQ1MjZhNDRjIn0sImVtYWlsIjoiMjNiMDFhMDU5MEBzdmVjdy5lZHUuaW4iLCJuYW1lIjoidmFyc2hpdGhhIGtoYW5kYXZhbGxpIiwicm9sbE5vIjoiMjNiMDFhMDU5MCIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImZhY2Y1MDg0LTExYmYtNDljOS1iN2QwLTg2NzFkNTI2YTQ0YyIsImNsaWVudFNlY3JldCI6IlBuUkdzYUJOTkZodmRZeXUifQ.hSFUDS8Z4xSYCVa9nJZ6t6u5rmAKd3yUAG-fuaSwRrM",
    Authorization: "Bearer ",
    "Content-Type": "application/json",
  },
});

// Get Notifications
export const getNotifications = async (
  page = 1,
  limit = 10,
  notificationType = ""
) => {
  let url = `/notifications?page=${page}&limit=${limit}`;

  if (notificationType) {
    url += `&notification_type=${notificationType}`;
  }

  const response = await API.get(url);
  return response.data;
};