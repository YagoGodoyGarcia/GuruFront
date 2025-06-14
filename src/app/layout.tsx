import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import "@/styles/globals.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "DMK3 | simples, rápida e prático",
  description: "Simples, rápida e prático.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image.png" type="image/x-icon" sizes="7x10" />
        {/**
        <Script
          id="clarity-script"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.idprojeto.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "otaljzsf50");`,
          }}
        /> */}
      </head>
      <body
        className={classNames([
          inter.className,
          inter.variable,
        ])}
      >
        {children}
      </body>
    </html>
  );
}
