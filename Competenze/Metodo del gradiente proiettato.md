---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["projected gradient method", "PGM", "PG", "gradiente proiettato", "proiezione su un box", "projection onto a box", "proiezione su una sfera", "projection onto a sphere", "projection arc"]
tags: [competenza, area/ottimizzazione]
---

# Metodo del gradiente proiettato

> Estensione dello steepest descent a $\min_{x\in X}f(x)$ con $X$ chiuso e convesso: si fa un passo lungo $-\nabla f$, si proietta il punto su $X$ e ci si muove verso la proiezione. Conviene quando la proiezione su $X$ è facile (box, sfera).

## Definizione / enunciato
La proiezione di $y$ su $X$ è $\Pi_X(y)=\arg\min_{x\in X}\|x-y\|^2$. **Forma base:** $x^{(k+1)}=\Pi_X\big(x^{(k)}-\alpha^{(k)}\nabla f(x^{(k)})\big)$.

**Forma a due passi** (preferita), dato $x^{(0)}\in X$:
1. calcola $\bar x^{(k)}=\Pi_X\big(x^{(k)}-\gamma_k\nabla f(x^{(k)})\big)$, con $\gamma_k>0$;
2. poni $x^{(k+1)}=x^{(k)}+\alpha_k(\bar x^{(k)}-x^{(k)})$, con $\alpha_k\in(0,1]$;
3. fermati quando un criterio di arresto è soddisfatto.

$\bar x^{(k)}-x^{(k)}$ è una direzione ammissibile di discesa; con $\alpha_k\le1$ si resta in $X$ per convessità.

## Formule chiave
Proiezione su una **sfera** di centro $c$ e raggio $r$ (DS eq. 70; P5 tratta il centro nell'origine):
$$\Pi_X(y)=\begin{cases}y,&\|y-c\|\le r\\ c+r\,\dfrac{y-c}{\|y-c\|},&\text{altrimenti.}\end{cases}$$
Proiezione su un **box** $X=\{L\le x\le U\}$ (anche generalizzato, con $L_i=-\infty$ o $U_i=+\infty$, per esempio $\mathbb R^n_+$), componente per componente:
$$[\Pi_X(y)]_i=\begin{cases}L_i,&y_i<L_i\\ U_i,&y_i>U_i\\ y_i,&\text{altrimenti.}\end{cases}$$

## Intuizione
Lo steepest descent può uscire da $X$; la proiezione lo riporta nel punto ammissibile più vicino. Il metodo converge a punti stazionari vincolati, dove il gradiente non è necessariamente nullo. Per questo il criterio $\|\nabla f\|\le\text{tol}$ non basta: si usa
- $\Pi_X(x^{(k)}-\alpha\nabla f(x^{(k)}))=x^{(k)}$,
- oppure due criteri insieme, sul gradiente e sulla lunghezza del passo.

## Come si usa
Scelte dei passi:
- $\gamma_k$ costante, con $\alpha_k$ da line search esatta su $[0,1]$ o da Armijo con backtracking lungo la direzione ammissibile;
- $\alpha_k=1$ costante e line search su $\gamma_k$ lungo l'arco di proiezione $x^{(k+1)}=\Pi_X(x^{(k)}-\gamma_k\nabla f(x^{(k)}))$.

Per un insieme qualsiasi il calcolo di $\Pi_X$ è esso stesso un problema di minimo non banale.

## Nei corsi
- **Numerical opt** (magistrale): lezioni Pieraccini (sfera unitaria, box generalizzati) e laboratorio 10 di Della Santa (sfera con centro qualsiasi, due strategie di line search). Fonti: `magistrale/Numerical opt/Pieraccini/Part_5_Constrained_Optimization_General_Theory_and_Proj_Grad.pdf` (p. 4-10); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§10, eq. 66-72); codice d'esempio `DellaSanta/labs/projgrad_bcktrck.m`, `box_projection.m`.

## Prerequisiti
- [[Teorema della proiezione]]: esistenza e unicità di $\Pi_X$ su un convesso chiuso
- [[Condizione di ottimalità su insieme convesso]]: definisce i punti stazionari a cui il metodo converge
- [[Metodo del gradiente]]: il passo non vincolato che si proietta

## Collegati
- [[Backtracking line search]]: scelta di $\alpha_k$ o di $\gamma_k$ con Armijo
- [[Insieme convesso]]: garantisce che il segmento verso $\bar x^{(k)}$ resti in $X$
