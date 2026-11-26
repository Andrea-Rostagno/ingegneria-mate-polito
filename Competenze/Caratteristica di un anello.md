---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["characteristic of a ring", "char(A)", "caratteristica di un campo", "morfismo unitario", "omomorfismo unitario Z → A", "campo primo", "prime field", "sottocampo primo"]
tags: [competenza, area/algebra-geometria]
---

# Caratteristica di un anello

> È il più piccolo $n>0$ con $na=0$ per ogni $a$, oppure $0$ se tale $n$ non esiste. Per un anello con unità è l'ordine additivo di $1$, e per un campo è $0$ oppure un primo.

## Definizione / enunciato
**Def. 14.** La **caratteristica** di $A$ è il minimo intero positivo $n$ tale che $na=0_A$ per ogni $a\in A$. Se non esiste, $\mathrm{char}(A)=0$.
- Se $A$ ha unità, $\mathrm{char}(A)$ è l'ordine additivo di $1_A$, perché $k1_A=0\Rightarrow ka=(k1_A)a=0$.
- Il periodo additivo di ogni elemento divide la caratteristica.

**Prop. 15.** La caratteristica di un dominio di integrità, in particolare di un campo, è $0$ o un primo.

**Morfismo unitario.** Per $A$ con unità, $\mu:\mathbb Z\to A$, $n\mapsto n1_A$, è l'unico omomorfismo unitario da $\mathbb Z$ ad $A$.
- **Prop. 21:** se $\mathrm{char}A=0$, $\mu$ è iniettivo.
- **Prop. 22:** se $\mathrm{char}A=m>0$, allora $\mathrm{Ker}\mu=m\mathbb Z$ e $\mu$ induce un omomorfismo iniettivo di anelli $\bar\mu:\mathbb Z_m\to A$.

## Formule chiave
$$\mathrm{char}(A)=\min\{n\ge1\mid n1_A=0\}\ \ (\text{oppure }0),\qquad \mathrm{Ker}\,\mu=\mathrm{char}(A)\,\mathbb Z$$

## Intuizione
Si somma $1$ con sé stesso: o non si torna mai a $0$, e allora dentro $A$ c'è una copia di $\mathbb Z$, oppure si torna a $0$ dopo $m$ passi, e c'è una copia di $\mathbb Z_m$. In un dominio $m$ deve essere primo: se $m=ab$, allora $0=(a1)(b1)$ e uno dei due fattori è già nullo.

## Come si usa
- $\mathbb Z$, $\mathbb Q$, $\mathbb R$ e $\mathbb C$ hanno caratteristica 0; $\mathbb Z_n$ ha caratteristica $n$.
- Ogni anello con unità di caratteristica 0 contiene un sottoanello isomorfo a $\mathbb Z$.
- Ogni campo di caratteristica 0 contiene un sottocampo isomorfo a $\mathbb Q$, e ogni campo di caratteristica $p$ uno isomorfo a $\mathbb Z_p$. Per questo $\mathbb Q$ e $\mathbb Z_p$ sono detti **campi primi**.
- Un campo finito ha caratteristica prima $p$, è un'estensione di $\mathbb Z_p$, e vale $(a+b)^p=a^p+b^p$ (Frobenius).

## Nei corsi
- **Istituzioni algebra** (triennale): definizione nelle lezioni 17-18, morfismo unitario nella 19, campi primi nelle 33/34. Fonti: `triennale/ANNO 2/istituzioni/Alg-02-10-22-1.pdf` (lezioni 17-18, p. 13); `triennale/ANNO 2/istituzioni/Alg-07-10-22.pdf` (lezione 19 del 07/11/22, pp. 4-6, 9); `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, pp. 2, 21).

## Prerequisiti
- [[Dominio di integrità]]: la caratteristica di un dominio è prima o nulla
- [[Omomorfismo di anelli]]: il morfismo unitario $\mathbb Z\to A$

## Porta a
- [[Estensione di campi]]: ogni campo estende il proprio campo primo
- [[Campo finito]]: caratteristica $p$ e $p^n$ elementi

## Collegati
