// import logo from './logo.svg';
// import { BrowserRouter } from 'react-router-dom'
// import VendorLogin from './pages/VendorLogin/VendorLogin';
// import VendorSignup from './pages/VendorSignup/VendorSignup';
// import OrderTracking from './pages/OrderTracking/OrderTracking';
// import SearchDialog from './components/Elements/SearchDialog/SearchDialog';
// import PhoneLogin from './components/Elements/LoginDialogs/PhoneLogin';
// import FillOrderDetails from './pages/FillOrderDetails/FillOrderDetails';
// import SearchBar from './components/VendorCompare/SearchBar/SearchBar';
// import DetailsCard from './components/VendorProfle/DetailsCard';
// import ImageUpload from './components/Elements/ImageUpload/ImageUpload';
// import MultiSelect from './components/VendorProfle/MultiSelect/MultiSelect';
// import TariffChart from './components/VendorProfle/TariffChart/TariffChart';
// import VendorProfile from './pages/VendorProfle/VendorProfile';
// import OrderDetails from './pages/OrderDetails/OrderDetails';
// import VendorCompare from './pages/VendorCompare/VendorCompare';
// import Overlay from './components/Elements/Overlay/Overlay';
// import SearchModal from './components/Elements/SearchDialog/SearchModal';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';

// Apollo client initialisation
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Main from './Main';
import MainMenu from './components/Elements/MainMenu/MainMenu';
import Footer from './components/LandingPage/Footer/Footer';
import { Loading } from './components/Elements/Animation/Loading';
import LoadingPage from './components/Elements/Animation/LoadingPage';
import { useLayoutEffect, useState } from 'react';
import loadingStore from './store/loading';

/* TODO
 * Setup Apollo client for the project
 * Login/Signup API integration
 * Vendor profile creation API
 * Tariff upload
 * State management using RxJs
 */

function App() {
    const [load, setLoad] = useState(loadingStore.initialState);
    
    useLayoutEffect(()=>{
        loadingStore.subscribe(setLoad);
        loadingStore.init();
    },[]);

    return (
        <HashRouter>
            <div className='App'>
                {load.loading && <LoadingPage />} 
                <div className={load.loading?"hidden":""}>
                    <MainMenu />
                    <Main />
                    <Footer />
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
