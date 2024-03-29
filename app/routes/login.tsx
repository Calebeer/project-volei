import { ActionFunction, redirect } from "@remix-run/node"
import { Form, useActionData } from "@remix-run/react";
import { log } from "console";
import { useState } from "react";
import { prisma } from "~/db.server";
import ErrorMessage from "~/layout/ErrorMessage";



export let action: ActionFunction = async({ request }) => { 
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
 

//AQUI ESTÁ SENDO FEITO A VALIDACÃO DO USUÁRIO, SE A SENHA ESTÁ CERTA OU NÃO.
  const userfound = await prisma.user.findFirst({
    where: {
      email:email,
      password:password
      
    }
    
  })


  //AQUI É FEITO O CAMINHO, CASO A O USUÁRIO SEJA ENCONTRADO ELE VAI ENTRAR NO SITE, CASO NÃO SEJA ENCONRTRADO VAI RETORNAR A MENSAGEM DE erro:'Email ou senha inválidos'
  if (userfound){
    return redirect("/create_scheduling");
  }else{
    console.log('Não encontrado');
    return{
      error:'Usuário ou senha incorretos'
    }
  }
return 1
}

export default function Login() {
  

  //AQUI ELE VAI ESTAR PEGANDO O QUE VAI RETORNAR A FUNÇÃO action.
  const data = useActionData<typeof action>();
  const [time,setTime] = useState(true)

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Faça seu login
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email 
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Digite seu email"
                    required
                    // value={}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Senha
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Digite sua senha"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 "
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
              {data?.error ? <ErrorMessage text="Usuário ou senha incorretos" /> : ''}
              <p className="mt-10 text-center text-sm text-gray-500">
              Você já tem uma conta?{' '}
              <a href="/createacount" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Criar nova conta
              </a>
            </p>
              </div>
            </Form>
          </div>
        </div>
    </>
  )
}
