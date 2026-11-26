---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["comparison test for series", "confronto tra serie", "confronto asintotico tra serie", "limit comparison test for series", "serie a termini positivi"]
tags: [competenza, area/analisi]
---

# Criterio del confronto per serie

> Per serie a termini non negativi una serie più piccola di una convergente converge, una più grande di una divergente diverge; termini asintotici hanno lo stesso carattere.

## Definizione / enunciato
Per serie a termini positivi la serie converge o diverge a $+\infty$, mai indeterminata ($S_n$ è crescente). Se $0\le a_n\le b_n$:
1. se $\sum b_n$ converge, converge anche $\sum a_n$;
2. se $\sum a_n$ diverge, diverge anche $\sum b_n$;
3. se $\lim_n\frac{a_n}{b_n}=C>0$ (in particolare se $a_n\sim b_n$), le due serie sono entrambe convergenti o entrambe divergenti.

## Formule chiave
Serie di confronto tipiche: geometrica $\sum\alpha^n$ e armonica generalizzata $\sum\frac1{n^\alpha}$.

## Intuizione
Le somme parziali di $\sum a_n$ sono dominate da quelle di $\sum b_n$; il confronto asintotico dice che conta solo l'ordine di infinitesimo del termine generale.

## Come si usa
- $\sum\frac{|\sin n|}{n^2}\le\sum\frac1{n^2}$ converge.
- La stima $\frac{|\sin n|}n\le\frac1n$ è vera ma inutile, perché $\sum\frac1n$ diverge.
- Agli estremi dell'intervallo di convergenza di una serie di potenze: $\sum\frac1{n+\sqrt n}$ diverge perché $\sim\frac1n$; $\sum\frac1{n^2+\sqrt n}$ converge perché $\sim\frac1{n^2}$.

## Nei corsi
- **Analisi 2** (triennale): enunciato a fine lezione del 28/11/2022 e usato nelle lezioni successive. Fonti: `triennale/ANNO 2/analisi 2/AII 17 2022 serie numeriche.pdf` (pp. 18-19); `triennale/ANNO 2/analisi 2/AII 20 2022 serie potenze.pdf` (pp. 10-11).

## Prerequisiti
- [[Serie numerica]]: serie a termini positivi
- [[Serie armonica generalizzata]]: serie campione per il confronto

## Porta a
- [[Convergenza assoluta di una serie]]: convergenza assoluta

## Collegati
- [[Criteri di convergenza per integrali impropri]]: stessi criteri per gli integrali
