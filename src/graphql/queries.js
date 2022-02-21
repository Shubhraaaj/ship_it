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
  query getOrders($status:String!){
    getOrders(status:$status){
      order_id
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
  query getAllVendors($type: String!, $weight: Float!, $destCity: String!, $srcCity: String!){
    getAllVendors(type: $type, weight: $weight, destCity: $destCity, srcCity: $srcCity){
      vendor_id
      name
      amount
    }
  }
`;

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