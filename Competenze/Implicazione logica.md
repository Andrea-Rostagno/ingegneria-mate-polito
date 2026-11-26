---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["implication", "implicazione", "se... allora", "condizione necessaria", "condizione sufficiente", "necessary and sufficient condition", "ipotesi e tesi", "modus ponens"]
tags: [competenza, area/analisi]
---

# Implicazione logica

> Il connettivo "se $p$ allora $q$": è falso solo quando l'ipotesi è vera e la tesi falsa, e traduce le condizioni necessarie e sufficienti.

## Definizione / enunciato
$p\Rightarrow q$ si legge "$p$ implica $q$" o "se $p$ allora $q$"; $p$ è la **premessa** o **ipotesi**, $q$ la **conclusione** o **tesi**. Si definisce
$$p\Rightarrow q \;=\; \rceil p\vee q .$$
- $p\Rightarrow q$ è falsa **solo** se $p$ è vera e $q$ è falsa: da premesse vere non si può ottenere una conclusione falsa.
- $F\Rightarrow V$ è vera: non si esclude che da un'ipotesi falsa si giunga a una conclusione vera.
- **Non è commutativa**: $p\Rightarrow q \ne q\Rightarrow p$.

**Condizioni.** Se $p\Rightarrow q$, $p$ è **condizione sufficiente** perché si realizzi $q$, e $q$ è **condizione necessaria** perché si realizzi $p$.

## Formule chiave
| $p$ | $q$ | $\rceil p$ | $p\Rightarrow q=\rceil p\vee q$ | $q\Rightarrow p$ |
|---|---|---|---|---|
| V | V | F | V | V |
| V | F | F | F | V |
| F | V | V | V | F |
| F | F | V | V | V |

## Intuizione
L'implicazione non dice nulla quando l'ipotesi è falsa: promette solo che, se $p$ vale, vale anche $q$. Per questo "$p\Rightarrow q$ vera" non significa "$q$ vera": serve anche che $p$ sia vera. La lezione 2 lo mostra con la tavola di $[p\wedge(p\Rightarrow q)]\Rightarrow q$, che è sempre vera (una tautologia).

## Come si usa
Esempio della lezione 2: $p$ = "A è un quadrato", $q$ = "A è un rettangolo". "Se A è un quadrato allora è un rettangolo" è vera; il viceversa no. Essere un quadrato è condizione sufficiente per essere un rettangolo; essere un rettangolo è condizione necessaria per essere un quadrato.
`Esercizi di logica.pdf` es. 4-5: dimostrare $p\Rightarrow q=\rceil(p\wedge\rceil q)$ e $[(p\Rightarrow q)\wedge(q\Rightarrow r)]=p\Rightarrow r$; studiare la verità di $\rceil(p\wedge q)\Rightarrow\rceil q$.

## Nei corsi
- **Analisi 1** (triennale): parte di "Logica: proposizioni, connettivi logici". Fonti: `triennale/ANNO 1/analisi 1/2021.09.28 - Fiandaca_Lezione2.pdf` (lezione 2, pp. 2-3, 5, 7-8); `triennale/ANNO 1/analisi 1/Esercizi di logica.pdf` (es. 4-6).
- **Analisi 1** (seconda passata, 2026-11-24): Mazzi, prop. 1.1: $(p\Rightarrow q)\Leftrightarrow(\neg p\vee q)$, e §1.1.2 "cosa vuol dire dimostrare un teorema" (ipotesi e tesi). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (prop. 1.1, p. 2; §1.1.2, p. 3).

## Prerequisiti
- [[Connettivi logici]]: definita come $\rceil p\vee q$

## Porta a
- [[Equivalenza logica]]: doppia implicazione $p\Leftrightarrow q$
- [[Dimostrazione per contrapposizione e per assurdo]]: struttura ipotesi-tesi da dimostrare

## Collegati
- Nessuno.
