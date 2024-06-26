import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from 'next/image';
import style from "@/styles/Products_Painel.module.css"
import '@splidejs/splide/dist/css/splide.min.css';

const SplideComponent = () => {
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      height: '190px',
      width: '100%',    
      perPage: 3,
      autoScroll: {
        pauseOnHover: false,
        speed: 0.5,
      },
    });

    splide.mount({ AutoScroll });
  }, []);

  return (
      <div className='splide'>
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <div>
                <Image />
                <div>1</div>
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <Image />
                <div>2</div>
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <Image />
                <div>3</div>
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <Image />
                <div>4</div>
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <Image />
                <div>5</div>
              </div>
            </li>
            <li className="splide__slide">
              <div>
                <Image />
                <div>6</div>
              </div>
            </li>
            {/* Adicione mais slides conforme necessário */}
          </ul>
        </div>
      </div>
  );
};

export default SplideComponent;
