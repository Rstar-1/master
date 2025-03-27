import React from "react";
import ParaText from "../../../components/common/ParaText";

const Frontend = () => {
  const MainData = [
    { href: "/mine", label: "Dashboard" },
    { href: "/builder", label: "Analytics" },
  ];
  const MainDatas = [
      { href: "/backend", label: "API" },
      { href: "/section", label: "Routes" },
      { href: "/backend", label: "Pages" },
      { href: "/frontend", label: "Components" },
  ];
  return (
    <div className="bg_hero py20 px40">
      <div className="bgwhite b-shadow p65 rounded-5"></div>
      <div className="flex w-full gap-12 mtpx20">
        <div className="w-20 bgwhite b-shadow rounded-5">
          <div className="px17 py15">
            <div className="grid-cols-1 gap-8">
              <ParaText
                text="Projects"
                text2=""
                text3=""
                secid="HR1002"
                spc=""
                size="md"
                color="primary"
                custom={false}
                brs={false}
                className="font-500"
              />
              {MainData.map((e, index) => (
                <div
                  className={
                    index === 0
                      ? "flex items-center gap-8 bgprimary py8 px15 rounded-5"
                      : "flex items-center gap-8 py6 px12"
                  }
                  key={index}
                >
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke={index === 0 ? "white" : "gray"}
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="flex"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <p
                    className={
                      index === 0
                        ? "textwhite font-400 fsize15"
                        : "textgray font-400 fsize15"
                    }
                  >
                    {e?.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid-cols-1 gap-8 mtpx12">
              <ParaText
                text="My Admin"
                text2=""
                text3=""
                secid="HR1002"
                spc=""
                size="md"
                color="primary"
                custom={false}
                brs={false}
                className="font-500"
              />
              {MainDatas.map((e, index) => (
                <div
                  className={
                    index === 4
                      ? "flex items-center gap-8 bgprimary py8 px15 rounded-5"
                      : "flex items-center gap-8 py6 px12"
                  }
                  key={index}
                >
                  <div className="">
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke={index === 4 ? "white" : "gray"}
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="flex"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <p
                    className={
                      index === 4
                        ? "textwhite font-400 fsize15"
                        : "textgray font-400 fsize15"
                    }
                  >
                    {e?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-80">
          <div className="grid-cols-5 gap-12">
            <div className="bgwhite b-shadow p50 rounded-5"></div>
            <div className="bgwhite b-shadow p50 rounded-5"></div>
            <div className="bgwhite b-shadow p50 rounded-5"></div>
            <div className="bgwhite b-shadow p50 rounded-5"></div>
            <div className="bgwhite b-shadow p50 rounded-5"></div>
          </div>
          <div className="table-w mtpx16">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>Image</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Title</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Created At</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-collg">
                    <p>Updated At</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>Status</p>
                  </th>
                  <th className="fsize13 textwhite font-300 table-colsm">
                    <p>Actions</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fsize13 textforth font-300 table-colsm">
                    <img
                      src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
                      className="table-img"
                      alt="table-img"
                    />
                  </td>
                  <td className="fsize13 textforth font-300 table-collg">
                    <p>New Digital Cards</p>
                  </td>
                  <td className="fsize13 textforth font-300 table-collg">
                    <p>12/12/2023</p>
                  </td>
                  <td className="fsize13 textforth font-300 table-collg">
                    <p>1/12/2023</p>
                  </td>
                  <td className="fsize13 textforth font-300 table-colsm">
                    <button className="border-0 cursor-pointer font-400 textsuccess rounded-20 fsize12 px12 py3 bg-light-success">
                      Publish
                    </button>
                  </td>
                  <td className="fsize13 textforth table-colsm">
                    <div className="flex items-center gap-5">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="gray"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="flex"
                      >
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                      </svg>
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="gray"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="flex mlpx5"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
