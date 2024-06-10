import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "./styles/globals.css";
import "./styles/layout.scss";

interface Props {
  readonly children: ReactNode;
}

const namespace = 'app';

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={`${namespace}__section`}>
            <header className={`${namespace}__header`}>app header</header>

            <main className={`${namespace}__main`}>{children}</main>

            <footer className={`${namespace}__footer`}>app footer</footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
