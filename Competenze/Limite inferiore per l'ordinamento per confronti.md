---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [lower bound sull'ordinamento, lower bound Omega(n log n), limite inferiore per la ricerca, lower bound sulla ricerca, complessità del problema dell'ordinamento, ottimalità asintotica]
tags: [competenza, area/informatica]
---

# Limite inferiore per l'ordinamento per confronti

> Ogni algoritmo di ordinamento che usa confronti tra coppie di elementi richiede $\Omega(n\log n)$ confronti al caso pessimo; analogamente la ricerca per confronti richiede $\Omega(\log n)$ confronti.

## Definizione / enunciato
Il **limite superiore** della complessità di un problema è il costo di un algoritmo che lo risolve; il **limite inferiore** è un costo sotto il quale nessun algoritmo può scendere. Se coincidono, l'algoritmo è asintoticamente ottimo.
**Teorema**: ogni algoritmo $A$ di ordinamento basato su confronti richiede $\Omega(n\log n)$ confronti al caso pessimo.

## Formule chiave
1. $A$ deve distinguere tra almeno $n!$ situazioni (i possibili ordinamenti degli $n$ elementi).
2. Ogni confronto ha tre esiti ($<,=,>$): dopo $t$ confronti $A$ distingue al più $3^t$ situazioni.
3. Quindi $3^t\ge n!$, e poiché
$$n!=n(n-1)\cdots1>n(n-1)\cdots\left(\tfrac n2+1\right)>\left(\tfrac n2\right)^{n/2},$$
$$t\ge\log_3(n!)>\left(\tfrac n2\right)\log_3\left(\tfrac n2\right)=\Omega(n\log n).$$

**Ricerca**: un algoritmo di ricerca per confronti deve distinguere $n+1$ situazioni (la chiave è in una delle $n$ posizioni o non c'è), quindi $3^t\ge n+1$ e $t\ge\log_3(n+1)=\Omega(\log n)$.

## Intuizione
Ogni confronto al massimo "triplica" ciò che l'algoritmo sa; servono abbastanza confronti da distinguere tutte le permutazioni possibili, e $\log n!$ cresce come $n\log n$.

## Come si usa
Conclusioni del corso: il mergesort (e lo heapsort) con $O(n\log n)$ è asintoticamente ottimo, e la complessità del problema dell'ordinamento è $\Theta(n\log n)$; la ricerca binaria con $O(\log n)$ è asintoticamente ottima. Le tabelle hash non violano il limite perché non confrontano chiavi.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi su code di priorità e su divide et impera. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo02.pdf` (p. 33); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 10, 18).

## Prerequisiti
- [[Costo computazionale di un algoritmo]]: si ragiona sul caso pessimo di ogni algoritmo
- [[Calcolo combinatorio]]: le permutazioni di n elementi sono n!

## Porta a
- Nessuno nel corso.

## Collegati
- [[Merge sort]]: raggiunge il limite, quindi è ottimo
- [[Heapsort]]: raggiunge il limite in loco
- [[Ricerca binaria]]: raggiunge il limite Omega(log n) della ricerca
