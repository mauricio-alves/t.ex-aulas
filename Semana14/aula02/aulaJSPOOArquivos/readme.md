Como programar classes em Javascript

[ x ] classes em Javascript são construídas em protótipos
[ x ] Em Javascript class são 'funções especiais'
[ x ] Classes tem dois componentes:
- Expressões de classe
- Declarações de classe 
[ x ] O corpo de uma classe em Javascript é executado em modo estrito
[ x ] O método constuctor cria e inicializa um objeto criado com class
[ x ] Só pode haver um constructor por classe
[ x ] Uma declaração de classe não é 'içada' (Elevação)
[ x ] Expressões de classe podem ser nomeadas ou não nomeadas


++++++++++++++++++++++++++++++++++++++++

Declaração de campo público e privado

[ x ] Atributos da classe javascript são públicos por padrão
[ x ] Atributos não necessitam de let ou var
[ x ] Atributos podem se tornar privados antecedidos por um #
[ x ] Classes podem usar Herança com a palavra chave extends
[ x ] A palavra chave 'super' possibilita a herança de atributos e métodos


+++++++++++++++++++++++++++++++++++++++++

Prototype vs Classes


[ x ] Protótipos são mecanismos de herança entre objetos
[ x ] Cadeia de protótipos
[ x ] Cada objeto em Javascript tem um propriedade interna chamada prototype (protótipo)
[ x ] O protótipo em si é um objeto.

++++++++++++++++++++++++++++++++++++++++++

Comparações de Protótipos com OOP

[ x ] OOP trata de modelagem como uma coleção de objetos
[ x ] Um objeto oferece uma interface pública para outro que queira acessá-lo
[ x ] Outras partes do sistema não precisam se preocupar com o que está acontecendo no objeto

[ x ] Construtores em javascript fornecem algo semelhante a definição de classe
[ x ] Quando um método é definido na prototype de um construtor, todos os objetos criados com base nesse construtor vão obter essa método por intermédio de seu protótipo
[ x ] O overrinding de métodos ocorre simplesmente reeescrevendo o método específico

[ x ] OOP classes e objetos são duas construções separadas
[ x ] JS criamos objetos sem qualquer definição de classe com funções ou literais de objeto

[ x ] OOP quando uma subclasse é instanciada cria-se um único objeto que contém a combinação das propriedades e métodos da superclasse
[ x ] JS No nivel de hierarquia da prototipagem, cada nova hierarquia é composta de um objeto separado vinculado pelas propriedades do seu protótipo interno
[ x ] JS possui um comportamento de cadeia de protótipos que se comporta mais como delegação do que herança

[ x ] JS contrutores e protótipos podem ser usados para implementar padrões OOP, mas convém o uso de classes


















