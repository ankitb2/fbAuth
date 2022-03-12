import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideDrawerV1 from './SideDrawer/SideDrawerV1';
import store from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SideDrawerV1 />
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
