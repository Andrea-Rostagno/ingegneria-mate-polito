---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Poincaré recurrence theorem", "teorema di ricorrenza", "ricorrenza di Poincaré", "punto ricorrente", "recurrent point"]
tags: [competenza, area/analisi]
---

# Teorema di ricorrenza di Poincaré

> In un flusso che conserva il volume, quasi ogni punto di un dominio invariante limitato ritorna arbitrariamente vicino a sé stesso.

## Definizione / enunciato
**Teorema.** Sia $\{\phi^t\}_t$ un flusso che conserva il volume e $D$ un dominio limitato e invariante ($\phi^tD=D$) di $M$. Allora per quasi ogni $x\in D$
$$\liminf_{t\to\infty}\|\phi^tx-x\|=0 .$$

## Formule chiave
Conseguenza: un dominio invariante limitato di un flusso conservativo è contenuto nell'insieme non vagante $\Omega$ (anche tutto $M$). Nei sistemi dissipativi, invece, $\Omega$ è in generale molto più piccolo di $M$: ci sono molti punti non ricorrenti, che finiscono sugli attrattori. Legato alla stima della dispensa: la ricorrenza di uno stato con accuratezza $\epsilon$ richiede in media un tempo $\tau\sim\epsilon^{-D}$, $D$ numero di gradi di libertà.

## Intuizione
Se il volume si conserva e lo spazio disponibile è finito, le immagini di un piccolo insieme non possono restare tutte disgiunte per sempre: prima o poi devono sovrapporsi all'insieme di partenza. Ma il tempo di ritorno cresce esponenzialmente con la dimensione, ed è per questo che il "metodo degli analoghi" per le previsioni meteo fallisce.

## Come si usa
Distingue sistemi conservativi (hamiltoniani, $\mathrm{div}F=0$) e dissipativi ($\langle\mathrm{div}F\rangle<0$, per esempio il sistema di Lorenz con $\mathrm{div}f=-\sigma-1-\beta$): nei primi la ricorrenza è tipica, nei secondi le traiettorie si concentrano su attrattori.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 1, 4).

## Prerequisiti
- [[Flusso di un sistema dinamico]]: flussi che conservano il volume
- [[Insiemi invarianti e attrattori]]: punti vaganti e insieme non vagante

## Porta a
- [[Misura invariante di un sistema dinamico]]: la misura di volume è invariante per i flussi conservativi

## Collegati
- [[Equazioni di Hamilton]]: i flussi hamiltoniani conservano il volume
- [[Ricorrenza e transienza]]: analogo probabilistico per le catene di Markov
