// Export Compound Interest Function Bellow
export function compound_interest(p, r, n, t){
    let amount = p * Math.pow((1 + (r / 100) / n), (n * t));
     
    let CI = amount - p;

    return CI;
}