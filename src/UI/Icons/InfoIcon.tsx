import Svg, { Path, G } from 'react-native-svg';

const InfoIcon = () => {
  return (
    <>
      <Svg width={22} height={15} viewBox="0 0 18 12" fill="none" className="w-4 h-5 mt-1 ml-1">
        <G opacity="0.5">
          <Path
            d="M5.99977 10.4521C8.29454 10.4521 10.1548 8.59179 10.1548 6.29702C10.1548 4.00225 8.29454 2.14197 5.99977 2.14197C3.705 2.14197 1.84473 4.00225 1.84473 6.29702C1.84473 8.59179 3.705 10.4521 5.99977 10.4521Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path d="M6 8.35239L6 5.71777" stroke="white" strokeLinecap="square" strokeLinejoin="round" />
          <Path d="M6 4.29639H6.00667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </G>
      </Svg>
    </>
  );
};

export default InfoIcon;
