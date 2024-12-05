export const maskFloat = (value:string, dotPos?:number, maxIntDgt?:number) => {
    let polish = value;

    if(/^\d+$/.test(value)) {

        if(dotPos) {
            polish = polish.slice(0, dotPos) + '.' + polish.slice(dotPos);
        }

        if(maxIntDgt && parseInt(polish) > maxIntDgt) {
            polish = polish.slice(0, maxIntDgt) + '.' + polish.slice(maxIntDgt);
        }

        return parseFloat(polish).toFixed(2)
    }
    /*
    const floatInAmericanFormat = value.replace(/[^0-9,\.]/g, '').replace(',', '.');
    const formattedDecimal = parseFloat((floatInAmericanFormat)).toFixed(2);

    return formattedDecimal;
    */
}
