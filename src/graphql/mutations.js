import { gql } from "@apollo/client";
export const SIGNUP_VENDOR = gql `
    mutation signup($vendorInput: CreateVendorInput!){
      signup(vendorInput: $vendorInput){
        vendor_id
        name
        email
        phone_number
        password
        created_at
        updated_at
    }}`;

export const SIGNIN_VENDOR = gql `
    mutation login($loginInput:LoginVendorInput!){
      login(loginInput: $loginInput){
        user_email
        auth_token
        id
        created_at
        updated_at
      }
    }`;

export const UPDATE_PROFILE = gql `
    mutation updateProfile($updateVendorInput : UpdateVendorInput!){
      updateProfile(updateVendorInput: $updateVendorInput){
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

export const TARIFFCHART_UPLOAD = gql `
  mutation uploadTariffChart($createTariffChartInput : CreateTariffChartInput!){
    uploadTariffChart(createTariffChartInput: $createTariffChartInput){
        id
        vendor_id
        tariff
      }
  }`;

export const DELETE_VENDOR = gql `
  mutation deleteVendor($id:String!){
    deleteVendor(id:$id){
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

