import dynamic from "next/dynamic";
import { Suspense } from "react";

const ClientTest = dynamic(() => import("./ClientTest"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<h1>Loading Client test!</h1>}>
        <ClientTest />
      </Suspense>
    </div>
  );
}
