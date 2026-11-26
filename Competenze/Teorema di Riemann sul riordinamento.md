---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["Riemann rearrangement theorem", "riordinamento di una serie", "serie semplicemente convergente", "teorema di Riemann-Dini"]
tags: [competenza, area/analisi]
---

# Teorema di Riemann sul riordinamento

> Una serie convergente ma non assolutamente convergente si può riordinare in modo da avere qualunque somma, anche $\pm\infty$.

## Definizione / enunciato
**Teorema.** Sia $\sum a_n$ convergente con $\sum|a_n|=+\infty$. Per ogni $L\in\mathbb R$ (oppure $L=\pm\infty$) esiste una permutazione dei termini tale che la serie riordinata converge con somma $L$ (o diverge a $\pm\infty$).

## Formule chiave
Nella costruzione, le somme parziali "rimbalzano" attorno a $L$ con
$$|S_N-L|\le|\text{ultimo termine usato nello scavalco più recente}|\to0.$$

## Intuizione
Dimostrazione sulla serie $\sum\frac{(-1)^n}n=-1+\frac12-\frac13+\dots$, con $L=10$. Si separano i termini positivi $\frac12,\frac14,\frac16,\dots$ e i negativi $-1,-\frac13,-\frac15,\dots$, che hanno entrambi somma infinita. Si sommano positivi finché si supera 10, poi negativi finché si scende sotto 10, e così via alternando. Si usano tutti i termini e, siccome $a_n\to0$, gli scavalchi diventano piccoli a piacere.

## Come si usa
Mostra che per le serie solo semplicemente convergenti l'ordine degli addendi conta: la somma non è una proprietà dell'insieme dei termini.

## Nei corsi
- **Analisi 2** (triennale): lezione del 05/12/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 19 serie potenze.pdf` (pp. 7-11).

## Prerequisiti
- [[Convergenza assoluta di una serie]]: serie convergenti ma non assolutamente

## Porta a
- Nessuno.

## Collegati
- [[Serie armonica generalizzata]]: Σ(-1)^n/n converge ma Σ1/n diverge
