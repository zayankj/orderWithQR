import { Outlet } from "react-router-dom";
import Navbar from "./features/ui/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
