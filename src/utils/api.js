/* eslint-disable quote-props */
import { BASE_URL, TOKEN_KEY, TOKEN_VALUE } from './constants';

localStorage.setItem(TOKEN_KEY, TOKEN_VALUE.CHIEF);

export const TOKEN = localStorage.getItem(TOKEN_KEY);

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  const error = new Error(`Request failed with status: ${res.status}`);
  return Promise.reject(error);
}

export function request(endpoint, options) {
  const baseUrl = `${BASE_URL}${endpoint}`;
  return fetch(baseUrl, options)
    .then((res) => checkResponse(res));
}

export const getUserInfo = (authToken) => request('/user-info/current-user', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${authToken}`,
  },
});

export const getEmployees = () => request('/employees', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${TOKEN}`,
  },
});

export const getIdpInfo = (authToken) => request('/employee/my-idp', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${authToken}`,
  },
});

export const createEmployeeIpd = (data) => request('/idps/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${TOKEN}`,
  },
  body: JSON.stringify(data),
});

export const getEmployeesWithoutIdp = () => request('/employees-without-idp/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${TOKEN}`,
  },
});

export const getEmployeeIdp = (id) => request(`/idps/${id}/`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${TOKEN}`,
  },
});

export const editEmployeeIdp = (data, id) => request(`/idps/${id}/`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${TOKEN}`,
  },
  body: JSON.stringify(data),
});

export const createComments = (data, goal_id, authToken) => request(`/goals/${goal_id}/comments/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${authToken}`,
  },
  body: JSON.stringify(data),
});
