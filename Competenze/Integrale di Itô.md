---
tipo: competenza
area: probabilita
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [Itô integral, Ito integral, integrale stocastico, stochastic integral, integrale di Ito, processi semplici, simple processes, spazi M^2, M^2_loc, integrale di Stratonovich, punto di valutazione]
tags: [competenza, area/probabilita]
---

# Integrale di Itô

> L'integrale $\int_a^bX_t\,dW_t$ rispetto al moto browniano, definito come limite in $L^2$ delle somme con il punto sinistro su processi semplici: base del calcolo stocastico.

## Definizione / enunciato
**Spazi di integrandi** (def. c12-spazi-M): $M^p([a,b])$ = processi progressivamente misurabili con $\mathbb E\int_a^b|X_s|^pds<\infty$; $M^p_{\mathrm{loc}}([a,b])$ con $\int_a^b|X_s|^pds<\infty$ q.c.; norma $\|X\|_{M^2}=(\mathbb E\int_a^bX_s^2ds)^{1/2}$.

**Processi semplici** (def. c12-semplici): $X_t=\sum_iC_i\mathbf 1_{[t_i,t_{i+1})}(t)$ con $C_i$ $\mathcal F_{t_i}$-misurabile e $\mathbb E[C_i^2]<\infty$; $\int_a^bX\,dW=\sum_iC_i(W_{t_{i+1}}-W_{t_i})$.

**Densità** (teo. c12-densita) e **definizione** (def. c12-integrale-ito): per $X\in M^2$ esistono semplici ${}^nX$ con $\|X-{}^nX\|_{M^2}\to0$, e
$$\int_a^bX_t\,dW_t=\lim_n\int_a^b{}^nX_t\,dW_t\quad\text{in }L^2(\Omega);$$
per $X\in M^2_{\mathrm{loc}}$ il limite è in probabilità. Proprietà (teo. c12-isometria): linearità, media nulla, isometria, continuità, additività sugli intervalli.

## Formule chiave
$$\int_0^tW_s\,dW_s=\frac{W_t^2}{2}-\frac t2 .$$

## Intuizione
$W$ ha variazione prima infinita, quindi non c'è un integrale di Riemann-Stieltjes: le somme con punto destro e sinistro differiscono di $\sum(\Delta W)^2\to b-a$. Itô sceglie il punto **sinistro** (integrando non anticipativo, come una strategia di trading che non conosce il futuro); Stratonovich il punto medio (solo nominato). Il termine $-t/2$ nel calcolo di $\int W\,dW$ è la variazione quadratica.

## Come si usa
Esempi del libro: $W\in M^2([a,b])$ perché $\mathbb E\int_a^bW_t^2dt=(b^2-a^2)/2$; $e^{W_t^2}$ su $[0,1]$ sta solo in $M^2_{\mathrm{loc}}$ ($\mathbb E[e^{2tZ^2}]=\infty$ per $t\ge1/4$). Integrale semplice: $X=0$ su $[0,\frac12)$, $W_{1/2}$ su $[\frac12,1)$: $I=W_{1/2}(W_1-W_{1/2})$, media 0, $\mathbb E[I^2]=1/4$, non gaussiano. Errore frequente: $\int_0^tW\,dW=\frac12W_t^2$ (ha media $t/2\ne0$).

## Nei corsi
- **Financial engineering** (magistrale): cap. 12 (parte di analisi stocastica di D'Onofrio, che scrive $B_t$). Fonti: `Libri/Financial engineering/capitoli/cap12.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 02 - analisi stocastica - 28 apr 26.pdf`, `Lezione 03 - analisi stocastica - 5 maggio 26.pdf`.
- **Ottimizzazione in condizione di incertezza** (magistrale): introdotto per analogia con Riemann-Stieltjes, come limite in media quadratica di $\sum_kX(t_k)[W(t_{k+1})-W(t_k)]$ con l'integrando nel **punto sinistro** (al punto medio si avrebbe Stratonovich). Motivazione finanziaria: in una strategia autofinanziante $dV_h=\mathbf h^T d\mathbf S$ le quote si fissano prima di vedere il rendimento. Conseguenze: $\mathbb E[\int_0^TX\,dW]=0$ e $I(t)=\int_0^tX(s)\,dW(s)$ è una martingala; il calcolo ingenuo $\int_0^TW\,dW=\frac12W^2(T)$ è sbagliato perché avrebbe media $T/2\ne0$. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 14-21).

## Prerequisiti
- [[Moto browniano]]: integratore
- [[Variazione totale del moto browniano]]: niente Riemann-Stieltjes
- [[Variazione quadratica del moto browniano]]: differenza tra i punti di valutazione
- [[Filtrazione]]: integrandi adattati e progressivamente misurabili

## Porta a
- [[Isometria di Itô]]: proprietà chiave dell'integrale
- [[Martingala locale]]: l'integrale come processo
- [[Integrale di Wiener]]: integrando deterministico
- [[Processo di Itô]]: drift più integrale stocastico

## Collegati
- [[Spazi Lp]]: limite in $L^2(\Omega)$
- [[Integrale di Riemann]]: contrasto, dipendenza dal punto di valutazione
- [[Strategia autofinanziante]]: guadagno $\int y\,dS$
