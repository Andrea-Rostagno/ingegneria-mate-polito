---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["magnetic dipole", "momento magnetico", "magnetic moment", "spira percorsa da corrente", "m = I S"]
tags: [competenza, area/fisica]
---

# Dipolo magnetico

> Una piccola spira percorsa da corrente vista da lontano: è caratterizzata dal momento magnetico $\vec m=I\cdot$(area)$\cdot$(normale) e genera un campo con la stessa forma di quello del dipolo elettrico.

## Definizione / enunciato
Si prende una spira quadrata molto piccola di lato $L$ e sezione $S$, percorsa da una densità di corrente $j$, nell'origine del piano $xy$, e si calcola il potenziale vettore in un punto $P$ del piano $yz$ a grande distanza ($r\gg L$). I due lati paralleli a $x$ portano $j_x$ e $-j_x$ e contribuiscono con distanze $r_+$ e $r_-$ leggermente diverse; i loro contributi quasi si cancellano e resta un termine $\propto1/r^2$.
Si chiama **momento magnetico** della spira la quantità $\vec m=IL^2\vec k$ (corrente per area, diretto lungo la normale). A grande distanza la spira quadrata si può considerare infinitesima e confondere con una spira circolare: il problema ha simmetria cilindrica.

## Formule chiave
$$A_x=\frac{\mu_0}{4\pi}\left[j_x\frac{SL}{r_+}-j_x\frac{SL}{r_-}\right]=\frac{\mu_0}{4\pi}IL\frac{r_--r_+}{r_+r_-}\approx-\frac{\mu_0}{4\pi}IL^2\frac{\sin\theta}{r^2},\qquad A_y=A_z=0$$
$$\vec m=IL^2\vec k,\qquad \vec A=\frac{\mu_0}{4\pi}\frac{\vec m\times\vec r}{r^3},\qquad \vec B=\vec\nabla\times\vec A=\frac{\mu_0}{4\pi}\left[\frac{3\vec r(\vec m\cdot\vec r)}{r^5}-\frac{\vec m}{r^3}\right]$$
(La slide di p. 29 scrive anche $A_x=\frac{\mu_0}{4\pi}\frac{|\vec m\times\vec r|}{r^3}$ con il modulo e senza segno, mentre p. 28 ha il segno meno: da verificare sul PDF.)

## Intuizione
Lontano dalla spira conta solo il prodotto corrente × area, non la forma: è l'analogo del dipolo elettrico, dove conta solo carica × distanza. Il campo cala come $1/r^3$.

## Come si usa
Il momento magnetico è il "mattone" del magnetismo nella materia: atomi e molecole si trattano come piccole spire, e la magnetizzazione è il momento magnetico per unità di volume.

## Nei corsi
- **Fisica 2** (triennale): fine della lezione 19&20, "Calcolo del campo B generato da un dipolo magnetico". Fonti: `triennale/ANNO 2/fisica 2/lezioni/19&20.  LEZIONE.pdf` (pp. 27-29).

## Prerequisiti
- [[Potenziale vettore]]: si calcola A della spira a grande distanza

## Porta a
- [[Magnetizzazione e campo magnetizzante]]: M è il momento magnetico per unità di volume

## Collegati
- Nessuno.
