export default function formatCurrency(num){
    return "GHC "+Number(num.toFixed(1)).toLocaleString()+" "
}