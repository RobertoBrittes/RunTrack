# Requisitos — RunTrack

**Origem:** `documentacao/visao.md`

**Data:** 17/09/2026

## Lista de requisitos (tabela)

> Convenções:
>
> * **Tipo:** RF (Funcional)
> * **Prioridade:** Must (MVP) / Should (importante) / Could (desejável)

| ID    | Tipo | Nome                          | Descrição                                                                                                       | Prioridade | Critério de aceite (resumo)                                               |
| ----- | ---- | ----------------------------- | --------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------- |
| RF-01 | RF   | Cadastrar usuário             | Permitir criar uma conta com informações básicas do usuário.                                                    | Must       | Usuário é criado com os campos obrigatórios preenchidos.                  |
| RF-02 | RF   | Entrar no aplicativo          | Permitir que o usuário entre no aplicativo utilizando seus dados cadastrados.                                   | Must       | Usuário consegue acessar sua conta com dados válidos.                     |
| RF-03 | RF   | Criar treino                  | Permitir criar um treino personalizado, definindo seu nome, tipo e detalhes.                                    | Must       | Treino é criado e fica disponível na lista de treinos.                    |
| RF-04 | RF   | Listar treinos                | Exibir os treinos cadastrados pelo usuário.                                                                     | Must       | Lista apresenta os treinos cadastrados com suas informações básicas.      |
| RF-05 | RF   | Editar treino                 | Permitir atualizar um treino personalizado existente.                                                           | Must       | Alterações são salvas e exibidas corretamente.                            |
| RF-06 | RF   | Remover treino                | Permitir excluir um treino cadastrado.                                                                          | Must       | Treino selecionado é removido da lista.                                   |
| RF-07 | RF   | Definir tipo de treino        | Permitir selecionar o tipo do treino, como leve, moderado, longo, tiros, ritmo ou fartlek.                      | Must       | Treino é salvo com o tipo selecionado.                                    |
| RF-08 | RF   | Detalhar treino               | Permitir adicionar informações sobre a estrutura e execução planejada do treino.                                | Must       | Detalhes informados são armazenados e exibidos ao consultar o treino.     |
| RF-09 | RF   | Registrar treino realizado    | Permitir registrar os dados de um treino realizado.                                                             | Must       | Registro é salvo com os dados obrigatórios preenchidos.                   |
| RF-10 | RF   | Informar distância            | Permitir informar manualmente a distância percorrida no treino.                                                 | Must       | Distância válida é aceita e armazenada.                                   |
| RF-11 | RF   | Informar duração              | Permitir informar manualmente a duração do treino.                                                              | Must       | Duração válida é aceita e armazenada.                                     |
| RF-12 | RF   | Calcular ritmo médio          | Calcular automaticamente o ritmo médio utilizando a distância e a duração informadas.                           | Must       | O ritmo calculado corresponde à duração dividida pela distância.          |
| RF-13 | RF   | Adicionar observação          | Permitir adicionar uma observação ao treino realizado.                                                          | Could      | Usuário consegue salvar o treino sem preencher a observação.              |
| RF-14 | RF   | Consultar histórico           | Exibir os treinos realizados anteriormente pelo usuário.                                                        | Must       | Histórico apresenta os registros salvos de forma organizada.              |
| RF-15 | RF   | Visualizar detalhes do treino | Permitir consultar as informações completas de um treino.                                                       | Must       | Ao selecionar um treino, seus dados e detalhes são exibidos corretamente. |
| RF-16 | RF   | Resumo dos treinos            | Exibir informações resumidas dos treinos realizados, como distância total, tempo total e quantidade de treinos. | Must       | Valores apresentados correspondem aos registros armazenados.              |
| RF-17 | RF   | Filtrar histórico             | Permitir consultar os treinos realizados por período.                                                           | Should     | O sistema exibe os treinos correspondentes ao período selecionado.        |

## Regras de negócio

### RN-01 — Cadastro do usuário

* O usuário deve informar os dados obrigatórios para realizar o cadastro.
* Não deve ser permitido concluir o cadastro com campos obrigatórios vazios.

### RN-02 — Tipo de treino

Cada treino deve possuir um tipo.

Os tipos poderão incluir:

* Corrida leve;
* Corrida moderada;
* Longo;
* Intervalado (tiros);
* Tempo/Ritmo;
* Fartlek;
* Recuperação;
* Outro.

### RN-03 — Detalhamento do treino

* O usuário poderá definir a estrutura do treino de acordo com o tipo escolhido.
* O treino poderá possuir informações como:

  * descrição;
  * distância planejada;
  * duração planejada;
  * quantidade de repetições;
  * distância ou duração das repetições;
  * ritmo planejado;
  * tempo ou distância de recuperação.

### RN-04 — Registro do treino realizado

* O usuário deve informar os dados necessários para registrar um treino realizado.
* O registro deve possuir data, distância e duração.
* A observação será opcional.

### RN-05 — Distância do treino

* A distância deve ser maior que zero.
* A distância será informada manualmente pelo usuário.

### RN-06 — Duração do treino

* A duração deve ser maior que zero.
* A duração será informada manualmente pelo usuário.

### RN-07 — Cálculo do ritmo médio

* O ritmo médio será calculado automaticamente pelo sistema.
* O cálculo será realizado utilizando a duração total dividida pela distância percorrida.
* O resultado será apresentado em minutos por quilômetro (min/km).

### RN-08 — Acesso aos dados

* Cada usuário poderá visualizar seus próprios treinos.
* Os treinos cadastrados devem estar associados ao usuário que os criou.
