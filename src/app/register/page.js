"use client";

import { registerAction } from "@/app/register/action";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="flex h-screen justify-center items-center">
      <form className="w-[300px]">
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" type="email" />
        <input name="password" placeholder="Password" type="password" />
        <button disabled={pending}>Register</button>
        {state?.status === "success!" ? (
          <div className="bg-emerald-50 text-emerald-500 flex justify-center items-center">
            Register Success
          </div>
        ) : null}
      </form>
    </main>
  );
}
