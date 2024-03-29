import { ActionFunction } from "@remix-run/node";
import { prisma } from "~/db.server";

export let action: ActionFunction = async({ request }) => { 
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const date = formData.get('date') as string;
    const time = formData.get('time') as string;

     const a = await prisma.scheduling.create({
        data: {
          name: name,   
          date: date,
          time: time
        }
      })
       
      console.log(a)
        return 'a'
}


export default function CreateAcount() {
  
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
              <form className="space-y-6" action="" method="post">
                <div>
                  
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Endereço
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      placeholder="rua, número da casa e bairro"
                      name="name"
                      type="text"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      placeholder="Digite um email válido"
                      name="date"
                      type="date"
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
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      placeholder="Digite sua senha"
                      name="time"
                      type="time"
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
                    Cadastrar
                  </button>
                </div>
              </form>
    
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
    