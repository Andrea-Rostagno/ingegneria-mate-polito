---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["sequence spaces", "spazi ℓp", "ℓ^p", "ℓ^∞", "ℓ^2", "c_0", "c_00", "successioni p-sommabili", "successioni infinitesime", "successioni definitivamente nulle", "successioni limitate"]
tags: [competenza, area/analisi]
---

# Spazi di successioni lp

> Gli spazi di successioni $\ell^p$, $c_0$, $c_{00}$: i modelli più semplici di spazi di Banach di dimensione infinita, su cui si provano tutti i teoremi del corso.

## Definizione / enunciato
Per $x=(x_k)_{k\in\mathbb N}\in\mathbb F^{\mathbb N}$:
$$\|x\|_\infty=\sup_k|x_k|,\qquad\|x\|_p=\Big(\sum_{k=0}^\infty|x_k|^p\Big)^{1/p}\ (p\in[1,\infty)),$$
$\ell^p=\{x:\|x\|_p<\infty\}$, $\ell^\infty=F_b(\mathbb N,\mathbb F)$ (successioni limitate), $c_0=\{x:\lim_kx_k=0\}$, $c_{00}=\{x:\ x_k=0\text{ definitivamente}\}$.
$\|\cdot\|_p$ è una norma su $\ell^p$ grazie alla disuguaglianza di Minkowski, e $(\ell^p,\|\cdot\|_p)$ è **di Banach** per ogni $p\in[1,\infty]$ (Prop. 5.6, 5.18).

## Formule chiave
$$|x_k|\le\|x\|_p,\qquad p<q\Rightarrow\|x\|_q\le\|x\|_p,\quad\ell^p\subsetneq\ell^q$$
$$c_{00}\subsetneq\ell^p\subsetneq c_0\ (p<\infty),\qquad\overline{c_{00}}^{\,\ell^p}=\ell^p,\quad\overline{\ell^p}^{\,\|\cdot\|_\infty}=c_0.$$
$c_0$ è un sottospazio chiuso di $\ell^\infty$; $c_{00}$ è denso e non chiuso in $c_0$. $\ell^p$ coincide con $L^p(\mathbb N,\mathcal P(\mathbb N),\#)$ (misura che conta).

## Intuizione
Più $p$ è grande, meno la norma "pesa" le code: per questo le inclusioni crescono con $p$, al contrario degli $L^p$ su uno spazio di misura finita. $\ell^2$ è l'unico $\ell^p$ con norma indotta da un prodotto scalare.

## Come si usa
La completezza di $\ell^p$ si dimostra prendendo il limite componente per componente e controllando la norma con il lemma di Fatou per la misura che conta. Su $\ell^2$ si costruiscono gli esempi tipici di operatori: shift, moltiplicazione per $w\in\ell^\infty$. Duali: $(\ell^p)'\cong\ell^q$ per $p<\infty$, $(c_0)'\cong\ell^1$; $\ell^p$ è separabile per $p<\infty$, $\ell^\infty$ no.

## Nei corsi
- **Analisi funzionale** (triennale): §5.1 "Spazi di successioni" (Def. 5.2-5.7, Prop. 5.4, 5.6, 5.10, Cor. 5.16, Prop. 5.17-5.18). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 44-53); `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (pp. 2-4).

## Prerequisiti
- [[Spazio di Banach]]: ℓp sono esempi di Banach
- [[Disuguaglianza di Minkowski]]: rende ‖·‖p una norma
- [[Lemma di Fatou]]: completezza di ℓp

## Porta a
- [[Operatore di shift]]: operatore su ℓ^2
- [[Operatore di moltiplicazione]]: operatore D_w su ℓ^2
- [[Duale degli spazi Lp]]: (ℓp)' = ℓq

## Collegati
- [[Spazi Lp]]: ℓp è Lp per la misura che conta
- [[Spazio separabile]]: ℓp separabile per p finito, ℓ^∞ no
