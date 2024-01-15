function convertCurrency(event) {
    event.preventDefault(); 
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('exchange').value;
    const exchangeRates = {
      usd: 0.30,   
      dinar: 0.15, 
      nis: 1      
    };
    
    const result = amount * exchangeRates[currency];
    document.querySelector('.result').textContent = `Equivalent value: ${result.toFixed(2)} ${currency.toUpperCase()}`;
  }

  
