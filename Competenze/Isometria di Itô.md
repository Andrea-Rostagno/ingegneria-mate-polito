---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Itô isometry, Ito isometry, isometria di Ito, media nulla dell'integrale stocastico, covarianza di due integrali stocastici, integrale di Itô come martingala]
tags: [competenza, area/probabilita]
---

# Isometria di Itô

> La norma in $L^2(\Omega)$ dell'integrale di Itô è uguale alla norma in $M^2$ dell'integrando: $\mathbb E[(\int X\,dW)^2]=\mathbb E\int X^2dt$.

## Definizione / enunciato
Per processi semplici (prop. c12-semplici-proprieta, cor. c12-isometria-semplici) e poi per ogni $X\in M^2([a,b])$ (teo. c12-isometria):
1. **media nulla**: $\mathbb E\big[\int_a^bX_t\,dW_t\mid\mathcal F_a\big]=0$;
2. **isometria**: $\mathbb E\big[(\int_a^bX_t\,dW_t)^2\big]=\mathbb E\big[\int_a^bX_t^2dt\big]$, anche condizionata a $\mathcal F_a$.

**Covarianza** (prop. c12-covarianza-integrali): $\mathbb E\big[\int_a^bX\,dW\int_a^bY\,dW\big]=\int_a^b\mathbb E[X_sY_s]ds$; per $s\le t$, $\mathrm{Cov}(I_s(X),I_t(Y))=\int_0^s\mathbb E[X_uY_u]du$.

**Martingala** (teo. c12-martingala): per $X\in M^2([0,T])$, $I_t=\int_0^tX_s\,dW_s$ è una martingala di quadrato integrabile, $I_0=0$, $\mathbb E[I_t^2]=\int_0^t\mathbb E[X_u^2]du$.

## Formule chiave
$$\mathrm{Var}\Big(\int_a^bX_t\,dW_t\Big)=\int_a^b\mathbb E[X_t^2]\,dt .$$

## Intuizione
Per un processo semplice, $\mathbb E[C_iC_j\Delta_i\Delta_j]=0$ per $i\ne j$ (l'incremento successivo è indipendente e centrato) e $\mathbb E[C_i^2\Delta_i^2]=\mathbb E[C_i^2](t_{i+1}-t_i)$: i termini incrociati spariscono. L'isometria garantisce che il limite che definisce l'integrale esista e non dipenda dall'approssimazione. Serve $C_i$ misurabile all'inizio dell'intervallo: con il punto destro la media non è più nulla.

## Come si usa
Esempi del libro (esercizi di lezione): $\mathrm{Var}\int_0^t(t-s)dW_s=\int_0^t(t-s)^2ds=t^3/3$; $Z=\int_0^1\mathbf 1_{\{W_t\ge0\}}dW_t$: $\mathbb E[Z]=0$, $\mathrm{Var}(Z)=\int_0^1\mathbb P(W_t\ge0)dt=1/2$ (non gaussiana). Integrali su intervalli disgiunti sono incorrelati ma non sempre indipendenti. Attenzione: per $X$ solo in $M^2_{\mathrm{loc}}$ media e isometria possono fallire ($e^{W_t^2}$ su $[0,1]$).

## Nei corsi
- **Financial engineering** (magistrale): cap. 12 §§L'integrale dei processi semplici, Estensione a $M^2$, L'integrale stocastico come processo (dimostrazioni complete come a lezione). Fonti: `Libri/Financial engineering/capitoli/cap12.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 02 - analisi stocastica - 28 apr 26.pdf`, `Lezione 03 - analisi stocastica - 5 maggio 26.pdf`, `Lezione 10 - analisi stocastica - 4 giu 26.pdf`.

## Prerequisiti
- [[Integrale di Itô]]: oggetto della proprietà
- [[Speranza condizionata]]: media nulla condizionata

## Porta a
- [[Integrale di Wiener]]: varianza dell'integrale deterministico
- [[Martingala locale]]: caso $M^2_{\mathrm{loc}}$

## Collegati
- [[Martingala]]: l'integrale in $M^2$ è una martingala
- [[Incrementi ortogonali delle martingale]]: termini incrociati nulli
- [[Spazi Lp]]: isometria tra $M^2$ e $L^2(\Omega)$
