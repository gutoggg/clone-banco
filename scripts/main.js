(() => {

  const doubtText = [
    [
      "Para abrir uma conta você precisará dos seguintes documentos:",
      "- comprovante de Inscrição e de Situação Cadastral no CNPJ (emitido em até 90 dias na página da Receita Federal: www.receita.fazenda.gov.br);",
      "- documento de constituição da empresa registrado pelo órgão competente;",
      "- comprovante de endereço da empresa atualizado (emitido em até 180 dias);",
      "- documento que autorize representantes legais da empresa a abrir conta;",
      "- procuração registrada em cartório, se houver procurador.",
      "Já para os representantes legais, sócios e procuradores, os documentos necessários são:",
      "- documento de identificação com foto;",
      "- comprovante de inscrição do CPF;",
      "- comprovante de endereço atualizado."
    ],
    [
      "Aguarde nosso contato com as instruções para os próximos passos ou vá até qualquer agência Itaú com os documentos necessários"
    ],
    [
      "O Plano Adapt é o plano de serviços da conta corrente Itaú Empresas. Com ele, você economiza nas tarifas bancárias em relação ao uso de serviços de forma avulsa. Nós temos 4 planos disponíveis e você pode escolher o que faz mais sentido para as necessidades do seu negócio.",
      "Além disso, você conta com alguns serviços ilimitados inclusos, pode acompanhar o quanto já usou do plano pela internet e pode conseguir até mesmo a isenção da mensalidade do plano pelo nosso programa de bônus por relacionamento de acordo com seu faturamento com vendas na maquininha Rede e/ou o volume de investimentos aplicados aqui no Itaú Empresas."
    ]
  ]

  const doubtArray = [document.querySelector('[data-doubt-1]'), document.querySelector('[data-doubt-2]'), document.querySelector('[data-doubt-3]')]

  function handleDoubstState(element, doubtNumber) {
    if (element.querySelector('[data-arrow]').classList.contains("select-arrow-rotate")) {
      element.querySelector('[data-arrow]').classList.remove("select-arrow-rotate");
      element.nextElementSibling.innerHTML = " "
    } else {
      for (let i = 0; i < 3; i++) {
        doubtArray[i].querySelector('[data-arrow]').classList.remove("select-arrow-rotate");
        doubtArray[i].nextElementSibling.innerHTML = " "
      }
      element.querySelector('[data-arrow]').classList.add("select-arrow-rotate");
      for (let j = 0; j < doubtText[doubtNumber].length; j++) {
        const newP = document.createElement('p')
        newP.innerHTML = doubtText[doubtNumber][j]
        element.nextElementSibling.appendChild(newP)
      }
    }
  }

  function onDoubtClick(event) {
    switch(event.target) {
      case doubtArray[0]:
        handleDoubstState(doubtArray[0], 0)
        break
      case doubtArray[1]:
        handleDoubstState(doubtArray[1], 1)
        break
      case doubtArray[2]:
        handleDoubstState(doubtArray[2], 2)
        break
    }
  }

  document.addEventListener('click', onDoubtClick)

})()