import { css } from '@emotion/react';
import { fonts } from '@src/theme/Font';

export const cssx = {
  flexBtw: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexStart: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  flexBtwR: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenterR: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexStartR: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  flexEndR: css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `,
  title1: css`
    ${fonts.h0_B};
    margin-bottom: 20px;
  `,
  title2: css`
    ${fonts.h2_B};
    margin: 30px 0 20px;
  `,
  title3: css`
    ${fonts.h3_B};
    margin-bottom: 10px;
  `,
  bottomBtn: css`
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    button {
      width: 100%;
    }
  `,
  lineBox: css`
    /** 좌우 여백 없이 100% + 하단 굵은 보더 */
    position: relative;
    padding-bottom: 38px;
    background: #fff;
    &:after {
      content: '';
      position: absolute;
      left: -20px;
      bottom: 0;
      width: calc(100% + 40px);
      height: 8px;
      background-color: #f4f4f4;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
  `,
  fullWidth: css`
    /** 좌우 여백 없이 100% */
    margin-left: -20px;
    margin-right: -20px;
  `,
  lineArrow: css`
    /** 좌 글씨 우 > 하단 보더 */
    margin-left: -20px;
    margin-right: -20px;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 58px;
      padding-left: 20px;
      padding-right: 20px;
      border-bottom: 1px solid #e9e9e9;
      ${fonts.bd2_B};
    }
  `,
  lineList: css`
    /** 좌우 글씨 하단 보더 */
    > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      border-bottom: 1px solid #e9e9e9;
      .label {
        ${fonts.bd2_R};
        color: #606060;
      }
      .value {
        ${fonts.bd2_B};
      }
    }
  `,
  noLineList: css`
    > * {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      > *:nth-of-type(1) {
        ${fonts.bd2_R};
        color: #606060;
      }
      > *:nth-of-type(2) {
        ${fonts.bd2_B};
      }
    }
  `,
};
