import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const ClipboardIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" className="mr-2">
      <G clip-path="url(#clip0_23_6157)">
        <Path
          d="M16.5938 15.75H21.0938V3.75H9.09375V8.25"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.5938 8.25H4.59375V20.25H16.5938V8.25Z"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_23_6157">
          <Rect width="24" height="24" fill="white" transform="translate(0.84375)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ClipboardIcon;
