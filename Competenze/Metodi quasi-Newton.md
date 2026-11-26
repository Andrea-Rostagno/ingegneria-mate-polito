---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["quasi-Newton methods based on the secant equation", "equazione delle secanti", "secant equation", "metodo DFP", "DFP update", "aggiornamento DFP", "metodo BFGS", "BFGS update", "formula di Sherman-Morrison-Woodbury", "Sherman-Morrison-Woodbury formula", "SMW", "aggiornamento di rango 2", "rank-2 update"]
tags: [competenza, area/ottimizzazione]
---

# Metodi quasi-Newton

> Metodi che sostituiscono l'hessiana con una matrice $B_k$, aggiornata a ogni passo con informazioni sul gradiente in modo da soddisfare l'equazione delle secanti $B_{k+1}s^{(k)}=y^{(k)}$. I più noti sono DFP e BFGS.

## Definizione / enunciato
**Equazione delle secanti.** Si linearizza $g=\nabla f$ attorno a $x^{(k+1)}$ e si valuta in $x^{(k)}$. Ponendo $s^{(k)}=x^{(k+1)}-x^{(k)}$ e $y^{(k)}=\nabla f(x^{(k+1)})-\nabla f(x^{(k)})$:
$$\nabla^2f(x^{(k+1)})\,s^{(k)}\approx y^{(k)}\ \Longrightarrow\ B_{k+1}s^{(k)}=y^{(k)}.$$
In 1D è $f''(x_k)\approx\frac{f'(x_k)-f'(x_{k-1})}{x_k-x_{k-1}}$, che richiede una sola nuova valutazione di $f'$. Per $n>1$ il problema è sottodeterminato: $n$ equazioni per $n(n+1)/2$ incognite, anche imponendo la simmetria.

**Schema generale:** dati $x^{(0)}$ e $B_0$, per $k=0,1,\dots$:
1. risolvi $B_kp=-\nabla f(x^{(k)})$;
2. poni $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p$, con $\alpha^{(k)}$ da line search inesatta;
3. costruisci $B_{k+1}$ che soddisfa l'equazione delle secanti.

## Formule chiave
**DFP.** $B_{k+1}=\arg\min_B\|B-B_k\|$ con i vincoli $B=B^T$ e $Bs^{(k)}=y^{(k)}$. Norme diverse danno soluzioni diverse; in norma di Frobenius la soluzione è in forma chiusa:
$$B_{k+1}=(I-\gamma_ky^{(k)}s^{(k)T})B_k(I-\gamma_ks^{(k)}y^{(k)T})+\gamma_ky^{(k)}y^{(k)T},\qquad \gamma_k=\frac1{y^{(k)T}s^{(k)}}.$$
Con Sherman-Morrison-Woodbury si ottiene l'aggiornamento dell'inversa:
$$B_{k+1}^{-1}=B_k^{-1}-\frac{B_k^{-1}y^{(k)}y^{(k)T}B_k^{-1}}{y^{(k)T}B_k^{-1}y^{(k)}}+\frac{s^{(k)}s^{(k)T}}{s^{(k)T}y^{(k)}}.$$
È somma di due matrici di rango 1, quindi un aggiornamento di rango 2: la direzione $p=-B_k^{-1}\nabla f$ costa $O(n^2)$ invece di $O(n^3/3)$.

**Sherman-Morrison-Woodbury.** Se $A$ è non singolare, $u,v\in\mathbb R^n$ e $B=A+uv^T$, allora
$$B^{-1}=\Big(I-\frac{A^{-1}uv^T}{1+v^TA^{-1}u}\Big)A^{-1}.$$
**BFGS.** Stessa idea applicata a $D_k=B_k^{-1}$: si chiede $D=D^T$ e $Dy^{(k)}=s^{(k)}$. La soluzione è
$$D_{k+1}=(I-\rho_ks^{(k)}y^{(k)T})D_k(I-\rho_ky^{(k)}s^{(k)T})+\rho_ks^{(k)}s^{(k)T},\qquad \rho_k=\frac1{y^{(k)T}s^{(k)}},$$
e, con SMW, l'aggiornamento diretto
$$B_{k+1}=B_k-\frac{B_ks^{(k)}(B_ks^{(k)})^T}{s^{(k)T}B_ks^{(k)}}+\frac{y^{(k)}y^{(k)T}}{y^{(k)T}s^{(k)}}.$$

## Intuizione
**Condizione di positività.** $B_{k+1}$ definita positiva con $B_{k+1}s=y$ implica $s^{(k)T}y^{(k)}>0$. Se questa disuguaglianza fallisce, nessun aggiornamento può dare una matrice definita positiva: va garantita nella line search che sceglie $x^{(k+1)}$.

**Scelta di $B_0$:** simmetrica, ad esempio l'approssimazione dell'hessiana alle differenze finite oppure $\rho I$.

## Come si usa
Confronto DFP-BFGS:
- **DFP** aggiorna direttamente l'inversa e serve una sola inversione, quella di $B_0$;
- **BFGS** come presentato aggiorna $B_k$: bisogna risolvere un sistema per passo, quindi un'iterazione costa più di una DFP;
- in compenso BFGS ha convergenza superlineare se $f$ è abbastanza regolare. Richiede un buon $B_0$ e, lontano dalla soluzione, va abbinato a una line search.

Il "finite difference Newton" è il primo esempio di metodo quasi-Newton; per gli approfondimenti le note rimandano ai laboratori di Della Santa.

## Nei corsi
- **Numerical opt** (magistrale): ultima parte delle lezioni sui metodi del secondo ordine. Fonti: `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 29-36 secanti e DFP, p. 37-40 Sherman-Morrison-Woodbury e rango 2, p. 41-43 BFGS).

## Prerequisiti
- [[Metodo di Newton in ottimizzazione]]: lo schema di cui si approssima l'hessiana
- [[Metodo delle secanti]]: l'analogo 1D che motiva l'equazione delle secanti
- [[Formule di derivazione numerica]]: la secante 1D è una differenza finita di $f'$ con $h=x_{k-1}-x_k$
- [[Gradiente e hessiana alle differenze finite]]: prima approssimazione dell'hessiana, possibile $B_0$

## Collegati
- [[Metodo L-BFGS]]: versione a memoria limitata di BFGS (Matematica per l'AI)
- [[Condizioni di Wolfe]]: la line search deve garantire $s^{(k)T}y^{(k)}>0$
- [[Backtracking line search]]: line search inesatta dello schema generale
