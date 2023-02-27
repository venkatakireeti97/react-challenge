import Photos from "./Components/Photos";
import { Provider } from 'react-redux' 
import store from "./Components/PhotosList";
const App = () => {
  return (
    <Provider store={store}> 

    <div>
      <Photos />
    </div>
    </Provider>
  );
};

export default App;
