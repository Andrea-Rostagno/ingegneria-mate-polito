---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [notazione polacca inversa, reverse Polish notation, RPN, notazione infissa, conversione da infissa a postfissa, valutazione di espressioni postfisse, PostScript]
tags: [competenza, area/informatica]
---

# Notazione postfissa

> Scrittura delle espressioni con l'operatore dopo gli operandi ($AB+$ invece di $A+B$): si valuta da sinistra a destra con una pila, senza parentesi.

## Definizione / enunciato
- **Infissa**: operatore tra gli operandi, $A+B$.
- **Postfissa** (polacca inversa): operatore dopo gli operandi, $AB+$.

**Valutazione** con una pila, leggendo da sinistra a destra (operazioni binarie): se si legge un operando se ne fa la Push; se si legge un operatore si fanno due Pop, si applica l'operatore ai due operandi nel giusto ordine e si fa la Push del risultato.
**Conversione infissa → postfissa** (la postfissa si costruisce man mano, con una pila di operatori): gli operandi si appendono in fondo alla postfissa; per un operatore si applica una di quattro regole: (1) Push del simbolo corrente e si passa al successivo; (2) Pop e l'operatore estratto si appende alla postfissa; (3) il simbolo corrente si ignora e si fa una Pop scartando una "("; (4) fine conversione: si cancella il simbolo e si scarta con una Pop il "\$".

## Formule chiave
Scelta della regola in base alla cima della pila (righe) e al simbolo corrente (colonne):

| cima \ simbolo | \$ | + o − | × o / | ( | ) |
|---|---|---|---|---|---|
| \$ | 4 | 1 | 1 | 1 | — |
| + o − | 2 | 2 | 1 | 1 | 2 |
| × o / | 2 | 2 | 2 | 1 | 2 |
| ( | — | 1 | 1 | 1 | 3 |

(con "—" le celle lasciate vuote nella slide)

## Intuizione
La postfissa codifica già l'ordine di esecuzione: le parentesi e le precedenze servono solo nella forma infissa. Il linguaggio grafico PostScript, eseguito da un interprete, usa questa notazione: un'operazione con $k$ argomenti li trova nelle $k$ posizioni in cima alla pila.

## Come si usa
Esempio di valutazione delle slide: `7 3 2 + ×`. Dopo gli operandi la pila è 7, 3, 2; il `+` dà 7, 5; il `×` dà 35. Esempio di conversione: `2 × (6 + 4) $` diventa `2 6 4 + ×`.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi su pile e code. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo02.pdf` (p. 9-13).

## Prerequisiti
- [[Pila (struttura dati)]]: struttura usata per valutare e convertire

## Porta a
- Nessuno nel corso.

## Collegati
- [[Compilazione e interpretazione]]: PostScript è eseguito da un interprete basato su una pila
