import React from "react"
import { useTranslation } from "react-i18next"


const Headers: React.FC = () => {
  const { t } = useTranslation()


  return (
    <header className='header-box'>
      <h1 className="header-box_title">{t('header-title')}</h1>
      <div className="header-box_line"></div>
      <p className="header-box_content">{t('header-content')}</p>
    </header>
  )
}

export default Headers