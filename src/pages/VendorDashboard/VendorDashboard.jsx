import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import DestinationChart from "../../components/VendorDashboard/DestinationChart";
import MonthwiseChart from "../../components/VendorDashboard/MonthwiseChart";
import OrdersTable from "../../components/VendorDashboard/OrdersTab";
import SourceChart from "../../components/VendorDashboard/SourceChart";
import StatusCharts from "../../components/VendorDashboard/StatusCharts";

export default function VendorDashboard(){
    return(
        <div>
            {/* <MainMenu /> */}
            <OrdersTable />
            <StatusCharts />
            <MonthwiseChart />
            <SourceChart />
            <DestinationChart />
        </div>
    );
}