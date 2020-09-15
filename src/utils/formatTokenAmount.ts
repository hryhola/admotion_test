const addSpaces = (x: number) => {
  let parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};
export const formatTokenAmount = (
  value: string,
  decimals: number,
  newDecimal: number = decimals
) => {
  if (value.length < decimals) {
    return value;
  }
  const integerPart = value.slice(0, value.length - decimals) || '0';
  const otherPart = value.slice(value.length - decimals, value.length);
  const number = parseFloat(integerPart + '.' + otherPart.slice(0, newDecimal)); // Removing zeros at the end

  return addSpaces(number);
};
