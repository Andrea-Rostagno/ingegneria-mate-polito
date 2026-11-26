---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [classe P, classe NP, NPC, NP-completo, NP-complete, EXP, certificato polinomiale, problema trattabile, problema intrattabile, P = NP, riduzione polinomiale]
tags: [competenza, area/informatica]
---

# Classi P e NP

> Classificazione dei problemi decidibili per costo: P sono i problemi trattabili, NP quelli la cui soluzione si verifica in tempo polinomiale, NPC i più difficili di NP.

## Definizione / enunciato
- Problemi **trattabili**: esiste un algoritmo polinomiale; **intrattabili**: non esiste.
- **P**: problemi risolvibili deterministicamente in tempo polinomiale (trattabili).
- **EXP**: problemi risolvibili deterministicamente in tempo esponenziale (utile solo per piccole istanze).
- **Certificato polinomiale** per un problema $\Pi$: chi ha la soluzione di un'istanza può convincerci in tempo polinomiale; chi non l'ha deve procedere per tentativi con un backtrack esponenziale. **NP** = classe dei problemi che ammettono un certificato polinomiale (definizione informale; formalmente, risolvibili non deterministicamente in tempo polinomiale).
- **NPC** (NP-completi): $NPC\subseteq NP$, non si sa se siano trattabili, e ogni $\Pi\in NP$ si riconduce a un $\Sigma\in NPC$ con una **riduzione polinomiale** $\Pi\le\Sigma$.

## Formule chiave
$$P\subseteq NP \quad(\text{basta il certificato nullo se }\Pi\in P)$$
Se un problema NPC è trattabile, lo sono tutti e $P=NP$; se uno è intrattabile, lo sono tutti e $P\ne NP$. "$P=NP$?" è un famoso problema aperto.

## Intuizione
La Torre di Hanoi e il Sudoku sono entrambi difficili da risolvere, ma in modo diverso: la soluzione del Sudoku si **verifica** in tempo polinomiale (circa $m\cdot n\le n^3$ passi controllando righe, colonne e sottotabelle), mentre per la Torre di Hanoi questo non è possibile. Il Sudoku $n\times n$ è uno delle migliaia di problemi NPC: sappiamo trovarne la soluzione solo con un algoritmo esponenziale e non sappiamo se ne esista uno polinomiale.

## Come si usa
Domanda tipica: definire P, NP, NPC con l'esempio del Sudoku (backtrack esponenziale, verifica polinomiale) e spiegare perché basta un problema NPC trattabile per avere $P=NP$.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi introduttivi Crescenzi, con definizioni informali ("definizioni più rigorose a fine corso", non presenti nella cartella). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 8, 16-17, 22-30).

## Prerequisiti
- [[Problema della fermata]]: prima si separano problemi decidibili e indecidibili
- [[Costo computazionale di un algoritmo]]: definizione di algoritmo polinomiale

## Porta a
- Nessuno nel corso.

## Collegati
- [[Torre di Hanoi]]: decidibile ma esponenziale, e senza verifica polinomiale
- [[Backtracking (algoritmi)]]: l'unico metodo noto per risolvere il Sudoku
