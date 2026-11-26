---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [stationary density, densità invariante, invariant density, distribuzione stazionaria di una diffusione, misura di velocità, speed density, funzione di scala, f_infinito]
tags: [competenza, area/probabilita]
---

# Densità stazionaria di una diffusione

> Il limite della densità di transizione per $t\to\infty$, indipendente dal punto di partenza; si calcola in forma chiusa dai momenti infinitesimali.

## Definizione / enunciato
Per una diffusione omogenea (def. c19-densita-stazionaria): $f_\infty(x)=\lim_{t\to\infty}f(x,t\mid y)$, se esiste, è una densità e non dipende da $y$.

**Proposizione** (prop. c19-densita-stazionaria): diffusione regolare e omogenea su $I=(\ell,r)$ con $A_1$, $A_2>0$; fissato $x^*\in I$,
$$h(x)=\exp\Big\{-2\int_{x^*}^x\frac{A_1(\xi)}{A_2(\xi)}d\xi\Big\},\qquad s(x)=\frac{2}{A_2(x)h(x)} ;$$
se $\int_\ell^rs<\infty$ (e i bordi non sono raggiunti)
$$f_\infty(x)=\frac{s(x)}{\int_\ell^rs(z)\,dz}.$$
La scelta di $x^*$ non conta (si semplifica nella normalizzazione).

## Formule chiave
- OU: $f_\infty=\mathcal N\big(\mu,\frac{\sigma^2}{2\theta}\big)$;
- CIR, con $x^*=\theta$: $s(x)\propto x^{\frac{2\kappa\theta}{\sigma^2}-1}e^{-\frac{2\kappa}{\sigma^2}x}$, cioè $X_\infty\sim\mathrm{Gamma}\big(\frac{2\kappa\theta}{\sigma^2},\frac{\sigma^2}{2\kappa}\big)$ (forma, scala), media $\theta$, varianza $\frac{\theta\sigma^2}{2\kappa}$.

## Intuizione
È la legge di equilibrio tra la spinta del drift e la dispersione del rumore: si annulla il flusso nell'equazione di Fokker-Planck. Per processi su $(0,\infty)$ (CIR, GBM) non si può integrare da 0: $A_1/A_2\sim1/x$ e l'integrale diverge, quindi si sceglie $x^*$ interno. Errore frequente: dimenticare il fattore 2.

## Come si usa
Esempio del libro: OU e CIR con la stessa media (4%) e la stessa varianza stazionaria: l'OU, gaussiano, dà probabilità $0.38\%$ ai valori negativi; il CIR vive sui positivi ed è asimmetrico a destra. Esercizio di lezione: se $dX=(\alpha/X-\beta X)dt+\sigma dW$, $Y=X^2$ è un CIR e la sua densità stazionaria è Gamma.

## Nei corsi
- **Financial engineering** (magistrale): cap. 19 §Densità stazionaria ($f_\infty$ al posto di $W(x)$ di D'Onofrio). Fonti: `Libri/Financial engineering/capitoli/cap19.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 09 - analisi stocastica - 29 mag 26.pdf`.

## Prerequisiti
- [[Momenti infinitesimali]]: ingredienti della formula
- [[Processo di diffusione]]: densità di transizione

## Collegati
- [[Processo di Ornstein-Uhlenbeck]]: stazionaria normale
- [[Modello CIR]]: stazionaria Gamma
- [[Distribuzione Gamma]]: legge stazionaria del CIR
- [[Distribuzione stazionaria di una CTMC]]: analogo per catene di Markov
