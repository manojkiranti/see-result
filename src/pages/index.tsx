import Head from "next/head";
import { Poppins } from 'next/font/google'
import Slider from 'react-slick'
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <main
      className={`${poppins.className}`}
    >
      <Head>
        <title>SEE Result 2079 | Marksheet | Symbol Number | NIC Asia Bank</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner-section">
        <div className="anim_line">
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
          <span><img src="/img/line.png" alt="line" /></span>
        </div>
        <div className="container">
          <div className='items-center row'>
            <div className="col-md-6">
              <div style={{visibility: 'hidden' ,opacity:0}}>
                  <h2>Check SEE Result 2079 with Marksheet via NIC Asia Bank</h2>
                 <p>Visit NIC Asia Bank's official website to access your SEE Result 2079 with marksheet.</p>
              </div>
              <div className="banner-text">
                <h1 className="font-bold fs">
                  Best way to <span className="text-primary">Get Your SEE Result.</span>
                </h1>
                <p>First time in Nepalese Banking Industry NIC ASIA Bank offers their valued customers to get SEE result of their childrens through NIC ASIA MoBank.</p>
                <ul className="steps">
                  <li>
                    <div className="step-icon">
                      <img src="/img/verify.png" alt="" />
                    </div>
                    <div className="step-text">
                        <h6><a href="https://eservice.nicasiabank.com/see-result/pre-registration" target="_blank"> Pre Register:</a></h6>
                        <p>
                          Register your basic details to receive the results via SMS once they are published.
                        </p>
                    </div>
                      
                  </li>
                  <li>
          
                    <div className="step-icon">
                      <img src="/img/notepad.png" alt="" />
                    </div>
                    <div className="step-text">
                        <h6><a href="https://eservice.nicasiabank.com/see-result/pre-registration" target="_blank">Check Result:</a></h6>
                        <p>
                          You can input your basic details online and obtain the result.
                        </p>
                    </div>
                  </li>
                </ul>
                <ul className="app-download-list">
                  <li>
                    <a href="https://apps.apple.com/qa/app/nic-asia-mobank/id670919765" target="_blank">
                      <img src="/img/appstore_red.png" alt="" className="app-initial" />
                      <img src="/img/appstore_white.png" alt="" className="app-hover" />
                    </a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.f1soft.nicasiamobilebanking&hl=en&gl=US" target="_blank">
                      <img src="/img/googleplay_red.png" alt="" className="app-initial" />
                      <img src="/img/googleplay_white.png" alt="" className="app-hover" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className='banner-image-content'>
                <div className="banner-image-wrapper">
                  <div className="banner-image">
                    <img src="/img/mobile.svg" alt="" />
                  </div>
                  <div className="banner-slider-images">
                    <Slider {...settings}>
                      <div className="slider-image">
                        <img src="/img/result-image.png" alt="" />
                      </div>
                      <div className="slider-image">
                        <img src="/img/result-img2.png" alt="" />
                      </div>
                    </Slider>
                  </div>
                  <div className="aside-img aside-img-top">
                    <div>
                      <img src="/img/download.png" alt="" />
                      <p>1M<small>+</small></p>
                    </div>

                  </div>
                  <div className="aside-img aside-img-btm">
                    <div>
                      <img src="/img/flash-sale.png" alt="" />
                      <p>Fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
