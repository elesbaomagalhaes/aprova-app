"use client"

import { signIn, signOut } from "next-auth/react"
import { Button } from "../ui/button"

export default function BtnLogout() {
    return (
      <Button className="mt-4" onClick={() => signOut()}>
        Sair
      </Button>
    )
}