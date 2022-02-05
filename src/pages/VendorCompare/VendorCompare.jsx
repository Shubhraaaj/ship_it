import MainMenu from "../../components/Elements/Header/MainMenu";
import SearchBar from "../../components/VendorCompare/SearchBar/SearchBar";

export default function VendorCompare(){
    return(
        <div>
            <MainMenu isWhite/>
            <SearchBar />
        </div>
    );
}