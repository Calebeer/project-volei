import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { LoaderArgs, json } from "@remix-run/server-runtime";
import { Form, useActionData, useLoaderData } from "@remix-run/react"
import { prisma } from "~/db.server";
import { isRedirectResponse } from "@remix-run/react/dist/data";
import { redirect } from "@remix-run/node"; 
import { XCircleIcon } from "@heroicons/react/20/solid";
import ErrorMessage from "./erro";
import { useState } from "react";
import Navbar from "./navbar";

export let action: ActionFunction = async({ request }) => { 
 //aqui ele está pegando todas as informacões do formulário
  const formData = await request.formData();

  const user = formData.get("email") as string;
  const password = formData.get("password") as string;

  //aqui é feita a busca no banco de dados pra ver se tem o usuário no banco de dados
  const usuarioEncontrado = await prisma.user.findFirst({
    where:{
      email: user,
      password: password
    }
  })

  console.log(usuarioEncontrado);
  
  //Aqui é feita a validação, se o usuário for encontrado no banco ele vai conectar, se não for encontrado vai retornar a menagem 'Usuário ou senha incorretos'.
  if(usuarioEncontrado){
    console.log('usuário encontrado', (usuarioEncontrado));
    return redirect("/venda");
  }else{
    console.log('usuário não encontrado');
    return {
      error:'Usuário ou senha incorretos'
    }
  }
  
  
}

export default function Example() {
  
  //  const _data = useLoaderData<typeof loader>();
  const data = useActionData<typeof action>();

  return (
    <>
      {JSON.stringify(data)}
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
                  name="password"
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

              {data?.error ? <ErrorMessage /> : ''}

              {data?.success && <div>
                Eba, loguei
              </div>}

              {/* {JSON.stringify(data?.error)} */}

            </div>
          </Form>
        </div>
      </div>
    </>
  )
}