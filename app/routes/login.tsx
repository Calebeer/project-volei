import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { prisma } from "~/db.server";

import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  console.log('executando')



  const users = await prisma.user.findMany()

  console.log(users)



  try{
    await prisma.user.create({data:{
      email:"calebeapollo26@gmail.com",
      password:"81020002"
    }}) 
  }catch(e: any){
    console.log('deu erro', e.message);
    
  }
  
  console.log('executou')
  return json({users});
};

export const meta: V2_MetaFunction = () => [{ title: "Login" }];

export default function LoginPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>

      {data.users.map(user =>(
        <div>
          {user.password} - {user.email}
        </div>
      ))}



    </> 
  );
}
