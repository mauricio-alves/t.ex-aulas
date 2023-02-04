
        function makeTeste(start=0,end=n,step=1){
           // let nIndex = start
            let itera = 0
            
            const range = {
                next(){
                let res
                if(start <=end){
                    res = {value:start,done:false}
                    start += step
                    itera++
                    return res
                }
                return {value:itera,done:true}
                }

            }
            return range
        }
        const it = makeTeste(1,16,3)
        let res = it.next()
        while(!res.done){
            console.log(res.value)
            res = it.next()
        }

function* gen(){
    for( const value of ['a','b','c']){
    yield* value
    //console.log(value)
    }
}
        console.log(...gen())
         console.log([...gen()])

         //valor default paa variaiaves não setada
         let idade
         console.log(idade ?? 'Não existe')
        //  objetos conjunto de chave valor
        const livro = {
            titulo:'Lobo da Estepe',
            paginas:128,
            detalhes:{
                capa:'dura',
                edicao:'1ª',
                editora:'Brasil'
            }
        }
        console.log('titulo' in livro)
        console.log(Object.values(livro.detalhes))
        console.log(Object.entries(livro.detalhes))
        console.log(Object.keys(livro))

        // desestruração
        // const detalhes = livro.detalhes
        const {detalhes:info,titulo,idioma='Português'} = livro
        console.log(info,titulo,idioma)
        // pode usar em parametro de funcao, constructor classes


        // rest operator
        // {detalhes, ...rest}
        const array = [1,2,3,4,5,6]
        const [um,dois] = array
        const [a,,b,c,...rest] = array
        console.log([um,dois])
        console.log([a,b,c,...rest])
        console.log(livro.detalhes?.editora ?? 'Nada')
    