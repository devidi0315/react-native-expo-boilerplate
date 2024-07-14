import 'styled-components/native';
import baseTheme from './base';

type BaseTheme = typeof baseTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends BaseTheme {}
}
