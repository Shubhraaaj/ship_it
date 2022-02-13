import OrdersTable from "./OrdersTable";

export default function OrdersTab(){
    
    return(
        <div className="rounded-lg shadow-lg mx-20 my-12">
            <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0" id="tabs-tab"
                role="tablist">
                <li className="nav-item" role="presentation">
                    <a href="#tabs-pending" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        bg-red-200
                        uppercase
                        border-x-0 border-t-0 border-b-2 border-transparent
                        px-6
                        py-3
                        hover:border-transparent hover:bg-gray-100
                        focus:border-transparent
                        active
                    " id="tabs-pending-tab" data-bs-toggle="pill" data-bs-target="#tabs-pending" role="tab" aria-controls="tabs-pending"
                    aria-selected="true">Pending</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-accepted" className="
                    nav-link
                    block
                    font-medium
                    text-xs
                    leading-tight
                    bg-gray-200
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                    " id="tabs-accepted-tab" data-bs-toggle="pill" data-bs-target="#tabs-accepted" role="tab"
                    aria-controls="tabs-accepted" aria-selected="false">Ongoing</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-completed" className="
                    nav-link
                    block
                    font-medium
                    text-xs
                    leading-tight
                    bg-gray-200
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-6
                    py-3
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                    " id="tabs-completed-tab" data-bs-toggle="pill" data-bs-target="#tabs-completed" role="tab"
                    aria-controls="tabs-completed" aria-selected="false">Completed</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a href="#tabs-rejected" className="
                        nav-link
                        block
                        font-medium
                        text-xs
                        leading-tight
                        bg-gray-200
                        uppercase
                        border-x-0 border-t-0 border-b-2 border-transparent
                        px-6
                        py-3
                        hover:border-transparent hover:bg-gray-100
                        focus:border-transparent
                    " id="tabs-rejected-tab" data-bs-toggle="pill" data-bs-target="#tabs-rejected" role="tab"
                    aria-controls="tabs-rejected" aria-selected="false">Rejected</a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContent">
                <div className="tab-pane fade show active" id="tabs-pending" role="tabpanel" aria-labelledby="tabs-pending-tab">
                    <OrdersTable />
                </div>
                <div className="tab-pane hidden fade" id="tabs-accepted" role="tabpanel" aria-labelledby="tabs-accepted-tab">
                    <OrdersTable />
                </div>
                <div className="tab-pane hidden fade" id="tabs-completed" role="tabpanel" aria-labelledby="tabs-completed-tab">
                    <OrdersTable />
                </div>
                <div className="tab-pane hidden fade" id="tabs-rejected" role="tabpanel" aria-labelledby="tabs-rejected-tab">
                    <OrdersTable />
                </div>
            </div>
        </div>
    );
}