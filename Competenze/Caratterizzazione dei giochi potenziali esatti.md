---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["characterization of exact potential games", "test di potenziale esatto", "grafo ipercubo delle configurazioni", "hypercube graph", "integrale discreto sui cicli", "condizione sui 4-cicli", "condizione di simmetria delle derivate miste"]
tags: [competenza, area/network]
---

# Caratterizzazione dei giochi potenziali esatti

> Un gioco è potenziale esatto se e solo se il "campo" delle variazioni di utilità è conservativo: nel caso continuo le derivate miste sono simmetriche, nel caso finito l'integrale su ogni 4-ciclo dell'ipercubo delle configurazioni è nullo.

## Definizione / enunciato
**Caso continuo.** $\mathcal A_i\subseteq\mathbb R$ intervalli, $u_i\in C^2$, $U_i(x)=\partial u_i/\partial x_i$. Sono equivalenti:
1. il gioco è potenziale esatto;
2. $U$ è conservativo: $\oint_\gamma U(s)\cdot ds=0$ per ogni cammino chiuso;
3. $\dfrac{\partial U_i}{\partial x_j}=\dfrac{\partial U_j}{\partial x_i}$ per ogni $i,j$ e $x$.
Un potenziale è $\Phi(x)=\int_{\gamma_{\bar x\to x}}U(s)\cdot ds$ con $\bar x$ fisso e cammino $C^1$ a tratti.

**Caso finito.** Grafo ipercubo $\mathcal G_h=(\mathcal X,\mathcal E_h)$, $(x,y)\in\mathcal E_h$ se $x,y$ differiscono in un solo giocatore. Funzione sugli archi $\delta u(x,y)=u_i(y)-u_i(x)$ ($i$ = giocatore che cambia). $\Phi$ è potenziale esatto se e solo se il gradiente discreto $\nabla\Phi=\delta u$.
**Teorema.** Il gioco è potenziale esatto se e solo se $\oint_\gamma\delta u=0$ per ogni walk chiuso; i potenziali sono $\Phi(x)=\int_{\gamma_{x^*\to x}}\delta u+C$. Basta verificarlo sui walk chiusi di lunghezza 4.

## Formule chiave
$2\times2$ con utilità $(a_1,a_2)$, $(c_1,c_2)$, $(d_1,d_2)$, $(b_1,b_2)$: c'è un solo 4-ciclo, e la condizione è
$$(c_2-a_2)+(b_1-c_1)+(d_2-b_2)+(a_1-d_1)=0,$$
vera in particolare se il gioco è simmetrico ($a_1=a_2$, $b_1=b_2$, $c_1=d_2$, $d_1=c_2$).

## Intuizione
È la stessa storia dei campi conservativi in analisi: un potenziale esiste se e solo se "girando in tondo" non si guadagna nulla. Nel caso finito i cicli elementari sono i quadrati in cui due giocatori cambiano azione a turno.

## Come si usa
Per decidere se un gioco finito è potenziale esatto si controllano tutti i 4-cicli dell'ipercubo; se la condizione vale, si costruisce $\Phi$ integrando $\delta u$ da una configurazione base. Esercizio proposto nelle slide: costruire l'ipercubo di sasso-carta-forbici.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "More on Exact Potential Games", "Example: 2X2 game", "Example: Rock-Scissor-Paper". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 67-80).

## Prerequisiti
- [[Gioco potenziale]]: definizione di potenziale esatto

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Campo conservativo]]: stessa caratterizzazione per campi vettoriali
- [[Giochi 2x2 simmetrici]]: test sull'unico 4-ciclo
- [[Forme chiuse ed esatte]]: chiusa (derivate miste simmetriche) contro esatta (esiste il potenziale)
