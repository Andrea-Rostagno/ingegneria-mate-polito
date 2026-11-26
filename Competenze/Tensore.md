---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["tensor", "tensore di tipo (p,q)", "Bil(V)", "forme bilineari", "prodotto tensoriale", "tensor product", "prodotto simmetrico", "symmetric product", "convenzione di Einstein", "Einstein summation convention"]
tags: [competenza, area/algebra-geometria]
---

# Tensore

> È un'applicazione multilineare su copie di $V^*$ e $V$. Le forme bilineari, i covettori e i vettori sono casi particolari, e le basi si costruiscono con il prodotto tensoriale delle basi.

## Definizione / enunciato
Un **tensore di tipo $(p,q)$** è un'applicazione multilineare
$$T:\underbrace{V^*\times\dots\times V^*}_{p}\times\underbrace{V\times\dots\times V}_{q}\to\mathbb R .$$
Lo spazio di questi tensori è $T^{p,q}(V)=V^{\otimes p}\otimes V^{*\otimes q}$. Casi particolari:
- covettori: tipo $(0,1)$;
- vettori: tipo $(1,0)$, tramite $v:f\mapsto f(v)$;
- forme bilineari, $\mathrm{Bil}(V)=V^*\otimes V^*$: tipo $(0,2)$; una metrica è una di queste.

**Prodotto tensoriale:** $(e_i^*\otimes e_j^*)(v,w)=e_i^*(v)e_j^*(w)=v_iw_j$.

**Proposizione (dimostrata).** $(e_i^*\otimes e_j^*)_{i,j}$ è una base di $\mathrm{Bil}(V)$, che quindi ha dimensione $n^2$, e
$$g=g(e_i,e_j)\,e_i^*\otimes e_j^* .$$
La matrice $g_{ij}=g(e_i,e_j)$ è la matrice rappresentativa di $g$.

## Formule chiave
- **Convenzione di Einstein:** si somma sugli indici ripetuti, $v=v_ie_i$ e $g(v,w)=g_{ij}v_iw_j$.
- **Prodotto simmetrico:** $e_i^*\odot e_j^*=\tfrac12(e_i^*\otimes e_j^*+e_j^*\otimes e_i^*)$, spesso scritto $e_i^*e_j^*$. Gli $e_i^*\odot e_j^*$ con $i\le j$ sono una base delle forme bilineari simmetriche, di dimensione $\frac{n(n+1)}2$.
- Per $n=2$: $g=g_{11}e_1^{*2}+2g_{12}e_1^*e_2^*+g_{22}e_2^{*2}$.
- Base di $T^{p,q}$: $e_{i_1}\otimes\dots\otimes e_{i_p}\otimes e^{j_1}\otimes\dots\otimes e^{j_q}$, con componenti $T^{i_1\dots i_p}_{j_1\dots j_q}$. Gli indici delle componenti dei vettori stanno in alto, quelli dei covettori in basso; il docente avverte che non sempre userà questa convenzione.

## Intuizione
Il tensore è "una macchina multilineare". Fissata una base, è una tabella di numeri, ma l'oggetto non dipende dalla base. Il prodotto simmetrico spiega perché in $du^2+2F\,du\,dv+\dots$ compare il fattore 2.

## Come si usa
È il linguaggio del resto del corso:
- la metrica su un aperto è un campo tensoriale $(0,2)$;
- la prima e la seconda forma fondamentale sono tensori $(0,2)$;
- le $k$-forme sono tensori $(0,k)$ antisimmetrici.

## Nei corsi
- **Geometria differenziale** (triennale): fonti `triennale/ANNO 2/geometria differenziale/Lezione09_GD.pdf` (pp. 14-17); `triennale/ANNO 2/geometria differenziale/Lezione10_GD.pdf` (pp. 1, 5-14); `triennale/ANNO 2/geometria differenziale/Lezione18_GD.pdf` (p. 7).

## Prerequisiti
- [[Spazio duale]]: i fattori del prodotto tensoriale sono covettori
- [[Forma quadratica]]: le forme bilineari simmetriche sono l'esempio base

## Porta a
- [[Metrica riemanniana]]: campo di tensori (0,2) simmetrici definiti positivi
- [[Prodotto wedge]]: parte antisimmetrica del prodotto tensoriale

## Collegati
- Nessuno.
