function convert() {
    var value = parseFloat(document.getElementById('value').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    var result;

    if (fromUnit === 'meter' && toUnit === 'kilometer') {
      result = value / 1000;
    } else if (fromUnit === 'meter' && toUnit === 'mile') {
      result = value / 1609.34;
    } else if (fromUnit === 'kilometer' && toUnit === 'meter') {
      result = value * 1000;
    } else if (fromUnit === 'kilometer' && toUnit === 'mile') {
      result = value / 1.60934;
    } else if (fromUnit === 'mile' && toUnit === 'meter') {
      result = value * 1609.34;
    } else if (fromUnit === 'mile' && toUnit === 'kilometer') {
      result = value * 1.60934;
    } else {
      result = value;
    }

    document.getElementById('result').innerHTML = result.toFixed(2);
  }


