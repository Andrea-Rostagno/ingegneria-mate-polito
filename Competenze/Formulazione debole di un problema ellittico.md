---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["weak formulation", "soluzione debole di un problema ellittico", "weak solution of an elliptic problem", "forma bilineare associata", "B[u,v]", "soluzione classica, debole e distribuzionale"]
tags: [competenza, area/analisi]
---

# Formulazione debole di un problema ellittico

> Si moltiplica l'EDP per una funzione test e si integra per parti: si cerca $u\in H^1_0(U)$ con $B[u,v]=(f,v)$ per ogni $v\in H^1_0(U)$, chiedendo metà delle derivate richieste dalla forma classica.

## Definizione / enunciato
**Idea generale** (appunti §2.2): le soluzioni **classiche** o **forti** sono $u\in C^k(\Omega)$; si parla di soluzione **debole** quando si chiede meno regolarità (circa metà delle derivate), di soluzione **distribuzionale** quando non si chiede alcuna derivabilità. Es. 2.2.2 ($-u''=f$ su $(a,b)$): testando con $\varphi\in C_c^\infty$ e integrando per parti una volta si ottiene $\int u'\varphi'=\int f\varphi$ (basta $u\in C^1$), due volte $-\int u\varphi''=\int f\varphi$ (basta $u\in C^0$); con il lemma fondamentale si ritrova l'equazione e un **guadagno di regolarità**.

**Evans §6.1.2.** Per $L$ in forma di divergenza, $a^{ij},b^i,c\in L^\infty(U)$, $f\in L^2(U)$, la **forma bilineare** associata è
$$B[u,v]:=\int_U\sum_{i,j=1}^na^{ij}u_{x_i}v_{x_j}+\sum_{i=1}^nb^iu_{x_i}v+cuv\,dx,\qquad u,v\in H^1_0(U).\qquad(8)$$
$u\in H^1_0(U)$ è **soluzione debole** di $Lu=f$ in $U$, $u=0$ su $\partial U$ se
$$B[u,v]=(f,v)\qquad\text{per ogni }v\in H^1_0(U),\qquad(9)$$
($(\,,)$ prodotto scalare in $L^2$); (9) è detta anche **formulazione variazionale**. Più in generale per $f=f^0-\sum_if^i_{x_i}\in H^{-1}(U)$ si chiede $B[u,v]=\langle f,v\rangle$.

## Formule chiave
Motivazione: per $u$ liscia e $v\in C_c^\infty(U)$, integrando per parti il primo termine,
$$\int_U\sum a^{ij}u_{x_i}v_{x_j}+\sum b^iu_{x_i}v+cuv\,dx=\int_Ufv\,dx,\qquad(7)$$
senza termini di bordo; per approssimazione vale per $v\in H^1_0$ e ha senso per $u\in H^1_0$.
Dati al bordo non nulli: se $u=g$ su $\partial U$ nel senso delle tracce e $g=Tw$, $w\in H^1(U)$, allora $\tilde u=u-w\in H^1_0$ risolve $L\tilde u=\tilde f:=f-Lw\in H^{-1}(U)$, $\tilde u=0$.

## Intuizione
L'identità integrale è più debole di quella puntuale, quindi vale per più funzioni; lo spazio $H^1_0$ contiene sia la regolarità minima (una derivata in $L^2$) sia la condizione di Dirichlet. Esistenza (Lax-Milgram, Fredholm) e regolarità si studiano separatamente.

## Come si usa
Per $-\Delta u=f$, $u=0$: $u\in H^1_0$ con $\int_UDu\cdot Dv=\int_Ufv$ per ogni $v\in H^1_0$ (la stessa identità del principio di Dirichlet). Schema d'esame: scrivere $B$ e $\langle f,\cdot\rangle$, verificarne continuità e coercività, applicare Lax-Milgram.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): appunti §2.2 "Concetti di soluzione - idee generali" (Es. 2.2.2); Evans §6.1.2 "Weak solutions" (definizioni (8)-(9), problema (10), osservazione sui dati al bordo). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 10-12); `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 295-297).

## Prerequisiti
- [[Operatore uniformemente ellittico]]: l'operatore $L$ in forma di divergenza
- [[Spazi di Sobolev]]: lo spazio $H^1_0(U)$
- [[Teorema di traccia]]: senso della condizione al bordo
- [[Spazio H-1]]: termini noti nel duale di $H^1_0$
- [[Lemma fondamentale del calcolo delle variazioni]]: ritorno dalla forma integrale all'equazione
- [[Principio variazionale di Dirichlet]]: la stessa identità integrale per il laplaciano

## Porta a
- [[Teorema di Lax-Milgram]]: esistenza e unicità della soluzione debole
- [[Stime dell'energia per operatori ellittici]]: continuità e coercività di $B$
- [[Regolarità delle soluzioni deboli]]: quando la soluzione debole è classica

## Collegati
- [[Problema di Dirichlet per l'equazione di Poisson]]: caso $L=-\Delta$
