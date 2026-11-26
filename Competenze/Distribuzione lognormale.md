---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [lognormal distribution, legge lognormale, lognormale, "LogN(m,s^2)", log-normale, funzione generatrice dei momenti della normale, "E[e^X]"]
tags: [competenza, area/probabilita]
---

# Distribuzione lognormale

> Legge di una variabile positiva il cui logaritmo è normale: è la legge del prezzo $S_T$ nel modello di Black-Scholes.

## Definizione / enunciato
$Y>0$ è **lognormale**, $Y\sim\mathrm{LogN}(m,s^2)$, se $\ln Y\sim\mathcal N(m,s^2)$, cioè $Y=e^{m+sZ}$ con $Z\sim\mathcal N(0,1)$ (app. A §La normale e la lognormale).

**Generatrice dei momenti della normale** (prop. cA-mgf-normale): per $Z\sim\mathcal N(0,1)$, $\mathbb E[e^{aZ}]=e^{a^2/2}$; per $X\sim\mathcal N(\mu,\sigma^2)$, $\mathbb E[e^{aX}]=e^{a\mu+\frac12a^2\sigma^2}$.

## Formule chiave
$$\mathbb E[Y]=e^{m+s^2/2},\qquad\mathrm{mediana}=e^m,\qquad\mathrm{Var}(Y)=e^{2m+s^2}(e^{s^2}-1),$$
$$\mathbb P(Y\le y)=N\Big(\frac{\ln y-m}{s}\Big).$$
Per il GBM: $S_t\sim\mathrm{LogN}\big(\ln S_0+(\mu-\frac12\sigma^2)t,\ \sigma^2t\big)$.

## Intuizione
La media supera la mediana: la legge è asimmetrica a destra, tanto più quanto più $s$ è grande (con $m=0$ e $s$ crescente la media $e^{s^2/2}$ passa da 1.03 a 1.65). Per questo un prezzo lognormale supera il proprio valore atteso con probabilità minore di 1/2. Le probabilità si calcolano sempre passando al logaritmo.

## Come si usa
Esempio del libro (listato lst:cA-normale): $\mathrm{LogN}(0.1,0.16)$ ha media $e^{0.18}=1.1972$ e varianza $e^{0.36}(e^{0.16}-1)=0.2487$; con $a=0.8$ la media empirica di $e^{aZ}$ è $1.3772$ contro $e^{0.32}=1.3771$. La formula di Black-Scholes è il calcolo di $\mathbb E[(Y-K)^+]$ per $Y$ lognormale.

## Nei corsi
- **Financial engineering** (magistrale): appendice A §La normale e la lognormale; cap. 15. Fonti: `Libri/Financial engineering/capitoli/appA.tex`, `cap15.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/33 - 14 aprile - foglio3 probabilita.pdf`.

## Prerequisiti
- [[Distribuzione normale]]: il logaritmo è normale
- [[Trasformazione di una variabile aleatoria]]: legge di $e^X$

## Porta a
- [[Moto browniano geometrico]]: legge di $S_t$
- [[Formula di Black-Scholes]]: attesa del payoff lognormale

## Collegati
- [[Funzione caratteristica]]: la generatrice dei momenti dà i momenti
- [[Probabilità di esercizio di un'opzione]]: eventi su $S_T$ via logaritmo
