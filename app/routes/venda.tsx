import { ActionFunction} from "@remix-run/node";
import { LoaderFunction} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import { log } from "console";




// export let loader1: LoaderFunction = async({ request }) => { 
//   const url = new URL(request.url);
//     const queryParams = url.searchParams;

//     const cpf_cliente = queryParams.get('cpf_cliente');
//     const nome_remedio = queryParams.get('nome_remedio');
//     const quantidade = queryParams.get('quantidade');

//     if(!cpf_cliente){
//         return{error:'Não foi fornecido um cpf'}
//     }

//     if(!nome_remedio){
//         return{error:'Não foi fornecido uma idade'}
//     }

//     if(!quantidade){
//         return{error:'Não foi fornecido um nome'}
//     }

//     await prisma.venda.create({
//         data: {
//           cpf:cpf_cliente,
//           nome_remedio:nome_remedio,
//           quantidade:quantidade
//         }
//       })

      

   

//     return{sucess:true}

// }

export let action: ActionFunction = async({ request }) => { 
  const formData = await request.formData();

  const cpf = formData.get("cpf") as string;
  const nome_remedio = formData.get("nome_remedio") as string;
  const quantidade = formData.get("quantidade") as string;
  
  await prisma.venda.create({
    data: {
      cpf:cpf,
      nome_remedio:nome_remedio,
      quantidade:quantidade
    }
  })

  return cpf
}


export async function loader() { 
    const cliente = await prisma.cliente.findMany()
    const primeiraVenda =  await prisma.venda.findFirst()

    return json({cliente, primeiraVenda})
}

export default function Example() {
  
   const {cliente, primeiraVenda} = useLoaderData<typeof loader>();

    return (
      <>
      {cliente.at(0)?.cpf}

      <input type="text" value={primeiraVenda?.nome_remedio} onChange={()=>{
        
      }}/>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Realizar Venda
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="" method="post">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Cpf do Cliente
                </label>
                <div className="mt-2">
                <select name="cpf" id="">
                    {
                      cliente.map((cliente) => (
                          <option value={cliente.cpf}>
                            {cliente.cpf}
                          </option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome do Remédio
                </label>
                <div className="mt-2">
                  <input name="nome_remedio" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Quantidade
                  </label>
                </div>
                <div className="mt-2">
                  <input name="quantidade" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
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