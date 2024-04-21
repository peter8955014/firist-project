import { useState } from "react";
import MainNavigation from "../components/MainNavigation"

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import { motion } from "framer-motion"
import { contentDataEn, contentDataZh, slides } from "@/store/aboutData";
import { useTranslation } from "react-i18next";

const About = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { i18n } = useTranslation()
  const currentLan = i18n.language
  console.log(currentLan);


  const handleImgLeft = () => {
    setSlideIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  }

  const handleImgright = () => {
    setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
  }


  let currentData = null
  if (currentLan === 'zh') {
    currentData = contentDataZh
  } else if (currentLan === 'en') {
    currentData = contentDataEn
  }

  return (
    <div className="about-box">
      <MainNavigation />
      <div>-----------------------</div>
      <div className="grid-row">
        <div className="about-box_card carousel">
          <div className="dot-before" onClick={handleImgLeft}>
            <FaArrowAltCircleLeft className="dot-icon" />
          </div>
          {slides.map((slide, index) => (
            <motion.img
              src={slide.src}
              alt={`avter ${index}`}
              key={slide.id}
              className='slide'
              style={{
                display: slideIndex === index ? 'block' : 'none',
              }}
            />
          ))}
          <div className="dot-after" onClick={handleImgright}>
            <FaArrowAltCircleRight className="dot-icon" />
          </div>
        </div>
        <div className="content">
          {currentData ? currentData.map((data) => {
            return (
              <div key={data.id} className="about-box_card" >
                <h1 className="about-box_title">{data.title}</h1>
                <p className="about-box_content">{data.content_1}</p>
                <p className="about-box_content">{data.content_2}</p>
                <p className="about-box_content">{data.content_3}</p>
              </div>
            )
          }) : ''}
        </div>
      </div>
    </div>
  )
}

export default About