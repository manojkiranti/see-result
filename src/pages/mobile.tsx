import Head from "next/head";
import { Poppins } from 'next/font/google'
import Slider from 'react-slick'
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})
export default function Mobile() {
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
              <div style={{ visibility: 'hidden', opacity: 0, display: "none" }}>
                <h2>Check SEE Result 2079 with Marksheet via NIC Asia Bank</h2>
                <p>Visit NIC Asia Bank official website to access your SEE Result 2079 with marksheet.</p>
              </div>
              <div className="banner-text">
                {/* <h6 className="text-sub-title"><span className="text-primary"># </span>Coming Soon</h6> */}
                <h1 className="font-bold fs">
                  For the first time, Get SEE Result in<span className="text-primary"> MoBank App.</span>
                </h1>
                {/* <p>NIC ASIA Bank offers facility to check SEE result of your student through MoBank.</p> */}
                {/* <ul className="steps">
                  <li>
                      <a href="https://eservice.nicasiabank.com/see-result/pre-registration" target="_blank">
                        <div className="step-icon">
                          <img src="/img/verify.png" alt="" />
                        </div>
                        <div  className="step-text">
                          <h6> Pre Register:</h6>
                          <p>
                            Register your basic details to receive the results via SMS once they are published.
                          </p>
                        </div>
                      </a>
                  </li>
                  <li>
                    <a href="https://eservice.nicasiabank.com/see-result/pre-registration" target="_blank">
                      <div className="step-icon">
                        <img src="/img/notepad.png" alt="" />
                      </div>
                      <div className="step-text">
                        <h6>Check Result:</h6>
                        <p>
                          You can input your basic details online and obtain the result.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul> */}
                 <div className="mt-8 mb-4 max-[767px]:mb-9 text-content">
                  {/* <a href="https://eservice.nicasiabank.com/see-result/pre-registration" className="custom-btn" target="_blank">
                    View Result
                  </a> */}
                  <h2>Coming Soon</h2>
                  <h2>Coming Soon</h2>
                </div>
                
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
                      {/* <div className="slider-image">
                        <img src="/img/result-img2.png" alt="" />
                      </div> */}
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