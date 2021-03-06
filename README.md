# Oficina App

Desafio Oficina App desenvolvido em JavaScript, com o framework React Native. O objetivo desse aplicativo é recuperar informações de uma API e apresentar o retorno de maneira agradável.

## Organização em pastas no repositório
Tudo que se refere ao código do Oficina App está na pasta `oficinaapp`. Na pasta `assets` estão o ícone e a Splash Screen do projeto. Na pasta `src` está o código em JavaScript, ou seja, as páginas (pasta `pages`), o serviço de conexão com a API (pasta `services`) e as rotas (arquivo `routes`). Na segunda pasta de assets, agora dentro de src, está a logo que foi utilizada nas páginas. 

## Pacotes utilizados

Alguns pacotes utilizados durante o desenvolvimento foram:

- React Navigation: lidar com a navegação entre telas no aplicativo;
- Axios: cliente HTTP para realizar as requisições;
- React Native Modal: pacote para criar uma modal customizável.

## Executando o projeto

Durante o desenvolvimento foi utilizada a ferramenta Expo.  
Dessa forma, para executar o projeto, baixe o aplicativo [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US) em seu celular para melhor experiência.
Clone o projeto do GitHub em sua máquina.
Em seguida, entre na pasta `oficinaapp`, que é onde está o código desenvolvido (e o _package.json_), e execute o comando `npm i` (é necessário ter o [Node JS](https://nodejs.org/) baixado), para instalar os módulos e as dependências do projeto.
Também é necessário ter o Expo Cli instalado em sua máquina, você encontra as instruções [aqui](https://docs.expo.io/workflow/expo-cli/). E então execute `npm start` (ou expo start). Com isso, uma página irá abrir no seu navegador, com um QR Code (tanto a página quando o código QR podem demorar alguns segundos para aparecer, por favor aguarde). Entre no aplicativo Expo Go (no celular) e escaneie esse QR Code. São necessários alguns minutos para que o JavaScript Bundle seja buildado e outros para que seja baixado.

Depois disso o Oficina App estará executando em seu Expo Go.

**Observação:** Qualquer dúvida estou à disposição! *iagogabinogoncalves@gmail.com*

Obrigado 😃
