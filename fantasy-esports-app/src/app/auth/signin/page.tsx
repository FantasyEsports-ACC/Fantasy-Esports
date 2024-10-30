"use client"
import { redirect } from "next/navigation"
import { useEffect } from "react"
export function Page() {
  useEffect(() => {
    redirect("/api/auth/login")
  }, [])
  return <></>
}
export default Page;
