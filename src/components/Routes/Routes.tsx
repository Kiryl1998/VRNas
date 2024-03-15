import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utility/routes';
import Home from '../screens/Home/Home';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
