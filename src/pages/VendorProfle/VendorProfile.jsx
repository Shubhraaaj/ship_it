import ImageUpload from "../../components/Elements/ImageUpload/ImageUpload";
import DetailsCard from "../../components/VendorProfle/DetailsCard";
import MultiSelect from "../../components/VendorProfle/MultiSelect/MultiSelect";
import TariffChart from "../../components/VendorProfle/TariffChart/TariffChart";
import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import { useEffect, useLayoutEffect, useState } from "react";
import { TARIFFCHART_UPDATE, TARIFFCHART_UPLOAD, UPDATE_PROFILE } from "../../graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";
import vendorStore from "../../store/vendor";
import { GET_VENDOR_PROFILE } from "../../graphql/queries";


export default function VendorProfile(){

    const [vendorProfile, setVendorProfile] = useState({});
    const [vendorState, setVendorState] = useState(vendorStore.initialState);

    // API Mutations
    const [updateProfile, {datas,loadings,errors}] = useMutation(UPDATE_PROFILE);
    const [uploadTariffChart, {datat, loadingt, errort}] = useMutation(TARIFFCHART_UPLOAD);
    const [updateTariffChart, {datac, loadingc, errorc}] = useMutation(TARIFFCHART_UPDATE);

    // API Queries
    const { loading, error, data } = useQuery(GET_VENDOR_PROFILE, {
        variables: {
            id: vendorState.vendor_id
        }
    });

    useEffect(()=>{
        setVendorProfile({...vendorProfile, 
            email: data?.getVendorProfile.email, 
            name: data?.getVendorProfile.name, 
            phone_number: data?.getVendorProfile.phone_number 
        });
    },[data]);

    useLayoutEffect(()=>{
        vendorStore.subscribe(setVendorState);
        vendorStore.init();
    },[]);

    const [image, setImage] = useState();
    const logoChange = (value) => {
        setVendorProfile({ ...vendorProfile, logo: value });
    };

    const tariffChart = (value) => {
        setVendorProfile({ ...vendorProfile, tariffChart: value });
    };

    const operatingCities = (value) => {
        setVendorProfile({ ...vendorProfile, operatingCities: value.map((city)=>city.label) });
    };

    const details = (value) => {
        setVendorProfile({ ...vendorProfile, 
            address: value.address, 
            email: value.email, 
            organisation: value.organisation, 
            phone: value.phone, 
            website: value.website
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
        const base64excel = await getBase64(vendorProfile.tariffChart[0]);
        const tariffObj = {
            tariff: base64excel,
            vendor_id: vendorState.vendor_id
        }
        uploadTariffChart({
            variables: {
                createTariffChartInput: tariffObj
            }
        }).then(res=>{
            uploadVendorDetails(res.data.uploadTariffChart.id);
        }).catch(err=>console.log(err));
    }

    const updateTariff = async () => {
        const base64excel = await getBase64(vendorProfile.tariffChart[0]);
        const tariffObj = {
            tariff: base64excel,
            vendor_id: vendorState.vendor_id
        }
        updateTariffChart({
            variables: {
                createTariffChartInput: tariffObj
            }
        }).then(res=>{
            const id = res.data.updateTariffChart.id;
            uploadVendorDetails(id);
        }).catch(err=>console.log(err));
    }

    const handleSubmit = () => {
        console.log(vendorState);
        updateTariff();
    };

    const uploadVendorDetails = async (id) => {
        const base64logo = await getBase64(vendorProfile.logo[0]);
        const updatedProfile = {
            vendor_id: vendorState.vendor_id,
            name: vendorProfile.organisation,
            phone_number: vendorProfile.phone,
            email: vendorProfile.email,
            service_cities: vendorProfile.operatingCities,
            logo: base64logo
        };
        console.log(updatedProfile);
        updateProfile({
            variables: { 
                updateVendorInput: updatedProfile
            }
        }).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    };

    return(
        <div className="flex flex-col h-1/2 bg-red-50">
            <form noValidate className="grid grid-cols-2 my-8">
                <div className="flex flex-col mx-20 ">
                    <ImageUpload className="flex-1" onUpdate={logoChange} />
                    <MultiSelect className="flex-1" onUpdate={operatingCities} />
                    <TariffChart className="flex-1" onUpdate={tariffChart} />
                </div>
                <div className="mx-20 mb-4">
                    <DetailsCard  className="mx-auto" onUpdate={details} profile={vendorProfile}/>
                    <button type="button" onClick={handleSubmit} className="bg-red-500 w-full my-8 py-3 rounded-xl text-white font-medium">SAVE DETAILS</button>
                </div>
            </form>
        </div>
    );
}