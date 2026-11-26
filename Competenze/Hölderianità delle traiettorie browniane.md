---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Hölder continuity, continuità hölderiana, Holderianità, non differenziabilità, nowhere differentiable, teorema di continuità di Kolmogorov]
tags: [competenza, area/probabilita]
---

# Hölderianità delle traiettorie browniane

> Le traiettorie browniane sono localmente hölderiane di ogni esponente $\gamma<1/2$ ma in nessun punto hölderiane di esponente $\gamma>1/2$; in particolare non sono derivabili in nessun punto.

## Definizione / enunciato
$f:D\to\mathbb R^d$ è **hölderiana di esponente** $\gamma\in[0,1]$ se $\|f(y)-f(x)\|_2\le C|y-x|^\gamma$; lo è **in un punto** $x$ se esistono $\delta,C>0$ con la stessa disuguaglianza per $|y-x|<\delta$; **localmente** se lo è in ogni punto. $\gamma=1$ è la lipschitzianità; una funzione $C^1$ in $x$ è localmente lipschitziana in $x$.

**Teorema di continuità di Kolmogorov** (consultabile all'esame). Se $\mathbb E[\|X_t-X_s\|_2^\alpha]\le C|t-s|^{1+\varepsilon}$ su $[0,T]$, esiste una modificazione con traiettorie hölderiane di ogni esponente $\gamma\in[0,\varepsilon/\alpha)$.

**Teorema.** Le traiettorie del browniano $d$-dimensionale su ogni compatto $[a,b]$ sono hölderiane di ogni esponente $\gamma\in[0,1/2)$; quindi q.c. localmente hölderiane per $\gamma<1/2$.

**Teorema.** Il browniano ($d=1$ e, per corollario, $d$ qualsiasi) è q.c. **in nessun punto** hölderiano di esponente $\gamma\in(1/2,1]$. **Corollario:** q.c. non derivabile in nessun punto.

## Formule chiave
$$\mathbb E[\|W_t-W_s\|_2^\alpha]=(t-s)^{\alpha/2}\,\mathbb E\Big[\Big(\sum_{j=1}^dZ_j^2\Big)^{\alpha/2}\Big],\qquad\varepsilon=\tfrac\alpha2-1\ \Rightarrow\ \gamma<\tfrac12-\tfrac1\alpha,$$
e per l'arbitrarietà di $\alpha$ si ottiene ogni $\gamma<1/2$.

## Intuizione
Gli incrementi su scala $h$ sono dell'ordine $\sqrt h$: la traiettoria è "radice-hölderiana", né più liscia né più ruvida. Al valore critico $\gamma=1/2$ le slide non affermano nulla; la legge del logaritmo iterato mostra che le oscillazioni superano leggermente $\sqrt h$.

## Come si usa
Prova della parte negativa: se $W$ fosse hölderiano di esponente $\gamma>1/2$ in $t^*\in[(k-1)/n,k/n]$, gli $m$ incrementi successivi sarebbero $\le2C(j+1)^\gamma/n^\gamma$; per indipendenza $P(\Upsilon_{n,k})\le(2C(m+1)^\gamma n^{1/2-\gamma})^m$, sommabile se $m(\gamma-1/2)>2$, e Borel-Cantelli conclude. La hölderianità $\gamma<1/2$ serve a provare che la variazione totale è infinita.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 19. Il `.tex` dice "non di ordine $\alpha>1/2$"; le slide precisano "in nessun punto". Fonti: `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25), `riassunto_del_corso.tex` §Traiettorie, `topics_2025_26.pdf`.

## Prerequisiti
- [[Moto browniano]]: momenti degli incrementi gaussiani

## Porta a
- [[Variazione totale del moto browniano]]: continuità hölderiana usata nella dimostrazione

## Collegati
- [[Esistenza del moto browniano]]: stesso teorema di continuità di Kolmogorov
- [[Legge del logaritmo iterato]]: oscillazioni locali oltre radice di h
- [[Punti di non derivabilità]]: traiettorie continue mai derivabili
