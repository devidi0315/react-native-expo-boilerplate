import { TextProps, TextStyle } from 'react-native';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { BaseTextVariant, FontWeight, getFontFamily } from './util';

interface BaseTextProps extends TextProps {
  variant?: BaseTextVariant;
  weight?: FontWeight;
}

const BaseText = ({ variant = 'body1', weight, style, ...props }: BaseTextProps) => {
  const theme = useTheme();

  const textStyle = theme.typography[variant] ?? theme.typography.body1;
  const { fontFamily, weight: fontWeight } = getFontFamily(
    textStyle.fontFamily,
    weight ?? (textStyle.fontWeight as FontWeight),
  );

  return (
    <Text
      {...props}
      style={[textStyle as TextStyle, { fontFamily: fontFamily, fontWeight: fontWeight }, style]}
    />
  );
};

const getBaseText = (variant: BaseTextVariant) => {
  const Component = (props: BaseTextProps) => <BaseText {...props} variant={variant} />;
  Component.displayName = 'BaseText';
  return Component;
};

export const H1 = getBaseText('h1');
export const H2 = getBaseText('h2');
export const H3 = getBaseText('h3');
export const H4 = getBaseText('h4');
export const Body1 = getBaseText('body1');
export const Body2 = getBaseText('body2');
