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