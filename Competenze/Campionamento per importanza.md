---
tipo: competenza
area: statistica
corsi: [Statistica computazionale, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["importance sampling", "campionamento d'importanza", "stimatore importance sampling", "densità di importanza", "importance density", "g ottimale"]
tags: [competenza, area/statistica]
---

# Campionamento per importanza

> Stima Monte Carlo di $E_f(h(X))$ usando campioni da un'altra densità $g$ e pesando ogni valore con $f/g$; scegliendo bene $g$ la varianza scende.

## Definizione / enunciato
Per ogni $g$ con $g(x)>0$ dove $f(x)>0$:
$$E_f(h(X))=\int_{\mathcal X}h(x)f(x)\,d\lambda(x)=\int_{\mathcal X}\frac{h(x)f(x)}{g(x)}g(x)\,d\lambda(x)=E_g\Bigl(\frac{h(X)f(X)}{g(X)}\Bigr)$$
se $g$ è una densità. Si hanno quindi due stimatori:
$$\frac1n\sum_{i=1}^nh(x_i)\ \ (X_i\sim f),\qquad \frac1n\sum_{i=1}^n\frac{h(x_i)f(x_i)}{g(x_i)}\ \ (X_i\sim g).$$

## Formule chiave
Con campioni indipendenti:
$$\mathrm{var}_f(h(X))=\int h^2f\,d\lambda-E_f^2(h(X)),\qquad \mathrm{var}_g\Bigl(\frac{h(X)f(X)}{g(X)}\Bigr)=\int\frac{h^2(x)f^2(x)}{g(x)}d\lambda(x)-E_f^2(h(X)),$$
quindi
$$\mathrm{var}_f(h(X))-\mathrm{var}_g\Bigl(\frac{hf}{g}\Bigr)=\int_{\mathcal X}\Bigl(1-\frac{f(x)}{g(x)}\Bigr)h^2(x)f(x)\,d\lambda(x).$$
La scelta migliore è
$$g(x)=\frac{|h(x)|f(x)}{\int_{\mathcal X}|h(x)|f(x)\,d\lambda(x)}.$$

## Intuizione
Il rapporto $f/g$ non può essere sempre $<1$ o sempre $>1$ (entrambe densità). Per guadagnare serve $f/g>1$ dove $h^2f$ è piccolo e $f/g<1$ dove $h^2f$ è grande: $g$ deve mettere massa ("importanza") dove $h^2f$ è elevato.

## Come si usa
Si sceglie una $g$ facile da simulare e da valutare, con supporto che copre quello di $f$, si generano $x_i\sim g$ e si media $h(x_i)f(x_i)/g(x_i)$. Il confronto tra "vanilla" Monte Carlo e importance sampling si fa con la differenza di varianze sopra.

## Nei corsi
- **Statistica computazionale** (magistrale): sezione "Importance sampling" dei Metodi Monte Carlo. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 23-26).
- **Ottimizzazione in condizione di incertezza** (magistrale): importance sampling come cambio di misura, con $f/g$ chiamato **rapporto di verosimiglianza** (derivata di Radon-Nikodym); la scelta ideale $g=hf/\theta$ (per $h\ge0$) darebbe varianza nulla ma richiede di conoscere $\theta$. Applicazione a una call **molto out-of-the-money**: invece di $Z\sim N\big((r-\sigma^2/2)T,\ \sigma\sqrt T\big)$ si campiona $Y\sim N\big(\log(K/S_0)-\sigma^2T/2,\ \sigma\sqrt T\big)$, drift scelto perché $\mathbb E[S_T]=K$, e si pesa con il rapporto fra due normali di medie $\alpha$ e $\beta$ e stessa deviazione $\xi$: $e^{[2(\alpha-\beta)Y-\alpha^2+\beta^2]/2\xi^2}$. Con $S_0=50$, $K=80$, $r=0.05$, $\sigma=0.4$, $T=5/12$, 100000 repliche ripetute 100 volte: errore percentuale medio 1.876% (MC) contro 0.354% (MC+IS), errore peggiore 7.209% contro 1.227%. Nel reinforcement learning off-policy lo stesso rapporto $\pi(A_t\mid S_t)/b(A_t\mid S_t)$ corregge i ritorni generati dalla behavior policy. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 35-43); `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 53-54).

## Prerequisiti
- [[Metodo Monte Carlo]]: stimatore per media di campioni
- [[Varianza]]: criterio di confronto fra stimatori

## Porta a
- [[Metodo accept-reject]]: altro uso di una densità strumentale $g$
- [[Q-learning]]: l'apprendimento off-policy con correzione di importanza (Ottimizzazione in condizione di incertezza)
- [[Pricing di opzioni con Monte Carlo]]: call molto out-of-the-money con drift spostato (Ottimizzazione in condizione di incertezza)

## Collegati
- [[Teorema di Rao-Blackwell]]: altra tecnica di riduzione della varianza
- [[Valore atteso]]: la quantità stimata è un'attesa
