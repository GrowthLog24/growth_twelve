"use client";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/" className="nav-logo" aria-label="GROWTH12 홈으로 이동">
            <span className="nav-logo-image">
              <Image
                src="/images/the12-logo.png"
                alt="GROWTH12 부동산 커뮤니티 로고"
                fill
                priority
                sizes="55px"
              />
            </span>
          </Link>
        </div>

        <div className="nav-menu">
          <a href="#why">Community</a>
          <a href="#program">Program</a>
          <a href="#leader">Leader</a>
          <a href="#plans">Membership</a>
          <a href="#ot">OT</a>
        </div>

        <div className="nav-right" />
      </div>
    </nav>
  );
}