---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Hill cipher, Hill's cipher, cifrario a trasposizione, transposition cipher, matrice di trasposizione, permutation table, tabella di trasposizione]
tags: [competenza, area/informatica]
---

# Cifrario di Hill

> Cifrario lineare che moltiplica il blocco di messaggio per una matrice invertibile su $\mathbb Z_{26}$. Generalizza i cifrari a trasposizione, nei quali la matrice è una matrice di permutazione.

## Definizione / enunciato
In `Critto_week3.pdf` §3.8.2 si usa la struttura di **modulo** $M$ su un anello $A$, che generalizza lo spazio vettoriale sostituendo il campo degli scalari con un anello. Nel cifrario di Hill $\mathcal P=\mathcal C=M$ e $\mathcal K=GL(M)$:
$$\mathrm{Enc}_k(P)=k\cdot P,\qquad \mathrm{Dec}_k(C)=k^{-1}\cdot C.$$
Nel cifrario brevettato e implementato meccanicamente da Hill e da un collaboratore: $A=\mathbb Z_{26}$, $M=A^6$ e $k$ è una matrice invertibile $6\times6$ su $\mathbb Z_{26}$.

**Cifrario a trasposizione** (p. 3). Con le lettere in $\mathbb Z_{26}$ e $P\in\mathbb Z_{26}^n$, la chiave è una matrice $T$ $n\times n$ ottenuta permutando le colonne dell'identità:
$$\mathrm{Enc}_T(P)=T\cdot P.$$
Hill "amplia" lo spazio delle chiavi dalle matrici di permutazione a tutte le matrici invertibili.

## Formule chiave
$$C=kP,\quad P=k^{-1}C,\quad k\in GL_6(\mathbb Z_{26});\qquad \mathbb Z_{26}=\mathbb Z_2\times\mathbb Z_{13}$$
La scomposizione è il suggerimento dell'esercizio 3.8.8 per contare le chiavi ($A^6=\mathbb Z_2^6\times\mathbb Z_{13}^6$).

## Intuizione
- Una permutazione dei caratteri rimescola le posizioni ma lascia le lettere intatte.
- Una matrice generica mescola le lettere linearmente: ogni lettera cifrata dipende da tutte quelle del blocco.

Resta però un cifrario **lineare**: un KPA con abbastanza coppie $(P,C)$ ricostruisce $k$ risolvendo un sistema lineare. Questa conclusione è nostra, ed è analoga al punto c) dell'esercizio sul cifrario affine.

## Come si usa
- **Tabella di trasposizione** (lezione 1, §1.5.4): una permutazione di $\{1,\dots,30\}$ scritta come tabella $3\times10$, che in notazione classica inizia con $1\mapsto1$, $2\mapsto10$, $3\mapsto19$, $4\mapsto28$, ...
- **Nota 3.8.9:** la rotazione delle word $\lll b$ è una trasposizione utile, usata in Salsa20 e nel key schedule del DES. Esempio: $[10001010]\lll3=[01010100]$. L'esercizio 3.8.10 chiede di trovarne la matrice di Hill $8\times8$.

## Nei corsi
- **Crittografia** (magistrale): cifrari a trasposizione e Hill nominati nella lezione 1, formalizzati nella lezione 3 (§3.2 e appendice §3.8.2). Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, pp. 3, 37); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, p. 23).

## Prerequisiti
- [[Matrice inversa]]: $\mathrm{Dec}_k=k^{-1}$
- [[Classi di resto modulo n]]: coefficienti in $\mathbb Z_{26}$
- [[Spazio vettoriale]]: il modulo generalizza lo spazio vettoriale

## Porta a
- Nessuno.

## Collegati
- [[Cifrario affine]]: aggiunge la traslazione $v$
- [[Gruppo simmetrico]]: le trasposizioni sono matrici di permutazione
- [[Teorema cinese dei resti]]: $\mathbb Z_{26}=\mathbb Z_2\times\mathbb Z_{13}$ per contare le chiavi
