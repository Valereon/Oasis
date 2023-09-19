const smallFormatter = Intl.NumberFormat('en', {notation: 'compact', minimumFractionDigits: 2, maximumFractionDigits: 2});
const largeFormatter = Intl.NumberFormat('en', {notation: 'scientific', minimumFractionDigits: 2, maximumFractionDigits: 2});

export function numDisplay(num) {
    if (num < 1000) return num;
    else if (num < 1E15) return smallFormatter.format(num);
    else return largeFormatter.format(num);
}