# Chat Industrial para Fiscalização Ambiental

Este projeto é um sistema de chat em tempo real desenvolvido para simular a comunicação em um ambiente de fiscalização industrial e ambiental. Utilizando a arquitetura Full-Stack, ele permite que inspetores ambientais se conectem a salas de chat específicas por grupo de fiscalização (ex: Usina Solar, Fiscalização Hídrica).

O projeto foi construído com foco em comunicação instantânea e compartilhamento de dados, sendo idealizado para o contexto de Atividades Práticas Supervisionadas (APS).

## Funcionalidades Principais

*   **Chat em Tempo Real:** Comunicação instantânea entre usuários na mesma sala, utilizando Socket.IO.
*   **Salas de Chat por Grupo:** Os usuários podem escolher entre grupos de fiscalização predefinidos.
*   **Compartilhamento de Arquivos:** Suporte ao envio de múltiplos arquivos (imagens, documentos, etc.) dentro da sala de chat.
*   **Notificações Desktop:** Alertas de novas mensagens quando a aba do navegador não está ativa.
*   **Interface Amigável:** Design simples e funcional com suporte a emojis.

## Tecnologias Utilizadas

| Tecnologia | Tipo | Função no Projeto |
| :--- | :--- | :--- |
| **Node.js** | Runtime | Ambiente de execução do servidor. |
| **Express** | Framework | Criação do servidor web e roteamento. |
| **Socket.IO** | Biblioteca | Comunicação bidirecional em tempo real (WebSockets). |
| **TypeScript** | Linguagem | Tipagem estática para o código do servidor (`server.ts`). |
| **HTML/CSS/JavaScript** | Frontend | Interface do usuário (`index.html`). |

## Como Executar o Projeto

### Pré-requisitos

1.  **Node.js** (Versão 18 ou superior) instalado.
2.  **npm** (Node Package Manager) ou **Yarn** instalado.

### Passos para Execução

1.  **Instale as Dependências:**
    Abra o terminal na pasta raiz do projeto e execute:
    ```bash
    npm install
    # OU
    yarn install
    ```

2.  **Inicie o Servidor:**
    O projeto utiliza o script `dev` para iniciar o servidor com o `tsx` (que executa o TypeScript em tempo de desenvolvimento).
    ```bash
    npm run dev
    # OU
    yarn dev
    ```

3.  **Acesse o Chat:**
    Após iniciar o servidor, abra seu navegador e acesse:
    ```
    http://localhost:3000
    ```
    *   Você pode abrir a URL em várias abas ou em diferentes dispositivos na mesma rede para simular a comunicação entre inspetores.

4.  **Entre em uma Sala:**
    *   Digite seu nome.
    *   Escolha um dos grupos de fiscalização para começar a conversar.

---

*Desenvolvido para fins acadêmicos.*
