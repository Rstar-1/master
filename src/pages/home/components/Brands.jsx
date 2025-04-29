import React from "react";
import Images from "../../../components/common/Images";

const Brands = () => {
  const data = [
    {
      image: "https://images.icon-icons.com/171/PNG/512/html5_23329.png",
    },
    {
      image:
        "https://images.icon-icons.com/2107/PNG/512/file_type_css_icon_130661.png",
    },
    {
      image:
        "https://images.icon-icons.com/2107/PNG/512/file_type_js_official_icon_130509.png",
    },
    {
      image:
        "https://images.icon-icons.com/2415/PNG/512/react_original_logo_icon_146374.png",
    },
    {
      image:
        "https://images.icon-icons.com/2107/PNG/512/file_type_vue_icon_130078.png",
    },
    {
      image:
        "https://images.icon-icons.com/2148/PNG/512/nextjs_icon_132160.png",
    },
    {
      image:
        "https://images.icon-icons.com/2107/PNG/512/file_type_git_icon_130581.png",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-7 sm-grid-cols-3 gap-12">
        {data?.map?.((e, index) => {
          return (
            <div key={index}>
              <Images
                source={e?.image}
                imgfit="v1"
                imgHeight=""
                imgScale="v1"
                imgRound="v1"
                className="w-full brand_img"
                alt={e?.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
