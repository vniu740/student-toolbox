import LayoutAvatar from "@/components/auth/layout-avatar"
import { SessionProvider } from "next-auth/react"
import Header from "@/components/headerAllPages"
import "./globals.css"

export const metadata = {
  title: "Student Toolbox",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header></Header>
          <div className="margins">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
