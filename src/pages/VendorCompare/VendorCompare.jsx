import SearchBar from "../../components/VendorCompare/SearchBar/SearchBar";
import VendorTable from "../../components/VendorCompare/VendorTable/VendorTable";


export default function VendorCompare(){

    return(
        <div className="bg-red-50 py-4">
            <SearchBar />
            <VendorTable />
        </div>
    );
}