import React from "react";
import "../styles/noticeSection.css";

export default function NoticeSection() {
    const notices = [
        {
            tag: "공지사항",
            title: "공지사항 제목을 입력하세요",
            desc: "공지 본문은 여기 이 자리에 이런식으로 들어갈 예정입니다. 텍스트가 길어질 경우 말줄임표로 처리됩니다.",
        },
        {
            tag: "언론보도",
            title: "언론보도 제목을 입력하세요",
            desc: "보도 내용도 여기 이 자리에 이런식으로 들어갑니다.",
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
                        <div className="notice-img"></div>
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
