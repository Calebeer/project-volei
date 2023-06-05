import { LoaderFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const loader: LoaderFunction = async() =>{
    return{};
};

export default function Index(){
    const loaderData = useLoaderData();

    return(
        <div>
            <Link to={"/new-item"} >

            </Link>
        </div>
    )
}