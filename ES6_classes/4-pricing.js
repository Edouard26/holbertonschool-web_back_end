export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (typeof currency !== 'string') {
      throw new TypeError('Currency must be a string');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }
}
