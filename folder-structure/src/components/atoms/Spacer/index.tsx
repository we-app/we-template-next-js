import styled from 'styled-components';
import { css } from 'styled-components';

type SpacingType = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type SpacerProps = {
  orientation?: 'vertical' | 'horizontal';
  spacing?: SpacingType | number;
};

const getSpacing = (spacing: SpacingType | number): number => {
  switch (spacing) {
    case 'xxs':
      return 1;
    case 'xs':
      return 2;
    case 'sm':
      return 3;
    case 'md':
      return 4;
    case 'lg':
      return 5;
    case 'xl':
      return 6;
    case 'xxl':
      return 7;
    default:
      return spacing;
  }
};

const StyledSpacer = styled.div<SpacerProps>`
  ${({ orientation, spacing }) => css`
    ${orientation === 'vertical' ? 'height' : 'width'}: ${getSpacing(
      spacing ?? 1
    ) * 8}px;
  `}
`;

export const Spacer: React.FC<SpacerProps> = ({
  orientation = 'vertical',
  spacing
}) => <StyledSpacer orientation={orientation} spacing={spacing} />;
