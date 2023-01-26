function convertToRoman(num) {
    var romanString = "",
        output = [],
        sNumber = num.toString();
    
    for (let i = 0; i < sNumber.length; i++) {
        output.push(+sNumber.charAt(i));        
    }

    var digit = output.length;
    // Thousands
    if (digit >= 4) {
        if(output[digit-4] <= 3){
            for (let i = 0; i < output[digit-4]; i++) {
                romanString = romanString + "M";
            }
        }
    }

    // Hundreds
    if (digit >= 3){
        if(output[digit-3] <= 3){
            for (let i = 0; i < output[digit-3]; i++) {
                romanString = romanString + "C";
            }
        } else if (output[digit-3] == 4) {
            romanString = romanString + "CD";
        } else if (output[digit-3] == 5) {
            romanString = romanString + "D";
        } else if (output[digit-3] >= 6 && output[digit-3] < 9) {
            romanString = romanString + "D";
            for (let i = 5; i < output[digit-3]; i++) {
                romanString = romanString + "C";
            }
        } else if (output[digit-3] == 9) {
            romanString = romanString + "CM";
        }
    }

    // Tens
    if (digit >= 2){
        if(output[digit-2] <= 3){
            for (let i = 0; i < output[digit-2]; i++) {
                romanString = romanString + "X";
            }
        } else if (output[digit-2] == 4) {
            romanString = romanString + "XL";
        } else if (output[digit-2] == 5) {
            romanString = romanString + "L";
        } else if (output[digit-2] >= 6 && output[digit-2] < 9) {
            romanString = romanString + "L";
            for (let i = 5; i < output[digit-2]; i++) {
                romanString = romanString + "X";
            }
        } else if (output[digit-2] == 9) {
            romanString = romanString + "XC";
        }
    }

    // Ones
    if(digit >= 1){
        if(output[digit-1] <= 3){
            for (let i = 0; i < output[digit-1]; i++) {
                romanString = romanString + "I";
            }
        } else if (output[digit-1] == 4) {
            romanString = romanString + "IV";
        } else if (output[digit-1] == 5) {
            romanString = romanString + "V";
        } else if (output[digit-1] >= 6 && output[digit-1] < 9) {
            romanString = romanString + "V";
            for (let i = 5; i < output[digit-1]; i++) {
                romanString = romanString + "I";
            }
        } else if (output[digit-1] == 9) {
            romanString = romanString + "IX";
        }
    }
    
    return romanString;
}
   
console.log(convertToRoman(3257));