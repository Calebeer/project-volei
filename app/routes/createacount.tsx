import { ActionFunction, LoaderFunction } from "@remix-run/node"
import { useActionData, Form } from "@remix-run/react";
import { prisma } from "~/db.server";
import ErrorEmail from "../layout/ErrorMessage";
import SuccessfullyEmail from "../layout/successemail";
import ErrorPassword from "./errorpassword";
import ErrorMessage from "../layout/ErrorMessage";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { log } from "console";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";




export let action: ActionFunction = async({ request }) => { 
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const street = formData.get("street") as string;
    const cep = formData.get("cep") as string;
    const neighborhood  = formData.get("neighborhood") as string;
    const number  = formData.get("number") as string;
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
        error:'senhas diferentes'
      }
    }if(password.length && password.length < 5){
      return{
        error:"senha fraca, digite uma senha maior"
      }
    }
      
    const cria = await prisma.user.create({
        data: {
         name:name,
         street:street,
         cep:cep,
         neighborhood:neighborhood,
         number:number,
         email:email,
         password:password
        }
      })
    
      console.log(cria)
    
    

    return {success:'email cadastrado com sucesso'}
}


export default function CreateAcount() {
    
  const data = useActionData<typeof action>();
  const [formData,setFormData] = useState({
    name:'',
    cep:'',
    logradouro:'',
    bairro:'',
    email:'',
    password:'',
    passwordConfirmation:'',
    number:''
  })

  function validation(e:any){
    setFormData(e.target.value);
    console.log(formData.cep);
    e.preventDefault()

    axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`).then((response) => {
        setFormData(response.data)
        console.log(response.data);
    }).catch((err)=>{
      console.log('erro ao econtrar cep');})
  }

  function submitForm(e: { preventDefault: () => void; }){
    e.preventDefault()
    console.log(`os dados:`,data);
    
  }
  
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
            <Form className="space-y-6" onSubmit={submitForm} >
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Nome Completo
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Digite seu nome aqui"
                    type="text"
                    autoComplete="email"
                    required
                    onChange={(e:any)=>{
                      setFormData({...formData,name:e.target.value});
                      console.log(formData);
                      
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Cep
                </label>
                <div className="inline-flex mt-2">
                  <input
                    placeholder="Digite seu cep, ex:12345-678"
                    type="tel"
                    value={formData?.cep}
                    
                    onChange={(e:any)=>{
                      setFormData({...formData,cep:e.target.value});
                      console.log(formData);
                      
                    }}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2 "
                  />
                  <button  
                  type="submit" onClick={validation}
                  className="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-1 "
                >
                     Verificar
                </button>
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Endereço
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Digite sua rua"
                    type="text"
                    autoComplete="email"
                    value={formData?.logradouro}
                    onChange={(e:any)=>{
                      setFormData({...formData,logradouro:e.target.value});
                      console.log(formData);
                      
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Bairro
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Digite o seu bairro"
                    type="text"
                    value={formData?.bairro}
                    onChange={(e:any)=>{
                      setFormData({...formData,bairro:e.target.value});
                      console.log(formData);    
                    }}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Número da casa
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Digite o número de sua casa"
                    type="text"
                    autoComplete="email"
                    required
                    onChange={(e:any)=>{
                      setFormData({...formData,number:e.target.value});

                      
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Digite um email válido"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e:any)=>{
                      setFormData({...formData,email:e.target.value});
                      console.log(formData);
                      
                    }}
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
                    placeholder="Digite sua senha"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e:any)=>{
                      setFormData({...formData,password:e.target.value});
                      console.log(formData);
                      
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                  />
                </div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                  Confirme sua senha
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Digite a senha novamente"
                    type="password"
                    autoComplete="email"
                    required
                    onChange={(e:any)=>{
                      setFormData({...formData,passwordConfirmation:e.target.value});
                      console.log(formData);
                      
                    }}
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
              {data?.error ? <ErrorMessage text={data.error} /> : ''}
              {data?.success ? <SuccessfullyEmail text={data.success} /> : ''}

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
  