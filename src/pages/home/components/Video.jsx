import React, { useRef } from "react";
import ParaText from "../../../components/common/ParaText";
import HeadText from "../../../components/common/HeadText";

const Video = () => {
  const videoRef = useRef([]);
  const handleMouseEnter = (videoid) => {
    if (videoRef.current[videoid]) {
      videoRef.current[videoid].play();
    }
  };
  const handleMouseLeave = (videoid) => {
    if (videoRef.current[videoid]) {
      videoRef.current[videoid].pause();
    }
  };

  const cards = [
    {
      name: "Product Marketers 1",
      description: "Lorem ipsum dolor sit amet consectetur.",
      video: "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Chat.webm",
      videoid1: "1",
      name2: "Product Marketers 2",
      description3: "Lorem ipsum dolor sit amet consectetur.",
      video4:
        "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Marketing (1).webm",
      videoid2: 2,
    },
    {
      name: "Product Marketers 3",
      description: "Lorem ipsum dolor sit amet consectetur.",
      video:
        "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Brand%20(2).webm",
      videoid1: "3",
      name2: "Product Marketers 4",
      description3: "Lorem ipsum dolor sit amet consectetur.",
      video4:
        "https://cdn.jsdelivr.net/gh/madebykin/jasper/Jasper_Style%20(1).webm",
      videoid2: 4,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="w-full">
        {cards.map((e, index) => (
          <div key={index} className="w-full mbpx10">
            <div
              className={
                index % 2 === 0
                  ? "flex sm-block items-center gap-12"
                  : "flex sm-block flex-row-reverse items-center gap-12"
              }
            >
              <div
                className="w-60 sm-w-full"
                onMouseEnter={() => handleMouseEnter(e.videoid1)}
                onMouseLeave={() => handleMouseLeave(e.videoid1)}
              >
                <div className="p30 bg-f6f5f3 rounded-5">
                  <HeadText
                    text={e?.name}
                    text2=""
                    text3=""
                    secid="SP1002"
                    spc=""
                    heading="head5"
                    size="ssm"
                    color="gray"
                    custom={false}
                    brs={false}
                    className="leading"
                  />
                  <ParaText
                    text={e?.description}
                    text2=""
                    text3=""
                    secid="SA1003"
                    spc=""
                    size="md"
                    color="gray"
                    custom={false}
                    brs={false}
                    className="mtpx6"
                  />
                  <div style={{ width: "100%", height: "300px" }}>
                    <video
                      ref={(el) => (videoRef.current[e.videoid1] = el)} // Reference the first video
                      src={e.video}
                      width="100%"
                      height="300"
                      muted
                      loop
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-40 sm-w-full sm-mtpx14"
                onMouseEnter={() => handleMouseEnter(e.videoid2)}
                onMouseLeave={() => handleMouseLeave(e.videoid2)}
              >
                <div className="p30 bg-f6f5f3 rounded-5">
                  <HeadText
                    text={e?.name2}
                    text2=""
                    text3=""
                    secid="SP1002"
                    spc=""
                    heading="head5"
                    size="ssm"
                    color="gray"
                    custom={false}
                    brs={false}
                    className="leading"
                  />
                  <ParaText
                    text={e?.description3}
                    text2=""
                    text3=""
                    secid="SA1003"
                    spc=""
                    size="md"
                    color="gray"
                    custom={false}
                    brs={false}
                    className="mtpx6"
                  />
                  <div style={{ width: "100%", height: "300px" }}>
                    <video
                      ref={(el) => (videoRef.current[e.videoid2] = el)} // Reference the second video
                      src={e.video4}
                      width="100%"
                      height="300"
                      muted
                      loop
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
