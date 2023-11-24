import endpoints from "../endpoints";

const getUsersApi = process.env.REACT_APP_API_BASE_URL + endpoints.main;

export { getUsersApi };
