import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import VendorLogin from './pages/VendorLogin/VendorLogin';
import VendorSignup from './pages/VendorSignup/VendorSignup';
import OrderTracking from './pages/OrderTracking/OrderTracking';
import SearchDialog from './components/Elements/SearchDialog/SearchDialog';
import PhoneLogin from './components/Elements/LoginDialogs/PhoneLogin';
import FillOrderDetails from './pages/FillOrderDetails/FillOrderDetails';
import SearchBar from './components/VendorCompare/SearchBar/SearchBar';
import DetailsCard from './components/VendorProfle/DetailsCard';
import ImageUpload from './components/Elements/ImageUpload/ImageUpload';
import MultiSelect from './components/VendorProfle/MultiSelect/MultiSelect';
import TariffChart from './components/VendorProfle/TariffChart/TariffChart';
import VendorProfile from './pages/VendorProfle/VendorProfile';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import VendorCompare from './pages/VendorCompare/VendorCompare';

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <SearchDialog /> */}
      {/* <PhoneLogin /> */}

      {/* <VendorProfile /> */}
      {/* <OrderDetails /> */}
      {/* <VendorLogin /> */}
      {/* <VendorSignup /> */}
      {/* <OrderTracking /> */}
      {/* <VendorCompare /> */}
      {/* <FillOrderDetails /> */}
    </div>
  );
}

export default App;
