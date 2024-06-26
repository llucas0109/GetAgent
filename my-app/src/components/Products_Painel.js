import style from "@/styles/Products_Painel.module.css"
import Image from "next/image";
import SplideComponent from "./Carrousel.js";

export default function Nav(){

  return(
    <>
      <div className = {style.Painel}>
        <div className={style.Carrousel}>
          <SplideComponent></SplideComponent>
        </div>
        <ul className = {style.Painel_Products}>
          <li>
            <div>
              <Image />
              <div>1</div>
            </div>
          </li>
          <li>
            <div>
              <Image />
              <div>2</div>
            </div>
          </li>
          <li>
            <div>
              <Image />
              <div>3</div>
            </div>
          </li>
          <li>
            <div>
              <Image />
              <div>4</div>
            </div>
          </li>
          <li>
            <div>
              <Image />
              <div>5</div>
            </div>
          </li>
          <li>
            <div>
              <Image />
              <div>6</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}