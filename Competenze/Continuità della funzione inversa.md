---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["continuity of the inverse function", "inversa di una funzione continua"]
tags: [competenza, area/analisi]
---

# Continuità della funzione inversa

> Su un intervallo una funzione continua è iniettiva se e solo se è strettamente monotona, e in tal caso la sua inversa è continua.

## Definizione / enunciato
(Mazzi, §1.15.3)
- **Teor. 1.23.** $f$ strettamente monotona su $A$ $\iff$ $f^{-1}$ strettamente monotona su $f(A)$, con lo stesso verso.
- **Teor. 1.24.** Se $f$ è continua su un intervallo $I$: $f$ iniettiva su $I$ $\iff$ $f$ strettamente monotona su $I$.
- **Teor. 1.25.** Se $f$ è strettamente monotona su un intervallo $I$: $f$ continua su $I$ $\iff$ $f(I)$ è un intervallo.
- **Teor. 1.26.** Se $f$ è continua e iniettiva su un intervallo $I$, la funzione inversa $f^{-1}:J=f(I)\to I$ è continua sull'intervallo $J$.

I teoremi 1.24-1.26 sono falsi se $I$ non è un intervallo.

## Formule chiave
$$f\in C^0(I),\ f\ \text{iniettiva}\ \Rightarrow\ f^{-1}\in C^0(f(I))$$

## Intuizione
Un'inversa discontinua dovrebbe "saltare", ma l'immagine di un intervallo tramite una funzione continua è un intervallo senza buchi, e una funzione monotona con immagine senza buchi non può saltare.

## Come si usa
Giustifica la continuità di $\log$, $\sqrt[n]x$, $\arcsin$, $\arccos$, $\arctan$ come inverse di funzioni continue strettamente monotone su intervalli; è un'ipotesi del teorema sulla derivata della funzione inversa. Dimostrazione di 1.24 (Mazzi): se $f$ non fosse monotona ci sarebbero $x_1<x_2<x_3$ con valori non ordinati, e per i valori intermedi un altro punto avrebbe lo stesso valore di $f(x_1)$.

## Nei corsi
- **Analisi 1** (triennale): presente nell'elenco dei teoremi d'esame ("$f$ continua su intervallo, iniettiva ⇒ l'inversa è continua"). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.15.3, teor. 1.23-1.26, pp. 57-59); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 3.2.18-3.2.21, PDF pp. 101-103); `triennale/ANNO 1/analisi 1/Appunti, riassunti e teoremi/Analisi Matematica 1 - TEOREMI.pdf` (elenco).

## Prerequisiti
- [[Teorema dei valori intermedi]]: f(I) è un intervallo
- [[Funzioni monotone]]: continua e iniettiva = strettamente monotona
- [[Funzione composta e funzione inversa]]: definizione di inversa

## Porta a
- [[Derivata della funzione inversa]]: serve x→x0 quando y→y0

## Collegati
- Nessuno.
