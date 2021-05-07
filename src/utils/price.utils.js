export const numberToBRL = (price = 0) => new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price);

export const getPercentageIncrease = (originalNumber, newNumber) => (newNumber - originalNumber) / (originalNumber) * 100;

export const getPercentageDecrease = (originalNumber, newNumber) => (originalNumber - newNumber) / (originalNumber) * 100;