---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Cox-Ingersoll-Ross model, processo CIR, modello di Cox-Ingersoll-Ross, square-root process, processo a radice quadrata, condizione di Feller, Feller condition, full truncation]
tags: [competenza, area/finanza]
---

# Modello CIR

> Tasso a breve con diffusione $\sigma\sqrt{X_t}$: resta positivo sotto la condizione di Feller $2\kappa\theta\ge\sigma^2$, ha densità stazionaria Gamma e prezzi degli ZCB affini.

## Definizione / enunciato
$dX_t=\kappa(\theta-X_t)dt+\sigma\sqrt{X_t}\,dW_t$, $\kappa,\theta,\sigma>0$, $X_0=x_0>0$. **Proprietà** (prop. c20-cir):
1. (Feller) se $2\kappa\theta\ge\sigma^2$ resta strettamente positivo q.c.; altrimenti tocca lo zero e viene riflesso;
2. $\mathbb E[X_t]=\theta+(x_0-\theta)e^{-\kappa t}$, $\ \mathrm{Var}(X_t)=x_0\frac{\sigma^2}{\kappa}(e^{-\kappa t}-e^{-2\kappa t})+\theta\frac{\sigma^2}{2\kappa}(1-e^{-\kappa t})^2$;
3. densità stazionaria $\mathrm{Gamma}\big(\frac{2\kappa\theta}{\sigma^2},\frac{\sigma^2}{2\kappa}\big)$ (forma, scala), media $\theta$, varianza $\frac{\theta\sigma^2}{2\kappa}$;
4. sotto $\mathbb Q$: $B(t,T)=e^{A_C(\tau)-B_C(\tau)X_t}$ con $\gamma=\sqrt{\kappa^2+2\sigma^2}$,
$$B_C(\tau)=\frac{2(e^{\gamma\tau}-1)}{(\gamma+\kappa)(e^{\gamma\tau}-1)+2\gamma},\qquad A_C(\tau)=\frac{2\kappa\theta}{\sigma^2}\ln\frac{2\gamma e^{(\kappa+\gamma)\tau/2}}{(\gamma+\kappa)(e^{\gamma\tau}-1)+2\gamma},$$
e $y_\infty=\frac{2\kappa\theta}{\kappa+\gamma}$.

## Formule chiave
$A_1=\kappa(\theta-x)$, $A_2=\sigma^2x$; $(dX_t)^2=\sigma^2X_tdt$.

## Intuizione
Vicino a zero la diffusione $\sigma\sqrt x$ si spegne e il drift positivo $\kappa\theta$ riporta su il tasso. $\sqrt x$ non è lipschitziana in 0: il teorema standard di esistenza e unicità non si applica (vale Yamada-Watanabe). Nella condizione di Feller compare $\sigma^2$, non $\sigma$. In simulazione Eulero può saltare sotto zero anche se Feller vale: si usa $\sqrt{\max(X,0)}$ (full truncation).

## Come si usa
Esempio del libro: $\kappa=0.5$, $\theta=4\%$, $\sigma=10\%$, $X_0=2\%$ (Feller: $0.04\ge0.01$): $\gamma=0.519615$, $B_C(5)=1.812959$, $A_C(5)=-0.12565$, $B(0,5)=0.8505$, $y(0,5)=3.238\%$. Con $\kappa=0.5$, $\theta=0.04$ Feller vale per $\sigma\le0.2$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 20 §Il modello CIR; cap. 19 es. c19-stazionaria-cir; cap. 14 (verifica delle ipotesi). Fonti: `Libri/Financial engineering/capitoli/cap20.tex`, `cap19.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 08 - analisi stocastica - 26 mag 26.pdf`, `Lezione 09 - analisi stocastica - 29 mag 26.pdf`.

## Prerequisiti
- [[Modello per il tasso a breve]]: famiglia CKLS con $\gamma=\frac12$
- [[Momenti infinitesimali]]: $A_2=\sigma^2x$

## Collegati
- [[Modello di Vasicek]]: alternativa gaussiana
- [[Densità stazionaria di una diffusione]]: stazionaria Gamma
- [[Distribuzione Gamma]]: legge stazionaria
- [[Esistenza e unicità per SDE]]: caso fuori dalle ipotesi di Lipschitz
- [[Metodo di Euler-Maruyama]]: valori negativi nella simulazione
