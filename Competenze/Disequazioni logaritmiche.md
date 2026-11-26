---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["logarithmic inequalities", "condizioni di esistenza del logaritmo", "disequazione logaritmica elementare", "passare agli argomenti"]
tags: [competenza, area/analisi]
---

# Disequazioni logaritmiche

> Si impongono prima le condizioni di esistenza (argomento positivo), poi si "passa agli argomenti" scrivendo entrambi i membri come logaritmi nella stessa base, con il verso che dipende dalla base.

## Definizione / enunciato
**Prima cosa da fare**: le condizioni di esistenza. $\log_a B(x)$ esiste se e solo se $B(x)>0$.
**Disequazione logaritmica elementare** $\log_a B(x)\gtrless c$: si scrive anche il secondo membro come logaritmo nella stessa base, $c=\log_a a^c$, e si passa agli argomenti:
- se la base è **maggiore di 1** il verso della disequazione resta invariato;
- se la base è **minore di 1** il verso si rovescia.

Le soluzioni trovate vanno **intersecate** con le condizioni di esistenza.

## Formule chiave
$$a^x=b\iff x=\log_a b,\qquad \log_a1=0,\qquad \log_a a=1,\qquad c=c\log_a a=\log_a a^c .$$

## Intuizione
$\log_a$ è crescente se $a>1$ e decrescente se $0<a<1$: applicare (o togliere) una funzione crescente conserva le disuguaglianze, una decrescente le inverte. Fuori dalle condizioni di esistenza la disequazione non ha senso, anche se l'algebra sembra funzionare.

## Come si usa
Lezione 1, es. 8: $\dfrac{x\log(x+2)}{x-3}\le0$.
- C.E.: $x+2>0\Rightarrow x>-2$.
- $N_1\ge0$: $x\ge0$. $N_2\ge0$: $\log(x+2)\ge0=\log1\Rightarrow x+2\ge1\Rightarrow x\ge-1$. $D>0$: $x>3$.
- Tabella dei segni (si chiede $\le0$, quindi si prendono gli intervalli con segno $-$): $x\le-1\ \vee\ 0\le x<3$.
- Intersecando con la C.E.: $S:\ -2<x\le-1\ \vee\ 0\le x<3$.

## Nei corsi
- **Analisi 1** (triennale): esercitazione 1 (test di ingresso). Fonti: `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, pp. 8-9).

## Prerequisiti
- [[Proprietà di potenze e logaritmi]]: $c=\log_a a^c$ per passare agli argomenti
- [[Disequazioni fratte]]: tabella dei segni con fattori logaritmici
- [[Operazioni sugli insiemi]]: intersezione con le condizioni di esistenza

## Porta a
- Nessuno.

## Collegati
- [[Disequazioni esponenziali]]: si risolvono passando ai logaritmi
