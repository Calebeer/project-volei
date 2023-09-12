import { ActionFunction, redirect } from "@remix-run/node"
import { Form, useActionData } from "@remix-run/react";
import { log } from "console";
import { prisma } from "~/db.server";
import ErrorMessage from "./erro";
import InputLogin from '~/layout/InputLogin'



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
    return redirect("/navbar");
  }else{
    console.log('Não encontrado');
    return{
      erro:'Não foi encontrado'
    }
  }

}

export default function Login() {
  

  //AQUI ELE VAI ESTAR PEGANDO O QUE VAI RETORNAR A FUNÇÃO action.
  const data = useActionData<typeof action>();
  

  return (
    <>
      <InputLogin/>
    </>
  )
}
