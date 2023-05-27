import { Routes, Route } from 'react-router-dom'
import MainRoute from "./MainRoute";
import Grid from "./components/Grid";
import Layout from './Layouts'
import { Admin, AdminOrders, Landing, Cart, Login, Register } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<MainRoute />}>
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Products" element={<Grid />} />
            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/adminOrders" element={<AdminOrders />}></Route>
          </Route>
          <Route path="/" element={<Landing />}></Route>
          <Route exact path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
