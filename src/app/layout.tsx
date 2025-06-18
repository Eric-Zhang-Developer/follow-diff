import "./globals.css";


export const metadata = {
  title: "Follower Diff - See Who Doesn't Follow You Back",
  description:
    "Safely see your Instagram non-followers using your official Instagram data. Your files are processed right in your browser and never uploaded anywhere.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
