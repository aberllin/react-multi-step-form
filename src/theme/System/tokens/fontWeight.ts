const fontWeight = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type SystemFontWeightMap = typeof fontWeight;
export type SystemFontWeight = keyof SystemFontWeightMap;
export default fontWeight;
