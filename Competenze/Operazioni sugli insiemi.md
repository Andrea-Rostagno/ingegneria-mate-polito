---
tipo: competenza
area: analisi
corsi: [Analisi 1, Informatica, Istituzioni algebra]
livello: [triennale]
aliases: ["set operations", "unione", "intersezione", "complementare", "union", "intersection", "complement", "insiemi definiti da predicati"]
tags: [competenza, area/analisi]
---

# Operazioni sugli insiemi

> Complementare, intersezione e unione di insiemi definiti da predicati corrispondono ai connettivi "non", "e", "o".

## Definizione / enunciato
I predicati servono a definire insiemi tramite una proprietà caratteristica: dati $A=\{x\in X\mid p(x)\}$ (gli $x$ per cui $p(x)$ è vera) e $B=\{x\in X\mid q(x)\}$,
- **complementare**: $A^c=\{x\in X\mid \rceil p(x)\}$, tutti gli elementi che non stanno in $A$;
- **intersezione**: $A\cap B=\{x\in X\mid p(x)\wedge q(x)\}$, gli elementi che stanno contemporaneamente in $A$ e in $B$;
- **unione**: $A\cup B=\{x\in X\mid p(x)\vee q(x)\}$, gli elementi che stanno in $A$ o in $B$.

## Formule chiave
$$\rceil\;\leftrightarrow\;{}^c,\qquad \wedge\;\leftrightarrow\;\cap,\qquad \vee\;\leftrightarrow\;\cup .$$

## Intuizione
Esiste un legame diretto fra connettivi logici e operazioni insiemistiche: "contemporaneamente" è la "e", "almeno in uno dei due" è la "o". Le leggi logiche (De Morgan, associatività) diventano così leggi sugli insiemi.

## Come si usa
Nella risoluzione delle disequazioni (lezione 1) le soluzioni delle condizioni di un **sistema** si **intersecano**, e quelle di sistemi alternativi si **uniscono**. Regola sugli estremi (NB della lezione 1): quando si unisce, fra compreso e non compreso "vince" il compreso; quando si interseca, vince il non compreso.
Esempio della lezione 2: $A=\{x\in X\mid x\text{ è un numero dispari}\}$.

## Nei corsi
- **Analisi 1** (triennale): "Insiemi, sottoinsiemi, operazioni sugli insiemi". Fonti: `triennale/ANNO 1/analisi 1/2021.09.28 - Fiandaca_Lezione2.pdf` (lezione 2, pp. 9-10); `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, p. 5).
- **Informatica** (triennale): unità P8: il tipo `set` di Python implementa le operazioni con i metodi `union`, `intersection`, `difference`, `symmetric_difference`, `issubset` (o gli operatori `|`, `&`, `-`, `^`, `<=`), che restituiscono un nuovo insieme. Esempio: colori delle bandiere britannica, canadese e italiana. Fonti: `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 19-27).
- **Analisi 1** (seconda passata, 2026-11-24): servono per immagine e controimmagine di funzioni e per gli intorni bucati $B(\bar x)\cap A\setminus\{\bar x\}$ della definizione di limite. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (§1.2, leggi di De Morgan teor. 1.1); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Funzioni.pdf` (def. 1.2).
- **Istituzioni algebra** (triennale): insiemi, inclusione, unione, intersezione, differenza, insieme vuoto, prodotto cartesiano e insieme delle parti sono dati per noti e inquadrati negli assiomi di Zermelo-Fraenkel, usati implicitamente. Il prodotto $X\times Y=\{\langle x,y\rangle\}$ di coppie ordinate serve a definire corrispondenze e relazioni. Fonti: `triennale/ANNO 2/istituzioni/Alg-28-09-22.pdf` (lezione 1-2, pp. 2-3).

## Prerequisiti
- [[Connettivi logici]]: e, o, non diventano intersezione, unione, complementare
- [[Quantificatori]]: insieme definito come $\{x\in X\mid p(x)\}$

## Porta a
- [[Relazione di equivalenza]]: le relazioni sono sottoinsiemi di $X\times X$
- [[Disequazioni con valore assoluto]]: unione delle soluzioni di due sistemi
- [[Disequazioni irrazionali]]: unione delle soluzioni di due sistemi
- [[Disequazioni logaritmiche]]: intersezione con le condizioni di esistenza
- [[Punto di accumulazione]]: si guarda A privato di x
- [[Funzioni iniettive e suriettive]]: immagine e controimmagine sono insiemi

## Collegati
- [[Insieme in Python]]: union, intersection, difference implementano le operazioni matematiche
