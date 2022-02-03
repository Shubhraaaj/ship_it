import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import VendorLogin from './pages/VendorLogin/VendorLogin';
import VendorSignup from './pages/VendorSignup/VendorSignup';
import OrderTracking from './pages/OrderTracking/OrderTracking';
import SearchDialog from './components/Elements/SearchDialog/SearchDialog';
import PhoneLogin from './components/Elements/LoginDialogs/PhoneLogin';
import FillOrderDetails from './pages/FillOrderDetails/FillOrderDetails';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <VendorLogin /> */}
      {/* <VendorSignup /> */}
      {/* <OrderTracking /> */}
      {/* <SearchDialog /> */}
      {/* <PhoneLogin /> */}
      <FillOrderDetails />
    </div>
  );
}

export default App;
