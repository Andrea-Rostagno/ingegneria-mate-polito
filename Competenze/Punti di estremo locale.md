---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["local extrema", "massimo locale", "minimo locale", "massimo relativo", "test delle derivate successive"]
tags: [competenza, area/analisi]
---

# Punti di estremo locale

> Massimi e minimi relativi: si cercano tra i punti critici e quelli di non derivabilità, e si classificano con il segno di $f'$ o con le derivate successive.

## Definizione / enunciato
Sia $x_0\in A=\operatorname{dom}f$ (Mazzi, def. 1.2).
- $x_0$ è di **massimo locale** (relativo) se $\exists B(x_0):\ f(x)\le f(x_0)$ per $x\in B(x_0)\cap A$; di **minimo locale** con $\ge$; **estremo locale** se è l'uno o l'altro.
- $x_0$ è di **massimo globale** (assoluto) se $f(x)\le f(x_0)$ per ogni $x\in\operatorname{dom}f$ (analogo il minimo). Globale ⇒ locale, non viceversa.

**Test della derivata prima** (cor. 1.3): $f$ continua in $x_0$, $f'\le0$ a sinistra e $f'\ge0$ a destra ⇒ minimo locale (segni opposti ⇒ massimo).

**Test delle derivate successive** (Mazzi Taylor, teor. 0.6). Sia $f$ derivabile $n\ge2$ volte in $x_0$ interno, e sia $k\in\{2,\dots,n\}$ con $f'(x_0)=\dots=f^{(k-1)}(x_0)=0$, $f^{(k)}(x_0)\ne0$.
1. $k$ pari e $f^{(k)}(x_0)>0$ ⇒ minimo locale; $k$ pari e $f^{(k)}(x_0)<0$ ⇒ massimo locale;
2. $k$ dispari ⇒ $x_0$ è un punto di flesso.

## Formule chiave
$$f(x)-f(x_0)=\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+o\big((x-x_0)^k\big)$$

## Intuizione
Vicino a un punto critico la funzione si comporta come il primo termine non nullo dello sviluppo: una potenza pari ha un minimo o un massimo, una dispari cambia segno (flesso a tangente orizzontale, come $x^3$).

## Come si usa
Procedura: dominio; punti critici ($f'=0$); punti di non derivabilità; classificazione con il segno di $f'$ o con $f''$; sugli intervalli chiusi si confrontano anche i valori agli estremi (Weierstrass). Nella lezione dell'11/11/2021 un grafico mostra massimi e minimi locali non globali e un minimo in un punto angoloso. Esercizi tipo: esercitazioni 15 e 16 (2022-23).

## Nei corsi
- **Analisi 1** (triennale): ricerca di massimi e minimi; il test con le derivate successive è nell'elenco dei teoremi (sviluppi di Taylor, "Max/Min, punti di flesso"). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.5, def. 1.2, p. 14; cor. 1.3, p. 21); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Taylor-corretto.pdf` (§0.6, teor. 0.6, p. 11); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (§4.3, def. 4.3.3, teor. 4.3.24); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-11.pdf` (p. 1).

## Prerequisiti
- [[Teorema di Fermat]]: candidati: punti critici
- [[Monotonia e segno della derivata]]: test della derivata prima
- [[Sviluppi di Maclaurin]]: test delle derivate successive

## Porta a
- [[Studio di funzione]]: massimi e minimi

## Collegati
- [[Teorema di Weierstrass]]: estremi globali su [a,b]
- [[Funzione convessa]]: flessi da derivate di ordine dispari
