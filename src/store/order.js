import { Subject } from 'rxjs';

const subject = new Subject();

let initialState = {
    order_id: '',
    pickup_date_time: '',
    sender: '',
    receiver: '',
    tracking_id: '',
    vendor_id: '',
    name: '',
    priority: '',
    type: '',
    order_no: '',
    amount: '',
    source_city: '',
    destination_city: '',
    live_status: '',
    order_status: '',
    weight: '',
    weight_unit: ''
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
