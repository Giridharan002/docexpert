'use client'
import { api } from "@/convex/_generated/api";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, useMutation, useQuery } from "convex/react";
import { use } from "react";




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
        <button className="" onClick={() => { creatDocument({title: "Hello convex"})}}>
          CLICK ME</button>
          {documents?.map((document) => (
            <div key={document._id}>
              {document.title}
            </div>
          ))}
      </Authenticated>
    </main>
  );
}
