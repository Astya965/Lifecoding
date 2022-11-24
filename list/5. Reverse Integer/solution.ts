export const reverse = (x: number): number =>  {
    const isNegative = x < 0;
    const value = String(x).split('').reverse();
    if (isNegative) {
        value.pop();
    }
    const newNumber = Number(value.join(''));
    if (newNumber > Math.pow(2, 31) - 1 || newNumber < Math.pow(-2, 31)) {
        return 0;
    }

    return newNumber * Math.sign(x);
};

export const reverseWithLoop = (x: number): number => {
    const sign = Math.sign(x);
    x = Math.abs(x);

    let reversed = 0;
    while (x > 0) {
        const num = x % 10;
        x = Math.floor(x / 10);
        reversed *= 10;
        reversed += num;
    }
    if (reversed > Math.pow(2,31)) {
        return 0;
    }
    return reversed * sign;
};