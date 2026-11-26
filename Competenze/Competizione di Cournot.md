---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Cournot competition", "duopolio di Cournot", "Cournot duopoly", "oligopolio di Cournot", "Cournot oligopoly", "competizione sulle quantità", "prezzo di monopolio", "monopoly price"]
tags: [competenza, area/network]
---

# Competizione di Cournot

> Imprese che producono lo stesso bene scelgono le quantità; il prezzo scende con la quantità totale. All'equilibrio il prezzo è tra il costo marginale e il prezzo di monopolio.

## Definizione / enunciato
**Monopolio (riferimento):** domanda $q(p)=[K-p]_+$ con $K>c$, costo marginale costante $c$, utilità $u(p)=(p-c)q(p)$, massimizzata da $p_{\mathrm{mon}}=\frac{K+c}2$.
**Cournot:** $n$ imprese, $x_i\in[0,+\infty)$ quantità prodotta, domanda inversa $p(\sum_jx_j)$, costo marginale $c$ uguale per tutti:
$$u_i(x_i,x_{-i})=x_i\,p\Big(\sum_jx_j\Big)-cx_i .$$

## Formule chiave
Due imprese, $p(x_1+x_2)=[K-x_1-x_2]_+$. Miglior risposta:
$$\mathcal B_i(x_{-i})=\tfrac12[K-c-x_{-i}]_+ .$$
Equilibrio di Nash all'incrocio delle due rette di miglior risposta:
$$x^*_1=x^*_2=\frac{K-c}3,\qquad p^*_{\mathrm{cou}}=\frac{K+2c}3,\qquad c<p^*_{\mathrm{cou}}<p_{\mathrm{mon}},$$
con profitti di equilibrio positivi.
**Potenziale ordinale** (costi lineari uguali): $\Phi(x)=x_1\cdots x_n\big(p(\sum_jx_j)-c\big)$.

## Intuizione
Ogni impresa produce meno se l'altra produce di più (le miglior risposte sono decrescenti): la competizione porta più produzione e prezzi più bassi del monopolio, ma non fino al costo marginale.

## Come si usa
Si scrive l'utilità, si massimizza in $x_i$ (vertice della parabola $x_i(K-x_i-x_{-i}-c)$) e si risolve il sistema delle miglior risposte. Confronto finale delle slide: $c=p^*_{\mathrm{ber}}<p^*_{\mathrm{cou}}<p_{\mathrm{mon}}$, quindi la competizione abbassa i prezzi. Generalizzazioni citate: costi diversi, beni non perfettamente sostituibili, molte imprese e mercati.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "Example 6: Economic models", "Example 6a: Cournot competition", "Example of Ordinal Potential game". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 47-49, 53, 66).

## Prerequisiti
- [[Equilibrio di Nash]]: miglior risposta e punto fisso

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Competizione di Bertrand]]: stessa situazione con scelta dei prezzi
- [[Gioco potenziale]]: Cournot con costi lineari è potenziale ordinale
- [[Teorema di Debreu-Glicksberg-Fan]]: garantisce l'equilibrio puro dell'oligopolio
