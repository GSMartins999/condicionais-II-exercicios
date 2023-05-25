// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.
    
// Faça isso:
    
// **a)** Utilizando ifs aninhados
// ```jsx
//     if(expressao){
//         if(expressao){

//         }
//     }
// ```

let numero = Number(prompt("Digite um número: "))
if(numero % 2 === 0){
    if(numero % 3 === 0){
        console.log("O número é divisível por 2 e 3")
    } else{
        console.log("O número não é divisível por 2 ou por 3")
    }
} 




// **b)** Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){
//         // utilizamos && para E 
    
//     }
    
//     if(expressao || expressao){
//         // utilizamos o II para OU
//     }
// ```


if(numero % 2 === 0 && numero % 3 === 0){
    console.log("O número é divisível por 2 e 3")
} else {
    console.log("O número não é divisível por 2 ou por 3")
}

