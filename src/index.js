module.exports = function toReadable (number) {

    const zero_nineteen = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'];
    const ten_nineteen = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const derivative = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const strNum = number.toString();

    if (strNum.length === 3) {
        if (Number(strNum[1]) === 0) {
            if (Number(strNum[2]) === 0) {
                return zero_nineteen[Number(strNum[0])] + ' hundred';
            }
            return zero_nineteen[Number(strNum[0])] + ' hundred ' + zero_nineteen[Number(strNum[2])];
        }
        if (Number(strNum[2]) === 0) {
            if (Number(strNum[1]) === 1) {
                return zero_nineteen[Number(strNum[0])] + ' hundred ' + ten_nineteen[Number(strNum[2])];
            } else if (Number(strNum[2]) === 0) {
                return zero_nineteen[Number(strNum[0])] + ' hundred ' + derivative[Number(strNum[1])];
            }
        }
        if (Number(strNum[1]) === 1) {
            return zero_nineteen[Number(strNum[0])] + ' hundred ' + ten_nineteen[Number(strNum[2])];
        }
        return zero_nineteen[Number(strNum[0])] + ' hundred ' + derivative[Number(strNum[1])] + ' ' +  zero_nineteen[Number(strNum[2])];
    } else if (strNum.length === 2) {
        if (number <= 19) {
            return ten_nineteen[Number(strNum[1])];
        }
        if (Number(strNum[1]) === 0) {
            return derivative[Number(strNum[0])];
        }
        return derivative[Number(strNum[0])] + ' ' + zero_nineteen[Number(strNum[1])];
    } else if (strNum.length === 1) {
        return zero_nineteen[number];
    }
}
