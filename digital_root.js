digital_root = (num) => {
    if(num>0 && num < 9){
        return num
    }

    let temp = 0
    let interimString = num.toString();
    for(let k=0; k<interimString.length;k++){
        temp = temp + (Number.parseInt)(interimString.charAt(k))
        num = temp;
    }

    return digital_root(num)
}
const result = digital_root(942)
console.log(result)