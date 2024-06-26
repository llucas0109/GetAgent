import style from "@/styles/NavBar.module.css"
import Image from "next/image";

export default function Nav(){

  return(
    <>
      <nav className={style.Nav}>
        <div className={style.logo}>
          <a className="main-logo" >
            <img src="/LOGO-icon.png" style={{maxHeight: "38px"}} alt="Logo" />
          </a>
          <a className="main-logo" >
            <img src="/LOGO-Agent5.png" style={{maxHeight: "38px"}} alt="Logo" />
          </a>
        </div>
        <ul className={style.NavBar}>
          <li><a>HOME</a></li>
          <li><a>BUY ACCOUNT</a></li>
          <li><a>Q&A</a></li>
          <li><a>PROOF</a></li>
          <li><a>FEEDBACK</a></li>
          <li style={{marginRight: "0px"}}><a>CONTACT</a></li>
        </ul>
        <div className={style.divContact}>
          <ul className={style.ulContact}>
            <li className={style.liContact}>
              <a href="@">CONTACT<Image className={style.ImageContact} width={28} height={24} src="/arrow.svg" priority alt="arrow" /> </a>
            </li> 
          </ul>
        </div>
        <div className={style.CircleBar}>
          <Image
            src="/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Menu"
            width={48}
            height={24}
            priority
          />
        </div>
          <div className={style.menu_box}>
            <div className={style.menu_box_content}>
              <div className={style.menu_box_content_logo}>
                <a className="main-logo" >
                  <img src="/LOGO-icon.png" style={{maxHeight: "38px"}} alt="Logo" />
                </a>
                <a className="main-logo" >
                  <img src="/LOGO-Agent5.png" style={{maxHeight: "38px"}} alt="Logo" />
                </a>
              </div>
              <div className={style.menu_box_content_Exit_icon}>
                <Image
                src="/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                alt="Menu"
                width={48}
                height={24}
                priority
                />
              </div>
              <div className={style.menu_outer}>
                <ul id="menu-main-menu" class="navigation">
                  <li id="menu-item-903" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-903">
                      <a href="/" aria-current="page">HOME</a>
                  </li>
                  <li id="menu-item-1450" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1450">
                      <a href="https://bingads.agency/buy-account/">BUY ACCOUNT</a>
                  </li>
                  <li id="menu-item-1449" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1449">
                      <a href="https://bingads.agency/q-a/">Q&A</a>
                  </li>
                  <li id="menu-item-1451" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1451">
                      <a href="https://bingads.agency/proof/">PROOF</a>
                  </li>
                  <li id="menu-item-1448" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1448">
                      <a href="https://bingads.agency/feedback/">FEEDBACK</a>
                  </li>
                  <li id="menu-item-3443" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3443">
                      <a href="https://bingads.agency/contact/">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </nav> 
    </>
  )
}