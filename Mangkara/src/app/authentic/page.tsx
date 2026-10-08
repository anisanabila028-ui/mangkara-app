import { redirect } from "next/navigation";

export default function AuthenticPage() {
  redirect("/authentic/register");
}