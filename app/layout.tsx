/* eslint-disable @next/next/no-head-element */

import Link from "next/link";
import "@picocss/pico/css/pico.min.css";
import "../app/css/custom.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
      
      </head>
      <body>
        <main className="container">

        <nav>
          <Link href="/">Home</Link>
          <Link href="/todos">Todo</Link>
        </nav>
        {children}
        </main>
      
      
        </body>
    </html>
  );
}
