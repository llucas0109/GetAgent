import style from "@/styles/bingads.module.css"
import NavBar from "@/components/NavBar"
import Products from "@/components/Products_Painel.js"

export default function BingAds(){

  return(
    <>
      <main className={style.main_area}>
      <div className={style.StillvideoWord}>
        <video
        className={style.videoWord}
        width="100%"
        autoPlay
        muted
        playsInline
        loop
        src="/background-1.mp4"
            />
      </div>
        <NavBar></NavBar>
        <Products></Products>
      </main> 
    </>
  )
}