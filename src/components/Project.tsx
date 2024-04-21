import { useState, useEffect } from 'react';
import { projectDataEn, projectDataZh } from "@/store/projetData";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { CurrentData } from '@/interface/project';

let currentData: CurrentData[]

const Project = () => {
  const { t, i18n } = useTranslation()
  const currentLng = i18n.language
  
  if (currentLng === 'zh') {
    currentData = projectDataZh
  } else if (currentLng === 'en') {
    currentData = projectDataEn
  }

  const [isVisible, setIsVisible] = useState(Array(currentData.length).fill(false))

  useEffect(() => {
    setIsVisible(prev => prev.map((_, index) => index < 2 ? true : false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight * 0.8
      const newVisibility = [...isVisible]

      currentData.forEach((project, index) => {
        const box = document.querySelector(`#project-${project.id}`)
        if (box) {
          const boxTop = box.getBoundingClientRect().top
          newVisibility[index] = boxTop < triggerBottom
        }
      })
      setIsVisible(newVisibility);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  return (
    <div className="project-container">
      <h2 className="project-container_title">{t('project.title')}</h2>
      <motion.ul>
        {currentData.map((project, index) => (
          <motion.li
            key={project.id}
            className={`project-container_card aos ${isVisible[index] ? 'show' : ''}`}
            id={`project-${project.id}`}
          >
            <div className="project-container_img">
              <NavLink to={project.url} target="_blank">
                <div className="project-container_click">CLICK</div>
                <img src={project.src} alt="project_1" />
              </NavLink>
            </div>
            <div className="project-container_box">
              <h2 className="project-container_box_title">{project.title}</h2>
              <div className="project-container_box_content">
                <p className="project-container_box_text">{t('project.text_1')}</p>
                <p className="project-container_box_text">{project.content}</p>
                <p className="project-container_box_text">{t('project.text_2')}</p>
                <p className="project-container_box_icon">{project.icon}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Project;
