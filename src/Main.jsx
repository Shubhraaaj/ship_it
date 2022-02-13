import VendorProfile from './pages/VendorProfle/VendorProfile';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import VendorLogin from './pages/VendorLogin/VendorLogin';
import VendorSignup from './pages/VendorSignup/VendorSignup';
import OrderTracking from './pages/OrderTracking/OrderTracking';
import VendorCompare from './pages/VendorCompare/VendorCompare';
import FillOrderDetails from './pages/FillOrderDetails/FillOrderDetails';
import SearchModal from './components/Elements/SearchDialog/SearchModal';
import Overlay from './components/Elements/Overlay/Overlay';
import VendorDashboard from './pages/VendorDashboard/VendorDashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';

export default function Main(){
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/vendor_profile" element={<VendorProfile />} />
            <Route path="/order_details" element={<OrderDetails />} />
            <Route path="/vendor_login" element={<VendorLogin />} />
            <Route path="/vendor_signup" element={<VendorSignup />} />
            <Route path="/order_tracking" element={<OrderTracking />} />
            <Route path="/vendor_compare" element={<VendorCompare />} />
            <Route path="/fill_order" element={<FillOrderDetails />} />
            <Route path="/search" element={<SearchModal />} />
            <Route path="/user_auth" element={<Overlay />} />
            <Route path="/find_vendors" element={<VendorCompare />} />
            <Route path="/vendor_dashboard" element={<VendorDashboard />} />
        </Routes>
    );
}