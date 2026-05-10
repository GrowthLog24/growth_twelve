/* ─── Kakao Channel 설정 ─────────────────────────────
   채널명: Growth12 그로스트웰브
   채널 프로필 ID: growth12 (Public ID)
──────────────────────────────────────────────────── */
export const KAKAO_CHANNEL_PUBLIC_ID = "_xcNHxlX";
export const KAKAO_CHANNEL_URL = "https://pf.kakao.com/_xcNHxlX";
export const KAKAO_CHAT_URL = "https://pf.kakao.com/_xcNHxlX/chat";

type KakaoChannel = {
  chat: (opts: { channelPublicId: string }) => void;
  addChannel: (opts: { channelPublicId: string }) => void;
};
type KakaoSDK = {
  isInitialized: () => boolean;
  init: (key: string) => void;
  Channel?: KakaoChannel;
};

declare global {
  interface Window {
    Kakao?: KakaoSDK;
  }
}

/** 1:1 채팅 열기 — SDK 우선, 미초기화 시 채팅 URL 새 탭으로 폴백 */
export function openKakaoChat() {
  if (typeof window === "undefined") return;

  const Kakao = window.Kakao;
  if (Kakao?.isInitialized?.() && Kakao.Channel?.chat) {
    try {
      Kakao.Channel.chat({ channelPublicId: KAKAO_CHANNEL_PUBLIC_ID });
      return;
    } catch {
      /* fallthrough → 새 탭으로 폴백 */
    }
  }
  window.open(KAKAO_CHAT_URL, "_blank", "noopener,noreferrer");
}
