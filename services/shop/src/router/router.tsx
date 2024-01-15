import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/components/App';
import { LazyShop } from '@/pages/Shop';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyShop />
          </Suspense>
        ),
      },
      {
        path: '/shop/second',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <div>SHOP SECOND</div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
