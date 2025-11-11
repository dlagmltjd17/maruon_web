import React from "react";
import "../styles/noticeSection.css";

export default function NoticeSection() {
    const notices = [
        {
            tag: "공지사항",
            title: "현재 홈페이지 점검 중입니다.",
            desc: "홈페이지 점검으로 인해 일부 메뉴가 작동하지 않을 수 있으니 양해 부탁드립니다.",
        },
        {
            tag: "언론보도",
            title: "최근 언론보도가 없습니다.",
            desc: "최근 언론보도가 없습니다.",
        },
    ];

    return (
        <div className="notice-wrapper">
            {/* 왼쪽 영역 */}
            <div className="notice-left">
                <h2>Notice</h2>
                <button className="view-btn">View More</button>
            </div>

            {/* 오른쪽 영역 */}
            <div className="notice-right">
                {notices.map((item, i) => (
                    <div className="notice-item" key={i}>
                        <div className="notice-img">
                            {i === 0 ? (
                                <img src="/maruon_logo_low.png" alt="홈페이지 점검 이미지" />
                            ) : (
                                <img src="/N.png" alt="언론보도" />
                            )}
                        </div>
                        <div className="notice-text">
                            <span className="tag">{item.tag}</span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
