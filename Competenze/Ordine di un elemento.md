---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra, Crittografia]
livello: [triennale, magistrale]
aliases: ["order of an element", "periodo di un elemento", "ordine di un elemento di un gruppo", "sottogruppo ciclico generato", "cyclic subgroup", "ord(x)"]
tags: [competenza, area/algebra-geometria]
---

# Ordine di un elemento

> È il più piccolo $n>0$ con $x^n=1$, e coincide con il numero di elementi del sottogruppo generato da $x$.

## Definizione / enunciato
**Def. 15.** L'**ordine** (o **periodo**) di $x\in G$ è il minimo intero positivo $n$ tale che $x^n=1_G$, se esiste. Altrimenti $x$ ha ordine infinito. In notazione additiva è il minimo $n>0$ con $nx=0$.

**Sottogruppo ciclico generato** (Def. 11, Prop. 12): $\langle x\rangle$ è il minimo sottogruppo che contiene $x$, e
$$\langle x\rangle=\{x^n\mid n\in\mathbb Z\}.$$

**Prop. 12 (lezione 10).** Se esistono $s\neq t$ con $x^s=x^t$, allora:
1. esiste un minimo $n>0$ con $x^n=1_G$;
2. $x^m=1_G\iff n\mid m$;
3. $1,x,\dots,x^{n-1}$ sono distinti e $\langle x\rangle=\{1,x,\dots,x^{n-1}\}$.

**Cor. 13.** $\mathrm{ord}(x)=|\langle x\rangle|$.

## Formule chiave
$$x^m=1_G\iff\mathrm{ord}(x)\mid m,\qquad \mathrm{ord}(x)=|\langle x\rangle|$$

## Intuizione
Le potenze di $x$ prima o poi si ripetono, se il gruppo è finito, e da lì ciclano con periodo $n$. Il punto 2 segue dalla divisione $m=an+b$ con $0\le b<n$, perché $x^m=x^b$.

## Come si usa
Esempi delle lezioni:
- in $\Delta_3$ la rotazione $R$ di $2\pi/3$ ha ordine 3, perché $R^3=Id$ e $R^2\neq Id$; le riflessioni $D_i$ hanno ordine 2;
- in $S_3$ la trasposizione che scambia 1 e 2 ha ordine 2;
- in $S_n$ l'ordine di una permutazione è il m.c.m. delle lunghezze dei suoi cicli disgiunti.

Con Lagrange: l'ordine di ogni elemento di un gruppo finito divide $|G|$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 6 e 10. Fonti: `triennale/ANNO 2/istituzioni/Alg-10-10-22.pdf` (lezione 6, pp. 10, 13); `triennale/ANNO 2/istituzioni/Alg-17-10-22.pdf` (lezione 10, pp. 8-9).
- **Crittografia** (magistrale): per $g\in\mathbb Z_n^*$ l'ordine, o periodo, è il primo $w$ con $g^w=1$, e coincide con $|\langle g\rangle|$. Per Lagrange $w\mid\varphi(n)$. Esempio inglese: in $\mathbb Z_{44}$, $\langle3\rangle=\{3,9,27,37,23,25,31,5,15,1\}$, quindi $3$ ha ordine $10$ e $10\mid\varphi(44)=\varphi(4)\varphi(11)$. In crittografia l'ordine del generatore fissa lo spazio degli esponenti in Diffie-Hellman, DSA e sulle curve ellittiche. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week6/Crypto6.pdf` (§6.1.2, p. 5).

## Prerequisiti
- [[Sottogruppo]]: $\langle x\rangle$ è il sottogruppo generato da $x$
- [[Divisione euclidea]]: dimostra che $x^m=1$ se e solo se $n\mid m$

## Porta a
- [[Gruppo ciclico]]: un gruppo è ciclico se un elemento ha ordine $|G|$
- [[Teorema di Lagrange sui gruppi]]: l'ordine di ogni elemento divide $|G|$

## Collegati
- [[Gruppo simmetrico]]: ordine di una permutazione come m.c.m. delle lunghezze dei cicli
- [[Funzione phi di Eulero]]: in $\mathbb Z_n^*$ l'ordine divide $\varphi(n)$ (Crittografia)
