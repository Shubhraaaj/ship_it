import { gql } from "@apollo/client";

export const SIGNUP_VENDOR = (vendor_name, email, phone, password) = gql `mutation{
    signup(vendorInput : {
      name:${vendor_name}
      email:${email}
      phone_number:${phone}
      password:${password}
    }){
      vendor_id
      name
      email
      phone_number
      password
      created_at
      updated_at
    }
  }`;

export const SIGNIN_VENDOR = (email, password) => gql `mutation{
    login(loginInput : {
      user_email:"${email}"
      password:"${password}"
    }){
      user_email
      auth_token
      id
      created_at
      updated_at
    }
  }`;

export const UPDATE_VENDOR = (vendor_id, name, email, phone, cities, chart_id, logo) => gql `mutation{
    updateProfile(updateVendorInput : {
      vendor_id:${vendor_id}
      name:${name}
      email:${email}
      phone_number:${phone}
      service_cities:${cities}
      tariff_chart_id:${chart_id}
      logo:${logo}
    }){
      name
      email
      phone_number
      email
      password
      
    }
  }`;

export const TARIFFCHART_UPLOAD = (vendor_id, tariff_chart_b64) = gql `mutation{
    uploadTariffChart(createTariffChartInput:{
      vendor_id:${vendor_id}
      tariff:${tariff_chart_b64}
    }){
      id
      vendor_id
      tariff
    }
  }`;

export const UPDATE_PROFILE = (vendor_id, name, email, phone, cities, logo) => gql `mutation{
    updateProfile(updateVendorInput : {
      vendor_id:${vendor_id}
      name:${name}
      email:${email}
      phone_number:${phone}
      service_cities:${cities}
      logo:${logo}
    }){
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
      
    }
  }`;

export const DELETE_VENDOR = (vendor_id) => gql `mutation{
    deleteVendor(id:${vendor_id}){
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
      
    }
  }`;

