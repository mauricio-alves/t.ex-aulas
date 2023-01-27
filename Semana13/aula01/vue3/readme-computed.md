Computed vs Methods

[ x ] expressões no Template destinam-se a operações simples
[ x ] colocar muita lógica em modelos pode torná-los extensos e difíceis de manter

Exemplo:

export default {
  data() {
    return {
      user: {
        nome: 'Tom Mazzeo',
        pedidos: [
          'Lazanha 4 queijos',
          'Feijoada',
          'Sopa de Legumes'
        ]
      }
    }
  }
}

[ x ] exibir mensagens diferentes dependendo se usuário já tem um histórico de pedido de um ou mais produtos


<p>Pedidos Anteriores:</p>
<span>{{ user.pedidos.length > 0 ? user.pedidos.length : '0' }}</span>

[ x ] o Template pode ficar um pouco confuso
[ x ] perceba que ele realiza um cálculo dependendo de user.pedidos
[ x ] evite ser repetitivo se precisar incluir esse cálculo no Template mais de uma vez

[ x ] computed: 
    -- lógica complexa que inclui dados reativos
    -- recomendável usar uma propriedade computada
    
Refatorando...


export default {
  data() {
    return {
      user: {
        nome: 'Tom Mazzeo',
        pedidos: [
          'Lazanha 4 queijos',
          'Feijoada',
          'Sopa de Legumes'
        ]
      }
    }
  },
  computed: {
    msgPedidos() {
      return this.user.pedidos.length > 0 ? this.user.pedidos.length : '0'
    }
  }
}

Template
<p>Pedidos anteriores:</p>
<span>{{ msgPedidos }}</span>


[ x ] msgPedidos: propriedade computada delacarada
[ x ] altere o valor de pedidosArray e msgPedidos mudará de acordo
[ x ] msgPedidos dedepende de this.user.pedidos
[ x ] o Vue atualizará as ligações que dependam de this.msgPedidos quando this.user.pedidos for alterado


[ x ] podemos obter o mesmo resultado invocando um método

modelo
<p>{{ msgPedido() }}</p>


methods: {
  msgPedido() {
    return this.user.pedidos.length > 0 ? this.user.pediddos.length : '0'
  }
}

[ x ] o resultado final das duas abordagens são exatamente os mesmos

[x ] a diferença:
 -- propriedades computadas são armazenadas em cache
 -- propriedades computadas tem base em suas dependências reativas
 -- a propriedade computada só será reavaliada quando uma de suas dependências reativas for alterada
 -- propriedades computadas são, por padrão, somente getter.

 [ x ] se user.pedidos não se altera:
    -- o acesso múltiplo a msgPedidos retorna imediatamente o resultado calculado anteriormente
    -- sem precisar executar a função getter novamente

[ x ] uma invocação de método executará a função sempre que ocorrer uma nova renderização

Exemplo:

[ x ] cache: fazer um loop através de matrizes grandes, fazer muitos cálculos
[ x ] podemos ter outras propriedades computadas que dependem da propriedade do loop
[ x ] sem cache: executamos muito mais vezes do que o necessário
[ x ] use uma chamada de método quando não precise de cache


export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
Agora, quando você executar this.fullName = 'John Doe', o setter será invocado e this.firstNameatualizado this.lastNamede acordo.

Melhores Práticas
Getters devem ser livres de efeitos colaterais

[ x ] funções getter computadas devem realizar apenas computação pura
[ x ] não faça solicitações assíncronas
[ x ] não modifique o DOM dentro de um getter computado
[ x ] declarativamente é a descrição de um valor com base em outros valores
[ x ] o único objetivo deve ser calcular e retornar esse valor
[ x ] o valor retornado de uma propriedade computada é o estado derivado. 
[ x ] um instantâneo temporário
[ x ] toda vez que o estado de origem muda, um novo instantâneo é criado. 

 -- não faz sentido alterar um instantâneo
 -- um valor de retorno calculado deve ser tratado como somente leitura
 -- um valor de retorno nunca sofre mutação
 -- é o resultado de uma mudança no estado de origem do qual depende
 -- que por consequência acionará novos cálculos








# VUEX

[ x ] padrão de gerenciamento de estado
[ x ] biblioteca para aplicações Vue.js
[ x ] serve como um store centralizado para todos os componentes em uma aplicação
[ x ] contém regras que garantem que o estado só possa ser mutado de forma previsível

## Instalação
vue add vuex

## Objetivo 
[ x ] gerenciar o estado de todos os componentes presentes em sua aplicação Vue
[ x ] o estado são os dados nos quais seus componentes dependem

## Exemplo de estado:
 
[ x ] tarefas de uma lista
[ x ] postagens em um blog
[ x ] Esses dados são chamados de estado


### Problemas que o Vuex resolve:

 -- descendências longas onde existem muitos componentes filhos
 -- quando precisarem reagir à mesma mudança de dados
 -- passar os dados do filho para o pai até chegarmos ao ancestral mais próximo
 -- depois desse ancestral para o filho específico

### Considerações

[ x ] todo componente tem um estado
[ x ] aplicações maiores representam aumento significativo nos componentes
[ x ] sem Vuex, cada um dos componentes gerenciará seu próprio estado usando APIs Vue.js
[ x ] Vue mantém uma arquitetura de componentes em forma de árvore
[ x ] permite a comunicação pai-filho usando props e emit 
[ x ] Vuex abstrai o estado de um módulo inteiro
[ x ] mantém um armazenamento centralizado
[ x ] segue o padrão de gerenciamento de estado
[ x ] se comunica com seus componentes de acordo
[ x ] útil quando os componentes de uma aplicação precisam ter uma fonte de dados abstrata
[ x ] elimina o uso de props e emitters
[ x ] economiza tempo e gera performance


### Exemplo:

[ x ] Vuex é popular na autenticação de aplicativos complexos que usam Vue.js
  
  -- disponibilidade do token
  -- controles de acesso
  -- bloqueios de rota
  -- mutations, getters e setters ajudam nessa tarefa.

[ x ] isolamento da lógica de autenticação da lógica do aplicativo
[ x ] fluxo de autenticação rastreável
[ x ] dados acessíveis


### Cenário de Uso

  -- tamanho do aplicativo
  -- complexidade dos dados

Importante!

[ x ] Vuex é verboso
[ x ] tem que seguir um padrão para garantir que as mudanças em seu estado aconteçam


## API de composição

[ x ] permite uma melhor reutilização de lógica
[ x ] organização de código em aplicativos Vue
[ x ] possui padrão modular
[ x ] permite compor de forma flexível a lógica de um componente
[ x ] pode-se usar a API de composição como uma loja
[ x ] compor função que mais tarde servirá como sua loja compartilhada
[ x ] uma solução para um aplicativo menor em comparação com o que o Vuex pode trazer

    















