# Configurações do Nasa Space Trash Hack

## Configuração Inicial

* Baixe o projeto no github
* Abra o terminal do VSCode (ou local) e configure o nome e email do git

```
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

## Configurar o Ambiente

### No VSCode

* Entre no projeto e digite `CTRL + SHIFT + p`
* Selecione a opção `Python: Create Environment...`, em seguida selecione o `Venv`. A aparecer a opção para a instalação de dependências, selecione o arquivo `requirements.txt`
* Feche o terminal e abra novamente

### Sem IDE

* Crie um ambiente virtual do python: `python -m venv .venv`
* Durante a criação do ambiente virtual, o VSCode irá abrir um popup confirmando se você deseja utilizar o python do ambiente virtual detectado. Confirme. Em seguida, abra um novo terminal (clicando no +) para que a instalação surta efeito.
* Atualize o pip: `python -m pip install --upgrade pip`
* Atualize as libs: `pip install -r requirements.txt --upgrade`

## Como executar o projeto JS

1. Navegue até a pasta onde está o arquivo `index.html` (por exemplo, `src/pages`).
2. O site estará disponível e o JavaScript será carregado automaticamente.

> **Dica:** Você também pode abrir o arquivo `index.html` diretamente no navegador, mas usar um servidor local é recomendado para evitar problemas com carregamento de recursos.

---

## Análise dos Dados: Analise_No_metabolic_Waste.ipynb

O notebook **Analise_No_metabolic_Waste.ipynb** realiza uma análise detalhada dos dados de resíduos não-metabólicos (No_metabolic_Waste) gerados e levados pela tripulação durante a missão. 

### Como acessar

O notebook está disponível no proejto e pode ser acessado pelo aquivo
[Analise_No_metabolic_Waste.ipynb no Google Colab]

---

## Site do Projeto

Acesse a versão online do projeto em: [NASA Space Trash Hack](https://lhaislla.github.io/nasa_apps_2025_Space_Trash_Hack/)


