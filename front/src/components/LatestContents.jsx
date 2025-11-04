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
                <div className="thumbnail"></div>
                <div className="info">
                    <h3>작품명은 여기에</h3>
                    <p>English Title is here</p>
                </div>
            </div>

            <div className="content-card">
                <div className="thumbnail"></div>
                <div className="info">
                    <h3>작품명은 여기에</h3>
                    <p>English Title is here</p>
                </div>
            </div>
        </div>
    </div>
  );
}
