import React from "react";
import Header from "../components/Header";
import MainSlider from "../components/MainSlider";
import LatestContents from "../components/LatestContents";
import NoticeSection from "../components/NoticeSection";
import Footer from "../components/Footer";
import "../styles/main.css";

export default function Main() {
    return (
        <>
            <Header />
            <main>
                <MainSlider />
                <section id="latest-contents">
                    <LatestContents />
                </section>
                <section id="notice">
                    <NoticeSection />
                </section>
                <Footer />
            </main>
        </>
    );
}

