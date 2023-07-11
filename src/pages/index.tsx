import { Source_Sans_3 } from "next/font/google";

import { DefaultLayout } from "@/components/common/layouts";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={sourceSans.className}>
      <DefaultLayout>Hello World</DefaultLayout>
    </main>
  );
}
