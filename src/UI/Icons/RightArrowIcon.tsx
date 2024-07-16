import Svg, { Path, ClipPath, Defs, Rect, G } from 'react-native-svg';

const RightArrowIcon = () => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <G clipPath="url(#clip0_352_1681)">
          <Path d="M4.39 12.7456L9.56333 7.57224L4.39 2.39891C3.87 1.87891 3.87 1.03891 4.39 0.518906C4.91 -0.00109373 5.75 -0.00109373 6.27 0.518906L12.39 6.63891C12.91 7.15891 12.91 7.99891 12.39 8.51891L6.27 14.6389C5.75 15.1589 4.91 15.1589 4.39 14.6389C3.88333 14.1189 3.87 13.2656 4.39 12.7456Z" fill="#FFF2F0"/>
      </G>
      <Defs>
          <ClipPath id="clip0_352_1681">
              <Rect width="15" height="15" fill="white"/>
          </ClipPath>
      </Defs>
    </Svg>
    );
}

export default RightArrowIcon;
