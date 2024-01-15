import { App } from '@/components/App';
import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyAbout } from '@/pages/About';

const routes = [
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        path: '/admin/main',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            {/* Используем lazy версию компонента это помогает оптимизировать загрузки чанков */}
            {/* Примечание: если необходимо использование React.lazy нельзя экспортировать 
            и/или использовать не lazy версию компонента. */}
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: '/admin/second',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <div>ADMIN SECOND</div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
