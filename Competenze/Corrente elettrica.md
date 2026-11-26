---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["electric current", "intensità di corrente", "densità di corrente", "current density", "ampere", "j = nqv", "corrente stazionaria"]
tags: [competenza, area/fisica]
---

# Corrente elettrica

> Flusso di particelle cariche: l'intensità misura la carica netta che attraversa una superficie nell'unità di tempo, la densità di corrente $\vec j=nq\vec v$ ne dà direzione e distribuzione locale.

## Definizione / enunciato
L'**intensità di corrente** è la quantità di carica netta che attraversa una superficie nell'unità di tempo; unità C/s, detta ampere (A). Il verso convenzionale è quello del moto delle cariche positive: cariche negative che si muovono in verso opposto danno la stessa corrente.
**Modello del filo:** in un conduttore di sezione $S$ ci sono $n$ particelle per unità di volume, ognuna di carica $q$, con velocità $v$ nella stessa direzione. Nel tempo $\Delta t$ attraversano la sezione B le cariche contenute nel volume tra le sezioni A e B, lungo $v\Delta t$.
La **densità di corrente** è la corrente per superficie unitaria; tenendo conto che la velocità è un vettore, $\vec j=nq\vec v$. Unità A/m².
**Corrente stazionaria:** in un filo in cui fluisce una corrente stazionaria $I$, il flusso di $\vec j$ attraverso una superficie chiusa è nullo (conservazione della carica).

## Formule chiave
$$I=\frac{\Delta Q}{\Delta t},\qquad \Delta Q=nqSv\Delta t,\qquad I=\frac{\Delta Q}{\Delta t}=nqSv$$
$$j=\frac IS=nqv,\qquad \vec j=nq\vec v,\qquad \oint_{A_{CHIUSA}}\vec j\cdot d\vec S=0\ \text{(corrente stazionaria)}$$

## Intuizione
La corrente è il "flusso" di $\vec j$ attraverso la sezione, come la portata di un fluido è il flusso della velocità. In regime stazionario quello che entra in una superficie chiusa deve uscire, altrimenti la carica dentro cambierebbe.

## Come si usa
Esempio delle slide (filo di rame, `13.  LEZIONE.pdf` p. 12): con $I=100$ A, diametro $d=5$ mm e densità elettronica $8.49\cdot10^{28}$ elettroni/m³, da $I=nqSv$ si ottiene una velocità di deriva $v=3.7\cdot10^{-4}$ m/s, molto più piccola della velocità termica $1.17\cdot10^5$ m/s. Inoltre un tratto di filo $dl$ contiene $nS\,dl$ cariche in moto, base per il campo magnetico di una corrente.

## Nei corsi
- **Fisica 2** (triennale): lezione 13, apertura sulla corrente elettrica. Fonti: `triennale/ANNO 2/fisica 2/lezioni/13.  LEZIONE.pdf` (pp. 2-5, 12).

## Prerequisiti
- [[Campo elettrostatico]]: le cariche libere si muovono sotto l'azione di E

## Porta a
- [[Legge di Ohm]]: j = nqv con la velocità di deriva
- [[Equazione di continuità della carica]]: flusso di j attraverso una superficie chiusa
- [[Legge di Ampère-Laplace]]: un tratto di filo contiene nqS dl cariche in moto
- [[Forza magnetica su una corrente]]: nqv = j, I dl = j S dl

## Collegati
- Nessuno.
