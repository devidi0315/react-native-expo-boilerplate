export type BaseTextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2';
export type FontWeightNumber = 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;
export type FontWeightStr =
  | 'Black'
  | 'ExtraBold'
  | 'Bold'
  | 'SemiBold'
  | 'Medium'
  | 'Regular'
  | 'Light'
  | 'ExtraLight'
  | 'Thin'
  | 'Regular';

export type FontWeight = FontWeightNumber | FontWeightStr;

const weightMap = {
  Black: '900',
  ExtraBold: '800',
  Bold: '700',
  SemiBold: '600',
  Medium: '500',
  Regular: '400',
  Light: '300',
  ExtraLight: '200',
  Thin: '100',
};

const numberWeightMap: Record<number, FontWeightStr> = {
  900: 'Black',
  800: 'ExtraBold',
  700: 'Bold',
  600: 'SemiBold',
  500: 'Medium',
  400: 'Regular',
  300: 'Light',
  200: 'ExtraLight',
  100: 'Thin',
};

export function getFontFamily(fontFamily: string, fontWeight?: FontWeight) {
  let weight = getFontWeight(fontWeight);

  return {
    fontFamily: `${fontFamily}-${weight}`,
    weight: getFontWeightNumber(weight),
  };
}

export function getFontWeight(weight: FontWeight = 'Regular'): FontWeightStr {
  if (!isNaN(+weight)) {
    return numberWeightMap[weight as FontWeightNumber] ?? 'Regular';
  }
  return weightMap[weight as FontWeightStr] ? (weight as FontWeightStr) : 'Regular';
}

export const getFontWeightNumber = (weight: FontWeight): FontWeightNumber => {
  if (weightMap[weight as FontWeightStr]) {
    return +weightMap[weight as FontWeightStr] as FontWeightNumber;
  }

  const numberWeight = +weight;

  if (numberWeightMap[numberWeight]) {
    return numberWeight as FontWeightNumber;
  }

  return +weightMap.Regular as FontWeightNumber;
};
