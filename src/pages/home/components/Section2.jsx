import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".hero_about:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".hero_about:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
        ease: "power3.out",
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        scrub: true,
        markers: true,
        animation: animation,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery relative">
      <div className="flex sm-flex-column-reverse sm-py50">
        <div className="w-50 sm-w-full">
          <div className="h-100 w-full flex items-center">
            <div className="prpx40 md-prpx30 sm-prpx1 sm-py20">
              <p className="fsize18 textprimary mbpx18">Advanced</p>
              <h4 className="fsize38 font-600 my1 leading sm-fsize24 textgray">
                Product Marketers
              </h4>
              <p className="fsize14 md-fsize13 sm-fsize13 mtpx24 textgray font-400">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Lorem ipsum dolor sit amet consectetur.
                Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor
                sit amet consectetur. Egestas euismod nec sit sed massa turpis
                in. Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                sit sed massa turpis in.
              </p>
            </div>
          </div>
          <div className="h-100 w-full flex items-center">
            <div className="prpx40 md-prpx30 sm-prpx1 sm-py20">
              <p className="fsize18 textprimary mbpx28">Advanced</p>
              <h4 className="fsize38 font-600 my1 leading sm-fsize24 textdark">
                Product Marketers
              </h4>
              <p className="fsize16 md-fsize13 sm-fsize13 mtpx24 textgray">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Lorem ipsum dolor sit amet consectetur.
                Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor
                sit amet consectetur. Egestas euismod nec sit sed massa turpis
                in. Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                sit sed massa turpis in.
              </p>
            </div>
          </div>
          <div className="h-100 w-full flex items-center">
            <div className="prpx40 md-prpx30 sm-prpx1 sm-py20">
              <p className="fsize18 textprimary mbpx28">Advanced</p>
              <h4 className="fsize38 font-600 my1 leading sm-fsize24 textdark">
                Product Marketers
              </h4>
              <p className="fsize16 md-fsize13 sm-fsize13 mtpx24 textgray">
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Lorem ipsum dolor sit amet consectetur.
                Egestas euismod nec sit sed massa turpis in. Lorem ipsum dolor
                sit amet consectetur. Egestas euismod nec sit sed massa turpis
                in. Lorem ipsum dolor sit amet consectetur. Egestas euismod nec
                sit sed massa turpis in.
              </p>
            </div>
          </div>
        </div>
        <div className="w-50 sm-w-full">
          <div className="w-full h-100 right flex items-center">
            <div className="w-full h-image relative">
              <img
                src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                className="w-full h-image hero_about absolute object-cover"
                alt="Beautiful nature scenery"
              />
              <img
                src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
                className="w-full h-image hero_about absolute object-cover"
                alt="Vibrant landscape"
              />
              <img
                src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
                className="w-full h-image hero_about absolute object-cover"
                alt="Stunning mountain view"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
