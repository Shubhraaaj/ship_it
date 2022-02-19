import { Subject } from 'rxjs';

const subject = new Subject();

let initialState = {
    order_id: '',
    pickup: '',
    sender_details: {
        name: '',
        address: '',
        phone: '',
        state: '',
        pincode: ''
    },
    receiver_details: {
        name: '',
        address: '',
        phone: '',
        state: '',
        pincode: ''
    },
    tracking_no: '',
    vendor_id: '',
    vendor_name: '',
    order_type: '',
    parcel_type: '',
    order_no: '',
    amount: '',
    source: '',
    destination: '',
    date: '',
    live_status: '',
};

let state = initialState;

const orderStore = {
    init: () => {
    //   state = {...state, newDataCount: 0}
        state = {...state}
        subject.next(state)
    },
    subscribe: setState => subject.subscribe(setState),
    setOrder: order => {
      state = order;
      subject.next(state);
    },
    clearOrder: () => {
      state = initialState;
      subject.next(state);
    },
    initialState
  };
  
export default orderStore;
