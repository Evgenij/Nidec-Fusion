import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Menu from "./components/ui/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
      <Menu/>
    </BrowserRouter>
  );
}

export default App;
