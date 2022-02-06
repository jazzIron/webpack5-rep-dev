import { css } from '@emotion/react';

export const fonts = {
  basic: css`
    font-size: 16px;
    font-family: 'gothic';
  `,
};

export type IFont = keyof typeof fonts;
