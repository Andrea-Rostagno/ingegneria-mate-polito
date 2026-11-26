---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Debreu-Glicksberg-Fan theorem", "teorema di Debreu Glicksberg Fan", "equilibri puri nei giochi continui", "pure Nash equilibria of continuous games", "existence of pure equilibria"]
tags: [competenza, area/network]
---

# Teorema di Debreu-Glicksberg-Fan

> Se le strategie sono insiemi compatti e convessi e ogni utilità è continua e concava nella propria azione, esiste un equilibrio di Nash in strategie pure.

## Definizione / enunciato
**Teorema (Debreu, Glicksberg, Fan, 1952).** Sia $(\mathcal V,\{\mathcal A_i\},\{u_i\})$ un gioco tale che per ogni $i\in\mathcal V$:
- $\mathcal A_i\subseteq\mathbb R^q$ è non vuoto, compatto e convesso;
- $u_i(x)$ è continua in $x$ e concava in $x_i$ per ogni $x_{-i}$.
Allora esiste un equilibrio di Nash in strategie pure.

## Formule chiave
Prova: si verificano le ipotesi di Kakutani per la corrispondenza di miglior risposta $x\mapsto\prod_i\mathcal B_i(x_{-i})$ su $\mathcal X=\prod_i\mathcal A_i$: la concavità in $x_i$ rende $\mathcal B_i(x_{-i})$ convesso, la continuità dà il grafo chiuso, la compattezza garantisce che il massimo esista.
**Esempio delle slide:** oligopolio di Cournot con domanda inversa $p(q)$ concava non crescente, $p(\bar q)=0$ per qualche $\bar q$ (che rende compatti gli insiemi di azioni rilevanti), costi di produzione convessi $c_i(x_i)$:
$$u_i(x)=x_i\,p\Big(\sum_jx_j\Big)-c_i(x_i).$$

## Intuizione
La concavità nella propria azione fa sì che l'insieme delle miglior risposte sia un intervallo (convesso): è ciò che nei giochi finiti si ottiene solo passando alle strategie miste. Così nei giochi continui "ben fatti" la randomizzazione non serve.

## Come si usa
Per un gioco con azioni continue (quantità, prezzi, livelli di sforzo) si controllano compattezza e convessità degli insiemi di azioni e concavità delle utilità; se valgono, si cerca l'equilibrio risolvendo le condizioni del primo ordine. Bertrand non soddisfa la continuità delle utilità.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "Pure strategy Nash equilibria of continuous games". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (p. 56).

## Prerequisiti
- [[Teorema di esistenza di Nash]]: stessa tecnica con il teorema di Kakutani
- [[Funzione convessa]]: concavità delle utilità

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Competizione di Cournot]]: esempio che soddisfa le ipotesi
- [[Competizione di Bertrand]]: utilità discontinue, il teorema non si applica
