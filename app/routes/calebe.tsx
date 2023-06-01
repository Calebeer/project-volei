import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import { Form, useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server";
import { isRedirectResponse } from "@remix-run/react/dist/data";
import { redirect } from "@remix-run/node"; 
import { XCircleIcon } from "@heroicons/react/20/solid";



export let action: ActionFunction = async({ request }) => { 
  const url = new URL(request.url);
    const queryParams = url.searchParams;
 
  const formData = await request.formData();

  const usuario = formData.get("email") as string;
  const senha = formData.get("senha") as string;
  const errado = formData.get("erro") as string ;


  const usuarioEncontrado = await prisma.user.findFirst({
    where:{
      usuario: usuario,
      senha: senha
    }
  })

  if(usuarioEncontrado){
    console.log('usuário encontrado', (usuarioEncontrado));
    return redirect("/venda");
  }else{
    console.log('usuário não encontrado');
    return {
      error:'Usuário ou senha incorretos'
    }
  }




  
return 'a'


}

export async function loader() { 
  const cliente = await prisma.cliente.findMany()

  return json({cliente})
}




export default function Example() {
  

  const data = { error : 'Usuário ou senha incorretos.'}
        
  const usuario = {idade:22, nome:'Sóstenes'}

  const notas = [
    { titulo:'nota 1', corpo:'nota 1 testesa' },
    { titulo:'nota 2', corpo:'nota 2 testesa' },
    { titulo:'nota 3', corpo:'nota 3 testesa' }
  ]

  

 const {cliente} = useLoaderData<typeof loader>();


 const alerta = <div className="rounded-md bg-red-50 p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-red-800">Usuário ou senha incorretos</h3>

    </div>
  </div>
</div>
  return (
    <>
  <div className="erro" ></div>


      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Acessar sistema
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form className="space-y-6" action="" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Usuário
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="name"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="senha"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button 
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}