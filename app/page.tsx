'use client'
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { ModeToggle } from "@/components/ui/mode-toggle";



export default function Home() {

  const documents = useQuery(api.documents.getDocuments);
  const creatDocument = useMutation(api.documents.createDocument);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <ModeToggle />
        <Button onClick={() => { creatDocument({title: "Hello convex"})}}>
          CLICK ME</Button>
          {documents?.map((document) => (
            <div key={document._id}>
              {document.title}
            </div>
          ))}
      </Authenticated>
    </main>
  );
}
