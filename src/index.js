module.exports = function toReadable (number) {
  
    // возвращаемое значение
    let returnNumber;

    let readableNumbers = [ 
                            ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                             'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
                            ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred']
                          ];

    let strNumber = '' + number;
    let strNumberLenght = strNumber.length;

    switch (strNumberLenght) {

        case 1 :

            returnNumber = readableNumbers[0][number];
            break;
        
        case 2 :

            if (+strNumber[0] === 1) {
                returnNumber = readableNumbers[0][number];
            } 
            else 
            {
                if (+strNumber[1] === 0) {
                    returnNumber = readableNumbers[1][+strNumber[0]];
                }
                else 
                {
                    returnNumber = readableNumbers[1][+strNumber[0]] + ' ' + readableNumbers[0][+strNumber[1]];
                }
            }
            break;

        case 3 :

            let hundred = readableNumbers[0][+strNumber[0]] + ' hundred'; 

            if (+strNumber[1] === 0) {
                if (+strNumber[2] === 0) {
                    returnNumber = hundred;
                } 
                else 
                {
                    returnNumber = hundred + ' ' + readableNumbers[0][+strNumber[2]];
                }
            }
            else 
            {
                if (+strNumber[2] === 0) {
                    returnNumber = hundred + ' ' + readableNumbers[1][+strNumber[1]];
                }
                else 
                {
                    if (+strNumber[1] === 1) {
                        returnNumber = hundred + ' ' + readableNumbers[0][ +(strNumber[1] + strNumber[2]) ];
                    }
                    else 
                    {
                        returnNumber = hundred + ' ' + readableNumbers[1][+strNumber[1]] + ' ' + readableNumbers[0][+strNumber[2]];
                    }
                }
            }

            break;
        
        default :
            returnNumber = 'The number is incorrect';
            
    }

    return returnNumber;
}
