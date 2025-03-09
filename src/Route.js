import { useEffect, useState } from 'react';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import HomePage from './pages/HomePage';

const Router = () => {
  const [route, setRoute] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(path);
  };

  let PageComponent;
  if (route.startsWith('/checkout/')) {
    PageComponent = (
      <Checkout itemId={route.split('/')[2]} navigate={navigate} />
    );
  } else if (route.startsWith('/confirmation/')) {
    PageComponent = (
      <Confirmation
        orderId={route.split('/')[2]}
        itemId={route.split('/')[3]}
        navigate={navigate}
      />
    );
  } else {
    PageComponent = <HomePage navigate={navigate} />;
  }

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return <>{PageComponent}</>;
};

export default Router;
