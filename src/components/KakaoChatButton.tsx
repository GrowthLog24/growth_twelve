"use client";

import { ReactNode } from "react";
import { openKakaoChat } from "@/lib/kakao";

interface Props {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function KakaoChatButton({ children, className, ariaLabel }: Props) {
  return (
    <button
      type="button"
      onClick={openKakaoChat}
      className={className}
      aria-label={ariaLabel ?? "카카오톡 1:1 문의 열기"}
    >
      {children}
    </button>
  );
}
