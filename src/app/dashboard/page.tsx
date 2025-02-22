import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth"; 
import { redirect } from "next/navigation";
import  BtnLogin  from "@/components/login/btn-logout"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2">Bem-vindo, {session.user?.name}!</p>
        <BtnLogin />  
    </div>
  );
}