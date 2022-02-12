import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import OrdersTable from "../../components/VendorDashboard/OrdersTab";

export default function VendorDashboard(){
    return(
        <div>
            <MainMenu />
            <OrdersTable />
        </div>
    );
}