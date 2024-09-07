function countAndCheckLetterA(inputString) {
    // Converte a string para minúsculas para facilitar a contagem
    const lowerCaseString = inputString.toLowerCase();
    
    // Inicializa o contador para a letra 'a'
    let count = 0;
    
    // Itera sobre cada caractere da string
    for (let char of lowerCaseString) {
        if (char === 'a') {
            count++;
        }
    }
    
    // Verifica se a letra 'a' foi encontrada
    const exists = count > 0;
    
    return {
        exists: exists,
        count: count
    };
}

// String a ser verificada
const stringToCheck = "Amazingly, JavaScript can handle this task easily.";

// Chama a função e exibe o resultado
const result = countAndCheckLetterA(stringToCheck);

if (result.exists) {
    console.log(`A letra 'a' (ou 'A') aparece ${result.count} vez(es) na string.`);
} else {
    console.log("A letra 'a' (ou 'A') não aparece na string.");
}
