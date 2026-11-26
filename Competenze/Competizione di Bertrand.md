---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Bertrand competition", "duopolio di Bertrand", "Bertrand duopoly", "paradosso di Bertrand", "Bertrand paradox", "competizione sui prezzi", "price competition"]
tags: [competenza, area/network]
---

# Competizione di Bertrand

> Due imprese con lo stesso bene fissano i prezzi e i consumatori comprano dal più economico: l'unico equilibrio è prezzo uguale al costo marginale, con profitto nullo (paradosso di Bertrand).

## Definizione / enunciato
Due imprese, $x_i\in[0,+\infty)$ prezzo fissato dall'impresa $i$, domanda $q(x)=[K-x]_+$, costo marginale $c$ comune. I consumatori comprano al prezzo più basso; a parità di prezzo si dividono a metà:
$$u_i(x_i,x_{-i})=\begin{cases}0&x_i>x_{-i}\\[2pt](x_i-c)\,q(x_i)/2&x_i=x_{-i}\\[2pt](x_i-c)\,q(x_i)&x_i<x_{-i}.\end{cases}$$

## Formule chiave
Unico equilibrio di Nash:
$$x^*_1=x^*_2=c,\qquad p^*_{\mathrm{ber}}=c,\qquad u_i=0 .$$
Confronto con Cournot e monopolio: $c=p^*_{\mathrm{ber}}<p^*_{\mathrm{cou}}=\frac{K+2c}3<p_{\mathrm{mon}}=\frac{K+c}2$.

## Intuizione
Se il rivale fissa un prezzo sopra il costo, conviene abbassarlo di pochissimo e prendersi tutto il mercato; questa rincorsa al ribasso si ferma solo al costo marginale. Bastano due imprese per avere l'esito di concorrenza perfetta: per questo è un "paradosso".

## Come si usa
Esempio di gioco continuo con utilità discontinue, in cui non valgono le ipotesi di Debreu-Glicksberg-Fan e la miglior risposta non è ben definita (non esiste il "prezzo appena sotto"). Si verifica direttamente che $(c,c)$ è equilibrio e che ogni altra coppia ammette una deviazione profittevole.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "Example 6b: Bertrand competition". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 51-53).

## Prerequisiti
- [[Equilibrio di Nash]]: definizione di equilibrio puro

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Competizione di Cournot]]: stessa situazione con scelta delle quantità
- [[Teorema di Debreu-Glicksberg-Fan]]: qui le ipotesi di continuità falliscono
