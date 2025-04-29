import React from 'react'
import ParaText from '../../../components/common/ParaText';
import HeadText from '../../../components/common/HeadText';

const Banner = () => {
  return (
    <div className="bgprimary py80">
      <div className="container mx-auto">
        <ParaText
          text="Home >"
          text2="About"
          text3=""
          secid="SA1003"
          spc=""
          size="md"
          color="white"
          custom={false}
          brs={false}
          className=""
        />
        <HeadText
          text="About Us"
          text2=""
          text3=""
          secid="SP1002"
          spc=""
          heading="head2"
          size="md"
          color="white"
          custom={false}
          brs={false}
          className=""
        />
      </div>
    </div>
  );
}

export default Banner
