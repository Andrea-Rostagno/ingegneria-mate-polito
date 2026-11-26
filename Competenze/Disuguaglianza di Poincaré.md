---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Poincaré's inequality", "disuguaglianza di Poincaré", "Poincaré inequality", "Poincaré-Wirtinger", "disuguaglianza di Poincaré per la palla"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Poincaré

> Su un dominio limitato la norma $L^p$ di una funzione (a traccia nulla, oppure meno la sua media) è controllata dalla sola norma $L^p$ del gradiente.

## Definizione / enunciato
**In $W^{1,p}_0$** (§5.6.1, Teor. 3): $U$ limitato, $1\le p<n$, $u\in W^{1,p}_0(U)$:
$$\|u\|_{L^q(U)}\le C\|Du\|_{L^p(U)}\quad\text{per ogni }q\in[1,p^*];$$
in particolare (per $p=2$, come usato in §6.2) $\|u\|_{L^2(U)}\le C\|Du\|_{L^2(U)}$ su $H^1_0(U)$.

**Con la media** (§5.8.1). Notazione $(u)_U=\frac1{|U|}\int_Uu\,dy$.
**Teorema 1.** $U$ limitato, connesso, con $\partial U$ di classe $C^1$, $1\le p\le\infty$: esiste $C=C(n,p,U)$ tale che
$$\|u-(u)_U\|_{L^p(U)}\le C\|Du\|_{L^p(U)}\qquad\forall u\in W^{1,p}(U).$$
**Teorema 2 (palla).** Per $1\le p\le\infty$ esiste $C=C(n,p)$ con $\|u-(u)_{x,r}\|_{L^p(B(x,r))}\le Cr\|Du\|_{L^p(B(x,r))}$ per ogni $u\in W^{1,p}(B^0(x,r))$.

## Formule chiave
Dimostrazione del Teor. 1 per assurdo: se per ogni $k$ esistesse $u_k$ con $\|u_k-(u_k)_U\|_{L^p}>k\|Du_k\|_{L^p}$, le normalizzate $v_k=\frac{u_k-(u_k)_U}{\|u_k-(u_k)_U\|_{L^p}}$ avrebbero $(v_k)_U=0$, $\|v_k\|_{L^p}=1$, $\|Dv_k\|_{L^p}<\frac1k$. Per Rellich-Kondrachov $v_{k_j}\to v$ in $L^p$, con $(v)_U=0$, $\|v\|_{L^p}=1$ e $Dv=0$ q.o.; $U$ connesso implica $v$ costante, quindi $v\equiv0$: assurdo. Teor. 2: caso $B(0,1)$ e riscalamento $v(y)=u(x+ry)$ (da cui il fattore $r$).

## Intuizione
Una funzione con gradiente piccolo è quasi costante; la condizione al bordo nulla (o media nulla) fissa quella costante a zero. Il fattore $r$ nella versione sulla palla viene dalla dimensione fisica: $u$ e $r\,Du$ hanno le stesse unità.

## Come si usa
- Su $H^1_0(U)$ la norma $\|Du\|_{L^2}$ è equivalente alla norma $H^1$.
- Stime dell'energia per $-\Delta$: $B[u,u]=\int|Du|^2\ge\beta\|u\|^2_{H^1_0}$, quindi vale $\gamma=0$ e Lax-Milgram si applica direttamente.
- Con $p=1$ sulla palla porta a $W^{1,n}(\mathbb R^n)\subset BMO(\mathbb R^n)$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.6.1 (Teor. 3 e osservazione sul nome) e §5.8.1 "Poincaré's inequalities" (Teor. 1-2); usata in §6.2.2. Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 265-266, 275-276, 301-302).

## Prerequisiti
- [[Teorema di Rellich-Kondrachov]]: estrazione di una sottosuccessione convergente
- [[Disuguaglianza di Gagliardo-Nirenberg-Sobolev]]: versione in $W^{1,p}_0$

## Porta a
- [[Stime dell'energia per operatori ellittici]]: coercività della forma bilineare

## Collegati
- [[Norme equivalenti]]: $\|Du\|_{L^p}$ è una norma equivalente su $W^{1,p}_0$
