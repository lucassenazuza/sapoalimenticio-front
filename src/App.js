

import './App.css';
import 'bulma/css/bulma.min.css';

import AppRoutes from './AppRoutes';



function App() {
 
  const stylesGlobal={font:"Lato", fontSize:"20px"}
  return (
      <div style={stylesGlobal}>
        <AppRoutes />
      </div>

  );
}

export default App;
