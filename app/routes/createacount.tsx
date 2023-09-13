import { ActionFunction, LoaderFunction } from "@remix-run/node"
import { useActionData, Form } from "@remix-run/react";
import { prisma } from "~/db.server";
import ErrorEmail from "../layout/ErrorMessage";
import SuccessfullyEmail from "../layout/successemail";
import ErrorPassword from "./errorpassword";
import ErrorMessage from "../layout/ErrorMessage";



export let action: ActionFunction = async({ request }) => { 
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const password2 = formData.get("password2") as string;

    const findEmail = await prisma.user.findFirst({
      where:{
        email
      }
    })

    if(findEmail){
      return{
        error:'email já cadastrado',
      }
    }

    if(password !== password2){
      console.log('senhas diferentes');
      return{
        password_error:'senhas diferentes'
      }
    }
      
    const cria = await prisma.user.create({
        data: {
         name:name,
         address:address,
         email:email,
         password:password
        }
      })
    
      console.log(cria)
    
    

    return {success:'email cadastrado com sucesso'}
}


export default function CreateAcount() {
    
  const data = useActionData<typeof action>();

  

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
              Faça seu cadastro
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form className="space-y-6" action="#" method="post">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome Completo
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="Digite seu nome aqui"
                    name="name"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Endereço
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="rua, número da casa e bairro"
                    name="address"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="Digite um email válido"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Senha
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    placeholder="Digite sua senha"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                  Confirme sua senha
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    placeholder="Digite a senha novamente"
                    name="password2"
                    type="password"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading- p-2"
                  />
                </div>
              </div>
  
              <div>
                
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cadastrar
                </button>
              {data?.error ? <ErrorMessage text="Email já cadastrado" /> : ''}
              {data?.success ? <SuccessfullyEmail text="email cadastrado com sucesso" /> : ''}
              {data?.password_error? <ErrorMessage text="Senhas incorretas" /> : ''}

              </div>
            </Form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Você já tem uma conta?{' '}
              <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Já tenho uma conta
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  