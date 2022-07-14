/*  
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima -   A
    * entre 80 - 89   -   B
    * entre 70 - 79   -   C
    * entre 60 - 69   -   D
    * menor que 60    -   F
*/



function getNota(nota) {
    if (nota > 100 || nota < 0) {
        console.log('Erro: Informe uma valor válido')
    } else {
        if (nota >= 90) {
            nota = 'A'
            console.log("Parabéns, sua nota é:", nota)
        } else
            if (nota < 90 && nota >= 80) {
                nota = 'B'
                console.log('Quase lá, sua nota é:', nota)
            } else
                if (nota < 80 && nota >= 70) {
                    nota = 'C'
                    console.log('Se esforce mais, sua nota é: ', nota)
                } else
                    if (nota < 70 && nota >= 60) {
                        nota = 'D'
                        console.log('Correndo sério risco, sua nota é:', nota)
                    } else
                        if (nota < 60) {
                            nota = 'F'
                            console.log('Grandes chances de reprovar, sua nota é:', nota)
                        }
    }
}

getNota(101)
getNota(100)
getNota(89)
getNota(79)
getNota(69)
getNota(59)
getNota(1)
getNota(0)
getNota(-1)
