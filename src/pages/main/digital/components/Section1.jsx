import React from "react";
import HeadText from "../../../../components/common/HeadText";
import ParaText from "../../../../components/common/ParaText";

const Section1 = () => {
  return (
    <div className="bg_hero py60 md-py40 sm-py30">
      <div className="container mx-auto">
        <ParaText
          text="All Digitals"
          text2=""
          text3=""
          secid="HR1002"
          spc=""
          size="md"
          color="gray"
          custom={false}
          brs={false}
          className=""
        />
        <HeadText
          text="Digital"
          text2="Systems"
          text3=""
          secid="HR1002"
          spc="v1"
          heading="head4"
          size="sm"
          color="gray"
          custom={false}
          brs={false}
          className=""
        />
        <div className="mtpx20 table-w">
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
                <td className="fsize13 textforth gap-5 table-colsm">
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    stroke="gray"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Section1;
