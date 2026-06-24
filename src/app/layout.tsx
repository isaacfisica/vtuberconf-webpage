import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/lib/navbar";
import SiteFooter from "@/lib/footer";

export const metadata: Metadata = {
  title: "버튜버학회",
  description: "석사 학위 재학생 이상의 학위를 갖춘 버추얼 스트리머의 학술 공동체.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div
          style={{
            minHeight: "100vh",
            background: "var(--surface-page)",
            display: "flex",
            flexDirection: "column",
            fontFamily: "var(--font-sans)",
            color: "var(--text-primary)",
          }}
        >
          <TopBar />
          <main style={{ flex: "1 1 auto" }}>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
