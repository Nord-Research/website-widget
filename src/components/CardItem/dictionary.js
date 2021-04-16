const SYMBOLS = {
  dolar: 'dólar',
  sep: 's&p',
  poup: 'poupança',
};

export const getSymbolFromDictionary = (symbol) => SYMBOLS[symbol] ?? symbol;