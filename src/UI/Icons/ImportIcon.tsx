import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const ImportIcon = () => {
  return (
    <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" className='mr-2'>
      <G clip-path="url(#clip0_576_1273)">
        <Path
          d="M19.25 21H5.75C5.55109 21 5.36032 20.921 5.21967 20.7803C5.07902 20.6397 5 20.4489 5 20.25V3.75C5 3.55109 5.07902 3.36032 5.21967 3.21967C5.36032 3.07902 5.55109 3 5.75 3H14.75L20 8.25V20.25C20 20.4489 19.921 20.6397 19.7803 20.7803C19.6397 20.921 19.4489 21 19.25 21Z"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.75 3V8.25H20"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.25 13.5L12.5 11.25L14.75 13.5"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5 17.25V11.25"
          stroke="rgba(250, 250, 250, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_576_1273">
          <Rect width="24" height="24" fill="white" transform="translate(0.5)"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ImportIcon;
