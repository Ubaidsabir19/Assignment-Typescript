class CurrencyConverter {
    private exchangeRates: Map<string, number>;
  
    constructor() {
      this.exchangeRates = new Map<string, number>();
      this.initializeExchangeRates();
    }
  
    private initializeExchangeRates(): void {
      
      this.exchangeRates.set("USD", 1); 
      this.exchangeRates.set("EUR", 0.85); 
      this.exchangeRates.set("GBP", 0.72); 

    }
  
    convert(amount: number, fromCurrency: string, toCurrency: string): number {
      const fromRate = this.exchangeRates.get(fromCurrency);
      const toRate = this.exchangeRates.get(toCurrency);
  
      if (!fromRate || !toRate) {
        throw new Error("Invalid currency.");
      }
  
      const convertedAmount = (amount / fromRate) * toRate;
      return convertedAmount;
    }
  }
  
  // Usage
  const converter = new CurrencyConverter();
  console.log(converter.convert(100, "USD", "EUR")); 
  console.log(converter.convert(50, "GBP", "USD")); 