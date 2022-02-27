import { gql } from "@apollo/client";

export const GET_VENDOR_PROFILE = gql `
  query getVendorProfile($id: String!){
    getVendorProfile(id:$id){
      name
      email
      phone_number
      logo
      vendor_id
      tariff_chart_id
      service_cities
      address
      website
    }
  }`;

export const VERIFY_OTP = gql `
  query verifyUserOtp($otp: Float!, $email: String!){
    verifyUserOtp(otp:$otp, email: $email){
      id
      email
      otp
    }
  }`;

export const FETCH_ORDERS = gql `
  query getOrders($vendor_id: String!, $status:String!){
    getOrders(vendor_id: $vendor_id, status:$status){
      order_id
      order_no
      live_status
      source_city
      destination_city
      type
      amount
      priority
      order_status
    }
  }
`;

export const FETCH_VENDORS = gql `
  query getAllVendors($vendorQueryInput: VendorQueryInput!){
    getAllVendors(vendorQueryInput: $vendorQueryInput){
      result
      total_elements
    }
  }`;

export const FETCH_ORDER_BY_TID = gql`
  query trackOrderByTrackId($id: String!){
    trackOrderByTrackId(id: $id){
      amount
      order_id
      order_no
      live_status
      receiver
      sender
      order_status
      vendor_id
      weight
      type
      priority
      destination_city
      source_city
      pickup_date_time
      tracking_id
    }
  }`;

export const GET_METRICS = gql `
  query getOrdersMatrix($vendor_id: String!, $filterDate: Float!){
    getOrdersMatrix(vendor_id: $vendor_id, filterDate: $filterDate){
      topDestCities
      monthwiseOrders
      numberOfOrdersByStatus
      topSourceCities
    }
  }
`;