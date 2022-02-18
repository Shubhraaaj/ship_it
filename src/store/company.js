import { Subject } from 'rxjs';

// An RxJS Subject can act as both an Observable and an Observer at the same time.
const subject = new Subject();

// Object for initial chat state
// const initialState = {
//     status: '',
//     data: [],
//     newDataCount: 0,
//     error: ''
// };

let initialState = {
    vendor_id: '',
    name: '',
    normal_price: '',
    priority_price: '',
    normal_delivery: '',
    priority_delivery: ''
};

let state = initialState;

/* We’ll be subscribing our different React Hooks setState functions to our RxJS Subject
so that when it receives any data, it forwards that data to every state associated 
with our setState function.*/

// init() method that will initialize our component’s state whenever it’s mounted

// we appended our message object to our state.data array, then we incremented our newDataCount

// subscribe method to let me react to state changes
// select method to let me react to a specific state key change
// dispatchAsync method to update state asynchronously

const companyStore = {
    init: () => {
    //   state = {...state, newDataCount: 0}
        state = {...state}
        subject.next(state)
    },
    subscribe: setState => subject.subscribe(setState),
    setCompanyDetails: company => {
      state = company;
      subject.next(state);
    },
    clearCompanyDetails: () => {
      state = initialState;
      subject.next(state);
    },
    initialState
  };
  
export default companyStore;
