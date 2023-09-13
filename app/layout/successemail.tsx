import { XCircleIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function SuccessfullyEmail ({ text }: {
  text: any;
}): JSX.Element{
  return(
    <div className="rounded-md bg-green-60 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">{text}</h3>
        </div>
      </div>
    </div>
  )
}
