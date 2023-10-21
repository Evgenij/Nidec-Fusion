import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Menu from "./components/ui/Menu/Menu";
import { Menubar } from 'primereact/menubar';

const App = () => {

  return (
    <BrowserRouter>
      <AppRouter/>
      <Menu/>
    </BrowserRouter>
  );
}

export default App;
