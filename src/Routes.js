import Container from './Container';

import HelloPage from './pages/Hello';
import ByePage from './pages/Bye';


export default [
  {
    component: Container,
    routes: [
      {
        path: '/hello/:name',
        component: HelloPage,
      },
      {
        path: '/bye/:name',
        component: ByePage
      },
      {
        /* Not Found */
        component: _ =>'Not Found!'
      }
    ]
  }
];