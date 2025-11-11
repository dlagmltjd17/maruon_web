import React from "react";
import "../styles/latestContents.css";

export default function LatestContents() {
  return (
    <div className="latest-wrapper">
        {/* 왼쪽 텍스트 영역 */}
        <div className="latest-left">
            <h2>Latest Contents</h2>
            <button className="view-btn">View More</button>
        </div>

        {/* 오른쪽 콘텐츠 카드 영역 */}
        <div className="latest-right">
            <div className="content-card">
                <div className="thumbnail">
                    <img src="/images/Far Away.jpg" alt="Keemslime - Far Away" />
                </div>
                <div className="info">
                    <h3>[MV] Keemslime - Far Away</h3>
                    <p>Keemslime - Far Away Official Music Video</p>
                </div>
            </div>

            <div className="content-card">
                <div className="thumbnail">
                    <img src="/images/siheung.png" alt="siheung motion graphics" />
                </div>
                <div className="info">
                    <h3>시흥청년알리미 모션그래픽</h3>
                    <p>Siheung Youth Motion Graphics</p>
                </div>
            </div>
        </div>
    </div>
  );
}
