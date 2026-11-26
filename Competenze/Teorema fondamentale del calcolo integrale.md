---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["fundamental theorem of calculus", "teorema di Torricelli-Barrow", "formula fondamentale del calcolo integrale"]
tags: [competenza, area/analisi]
---

# Teorema fondamentale del calcolo integrale

> Per $f$ continua la funzione integrale è una primitiva di $f$, e ogni integrale definito si calcola con una primitiva qualsiasi: $\int_a^bf=G(b)-G(a)$.

## Definizione / enunciato
**Teorema 5.2.14** (Morandotti; Lussardi teor. 4.2.3). Sia $f:[a,b]\to\mathbb R$ continua.
1. La funzione integrale $F(x)=\int_{x_0}^xf(t)\,dt$ è derivabile su $[a,b]$ e $F'(x)=f(x)$ per ogni $x$.
2. **(Torricelli-Barrow)** Se $G$ è una qualunque primitiva di $f$,
$$\int_a^bf(x)\,dx=G(b)-G(a)=\big[G(x)\big]_a^b .$$

## Formule chiave
$$\frac{F(x+h)-F(x)}h=\frac1h\int_x^{x+h}f(t)\,dt=f(\xi_x(h))\xrightarrow[h\to0]{}f(x)$$
(teorema della media integrale e continuità di $f$). Il punto 2 segue perché $G-F$ ha derivata nulla sull'intervallo, quindi è costante.

## Intuizione
Derivare e integrare sono operazioni inverse: la velocità con cui cresce l'area sotto il grafico è l'altezza del grafico. Così il problema delle aree si riduce alla ricerca di primitive.

## Come si usa
Calcolo degli integrali definiti: si trova una primitiva (tavola, per parti, per sostituzione, fratti semplici) e si valuta agli estremi. Esercizio 1 dell'esercitazione 20 (2022-23): $\int_2^3\ln(x^2-x)\,dx$, $\int_{\pi/4}^{\pi/2}\sin x\cos^3x\,dx$. Lezioni del 13/12/2021: integrazione per parti e per sostituzione negli integrali definiti, con l'esempio $\int_0^1\arctan x\,dx$ ("calcolo prima la primitiva e poi uso il TFC"). Sull'intervallo l'ipotesi di continuità conta: per $f$ solo integrabile si veda il teor. 7.5.1 (funzione integrale continua, derivabile nei punti di continuità di $f$).

## Nei corsi
- **Analisi 1** (triennale): "teorema fondamentale del calcolo integrale; relazione tra primitive e integrazione definita", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 5.2.14, PDF pp. 184-185); `triennale/ANNO 1/analisi 1/Dispense/Dispensa Lussardi.pdf` (cap. 4 §2, teor. 4.2.3, pp. 72-74); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-12-13.pdf` (p. 1).

## Prerequisiti
- [[Funzione integrale]]: si deriva F
- [[Teorema della media integrale]]: nel rapporto incrementale
- [[Primitive delle funzioni elementari]]: G(b)-G(a)
- [[Funzioni a derivata nulla]]: due primitive differiscono per una costante

## Porta a
- [[Integrale improprio]]: si calcola con una primitiva
- [[Integrazione per parti]]: versione per integrali definiti
- [[Integrazione per sostituzione]]: versione per integrali definiti

## Collegati
- Nessuno.
