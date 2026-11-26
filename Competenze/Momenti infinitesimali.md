---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [infinitesimal moments, drift infinitesimale, varianza infinitesimale, infinitesimal variance, A_1, A_2, momento infinitesimale di ordine m, diffusione temporalmente omogenea]
tags: [competenza, area/probabilita]
---

# Momenti infinitesimali

> Media e varianza dell'incremento di una diffusione su un intervallo infinitesimo, condizionate allo stato: per una SDE sono il drift $b$ e il quadrato della diffusione $\sigma^2$.

## Definizione / enunciato
Per una diffusione con densità di transizione $f$ (def. c19-momenti-infinitesimali):
$$A_m(x,t)=\lim_{\Delta t\to0}\frac1{\Delta t}\mathbb E\big[(X_{t+\Delta t}-X_t)^m\mid X_t=x\big]=\lim_{\Delta t\to0}\frac1{\Delta t}\int_\ell^r(z-x)^mf(z,t+\Delta t\mid x,t)\,dz ;$$
$A_1$ è il **drift infinitesimale**, $A_2$ la **varianza infinitesimale**; se non dipendono da $t$ la diffusione è **temporalmente omogenea**.

**Proposizione** (prop. c19-momenti-sde): se $X$ risolve $dX=b(t,X)dt+\sigma(t,X)dW$ con coefficienti continui, $A_1=b(t,x)$, $A_2=\sigma^2(t,x)$; viceversa una diffusione con $A_1,A_2$ si rappresenta (in legge) come $dX_t=A_1dt+\sqrt{A_2}\,dW_t$.

## Formule chiave
| processo | $A_1(x)$ | $A_2(x)$ | stati |
|---|---|---|---|
| browniano | $0$ | $1$ | $\mathbb R$ |
| browniano con drift | $b$ | $\sigma^2$ | $\mathbb R$ |
| Ornstein-Uhlenbeck | $\theta(\mu-x)$ | $\sigma^2$ | $\mathbb R$ |
| GBM | $\mu x$ | $\sigma^2x^2$ | $(0,\infty)$ |
| CIR | $\kappa(\theta-x)$ | $\sigma^2x$ | $(0,\infty)$ |

## Intuizione
$A_2$ si calcola condizionatamente a $X_t=x$: è una funzione di $x$, non una variabile aleatoria (scrivere $\sigma^2X_t$ è un errore di notazione). Errore frequente: dimenticare il quadrato ($\sigma\sqrt x$ invece di $\sigma^2x$ per il CIR). Con le regole di Itô il calcolo è immediato: $(dX)^2=\sigma^2dt$.

## Come si usa
Esempio del libro: per l'OU l'incremento di Eulero dà $A_1=\theta(\mu-x)$, $A_2=\lim\frac{\theta^2(\mu-x)^2\Delta t^2+\sigma^2\Delta t}{\Delta t}=\sigma^2$, confermato dalla soluzione esatta. Per $X_t=e^{W_t}$ (GBM con $\mu=\frac12$, $\sigma=1$): $A_1=x/2$, $A_2=x^2$, anche direttamente da $x^2(e^{2h}-2e^{h/2}+1)=x^2h+o(h)$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 19 §Momenti infinitesimali, tab. c19-momenti; simboli $A_1$, $A_2$ di D'Onofrio. Fonti: `Libri/Financial engineering/capitoli/cap19.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 08 - analisi stocastica - 26 mag 26.pdf`, `Lezione 09 - analisi stocastica - 29 mag 26.pdf`.

## Prerequisiti
- [[Processo di diffusione]]: densità di transizione
- [[Processo di Itô]]: $(dX)^2=\sigma^2dt$

## Porta a
- [[Densità stazionaria di una diffusione]]: formula con $A_1/A_2$
- [[Modello CIR]]: $A_2=\sigma^2x$

## Collegati
- [[Generatore infinitesimale]]: $\mathcal L=A_1\partial_x+\frac12A_2\partial_{xx}$
- [[Moto browniano con drift]]: $A_1=b$, $A_2=\sigma^2$
- [[Processo di Ornstein-Uhlenbeck]]: $A_1=\theta(\mu-x)$
- [[Moto browniano geometrico]]: $A_1=\mu x$, $A_2=\sigma^2x^2$
