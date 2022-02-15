import { gql } from "@apollo/client";

export const GET_VENDOR_PROFILE = gql `
  query getVendorProfile($id:String!){
    getVendorProfile(id:$id){
      name
      email
      phone_number
    }
  }`;

