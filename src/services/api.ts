import axios from 'axios';

const api = axios.create({ baseURL: 'https://piupiuwer.polijrinternal.com' });

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc4MjcyMzksImV4cCI6MTY2NzkxMzYzOSwic3ViIjoiMDhlNWJlOGQtMzIyNS00ODE2LWEzNmYtZDM5OTkwYTExZWJhIn0.OIXOXgC7uphBIx50MLigqgaolbQv49hRsgMl-ES2HjU';

(api.defaults.headers as any).Authorization = `Bearer ${token}`;

export default api;
