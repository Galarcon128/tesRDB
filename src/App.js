import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div>
      {`conectado a ${process.env.REACT_APP_WEB_SERVICE_URL}`}
    </div>
  )
};

export default App;
