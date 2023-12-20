import "@/styles/globals.css";
import Nav from "@/components/Nav.jsx";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share Ai Prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
