export const floatToBRL = (price = 0) =>
  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    price,
  );