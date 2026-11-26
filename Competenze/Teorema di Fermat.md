---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["Fermat's theorem", "punto critico", "punto stazionario", "stationary point"]
tags: [competenza, area/analisi]
---

# Teorema di Fermat

> In un punto di massimo o minimo locale interno al dominio, se la funzione è derivabile, la derivata è nulla.

## Definizione / enunciato
Un punto $x_0$ interno al dominio in cui $f$ è derivabile con $f'(x_0)=0$ si dice **punto critico** (stazionario) (Mazzi, def. 1.3).

**Teorema di Fermat** (teor. 1.1). Sia $x_0$ interno al dominio di $f$. Se
1. $x_0$ è un punto di estremo locale di $f$, e
2. $f$ è derivabile in $x_0$,

allora $f'(x_0)=0$.

## Formule chiave
Se $x_0$ è di massimo locale, in un intorno
$$\frac{f(x)-f(x_0)}{x-x_0}\ge0\ (x<x_0),\qquad \frac{f(x)-f(x_0)}{x-x_0}\le0\ (x>x_0),$$
e per la permanenza del segno $f'_-(x_0)\ge0$ e $f'_+(x_0)\le0$: essendo uguali, $f'(x_0)=0$.

## Intuizione
In cima a una collina liscia la tangente è orizzontale. La condizione è solo necessaria: $x^3$ ha $f'(0)=0$ ma $0$ non è un estremo.

## Come si usa
Riduce la ricerca degli estremi locali ai punti critici, ai punti di non derivabilità e (sugli intervalli chiusi) agli estremi dell'intervallo, dove il teorema non si applica perché il punto non è interno. Nella lezione dell'11/11/2021 ("ottimizzazione") si mostrano esempi grafici di massimi e minimi locali non globali e di un minimo in un punto angoloso, dove la derivata non esiste. Esercizi tipo: esercitazione 14 (2022-23).

## Nei corsi
- **Analisi 1** (triennale): "teorema di Fermat", con dimostrazione. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/calcolo differenziale corretto.pdf` (§1.5, def. 1.2-1.3, teor. 1.1, pp. 14-15); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.3.9, PDF p. 152); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-11.pdf` (p. 1).

## Prerequisiti
- [[Derivata]]: segno del rapporto incrementale
- [[Teorema della permanenza del segno]]: passaggio al limite

## Porta a
- [[Teorema di Rolle]]: nel punto interno f'=0
- [[Punti di estremo locale]]: candidati: punti critici

## Collegati
- Nessuno.
