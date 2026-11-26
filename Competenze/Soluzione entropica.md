---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["entropy solution", "soluzione fisicamente ammissibile", "criterio di entropia", "coppia entropia-flusso di entropia", "entropy-entropy flux pair", "teorema di Kruzhkov", "principio del massimo per le leggi di conservazione"]
tags: [competenza, area/analisi]
---

# Soluzione entropica

> Criterio che sceglie, tra le soluzioni deboli di una legge di conservazione, quella fisicamente ammissibile: è unica (Kruzhkov).

## Definizione / enunciato
**Coppia entropia-flusso (L18 p. 6).** $\eta\in C^2(\mathbb R)$ con $\eta''>0$ (convessa) e $q$ definita da $q'(u)=\eta'(u)f'(u)$. Se $u$ è classica, $\partial_t\eta(u)+\partial_xq(u)=0$; per le soluzioni deboli questa espressione, tradotta in forma debole, non è necessariamente zero.
**Def. (L19 p. 6).** Una soluzione debole $u$ di $\partial_tu+\partial_xf(u)=0$ è **entropica** se
$$\int_0^{+\infty}\!\!\int_{\mathbb R}\big(\eta(u)\partial_t\varphi+q(u)\partial_x\varphi\big)dx\,dt\ge0$$
per ogni $\varphi\in\mathcal D(Q)$, $\varphi\ge0$, e per ogni coppia $(\eta,q)$.
**Teorema (Kruzhkov).** La soluzione entropica, quando esiste, è unica.
**Teorema (principio del massimo, L20 pp. 4-5).** Se $u$ è la soluzione entropica del problema di Cauchy, $\min u_0\le u\le\max u_0$ in $Q$.

## Formule chiave
Su un urto la forma debole dà (L19 p. 3)
$$\big[s(\eta(u_r)-\eta(u_\ell))-(q(u_r)-q(u_\ell))\big]\int_0^{+\infty}\varphi(st,t)\,dt .$$
Per un **urto debole** ($|u_\ell-u_r|$ piccolo), con gli sviluppi di Taylor di $f$, $\eta$, $q$:
$$s(\eta(u_r)-\eta(u_\ell))-(q(u_r)-q(u_\ell))=-\tfrac1{12}\eta''(u_\ell)f''(u_\ell)(u_r-u_\ell)^3+o((u_r-u_\ell)^3),$$
che è $\ge0$ con $\eta''>0$, $f''>0$ se e solo se $u_\ell>u_r$.

## Intuizione
Il segno richiesto è quello dell'urto "buono", in cui le caratteristiche entrano nella discontinuità. Gli urti in cui escono (e le rarefazioni) violano o rispettano la disuguaglianza in modo coerente con l'intuizione fisica.

## Come si usa
Riemann con $f''>0$: $u_\ell>u_r$ → urto entropico; $u_\ell<u_r$ → l'urto non è entropico, la rarefazione sì. Con $f''<0$ tutto si rovescia. Così il problema di Riemann ha sempre un'unica soluzione fisicamente ammissibile.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/18 - Lezione 17_11_23.pdf` (pp. 5-6); `triennale/ANNO 3/eq fisica matematica/19 - Lezione 21_11_23.pdf` (pp. 1-6); `triennale/ANNO 3/eq fisica matematica/20 - Lezione 22_11_23.pdf` (pp. 4-5).

## Prerequisiti
- [[Soluzione debole di una legge di conservazione]]: il criterio seleziona tra soluzioni deboli
- [[Onda d'urto]]: banco di prova del criterio
- [[Onda di rarefazione]]: soluzione entropica quando l'urto non lo è
- [[Formula di Taylor con resto di Lagrange]]: sviluppi per l'urto debole

## Porta a
- [[Equazione di Buckley-Leverett]]: costruzione della soluzione entropica con flusso non convesso
