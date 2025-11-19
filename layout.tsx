import "./globals.css";

export const metadata = {
  title: "Raquel Martins Organização",
  description: "Organização residencial e personal organizer em São Paulo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fonte Playfair Display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Remix Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
