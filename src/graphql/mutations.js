import { gql } from "@apollo/client";
export const SIGNUP_VENDOR = gql `
    mutation signup($vendorInput: CreateVendorInput!){
      signup(vendorInput: $vendorInput){
        vendor_id
        name
        email
        phone_number
        password
    }}`;

export const SIGNIN_VENDOR = gql `
    mutation login($loginInput:LoginVendorInput!){
      login(loginInput: $loginInput){
        user_email
        auth_token
        id
        vendor_id
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
    }
  }`;

// export const 
export const TARIFFCHART_UPDATE = gql `
mutation updateTariffChart($createTariffChartInput:CreateTariffChartInput!){
  updateTariffChart(createTariffChartInput:$createTariffChartInput){
    id
  }
}`;