---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["prior elicitation", "elicitazione", "scelta della prior", "sensibilità alla prior", "prior sensitivity analysis", "analisi di sensibilità", "prior vaga", "vague prior", "osservazioni fittizie"]
tags: [competenza, area/statistica]
---

# Elicitazione della prior

> Tradurre in una distribuzione a priori ciò che un esperto sa prima dei dati (media, varianza, moda, quantili), e poi controllare quanto la posteriori dipende da questa scelta.

## Definizione / enunciato
Dentro una famiglia (di solito coniugata) si scelgono i parametri imponendo caratteristiche della prior. Per una $\mathrm{Beta}(a,b)$ con media $m$ e varianza $v_0$ assegnate il sistema è lineare (libro, cap. 3, §3.5):
$$a+b=\frac{m(1-m)}{v_0}-1,\qquad a=m\,(a+b),\qquad b=(1-m)(a+b).$$
Se si impone un quantile, il sistema non è lineare e si risolve numericamente (`uniroot` con `pbeta`).

## Formule chiave
- $a+b$ è il numero di osservazioni fittizie: misura il peso della prior, $w=(a+b)/(a+b+n)$.
- Per la Dirichlet (cap. 6): "$p_1$ triplo delle altre, peso pari a $n$" dà $\alpha_1=3\alpha_j$, $\sum\alpha=n$, quindi $\alpha_1=3n/(D+2)$, $\alpha_j=n/(D+2)$.
- In JAGS `dnorm(0, 1.0E-5)` è una prior vaga (varianza $10^5$), non concentrata in 0.

## Intuizione
La prior è un'ipotesi da giustificare come il modello dei dati. Con pochi dati conta; con molti dati viene "dimenticata". L'analisi di sensibilità rende esplicito quanto.

## Come si usa
- Lobo dell'orecchio (libro, Es. `c03-lobo-elicitazione`): media 0.2 e $P(p\le0.1)=0.4$ danno $b=4a$ e, numericamente, $a\approx0.716$, $b\approx2.866$: una prior a J rovesciata, con densità illimitata in 0. Dopo 6 successi su 30 la posteriori è $\mathrm{Beta}(6.716;\,26.866)$.
- Esercizio del libro: media 0.3 e deviazione standard 0.1 danno $a+b=0.21/0.01-1=20$, cioè $\mathrm{Beta}(6,14)$, pari a 20 osservazioni fittizie.
- Sensibilità (cap. 4, §4.6): $n=20$ dati simulati da $N(2,1)$ (media campionaria 1.812) e tre prior per $\mu$, `dnorm(0,1.0E-5)`, `dnorm(0,1)`, `dnorm(5,1)`: medie a posteriori 1.81, 1.70, 2.01. Con la prior vaga l'intervallo di credibilità $(1.31;\ 2.31)$ coincide con quello $t$; le prior con deviazione standard 1 valgono circa un'osservazione.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 3 §3.5 (pp. 45-47), cap. 4 §4.6, cap. 6 §6.6. Fonti: `Libri/Modelli statistici/capitoli/cap03.tex`, `cap04.tex`, `cap06.tex`; codice `magistrale/Modelli statistici/codici/251022 Jags.R` (tre prior).

## Prerequisiti
- [[Distribuzione Beta]]: media e varianza della prior
- [[Coniugatezza Beta-Bernoulli]]: dove la prior elicitata viene aggiornata

## Porta a
- [[Linguaggio JAGS]]: ripetere l'analisi con prior diverse
- [[Coniugatezza Dirichlet-multinomiale]]: elicitazione di una Dirichlet

## Collegati
- [[Coniugatezza normale-normale]]: peso della prior $\tau_0/\tau$
- [[Stima bayesiana]]: la prior come ingrediente dell'inferenza
