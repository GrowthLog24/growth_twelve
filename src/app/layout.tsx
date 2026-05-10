import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/ScrollReveal";
import { KakaoSdkLoader } from "@/components/KakaoSdkLoader";

export const metadata: Metadata = {
  title: "GROWTH12 - 부동산 협력 파트너 커뮤니티",
  description:
    "커뮤니티와 함께 성장할 부동산 협력 파트너를 모십니다. 17년차 부동산 전문가가 운영하는 강남역 3분거리 라운지 커뮤니티.",
  openGraph: {
    title: "GROWTH12 - 부동산 협력 파트너 커뮤니티",
    description:
      "17년차 부동산 전문가가 운영하는 부동산 커뮤니티. 공인중개사 합격 후 실무 교육·채용 연계까지. 1기 모집중.",
    images: ["/og.png"],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "GROWTH12 - 부동산 협력 파트너 커뮤니티",
    description:
      "17년차 부동산 전문가가 운영하는 부동산 커뮤니티. 1기 모집중.",
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
