export const maskFloat = (maxIntDgts?:number) => {
    
    return (value:string) => {

        // Caso o valor seja apenas números inteiros
        if(/^\d+$/.test(value)) {

            // Verifica se o valor excede o limite de inteiros
            if(maxIntDgts !== undefined && value.length > maxIntDgts) {
                const intPart = value.slice(0, maxIntDgts); // Parte inteira com base no limite de inteiros
                const decimalPart = value.slice(maxIntDgts); // pega a parte que será a decimal (depois do index do número limitador de inteiros em diante)
                value = `${intPart}.${decimalPart}`; // Retorna o valor formatando com ponto entre as partes inteira e decimal
            }
            return value;

        } else { // se for uma string

            /*Verifica se o valor excede o limite de caracteres permitidos com base 
            no máximo de inteiros definido + 3 (o ponto e as 2 casas decimais)
            */
            if(maxIntDgts && value.length > maxIntDgts + 3) {
                return value.slice(0, maxIntDgts + 3); // mantém a quantidade máxima de caracteres no input
            }

            value = value.replace(/[^0-9,\.]/g, '') // Remove qualquer caractere que não seja número, vírgula ou ponto
            value = value.replace(',', '.') // Substitui a vírgula por ponto
            
            const parts = value.split('.');
            if (parts.length > 2) {
                return parts[0] + '.' + parts.slice(1).join('');
            }
            return value;
        }
    }
}