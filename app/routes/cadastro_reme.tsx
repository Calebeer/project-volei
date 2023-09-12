import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";


export let loader: LoaderFunction = async({ request }) => { 
  const url = new URL(request.url);
    const queryParams = url.searchParams;

    const email = queryParams.get('email') as string;
    const password = queryParams.get('password') as string;

      

   

    return{sucess:true}

}

export default function Example() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          
          <html class="h-full bg-white">
          <body class="h-full">
          
        */}


        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Cadastro Remédio
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="get">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome Remédio
                </label>
                <div className="mt-2">
                  <input name="email" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Preço
                </label>
                <div className="mt-2">
                  <input name="password" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              
  
              <div>
                
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }