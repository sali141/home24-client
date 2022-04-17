export const currencyFormatter = (intlNumberFormatValues:string[]) => {
  return new Intl.NumberFormat(intlNumberFormatValues[0], {
    style: intlNumberFormatValues[1],
    currency: intlNumberFormatValues[2],
  });
} 