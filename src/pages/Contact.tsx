import MainNavigation from "@/components/MainNavigation"
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img from '@/assets/img/avter.jpg'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation()

  return (
    <div className="contact-box">
      <MainNavigation />
      <div className="contact-box_card">
        <p className="contact-box_img">
          <img src={img} alt="avatar" />
        </p>
        <h1 className="contact-box_title">{t('contact')}</h1>
        <p className="contact-box_content">
          <FaPhoneAlt className="contact-box_icon" /> 0905-600-082
        </p>
        <p className="contact-box_content">
          <FaGithub className="contact-box_icon" />
          <a href="https://github.com/peter8955014" target="_blank">peter8955014</a>
        </p>
        <p className="contact-box_content">
          <MdEmail className="contact-box_icon" /> peter8955014@gmail.com
        </p>
      </div>
    </div>
  )
}

export default Contact