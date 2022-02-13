import ImageUpload from "../../components/Elements/ImageUpload/ImageUpload";
import DetailsCard from "../../components/VendorProfle/DetailsCard";
import MultiSelect from "../../components/VendorProfle/MultiSelect/MultiSelect";
import TariffChart from "../../components/VendorProfle/TariffChart/TariffChart";
import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import { useState } from "react";
import { TARIFFCHART_UPLOAD, UPDATE_PROFILE } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";


export default function VendorProfile(){

    const [vendorProfile, setVendorProfile] = useState({});
    const [updateProfile, { dataP, loadingP, errorP }] = useMutation(UPDATE_PROFILE);
    const [uploadTariffChart, { data, loading, error }] = useMutation(TARIFFCHART_UPLOAD);

    const [image, setImage] = useState();
    const logoChange = (value) => {
        setVendorProfile({ ...vendorProfile, logo: value });
    };

    const tariffChart = (value) => {
        setVendorProfile({ ...vendorProfile, tariffChart: value });
    };

    const operatingCities = (value) => {
        console.log(value.map((city)=>console.log(city.label)));
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
        const base64excel = getBase64(vendorProfile.tariffChart[0]);
        const tariffObj = {
            tariff: base64excel,
            vendor_id: "123452"
        }
        uploadTariffChart({
            variables: {
                createTariffChartInput: tariffObj
            }
        }).then(res=>console.log(res)).catch(err=>console.log(err));
    }

    const handleSubmit = () => {
        uploadTariff();
        const base64logo = getBase64(vendorProfile.logo[0]);
        const updatedProfile = {
            vendor_id: "",
            name: vendorProfile.organisation,
            phone_number: vendorProfile.phone,
            email: vendorProfile.email,
            service_cities: vendorProfile.operatingCities,
            logo: base64logo,
            tariff_chart_id: vendorProfile.tariffChart
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
                    <DetailsCard  className="mx-auto" onUpdate={details} />
                    <button type="button" onClick={handleSubmit} className="bg-red-500 w-full my-8 py-3 rounded-xl text-white font-medium">SAVE DETAILS</button>
                </div>
            </form>
        </div>
    );
}