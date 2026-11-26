---
tipo: competenza
area: fisica
corsi: [Chimica]
livello: [triennale]
aliases: ["Nernst equation", "pile a concentrazione", "concentration cell", "potenziale in condizioni non standard"]
tags: [competenza, area/fisica]
---

# Equazione di Nernst

> Dà il potenziale di una cella o di un elettrodo fuori dalle condizioni standard, in funzione del logaritmo del quoziente delle concentrazioni.

## Definizione / enunciato
Quando le specie non sono in condizioni standard (1 M, 25 °C) il potenziale dipende dalle concentrazioni (o pressioni parziali) secondo l'**equazione di Nernst**; le specie pure valgono 1. $n$ è il numero di elettroni trasferiti, $F=96500$ C, $R=8{,}31$ J/(mol K). A 298 K e passando ai logaritmi decimali il fattore vale 0,0592 V. Si consiglia di applicarla alle singole semireazioni.
**Pile a concentrazione:** due elettrodi identici in soluzioni dello stesso ione a concentrazioni diverse; la fem nasce solo dalla differenza di concentrazione (a $\Delta E^\circ=0$).

## Formule chiave
$$E=E^\circ-\frac{RT}{nF}\ln\frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}=E^\circ-\frac{0{,}0592}{n}\log\frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}\qquad(25\ ^\circ\mathrm C)$$
$$\text{semireazione: }\ E=E^\circ+\frac{0{,}0592}{n}\log\frac{[\text{specie ossidata}]}{[\text{specie ridotta}]},\qquad \frac{8{,}31\cdot298\cdot2{,}303}{96500}=0{,}0592$$

## Intuizione
Ha la stessa struttura di $\Delta G=\Delta G^\circ+RT\ln Q$: man mano che la pila funziona Q cresce, E diminuisce e si annulla all'equilibrio.

## Come si usa
Pila a concentrazione Cu/Cu$^{2+}$ con soluzioni 0,1 M e 1,0 M (p. 38): $\Delta E=-\frac{0{,}0592}{n}\log\frac{[\mathrm{Cu^{2+}}]_{dil}}{[\mathrm{Cu^{2+}}]_{conc}}$; con $n=2$ si ottengono $0{,}0296$ V (calcolo sui dati della slide); la corrente esterna va dalla semicella diluita a quella concentrata. In elettrolisi a pH 7 serve Nernst per stabilire la precedenza di scarica (p. 54).

## Nei corsi
- **Chimica** (triennale): Lezione 19. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 19 - Elettrochimica.pdf` (lezione 19, pp. 35-38, 54).

## Prerequisiti
- [[Potenziale standard di riduzione]]: E° è il valore in condizioni standard
- [[Quoziente di reazione]]: termine logaritmico nelle concentrazioni

## Porta a
- Nessuno.

## Collegati
- [[pH]]: il pHmetro è un elettrodo
- [[Elettrolisi]]: precedenza di scarica fuori dalle condizioni standard
- [[Energia libera e costante di equilibrio]]: stessa struttura con il quoziente di reazione
