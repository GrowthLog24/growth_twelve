import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import { KakaoSdkLoader } from "@/components/KakaoSdkLoader";

export const metadata: Metadata = {
  title: "G12 - 전문가관리형 공인중개사 스터디",
  description:
    "혼자는 힘들어요. 전문가 관리형 스터디로 10월 31일 공인중개사 합격까지 함께 완주합니다. 오프라인(강남역) / 온라인 동시 운영. 1기 모집 중.",
  openGraph: {
    title: "G12 - 전문가관리형 공인중개사 스터디",
    description:
      "혼자는 힘들어요. 전문가 관리형 스터디로 10월 31일 공인중개사 합격까지 함께 완주합니다. 오프라인(강남역) / 온라인 동시 운영. 1기 모집 중.",
    images: ["/og.png"],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "G12 - 전문가관리형 공인중개사 스터디",
    description:
      "혼자는 힘들어요. 전문가 관리형 스터디로 10월 31일 공인중개사 합격까지 함께 완주합니다. 오프라인(강남역) / 온라인 동시 운영. 1기 모집 중.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/fav_icon.png", type: "image/png" }],
    shortcut: "/fav_icon.png",
    apple: "/fav_icon.png",
  },
  metadataBase: new URL("https://the12.co.kr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollReveal />
        <KakaoSdkLoader />
      </body>
    </html>
  );
}
