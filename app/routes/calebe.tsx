import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import { Form, useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server";

export let action: ActionFunction = async({ request }) => { 
  const url = new URL(request.url);
    const queryParams = url.searchParams;
 
  const formData = await request.formData();

  const usuario = formData.get("email") as string;
  const senha = formData.get("senha") as string;


  const usuarioEncontrado = await prisma.user.findFirst({
    where:{
      usuario: usuario,
      senha: senha
    }
  })

  if(usuarioEncontrado){
    console.log('usuário encontrado', (usuarioEncontrado));
    
  }else{
    console.log('usuário não encontrado');
    return {
      error:'Usuário ou senha incorretos'
    }
  }




  
return 'a'


}

export async function loader() { 
  const remedios = await prisma.farmacia.findMany()
  return json({remedios})
}

export default function Example() {
  
  const data = { error : 'Usuário ou senha incorretos.'}
        
  const usuario = {idade:22, nome:'Sóstenes'}

  const notas = [
    { titulo:'nota 1', corpo:'nota 1 testesa' },
    { titulo:'nota 2', corpo:'nota 2 testesa' },
    { titulo:'nota 3', corpo:'nota 3 testesa' },
  ]

 const {remedios} = useLoaderData<typeof loader>();
 
  return (
    <>
    remedios: {JSON.stringify(remedios)}
      {'Calebe'} 
      {1}
      {[123,2,2,2][1]}
      {

        JSON.stringify({nome:'calebe', idade: 18})
      
      }
      
      {
        {idade:22, nome:'Sóstenes'}.nome

      }
      
      {
        JSON.stringify(usuario)
      }

      <p>
        {usuario.nome}
      </p>

      <h2 className="text-4xl">
        {usuario.idade}
      </h2>


    <pre>
          {
            JSON.stringify(notas,null,2)
          }
    </pre>

    <h1 className="text-4xl">
    { notas[0].titulo }

    </h1>
        
    <p>
      {notas[0].corpo}
    </p>

    ......................
    
    {
      notas.map((nota) =>(
          <div> 
            <h1 className="text-4xl">
            {nota.titulo} 
              </h1>
            {/* <p>
              {nota.corpo}
            </p> */}
          </div>
        )
      )
    }


    {
      notas.map((nota,index) =>(
        <div>
          <p>
            {nota.corpo} - {index}
          </p>
        </div>
      ))
    }





    <select name="" id="">
      {
        remedios.map((remedio) => (
            <option value="">
              {remedio.nome_remedio}
            </option>
        ))
      }
      
    </select>












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
                Nome
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