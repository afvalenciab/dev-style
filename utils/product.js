export const sizeList = ['S', 'M', 'L', 'XL'];
export const GENDER_TYPE = { ALL: 'ALL', MEN: 'M', WOMEN: 'W' };
export const priceFormatter = price => {
  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
  });
  return formatter.format(price);
};
