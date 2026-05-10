"use client";

import Script from "next/script";

const KAKAO_SDK_SRC = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
const KAKAO_SDK_INTEGRITY = "sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka";

export function KakaoSdkLoader() {
  const jsKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

  return (
    <Script
      src={KAKAO_SDK_SRC}
      integrity={KAKAO_SDK_INTEGRITY}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window === "undefined") return;
        const Kakao = window.Kakao;
        if (!Kakao || !jsKey) return;
        if (!Kakao.isInitialized()) {
          Kakao.init(jsKey);
        }
      }}
    />
  );
}
