import { Source_Sans_3 } from "next/font/google";

import { DefaultLayout } from "@/components/common/layouts";
import { DesignDetail } from "@/components/design/DesignDetail";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={sourceSans.className}>
      <DefaultLayout>
        <DesignDetail />
      </DefaultLayout>
    </main>
  );
}
