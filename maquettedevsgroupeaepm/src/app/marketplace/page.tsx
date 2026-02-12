import InventoryTable from "@/components/ui/InventoryTable";
import { stackServerApp } from "../../stack/server";
import { SignUp } from "@stackframe/stack";
import React from "react";

// AJOUTE 'export default' ICI
export default async function Page() { // J'ai aussi mis une majuscule à Page par convention
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls; // Variable non utilisée, à retirer si inutile

  return (
    <>
      {user ? (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-full">
            <InventoryTable />
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20 items-center">
          <SignUp />
        </div>
      )}
    </>
  );
}
