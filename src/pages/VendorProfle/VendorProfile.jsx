import ImageUpload from "../../components/Elements/ImageUpload/ImageUpload";
import DetailsCard from "../../components/VendorProfle/DetailsCard";
import MultiSelect from "../../components/VendorProfle/MultiSelect/MultiSelect";
import TariffChart from "../../components/VendorProfle/TariffChart/TariffChart";
import MainMenu from "../../components/Elements/Header/MainMenu";

export default function VendorProfile(){
    return(
        <div className="flex flex-col h-1/2 bg-red-50">
            <MainMenu />
            <div className="grid grid-cols-2 my-8">
                <div className="flex flex-col mx-20 ">
                    <ImageUpload className="flex-1"/>
                    <MultiSelect className="flex-1"/>
                    <TariffChart className="flex-1"/>
                </div>
                <div className="mx-20 mb-4">
                    <DetailsCard  className="mx-auto"/>
                    <button type="button" className="bg-red-500 w-full my-8 py-3 rounded-xl text-white font-medium">SAVE DETAILS</button>
                </div>
            </div>  
        </div>
    );
}