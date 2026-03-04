// import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { Suspense } from "react";
import { redirect } from "next/navigation";

async function UserDetails() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return JSON.stringify(data.user, null, 2);
}

export default function ProtectedPage() {
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Your account is active. You can manage your heavy lifting contracts here.
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Account Details</h2>
        <div className="w-full bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <pre className="text-xs font-mono p-3 rounded border max-h-[400px] overflow-auto">
            <Suspense fallback={<div>Loading user details...</div>}>
              <UserDetails />
            </Suspense>
          </pre>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-2xl mb-4">Operations Dashboard</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your equipment rentals, crane deployments, and project timelines.
        </p>
        <div className="grid gap-4 mt-6">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <p className="font-bold">Active Contracts</p>
            <p className="text-sm text-gray-500">No active contracts found.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
