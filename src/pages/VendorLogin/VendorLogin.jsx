import MainMenu from "../../components/Elements/MainMenu/MainMenu";
import LeftTextwBtn from "../../components/Elements/LeftTextwBtn/LeftTextwBtn";
import LoginCard from "../../components/VendorLogin/LoginCard/LoginCard";

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
// import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../../graphql/queries";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Elements/Animation/Loading";

export default function VendorLogin(){
    const [loading, setLoading] = useState(false);
    // const client = new ApolloClient({
    //     uri: 'https://48p1r2roz4.sse.codesandbox.io',
    //     cache: new InMemoryCache()
    // });

    // client.query({
    //     query: gql`
    //         query GetRates {
    //             rates(currency: "USD") {
    //             currency
    //             }
    //         }
    //     `
    // }).then(res=>console.log(res));

    // const {error, loading, data} = useQuery(LOAD_USERS);
    
    // useEffect(()=>{
    //     console.log(data);
    // },[data]);

    return(
        <>
            {loading&& <Loading />}
            {!loading && <div className="flex flex-col bg-red-50">
                <div className="grid grid-cols-2 my-8">
                    <div className="flex flex-col mx-36 my-auto">
                        <LeftTextwBtn 
                            heading="Join the Largest Courier Network"
                            text="The most important part of the joining Shipit is the easiness. There are more than 25 courier providers linked with Shipit catering to more than 1L+ registered users."
                            button="Learn more"
                        />
                    </div>
                    <div className="mx-24 mb-8">
                        <LoginCard /> 
                    </div>
                </div>  
            </div>}
        </>
    );
}