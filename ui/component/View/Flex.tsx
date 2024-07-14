import { useMemo } from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';

interface FlexProps extends ViewProps {
  flex?: number;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'center' | 'flex-end';
  wrap?: 'wrap' | 'nowrap';
  gap?: number;
}

const Flex = (props: FlexProps) => {
  const { direction, justify, align, wrap, gap, style, flex } = props;
  const mStyle = useMemo(
    () => getFlexStyle({ direction, justify, align, wrap, gap, style, flex }),
    [direction, justify, align, wrap, gap, style, flex],
  );

  return <View {...props} style={mStyle} />;
};

function getFlexStyle({ direction, justify, align, wrap, gap, style, flex }: FlexProps) {
  const flexStyle: ViewStyle = {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap: gap,
    flex: flex,
  };

  return [flexStyle, style];
}

export default Flex;
