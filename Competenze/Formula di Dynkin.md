---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Dynkin's formula, martingale problem, problema delle martingale, Stroock-Varadhan]
tags: [competenza, area/probabilita]
---

# Formula di Dynkin

> Formula che esprime $\mathbb E_x[f(X_\tau)]$ come $f(x)$ più l'integrale atteso del generatore; nasce dal "problema delle martingale" di Stroock e Varadhan.

## Definizione / enunciato
**Teorema (problema delle martingale).** Sia $(X_t)$ un processo a tempo continuo con la proprietà di Markov, $(\mathcal F_t)$ la filtrazione naturale, $f$ limitata e misurabile con $\mathcal Lf$ esistente. Allora
$$M_t=f(X_t)-\int_0^t\mathcal Lf(X_s)\,\mathrm ds$$
è una martingala rispetto a $(\mathcal F_t)$ (prova saltata: richiede scambi di limiti, possibili perché $f$ è limitata).

**Corollario (formula di Dynkin).** Nelle stesse ipotesi
$$\mathbb E_x[f(X_t)]=f(x)+\mathbb E_x\Big[\int_0^t\mathcal Lf(X_s)\,\mathrm ds\Big].$$
Se inoltre $\mathcal Lf$ è limitata, per ogni tempo d'arresto $\tau$ quasi certamente finito
$$\mathbb E_x[f(X_\tau)]=f(x)+\mathbb E_x\Big[\int_0^\tau\mathcal Lf(X_s)\,\mathrm ds\Big].$$

## Formule chiave
Dimostrazione: $f(x)=\mathbb E_x[M_0]=\mathbb E_x[M_t]$. Per il caso con $\tau$, optional sampling a $\tau\wedge t$, poi $t\to\infty$ con convergenza dominata ($f$, $\mathcal Lf$ limitate, $\tau\wedge t\to\tau$).
Analogo discreto (Doob): $M_n=f(X_n)-\sum_{i=0}^{n-1}\mathbb E[f(X_{i+1})-f(X_i)\mid X_i]$.

## Intuizione
$\int_0^t\mathcal Lf(X_s)\mathrm ds$ è il compensatore di $f(X_t)$, cioè la parte "prevedibile" accumulata dal drift: togliendola resta una martingala, come nella decomposizione di Doob a tempo discreto.

## Come si usa
- Es. C (martingale): se $\mathcal Lf\equiv0$ e $f$ è limitata, $f(X_t)$ è una martingala.
- Problema di Dirichlet: con $u$ armonica ($\mathcal Lu=\frac12\Delta u=0$ in $D$) e $\tau$ tempo di uscita da $D$ limitato, $\mathbb E_x[f(W_\tau)]=\mathbb E_x[u(W_\tau)]=u(x)$.
- Foster-Lyapunov per CTMC: da Dynkin a $\tau\wedge\tau_m$ si ottiene $\mathbb E_x[\tau\wedge\tau_m]\le V(x)/\varepsilon$, quindi $\mathbb E_x[\tau]<\infty$.

## Nei corsi
- **Processi stocastici** (magistrale): argomenti 15 e 17. Fonti: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22, "The Martingale Problem" e "a version of the Dynkin's formula"), `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24, applicazione a Dirichlet), `suggested_exercises_martingales.pdf` (es. C). Non presente nel `.tex`.

## Prerequisiti
- [[Generatore infinitesimale]]: compensatore come integrale del generatore
- [[Decomposizione di Doob]]: analogo a tempo continuo
- [[Martingale a tempo continuo]]: $f(X_t)$ compensato è martingala
- [[Teorema di optional stopping]]: valutazione in un tempo d'arresto

## Porta a
- [[Problema di Dirichlet e moto browniano]]: dimostrazione diretta tramite Dynkin

## Collegati
- —
