class ATM {
    private balance: number;
  
    constructor(initialBalance: number) {
      this.balance = initialBalance;
    }
  
    checkBalance(): number {
      return this.balance;
    }
  
    withdraw(amount: number): string {
      if (amount <= 0) {
        return "Invalid amount. Please enter a positive value.";
      }
      if (amount > this.balance) {
        return "Insufficient balance. Please enter a lower amount.";
      }
  
      this.balance -= amount;
      return `Successfully withdrawn $${amount}. Current balance: $${this.balance}`;
    }
  
    deposit(amount: number): string {
      if (amount <= 0) {
        return "Invalid amount. Please enter a positive value.";
      }
  
      this.balance += amount;
      return `Successfully deposited $${amount}. Current balance: $${this.balance}`;
    }
  }
  
  // Usage
  const atm = new ATM(1000); 
  console.log(atm.checkBalance());       
  console.log(atm.withdraw(500));        
  console.log(atm.checkBalance());      
  console.log(atm.withdraw(1000));       
  console.log(atm.deposit(200));         
  console.log(atm.checkBalance());      
  console.log(atm.withdraw(-100)); 