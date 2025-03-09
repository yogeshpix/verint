import './App.css';
import Mainheader from './containers/Mainheader';
import Router from './Route';
import { StoreProvider } from './StoreContext';

const App = () => {
  return (
    <StoreProvider>
      <Mainheader
        title={'Store Front Application'}
        backgroundColor={'var(--primary-color)'}
      />
      <Router />
    </StoreProvider>
  );
};

export default App;
