import { useState } from "react";
import CompletedOrdersTable from "./CompletedOrdersTable";
import OngoingOrdersTable from "./OngoingOrdersTable";
import PendingOrdersTable from "./PendingOrdersTable";
import RejectedOrdersTable from "./RejectedOrdersTable";

export default function OrdersTab(){
    const [tab, setTab] = useState("tabs-pending-tab");

    const handleClick = (e) => {
        const id = e.target.id;
        if(id==="tabs-pending-tab"){
            setTab("tabs-pending-tab");
        }
        else if(id==="tabs-accepted-tab"){
            setTab("tabs-accepted-tab");
        }
        else if(id==="tabs-completed-tab"){
            setTab("tabs-completed-tab");
        }
        else if(id==="tabs-rejected-tab"){
            setTab("tabs-rejected-tab");
        }
    };

    return(
        <div className="rounded-lg shadow-lg mx-20 my-12">
            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tab"
                role="tablist">
                <li className="nav-item" role="presentation">
                    <button onClick={handleClick} 
                    className={(tab==="tabs-pending-tab"?"bg-red-200":"bg-gray-200")+" nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-red-200 focus:border-transparent active"} 
                        id="tabs-pending-tab">
                            Pending</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={handleClick} 
                        className={(tab==="tabs-accepted-tab"?"bg-red-200":"bg-gray-200")+" nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-red-200 focus:border-transparent active"}  
                        id="tabs-accepted-tab">
                            Ongoing
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={handleClick} 
                        className={(tab==="tabs-completed-tab"?"bg-red-200":"bg-gray-200")+" nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-red-200 focus:border-transparent active"}  
                        id="tabs-completed-tab">
                            Completed
                        </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button onClick={handleClick} 
                        className={(tab==="tabs-rejected-tab"?"bg-red-200":"bg-gray-200")+" nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-red-200 focus:border-transparent active"}  
                        id="tabs-rejected-tab">
                            Rejected
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <div className="" id="tabs-pending" role="tabpanel" aria-labelledby="tabs-pending-tab">
                    {tab==="tabs-pending-tab"&&<PendingOrdersTable />}
                    {tab==="tabs-accepted-tab"&&<OngoingOrdersTable />}
                    {tab==="tabs-completed-tab"&&<CompletedOrdersTable />}
                    {tab==="tabs-rejected-tab"&&<RejectedOrdersTable />}
                </div>
            </div>
        </div>
    );
}