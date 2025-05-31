import { IntroStep } from "intro.js/src/core/steps";

export const groomingBoardTour = [
  {
    "title": "Olá!",
    "element": null,
    "intro": "Bem-vindo!"
  },
  {
    "title": "Cartas de Votação",
    "element": ".grooming-board__voting-sticks",
    "intro": "Você pode votar facilmente nesta área. Se quiser mudar seu voto, basta escolher uma carta diferente!"
  },
  {
    "title": "Registro dos Participantes",
    "element": ".grooming-board__logs-section",
    "intro": "Aqui você poderá ver quem votou junto com você até o administrador revelar os votos. Quando os votos forem revelados, será mostrada a classificação do maior para o menor e a média das pontuações.",
    "position": "left"
  },
  {
    "title": "Tabela do Jira",
    "element": ".grooming-navbar__content-import-jira-issues",
    "intro": "Você pode acessar facilmente o quadro do Jira. Para ver os detalhes, clique em importar do Jira (apenas administradores veem o botão).",
    "position": "bottom"
  },
  {
    "title": "Copiar Link",
    "element": ".grooming-navbar__content-copy-link",
    "intro": "Ao clicar neste botão, você pode copiar o link da sala e compartilhar com as pessoas que deseja que participem do grooming!",
    "position": "bottom"
  },
  {
    "title": "Temporizador",
    "element": ".timer-container",
    "intro": "Clique neste botão para ajustar a duração do tópico a ser discutido no grooming!",
    "position": "bottom"
  },
  {
    "title": "Selecionar Tema",
    "element": ".theme-selector-container",
    "intro": "Aqui você pode navegar entre nossos diferentes temas!",
    "position": "bottom"
  },
  {
    "title": "Perfil",
    "element": ".grooming-board-profile",
    "intro": "Se quiser mudar seu apelido ou sair da sala, visite seu perfil.",
    "position": "bottom"
  },
  {
    "title": "É isso aí!",
    "element": ".feedback-content",
    "intro": "Se tiver dúvidas ou comentários, pode entrar em contato conosco a qualquer momento!",
    "position": "top"
  }
] as Partial<IntroStep>[];
