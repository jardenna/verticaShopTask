import { createBrowserRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Layout from './layout/Layout';
import AllProducts from './pages/AllProducts';
import Electronics from './pages/Electronics';
import ErrorPage from './pages/errorPage/ErrorPage';
import Home from './pages/Home';
import Jewelery from './pages/Jewelery';
import Men from './pages/Men';
import Women from './pages/Women';
import { LeftNavPath, MainPath } from './types/enums';

const productPaths = [
  LeftNavPath.AllProducts,
  LeftNavPath.Men,
  LeftNavPath.Women,
  LeftNavPath.Jewelery,
  LeftNavPath.Electronics,
];

const productDetailRoutes = productPaths.map((path) => ({
  path: `${path}/:id`,
  element: <ProductDetail />,
}));

const routeConfig = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: MainPath.Root,
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: LeftNavPath.AllProducts,
        element: <AllProducts />,
      },
      {
        path: LeftNavPath.Men,
        element: <Men />,
      },
      {
        path: LeftNavPath.Women,
        element: <Women />,
      },
      {
        path: LeftNavPath.Jewelery,
        element: <Jewelery />,
      },
      {
        path: LeftNavPath.Electronics,
        element: <Electronics />,
      },
      ...productDetailRoutes,
    ],
  },
]);

export default routeConfig;
