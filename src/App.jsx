import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import VendorLogin from './pages/VendorLogin/VendorLogin';
import VendorSignup from './pages/VendorSignup/VendorSignup';
import OrderTracking from './pages/OrderTracking/OrderTracking';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <VendorLogin /> */}
      {/* <VendorSignup /> */}
      <OrderTracking />
    </div>
  );
}

export default App;
