import './App.css';
import Mainheader from './containers/Mainheader';
import Router from './Route';
import { StoreProvider } from './StoreContext';

const App = () => {
  return (
    <StoreProvider>
      <Mainheader
        title={'Store Front Application'}
        backgroundColor={'#2a9d8f'}
      />
      <Router />
    </StoreProvider>
  );
};

export default App;
