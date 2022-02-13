import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const GET_VENDOR_PROFILE = (vendor_id) => gql `query{
    getVendorProfile(id:${vendor_id}){
      vendor_id
      name
      email
      phone_number
      email
      password
      logo
      phone_number
      service_cities
      created_at
      updated_at
    }`;

