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


export default function VendorProfile(){

    const [vendorProfile, setVendorProfile] = useState({});
    const [vendorState, setVendorState] = useState(vendorStore.initialState);

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
                    tariff_chart_id: vendor?.tariff_chart_id,
                    logo: vendor?.logo,
                    service_cities: vendor?.service_cities
                });
            }
        }).catch(err=>console.log(err));
    },[vendorState]);

    useLayoutEffect(()=>{
        vendorStore.subscribe(setVendorState);
        vendorStore.init();
    },[]);

    const [image, setImage] = useState();
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
        console.log('text update',value);
        setVendorProfile({ ...vendorProfile, 
            address: value.address, 
            email: value.email, 
            name: value.name, 
            phone_number: value.phone_number, 
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
        const base64excel = await getBase64(vendorProfile.tariff_chart_id);
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
        const base64excel = await getBase64(vendorProfile.tariff_chart_id);
        console.log(base64excel);
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

    const handleSubmit = async() => {
        // console.log('test', data.getVendorProfile.tariff_chart_id==="");
        console.log('data', data);
        console.log('vendor', vendorProfile);
        // if(data.getVendorProfile.tariff_chart_id==="")
        //     uploadTariff();
        // else
        // updateTariff();
    };

    const uploadVendorDetails = async (id) => {
        const base64logo = await getBase64(vendorProfile.logo);
        const updatedProfile = {
            vendor_id: vendorState.vendor_id,
            name: vendorProfile.name,
            phone_number: vendorProfile.phone_number,
            email: vendorProfile.email,
            service_cities: vendorProfile.service_cities,
            logo: base64logo,
            tariff_chart_id: id
        };
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