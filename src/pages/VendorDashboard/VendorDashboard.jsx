import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import DestinationChart from "../../components/VendorDashboard/DestinationChart";
import MonthwiseChart from "../../components/VendorDashboard/MonthwiseChart";
import OrdersTable from "../../components/VendorDashboard/OrdersTab";
import SourceChart from "../../components/VendorDashboard/SourceChart";
import StatusCharts from "../../components/VendorDashboard/StatusCharts";

export default function VendorDashboard(){
    return(
        <div>
            <OrdersTable />
            <div className="my-20">
                <div className="flex justify-between p-10 mx-20 shadow-xl rounded-xl">
                    <StatusCharts />
                    <MonthwiseChart />
                </div>
                <div className="flex justify-between p-10 mt-8 mx-20 shadow-xl rounded-xl">
                    <SourceChart />
                    <DestinationChart />
                </div>
            </div>
        </div>
    );
}