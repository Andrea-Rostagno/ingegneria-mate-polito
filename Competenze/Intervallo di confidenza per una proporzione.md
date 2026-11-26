---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["confidence interval for a proportion", "intervallo di Wilson", "Wilson interval", "intervallo di Wald", "Wald interval", "intervallo di Clopper-Pearson", "Clopper-Pearson interval", "intervallo esatto", "teorema di De Moivre-Laplace", "De Moivre-Laplace theorem"]
tags: [competenza, area/statistica]
---

# Intervallo di confidenza per una proporzione

> Tre modi di costruire un intervallo per la probabilità $\pi$ di una binomiale: esatto (Clopper-Pearson, invertendo il test esatto), asintotico di Wald e di Wilson (dall'approssimazione normale); Wald copre male vicino a 0 e 1.

## Definizione / enunciato
Con $N\sim\mathrm{Bin}(n,\pi)$ e $\hat\pi=N/n$:
- **De Moivre-Laplace** (libro, cap. 15, Teorema 15.3): $\sqrt n(N/n-\pi)\to N(0,\pi(1-\pi))$ in legge.
- **Wald** (Def. 15.5): $\hat\pi\pm z_{\alpha/2}\sqrt{\hat\pi(1-\hat\pi)/n}$.
- **Wilson** (Prop. 15.4): l'insieme dei $\pi$ con $n(\hat\pi-\pi)^2<z^2\pi(1-\pi)$, $z=z_{\alpha/2}$, è l'intervallo
$$\frac{\hat\pi+\frac{z^2}{2n}\pm z\sqrt{\frac{z^2}{4n^2}+\frac{\hat\pi(1-\hat\pi)}n}}{1+\frac{z^2}n}.$$
- **Clopper-Pearson**: insieme dei $\pi_0$ che il test esatto bilaterale non rifiuta; estremi con i quantili Beta, `qbeta(alpha/2, N, n-N+1)` e `qbeta(1-alpha/2, N+1, n-N)`.

## Formule chiave
Wilson nasce risolvendo la disequazione quadratica in $\pi$ (la varianza è valutata in $\pi$, non in $\hat\pi$); Wald sostituisce subito $\hat\pi$. Intervallo bayesiano con prior uniforme: quantili di $\mathrm{Beta}(N+1,n-N+1)$.

## Intuizione
Wald è centrato in $\hat\pi$ con un'ampiezza che si annulla se $\hat\pi=0$ o 1: per $\pi$ vicino ai bordi la copertura crolla. Wilson sposta il centro verso $1/2$ e resta affidabile; Clopper-Pearson garantisce la copertura ed è conservativo.

## Come si usa
Dado con 30 sei su 100 lanci (libro, Es. `c15-dado`): Clopper-Pearson $[0.2124;\ 0.3998]$, Wilson $[0.2189;\ 0.3958]$, Wald $[0.2102;\ 0.3898]$; nessuno contiene $1/6$, quindi il dado sembra truccato. La figura del libro confronta le probabilità di copertura di Wald e Wilson al variare di $\pi$ con $n=30$.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 15, §15.2 (Teorema 15.3, Prop. 15.4, Def. 15.5, pp. 249-250). Fonti: `Libri/Modelli statistici/capitoli/cap15.tex`; `magistrale/Modelli statistici/251217 Capitolo Dati Categorici.pdf`; `magistrale/Modelli statistici/251210 Dati categorici.pdf` (manoscritto).

## Prerequisiti
- [[Distribuzione binomiale]]: legge di $N$
- [[Teorema del limite centrale]]: De Moivre-Laplace
- [[Intervallo di confidenza]]: definizione e inversione di un test

## Porta a
- [[Test chi-quadro di bontà dell'adattamento]]: generalizzazione a $D$ livelli

## Collegati
- [[Test sulle proporzioni]]: test corrispondente
- [[Coniugatezza Beta-Bernoulli]]: intervallo di credibilità bayesiano
- [[Distribuzione Beta]]: quantili per Clopper-Pearson
- [[Metodo delta]]: varianza asintotica di funzioni di $\hat\pi$, come il logit
