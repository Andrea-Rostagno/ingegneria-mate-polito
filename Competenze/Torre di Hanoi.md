---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["Tower of Hanoi", "torre di Hanoi", "gioco della torre di Hanoi", "2^n - 1 mosse"]
tags: [competenza, area/algebra-geometria]
---

# Torre di Hanoi

> Un gioco con $n$ dischi e 3 piattaforme. Il numero minimo di mosse è $2^n-1$, e lo si dimostra per induzione usando una ricorrenza.

## Definizione / enunciato
Ci sono 3 piattaforme e una torre di $n$ dischi di grandezza decrescente. Bisogna spostare la torre muovendo un solo disco per volta, senza mai mettere un disco grande su uno piccolo.

**Teorema 4.4.1** (Tilli). Il gioco con $n$ dischi si risolve sempre in $2^n-1$ mosse, e questo numero è ottimale: servono almeno $2^n-1$ mosse.

## Formule chiave
$$M_1=1,\qquad M_{n+1}=2M_n+1\quad\Longrightarrow\quad M_n=2^n-1.$$
Lezione 3: per $n=3$ servono 7 mosse, per $n=4$ ne servono 15.

## Intuizione
Per spostare $n+1$ dischi si spostano i primi $n$ su una piattaforma di appoggio, ignorando il disco più grande, che fa da base vuota. Poi si sposta il disco grande e infine si rimettono sopra gli $n$ dischi. Il disco grande deve muoversi almeno una volta, e in quel momento gli altri $n$ devono stare tutti su un'altra piattaforma: per questo la strategia è anche ottimale.

## Come si usa
- **Sufficienza per induzione** su $P(n)$ = "il gioco con $n$ dischi si risolve in $2^n-1$ mosse". La base è $P(1)$: una mossa. Nel passo induttivo, $(2^n-1)+1+(2^n-1)=2^{n+1}-1$.
- **Necessità:** la stessa scomposizione mostra che le mosse minime soddisfano $M_{n+1}\ge 2M_n+1$.
- **Dalla ricorrenza alla formula:** $M_{n+1}=2M_n+1$ è una ricorrenza lineare non omogenea del primo ordine. La sua soluzione generale è $A\cdot2^n-1$, e il dato $M_1=1$ dà $A=1$ (calcolo fatto con la formula di [[Relazioni ricorsive lineari del primo ordine]]).
- La lezione 3 pone il problema ("quante mosse sono necessarie e sufficienti?") e chiede di scrivere la formula esplicita.

## Nei corsi
- **Matematica discreta** (triennale): chiude la lezione 3 come esempio di definizione ricorsiva; dimostrazione completa nelle dispense, tra le applicazioni dell'induzione. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/03 -Insiemi equipotenti e cardinalitá.pdf` (p. 9); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§4.4.1, pp. 76-80).
- **Programmazione e calcolo scientifico** (triennale): lucidi introduttivi Crescenzi, esempio di problema **decidibile ma non trattabile**. Soluzione ricorsiva `TorriHanoi(n, primo, secondo, terzo)`: sposta $n-1$ dischi sul secondo piolo, il disco più grande sul terzo, poi gli $n-1$ dischi sul terzo; mosse $(2^{n-1}-1)+1+(2^{n-1}-1)=2^n-1$. Con 64 dischi e una mossa al secondo servono circa 585 miliardi di anni; moltiplicare per $X$ la velocità aggiunge solo $\log_2X$ dischi (da 64 dischi con 1 operazione/s a 93 con $10^9$). Versione generalizzata con $k>3$ pioli ($n$ multiplo di $k-2$): $2(k-2)(2^{n/(k-2)}-1)$ mosse, al più $n^2$ fissando $k=n/\log n$ e $n\ge5$ (per $n=64$ al più 4096 mosse): con un algoritmo polinomiale la velocità $X$ moltiplica per $X$ la dimensione risolvibile. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 8-14).

## Prerequisiti
- [[Principio di induzione]]: dimostrazione di sufficienza e ottimalità
- [[Successione definita per ricorrenza]]: il numero di mosse è definito ricorsivamente

## Porta a
- Nessuno nel corso.

## Collegati
- [[Relazioni ricorsive lineari del primo ordine]]: $M_n$ risolve una ricorrenza affine con $\alpha=2$, $\beta=1$
