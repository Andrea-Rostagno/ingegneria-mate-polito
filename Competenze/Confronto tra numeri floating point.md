---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [confronto tra float, floating point comparison, EPSILON, math.isclose, tolleranza, errori di arrotondamento in Python, tolleranza geometrica, tolerance]
tags: [competenza, area/informatica]
---

# Confronto tra numeri floating point

> In Python i float non sono esatti: i calcoli introducono piccoli errori, quindi i confronti di uguaglianza vanno fatti con una tolleranza.

## Definizione / enunciato
I numeri a virgola mobile non sono esatti: è un limite del sistema binario, non tutti i reali hanno una rappresentazione esatta e la precisione è limitata dal numero di bit. I calcoli possono introdurre errori di approssimazione, di cui tenere conto soprattutto nei **confronti**: il test `==` tra float è inaffidabile.

Rimedi indicati (P2 p. 47): arrotondare all'intero più vicino; mostrare un numero fisso di cifre decimali (output formattato); definire una tolleranza `EPSILON` e fare solo confronti approssimati, oppure usare `math.isclose`.

## Formule chiave
Due float $x, y$ si considerano "uguali" se $|x - y| < \varepsilon$ (le slide usano `EPSILON = 1E-14`).

`math.isclose(a, b, rel_tol, abs_tol)` restituisce True se
$$|a - b| \le \max\big(r\cdot\max(|a|, |b|),\ s\big)$$
con $r$ = `rel_tol` (tolleranza relativa, default 1e-09) e $s$ = `abs_tol` (tolleranza assoluta, utile vicino a 0). La slide P3 p. 53 scrive per refuso `rel_tot`/`abs_tot` e scambia le parole "assoluto" e "relativo"; il prontuario usa i nomi corretti.

## Intuizione
Errore relativo ed errore assoluto: per numeri grandi conta la tolleranza relativa, vicino a zero serve quella assoluta.

## Come si usa
Esempi delle slide: `price = 4.35; quantity = 100; print(price * quantity)` stampa `434.99999999999994` invece di 435; `r = math.sqrt(2.0)` e `r * r == 2.0` è falso perché `r * r` vale `2.0000000000000004`; con `abs(r * r - 2.0) < EPSILON` oppure `isclose(r*r, 2.0)` il confronto riesce.

## Nei corsi
- **Informatica** (triennale): unità P2 sezione 2.2 (errori di arrotondamento) e P3 sezione 3.2 (errore comune floating point). Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 47), `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 50-53), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 1).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale ("Tolerances"). Nei confronti degli algoritmi si usa una tolleranza $\tau$ relativa: $a==b$ diventa $\frac{|a-b|}{\max(|a|,|b|,1)}<\tau$, e $a>b$ diventa $\frac{a-b}{\max(|a|,|b|,1)}>\tau$. Buona pratica: fissare **un'unica tolleranza** per tutte le operazioni del codice, per coerenza. Se $\tau$ è la tolleranza per le operazioni 1D (lunghezze), per quelle 2D come le aree si usa circa $\tau^2$: si ammettono solo poligoni con lati più lunghi di $\tau$, quindi il più piccolo poligono ammissibile è il rettangolo di lati $\tau$. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1, scansione letta visivamente).

## Prerequisiti
- [[Rappresentazione floating-point]]: precisione limitata della mantissa
- [[Operatori aritmetici]]: i calcoli accumulano errori

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Operatori relazionali]]: il confronto == tra float è inaffidabile
- [[Precisione di macchina]]: la tolleranza va scelta in rapporto a eps
- [[Operazioni di macchina]]: ogni operazione arrotonda il risultato esatto
- [[Numeri di macchina]]: insieme finito, non tutti i reali sono rappresentabili esattamente
- [[Errore assoluto e relativo]]: isclose combina una tolleranza relativa e una assoluta
