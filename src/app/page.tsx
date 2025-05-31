"use client";
import "@/styles/page/style.scss";
import PlanningPokerCard from "./components/page/PlanningPokerCard";
import SprintPlannerCard from "./components/page/SprintPlannerCard";
import Footer from "./components/page/Footer";
import Image from "next/image";
import AnnouncementBanner from "./components/common/announcement-banner";

export default function Home() {
  return (
    <>
      {/**<AnnouncementBanner /> */}
      <main className="home-container">
        <div className="home-header">
          <div className="logo-container">
            <Image
              src="/image.png"
              alt="DMK3 Logo"
              width={430}
              height={200}
              className="logo-animation"
            />
          </div>
          <h1 className="home-title">Simples, rápido e prático.</h1>
          <p className="home-subtitle">Soluções inovadoras para equipes modernas.</p>
        </div>
        <div className="projects-grid">
          <PlanningPokerCard />
          <SprintPlannerCard />
        </div>
        {/**<Footer /> */}
      </main>
    </>
  );
}
