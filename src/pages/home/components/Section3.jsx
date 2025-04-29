import React from "react";
import Images from "../../../components/common/Images";
import HeadSec from "../../../components/common/HeadSec";

const Section3 = () => {
  const data = [
    {
      image:
        "http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg",
    },
    {
      image:
        "http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg",
    },
    {
      image:
        "http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg",
    },
    {
      image:
        "http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg",
    },
    {
      image:
        "http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg",
    },
    {
      image:
        "http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg",
    },
  ];
  return (
    <div className="container mx-auto">
      <HeadSec
        text="Heading"
        text2="Lorem Ipsum"
        text3="Know More"
        version="v1"
      />
      <div className="grid grid-cols-3 gap-12 mtpx28 md-mtpx15 sm-mtpx15">
        {data?.map?.((e, index) => {
          return (
            <div key={index}>
              <Images
                source={e?.image}
                imgfit="v2"
                imgHeight="v5"
                imgScale="v1"
                imgRound="v1"
                className="w-full object-cover"
                alt={e?.image}
              />
            </div>
          );
        })}
      </div>
      {/* <div className="grid grid-cols-4 md-grid-cols-4 sm-grid-cols-1 items-start gap-12 mtpx28 md-mtpx15 sm-mtpx15">
        <div className="grid grid-cols-1 gap-12">
          {data?.slice(0, 2)?.map?.((e,index) => {
            return (
              <div key={index}>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v4"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-12 mtpx50 md-mtpx1 sm-mtpx1">
          {data?.slice(2, 4)?.map?.((e,i) => {
            return (
              <div key={i}>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v4"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-12">
          {data?.slice(4, 6)?.map?.((e,index) => {
            return (
              <div key={index}>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v4"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-12 mtpx50 md-mtpx1 sm-mtpx1">
          {data?.slice(6, 8)?.map?.((e,index) => {
            return (
              <div key={index}>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v4"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
      </div> */}
      {/* <div className="grid grid-cols-5 md-grid-cols-5 sm-grid-cols-1 items-center gap-12">
        <div className="grid grid-cols-1 gap-12">
          {data?.slice(0, 2)?.map?.((e) => {
            return (
              <div>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v5"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-12">
          {data?.slice(1, 4)?.map?.((e) => {
            return (
              <div>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v5"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-12">
          {data?.slice(2, 6)?.map?.((e) => {
            return (
              <div>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v5"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-12">
          {data?.slice(5, 8)?.map?.((e) => {
            return (
              <div>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v5"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 gap-12">
          {data?.slice(6)?.map?.((e) => {
            return (
              <div>
                <Images
                  source={e?.image}
                  imgfit="v2"
                  imgHeight="v5"
                  imgScale="v1"
                  imgRound="v1"
                  className="w-full object-cover"
                  alt={e?.image}
                />
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Section3;
