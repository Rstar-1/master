import React from "react";
import ParaText from "../../../../components/common/ParaText";
import HeadText from "../../../../components/common/HeadText";

const Dashboard = () => {
  const MainDatas = [
    { title: "Website", count: "100" },
    { title: "Admin", count: "200" },
    { title: "Project", count: "1220" },
    { title: "Section", count: "1220" },
  ];
  return (
    <div>
      <div className="grid-cols-6 gap-12">
        <div className="bgprimary b-shadow rounded-5 flex items-center justify-center">
          <div className="center-div bgwhite rounded-full">
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
          </div>
        </div>
        {MainDatas.map((e, index) => {
          return (
            <div className="bgwhite b-shadow rounded-5 p20" key={index}>
              <HeadText
                text={e?.count}
                text2=""
                text3=""
                secid="HR1002"
                spc=""
                size="ssm"
                heading="head6"
                color="primary"
                custom={false}
                brs={false}
                className="font-500 leading"
              />
              <ParaText
                text={e?.title}
                text2=""
                text3=""
                secid="HR1002"
                spc=""
                size="sm"
                color="gray"
                custom={false}
                brs={false}
                className="font-500 mtpx5"
              />
            </div>
          );
        })}
        <div className="bgsecondary b-shadow rounded-5 flex items-center justify-center">
          <div className="center-div bgwhite rounded-full">
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
          </div>
        </div>
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
              <td className="fsize13 textforth font-300 table-collg">
                <p>New Digital Cards</p>
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
  );
};

export default Dashboard;
