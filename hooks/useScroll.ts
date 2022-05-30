import React from 'react';
import { scrollToBlock } from '../helpers/scrollToBlock';

export const useScroll = (link?: string) => {
  const introRef = React.useRef<HTMLDivElement | null>(null);
  const experienceRef = React.useRef<HTMLDivElement | null>(null);
  const skillsRef = React.useRef<HTMLDivElement | null>(null);
  const educationRef = React.useRef<HTMLDivElement | null>(null);
  const projectsRef = React.useRef<HTMLDivElement | null>(null);
  const resumeRef = React.useRef<HTMLDivElement | null>(null);

  switch (link) {
    case 'Обо мне':
      {
        scrollToBlock(introRef);
      }
      break;
    case 'Опыт':
      {
        scrollToBlock(experienceRef);
      }
      break;
    case 'Навыки':
      {
        scrollToBlock(skillsRef);
      }
      break;
    case 'Образование':
      {
        scrollToBlock(educationRef);
      }
      break;
    case 'Проекты':
      {
        scrollToBlock(projectsRef);
      }
      break;
    case 'Резюме': {
      scrollToBlock(resumeRef);
    }
  }
  return { introRef, experienceRef, skillsRef, educationRef, projectsRef, resumeRef };
};
