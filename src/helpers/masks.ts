export const maskFloat = (maxIntDgts?:number) => {
    
    return (value:any) => {

        // Caso o valor seja apenas números inteiros
        if(/^\d+$/.test(value)) {

            // Verifica se o valor excede o limite de inteiros
            if(maxIntDgts && value.length > maxIntDgts) {
                const intPart = value.slice(0, maxIntDgts); // Parte inteira limitada
                const decimalPart = value.slice(maxIntDgts); // Limita a parte decimal a 2 dígitos
                value = `${intPart}.${decimalPart}`; // Retorna o valor formatado com ponto
            }
            return value;

        } else { // se for uma string

            // Verifica se o valor excede o limite de caracteres permitidos
            if(maxIntDgts && value.length > maxIntDgts + 3) {
                return value.slice(0, maxIntDgts + 3); // mantém a quantidade máxima de caracteres no input
            }

            return value
                .replace(/[^0-9,\.]/g, '') // Remove qualquer caractere que não seja número, vírgula ou ponto
                .replace(',', '.') // Substitui a vírgula por ponto
                .replace(/\.(?=.*\.)/g, '') // Remove todos os pontos extras, mantendo apenas o primeiro.
        }
    }
}