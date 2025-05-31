import React from 'react';
import ProjectCard from './ProjectCard';
import { IconLayoutGrid } from '@tabler/icons-react';

export default function PlanningPokerCard() {
  const planningPokerIcon = (
    <div className="icon-container purple">
      <IconLayoutGrid size={26} stroke={1.5} />
    </div>
  );

  return (
    <ProjectCard
      icon={planningPokerIcon}
      title="Planning Poker"
      description="Torne o processo de estimativas mais colaborativo, leve e produtivo. Utilize votações em tempo real e visualize os resultados de forma imediata."
      buttonText="Iniciar Sala"
      buttonLink="/create/room"
      bgColor="purple"
    />
  );
} 