import { NavLink } from "react-router-dom"
import { IoLogoHtml5 } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import i18n from 'i18next';
import { useTranslation } from "react-i18next";

const MainNavigation: React.FC = () => {
  const { t } = useTranslation()
  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng)
  }


  return (
    <div className="mainNavigation-box">
      <div className='logo-box'>
        <NavLink to='/'>
          <IoLogoHtml5 className="logo-box_icon" />
        </NavLink>
      </div>
      <div className="navigation-box">
        <div className="navigation-box_path">
          <NavLink to='/about'>{t('navigation-about')}</NavLink>
          <NavLink to='/project'>{t('navigation-project')}</NavLink>
          <NavLink to='/contact'>{t('navigation-contact')}</NavLink>
        </div>
        <div className="navigation-box_tool">
          <div className="dropdown">
            <MdLanguage className="navigation-box_tool_icon dropbtn" />
            <div className="dropdown-content">
              <p><button onClick={() => changeLng('zh')}>中文</button></p>
              <p><button onClick={() => changeLng('en')}>ENG</button></p>
            </div>
          </div>
          <NavLink to='/auth'><CiLogout className="navigation-box_tool_icon" /></NavLink>
        </div>
      </div>
    </div >
  )
}


export default MainNavigation