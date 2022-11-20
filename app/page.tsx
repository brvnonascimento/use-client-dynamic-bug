import dynamic from "next/dynamic";
import { Suspense } from "react";

const ClientTest = dynamic(() => import("./ClientTest"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ClientTest />
      </Suspense>
    </div>
  );
}
