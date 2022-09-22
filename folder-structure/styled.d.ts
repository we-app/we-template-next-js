import 'styled-components';
import { Theme } from '@theming/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
