import ImageUpload from "../../components/Elements/ImageUpload/ImageUpload";
import DetailsCard from "../../components/VendorProfle/DetailsCard";
import MultiSelect from "../../components/VendorProfle/MultiSelect/MultiSelect";
import TariffChart from "../../components/VendorProfle/TariffChart/TariffChart";
import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import { useEffect, useLayoutEffect, useState } from "react";
import { TARIFFCHART_UPDATE, TARIFFCHART_UPLOAD, UPDATE_PROFILE } from "../../graphql/mutations";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import vendorStore from "../../store/vendor";
import { GET_VENDOR_PROFILE } from "../../graphql/queries";
import loadingStore from "../../store/loading";


export default function VendorProfile(){

    const [vendorProfile, setVendorProfile] = useState({});
    const [vendorState, setVendorState] = useState(vendorStore.initialState);
    const [stat, setStat] = useState("");
    const [defaultImg, setDefaultImg] = useState("");

    // API Mutations
    const [updateProfile, {datas,loadings,errors}] = useMutation(UPDATE_PROFILE);
    const [uploadTariffChart, {datat, loadingt, errort}] = useMutation(TARIFFCHART_UPLOAD);
    const [updateTariffChart, {datac, loadingc, errorc}] = useMutation(TARIFFCHART_UPDATE);

    // API Queries
    const [getVendorProfile, { loading, error, data }] = useLazyQuery(GET_VENDOR_PROFILE, {
        variables: {
            id: vendorState.vendor_id
        }
    });

    // Fetch priority

    useEffect(()=>{
        getVendorProfile().then(res=>{
            const vendor = res?.data?.getVendorProfile;
            if(vendor!==null)
            {
                setVendorProfile({
                    name: vendor?.name,
                    email: vendor?.email,
                    phone_number: vendor?.phone_number,
                    address: vendor?.address,
                    website: vendor?.website,
                    // tariff_chart_id: vendor?.tariff_chart_id,
                    priority_factor: vendor?.tariff_chart_id,
                    logo: vendor?.logo,
                    service_cities: vendor?.service_cities
                });
                setDefaultImg(vendor?.logo);
            }
        }).catch(err=>{
            // console.log(err);
        });
    },[vendorState]);

    useLayoutEffect(()=>{
        vendorStore.subscribe(setVendorState);
        vendorStore.init();
        // console.log('check',localStorage.getItem('token'));
    },[]);

    const logoChange = (value) => {
        setVendorProfile({ ...vendorProfile, logo: value[0] });
    };

    const tariffChart = (value) => {
        setVendorProfile({ ...vendorProfile, tariff_chart_id: value[0] });
    };

    const operatingCities = (value) => {
        setVendorProfile({ ...vendorProfile, service_cities: value.map((city)=>city.label) });
    };

    const details = (value) => {
        setVendorProfile({ ...vendorProfile, 
            address: value.address, 
            email: value.email, 
            name: value.name, 
            phone_number: value.phone_number, 
            website: value.website,
            priority_factor: value.priority_factor
        });
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const uploadTariff = async () => {
        const base64excel = await getBase64(vendorProfile.tariff_chart_id);
        const tariffObj = {
            tariff: base64excel,
            vendor_id: vendorState.vendor_id,
            priority_factor: parseFloat(vendorProfile.priority_factor)
        };
        uploadTariffChart({
            variables: {
                createTariffChartInput: tariffObj
            }
        }).then(res=>{
            uploadVendorDetails(res.data.uploadTariffChart.id);
        }).catch(err=>{
            // console.log(err);
        }).finally(()=>{
            loadingStore.setLoading({loading: false});
        });
    }

    const updateTariff = async () => {
        const base64excel = await getBase64(vendorProfile.tariff_chart_id);
        const tariffObj = {
            tariff: base64excel.split(",")[1],
            vendor_id: vendorState.vendor_id,
            priority_factor: parseFloat(vendorProfile.priority_factor)
        }
        updateTariffChart({
            variables: {
                createTariffChartInput: tariffObj
            }
        }).then(res=>{
            const id = res.data.updateTariffChart.id;
            uploadVendorDetails(id);
        }).catch(err=>{
            // console.log(err);
        }).finally(()=>{
            loadingStore.setLoading({loading: false});
        });
    }

    const handleSubmit = async() => {
        // console.log('vendor', vendorProfile);
        loadingStore.setLoading({loading: true});
        uploadTariff().then(res=>{
            if(res===undefined){
                updateTariff();
            }
        });
    };

    const uploadVendorDetails = async (id) => {
        let base64logo = "";
        if(defaultImg!==vendorProfile.logo)
            base64logo = await getBase64(vendorProfile.logo);
        else
            base64logo = defaultImg;
        const updatedProfile = {
            vendor_id: vendorState.vendor_id,
            name: vendorProfile.name,
            phone_number: vendorProfile.phone_number,
            email: vendorProfile.email,
            service_cities: vendorProfile.service_cities,
            address: vendorProfile.address,
            website: vendorProfile.website,
            logo: base64logo,
            tariff_chart_id: id
        };
        updateProfile({
            variables: { 
                updateVendorInput: updatedProfile
            }
        }).then(res=>{
            setStat("Profile updated");
        }).catch(err=>{
            setStat("Profile update failed");
        });
    };

    return(
        <div className="flex flex-col h-1/2 bg-red-50">
            {stat.length>0 && <p className="text-red-500 font-medium">{stat}</p>}
            <form noValidate className="grid grid-cols-2 my-8">
                <div className="flex flex-col mx-20 ">
                    <ImageUpload className="flex-1" image={vendorProfile?.logo} onUpdate={logoChange} />
                    <MultiSelect className="flex-1"  service_cities={vendorProfile?.service_cities} onUpdate={operatingCities} />
                    <TariffChart className="flex-1" chart={vendorProfile?.tariff_chart_id} onUpdate={tariffChart} />
                </div>
                <div className="mx-20 mb-4">
                    <DetailsCard  className="mx-auto" onUpdate={details} profile={vendorProfile}/>
                    <button type="button" onClick={handleSubmit} className="bg-red-500 w-full my-8 py-3 rounded-xl text-white font-medium">SAVE DETAILS</button>
                </div>
            </form>
        </div>
    );
}