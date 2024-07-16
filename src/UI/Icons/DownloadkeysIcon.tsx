import Svg, { ClipPath, Defs, Rect, G, Path } from 'react-native-svg';

const DownloadKeysIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" className='mr-2'>
      <G clip-path="url(#clip0_23_6160)">
        <Path
          d="M15.7656 4.5H19.5156V8.25"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.26562 19.5H4.51562V15.75"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.5156 15.75V19.5H15.7656"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.51562 8.25V4.5H8.26562"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_23_6160">
          <Rect width="24" height="24" fill="white" transform="translate(0.015625)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default DownloadKeysIcon;
