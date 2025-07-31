// app/layout.tsx
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar"; // Optional — remove if not used

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI-Powered Dashboard",
  description: "Sample dashboard built for the ADmyBRAND challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col md:flex-row">
            {/* Optional Sidebar */}
            {/* <Sidebar /> */}
            <div className="flex-1">
              <Navbar />
              <div className="p-4">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
