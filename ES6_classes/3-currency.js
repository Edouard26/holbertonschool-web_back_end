class Currency {
    constructor(code, name) {
        // Type checking for the attributes
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }

        // Initializing attributes
        this._code = code;
        this._name = name;
    }

    // Getter and setter for code
    get code() {
        return this._code;
    }

    set code(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = value;
    }

    // Getter and setter for name
    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // Method to display the full currency
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}

// Example usage:
try {
    const currency = new Currency('USD', 'United States Dollar');
    console.log(currency.code); // Output: USD
    console.log(currency.name); // Output: United States Dollar
    console.log(currency.displayFullCurrency()); // Output: United States Dollar (USD)

    currency.code = 'EUR';
    currency.name = 'Euro';

    console.log(currency.code); // Output: EUR
    console.log(currency.name); // Output: Euro
    console.log(currency.displayFullCurrency()); // Output: Euro (EUR)
} catch (error) {
    console.error(error.message);
}
