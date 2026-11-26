---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["Fibonacci numbers", "successione di Fibonacci", "Fibonacci sequence", "F_n", "sezione aurea"]
tags: [competenza, area/algebra-geometria]
---

# Numeri di Fibonacci

> La successione $1,1,2,3,5,8,13,\dots$ in cui ogni termine è la somma dei due precedenti. È l'esempio tipico di ricorrenza lineare omogenea del secondo ordine e cresce in modo esponenziale.

## Definizione / enunciato
$$F_0=1,\qquad F_1=1,\qquad F_n=F_{n-1}+F_{n-2}\quad(n\ge2).$$
L'ultima equazione è la **relazione di ricorrenza** e le prime due sono le **condizioni iniziali**, necessarie per avviarla. Storicamente è un modello di crescita di una popolazione di conigli (Tilli §3.1).

## Formule chiave
**Stima di crescita** (Tilli (3.1)):
$$(\sqrt2)^{\,n-1}\le F_n\le 2^{\,n-1},\qquad n\ge1.$$
- **Dal basso:** $F_n$ è non decrescente, quindi $F_n\ge2F_{n-2}$. Iterando si ottiene $F_n\ge2^{n/2}$ per $n$ pari e $F_n\ge2^{(n-1)/2}$ per $n$ dispari.
- **Dall'alto:** $F_n\le2F_{n-1}\le\dots\le2^{n-1}F_1$.

**Formula esplicita.** È il caso $\alpha=\beta=1$ della teoria generale. L'equazione caratteristica è $x^2=x+1$, con radici $x_\pm=\frac{1\pm\sqrt5}2$ (dalla formula $x_\pm=\frac{\alpha\pm\sqrt{\alpha^2+4\beta}}2$ di Tilli). Quindi $F_n=Ax_+^n+Bx_-^n$, con $A,B$ fissati da $F_0=F_1=1$. Le dispense annunciano la formula esplicita, ma i valori numerici di $A$ e $B$ non sono scritti (da verificare sul PDF).

## Intuizione
Ogni termine è almeno il doppio di quello di due posti prima e al più il doppio del precedente: per questo la crescita è esponenziale, con base fra $\sqrt2$ e 2. La base esatta è la radice dominante $\frac{1+\sqrt5}2$.

## Come si usa
**Trenini** (Tilli Es. 3.1.1). Un trenino di lunghezza $n$ si forma con vagoni corti (lunghezza 1) e lunghi (lunghezza 2). Se $a_n$ è il numero dei trenini, $a_0=a_1=1$ e $a_n=a_{n-1}+a_{n-2}$, perché il primo vagone è corto o lungo. Quindi $a_n=F_n$.

Nella lezione 1 i numeri di Fibonacci sono citati come esempio di successione del secondo ordine.

## Nei corsi
- **Matematica discreta** (triennale): apre il capitolo sulle ricorrenze delle dispense e motiva la teoria del secondo ordine. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§3.1, pp. 43-45); `triennale/ANNO 1/Matematica discreta/teoria/01 - Esercizi introduttivi.pdf` (p. 4).
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi sugli alberi AVL. Gli **alberi di Fibonacci** $F_h$ (gli alberi 1-bilanciati di altezza $h$ con il minimo numero di nodi) hanno $n_h=n_{h-1}+n_{h-2}+1$ nodi, da cui il nome, e $n_h=F_{h+3}-1$; dalla formula $F_h=\frac{\varphi^h-(1-\varphi)^h}{\sqrt5}$ con $\varphi=\frac{1+\sqrt5}2\approx1{,}618$ segue $F_h>c^h$ per una costante $c>1$, quindi l'altezza di un AVL è $O(\log n)$. Tabella dei lucidi: $F_h=0,1,1,2,3,5,8,13,21,\dots$ e $n_h=1,2,4,7,12,20,33,54,88,\dots$ per $h=0,1,2,\dots$ La lezione 4 di C++ usa invece `fib(n)` ricorsiva con `switch` come esempio di sintassi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo04.pdf` (p. 24-26); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 26).

## Prerequisiti
- [[Relazioni ricorsive lineari omogenee]]: è il caso $\alpha=\beta=1$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Conteggio con relazioni ricorsive]]: trenini e tassellazioni danno ricorrenze dello stesso tipo
