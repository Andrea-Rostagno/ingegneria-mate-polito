---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["potential game", "gioco a potenziale", "potenziale esatto", "exact potential game", "exact potential function", "potenziale ordinale", "ordinal potential game", "funzione potenziale di un gioco"]
tags: [competenza, area/network]
---

# Gioco potenziale

> Un gioco in cui esiste un'unica funzione $\Phi$ sulle configurazioni che registra, con lo stesso valore (esatto) o lo stesso segno (ordinale), la variazione di utilità di chiunque cambi azione da solo. I massimi di $\Phi$ sono equilibri di Nash puri.

## Definizione / enunciato
Gioco $(\mathcal V,\{\mathcal A_i\},\{u_i\})$, $\mathcal X=\prod_i\mathcal A_i$.
- **Potenziale esatto:** $\Phi:\mathcal X\to\mathbb R$ con
$$u_i(y_i,x_{-i})-u_i(x_i,x_{-i})=\Phi(y_i,x_{-i})-\Phi(x_i,x_{-i})\qquad\forall x\in\mathcal X,\ i\in\mathcal V,\ y_i\in\mathcal A_i .$$
- **Potenziale ordinale:** $u_i(y_i,x_{-i})-u_i(x_i,x_{-i})>0\iff\Phi(y_i,x_{-i})-\Phi(x_i,x_{-i})>0$, cioè stesso segno.
Esatto $\Rightarrow$ ordinale, non viceversa.

**Proposizione.** In un gioco potenziale ordinale ogni punto di massimo globale di $\Phi$ è un equilibrio di Nash puro: $\mathcal N\supseteq\arg\max_{x}\Phi(x)$.

## Formule chiave
$x^*$ è Nash se e solo se $\Phi(y_i,x^*_{-i})\le\Phi(x^*_i,x^*_{-i})$ per ogni $i$ e $y_i$: gli equilibri sono i "massimi locali" di $\Phi$ rispetto a deviazioni unilaterali, e possono esisterne fuori da $\arg\max\Phi$.
- **Corollario 1:** ogni gioco potenziale ordinale finito ha almeno un equilibrio puro.
- **Corollario 2:** ogni gioco potenziale ordinale continuo con spazio delle strategie compatto ha almeno un equilibrio puro.
- Discoordinazione e sasso-carta-forbici non hanno equilibri puri, quindi non sono potenziali.
- Ogni $2\times2$ simmetrico è potenziale esatto ($\Phi(-,-)=a-c$, $\Phi(+,+)=b-d$, 0 altrove); Cournot con costi lineari è potenziale ordinale.

## Intuizione
È come se tutti i giocatori, pur egoisti, stessero salendo la stessa collina: ogni miglioramento individuale fa crescere $\Phi$. Per questo gli equilibri esistono e le dinamiche di miglioramento convergono.

## Come si usa
Per dimostrare che un gioco ha equilibri puri si cerca un potenziale (giochi di congestione, giochi separabili a coppie su rete, colorazione); per trovarli si massimizza $\Phi$, ad esempio con la noisy best response.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "Exact Potential games", "Ordinal potential games", "Existence of Pure Strategy Nash Equilibria". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 57-66).

## Prerequisiti
- [[Equilibrio di Nash]]: equilibri puri

## Porta a
- [[Caratterizzazione dei giochi potenziali esatti]]: come riconoscere un potenziale
- [[Proprietà di miglioramento finito]]: i giochi potenziali finiti hanno il FIP
- [[Giochi di congestione]]: potenziale di Rosenthal
- [[Giochi separabili a coppie]]: potenziale dei giochi su rete
- [[Dinamica di best response]]: converge agli equilibri nei giochi potenziali

## Collegati
- [[Giochi 2x2 simmetrici]]: sono tutti potenziali esatti
- [[Competizione di Cournot]]: esempio di potenziale ordinale
- [[Equilibrio di Wardrop]]: il costo integrale è un potenziale
