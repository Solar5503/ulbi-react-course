import PostIdPage from '../pages/PostIdPage';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import Login from '../pages/Login';

export const privateRoutes = [
  { path: '/about', component: About },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostIdPage },
  { path: '/error', component: Error },
];

export const publicRoutes = [{ path: '/login', component: Login }];
