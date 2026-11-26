---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["magnetic force on a current", "seconda legge di Laplace", "dF = I dl × B", "forza su un filo rettilineo", "levitazione magnetica"]
tags: [competenza, area/fisica]
---

# Forza magnetica su una corrente

> Un conduttore percorso da corrente in un campo magnetico subisce la forza $d\vec F=I\,d\vec l\times\vec B$: è la somma delle forze di Lorentz sulle cariche in moto nel filo.

## Definizione / enunciato
In un conduttore ci sono $n$ cariche per unità di volume, ciascuna soggetta a $q\vec v\times\vec B$: la forza per unità di volume è $\vec F_v=nq\vec v\times\vec B=\vec j\times\vec B$. Su un tratto di lunghezza $dl$ e sezione $S$, con le cariche che si muovono lungo $dl$ ($\vec u$ versore tangente al conduttore), la forza è $d\vec F$; integrando sul conduttore si ottiene la forza totale.
**Filo rettilineo in campo uniforme:** $\vec F=I\vec L\times\vec B$, perpendicolare al filo e al campo, con verso dato dalla regola della mano destra.

## Formule chiave
$$\vec F_v=nq\vec v\times\vec B=\vec j\times\vec B$$
$$d\vec F=nq(S\,dl)\vec v\times\vec B=\vec j(S\,dl)\times\vec B=I\,dl\,\vec u\times\vec B=I\,d\vec l\times\vec B$$
$$\vec F=\int_{condut.}d\vec F=I\int_{cond.}d\vec l\times\vec B,\qquad \vec F=I(L\vec u)\times\vec B=I\vec L\times\vec B\ \ \text{(filo rettilineo, campo uniforme)}$$

## Intuizione
La corrente è solo un flusso ordinato di cariche: la forza sul filo è la forza di Lorentz moltiplicata per il numero di cariche nel tratto. Il prodotto $nqvS$ è proprio $I$, quindi la forza dipende solo dalla corrente, non da come è fatta.

## Come si usa
Esempio delle slide ("levitazione magnetica", `15&16. LEZIONE.pdf` p. 12): un filo con $L=10$ cm e massa $m=1$ g è immerso in $B=1$ T; si chiede la corrente che lo fa levitare. La slide non riporta il risultato. Conto fatto da me: imponendo $ILB=mg$ con $g\approx9.8$ m/s², $I=mg/(LB)\approx0.098$ A.

## Nei corsi
- **Fisica 2** (triennale): lezione 15&16, "Forze magnetiche su correnti elettriche". Fonti: `triennale/ANNO 2/fisica 2/lezioni/15&16. LEZIONE.pdf` (pp. 9-12).

## Prerequisiti
- [[Forza di Lorentz]]: somma delle forze qv × B sulle cariche del filo
- [[Corrente elettrica]]: nqv = j, I dl = j S dl

## Porta a
- [[Forza tra correnti parallele]]: forza IL × B sul secondo filo

## Collegati
- Nessuno.
