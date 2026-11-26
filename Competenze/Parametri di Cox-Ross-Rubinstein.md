---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Cox-Ross-Rubinstein, CRR, albero CRR, calibrazione dell'albero binomiale, convergenza del binomiale a Black-Scholes, limite continuo del binomiale, dal binomiale al GBM]
tags: [competenza, area/finanza]
---

# Parametri di Cox-Ross-Rubinstein

> Scelta di $u$ e $d$ legata alla volatilità: al crescere del numero di passi l'albero converge al moto browniano geometrico e il prezzo binomiale alla formula di Black-Scholes.

## Definizione / enunciato
Con volatilità annua $\sigma$, tasso continuo $r$, scadenza $T$, $n$ passi, $\Delta t=T/n$ (def. c10-crr):
$$u=e^{\sigma\sqrt{\Delta t}},\qquad d=\frac1u,\qquad q_u=\frac{e^{r\Delta t}-d}{u-d},\quad q_d=1-q_u .$$
**Convergenza dei prezzi** (prop. c10-convergenza, enunciato): il prezzo $c_n$ di una call con $n$ passi CRR tende a $S_0N(d_1)-Ke^{-rT}N(d_2)$; lo stesso per la put.

**Convergenza in legge** (prop. c15-limite-binomiale): con $p_u=\frac12\big(1+\frac m\sigma\sqrt{\Delta t}\big)$,
$$\ln\frac{S(T)}{S(0)}\xrightarrow{d}\mathcal N(mT,\sigma^2T),\qquad m=\mu-\tfrac12\sigma^2,$$
cioè al limite $S(T)$ ha la legge di un GBM.

## Formule chiave
$$\ln u=-\ln d=\sigma\sqrt{\Delta t},\qquad\Delta t=T/n .$$

## Intuizione
Il logaritmo del prezzo è una passeggiata aleatoria con passi $\pm\sigma\sqrt{\Delta t}$; per il teorema del limite centrale la somma diventa gaussiana. Il prezzo binomiale oscilla attorno a quello di Black-Scholes al crescere di $n$. Nel libro si scrive sempre $q_u$, perché $q$ da sola è il dividend yield.

## Come si usa
Esempio del libro: $S_0=K=40$, $r=4\%$, $\sigma=30\%$, 6 mesi, 2 passi: $u=1.1618$, $d=0.8607$, $q_u=0.4960$, $c=3.37$ contro $3.76$ di Black-Scholes. Il listato lst:c10-convergenza confronta CRR per $n=1,\dots,200$ con `blsprice`.

## Nei corsi
- **Financial engineering** (magistrale): cap. 10 §Calibrazione e limite continuo; cap. 15 §Rendimenti nel modello binomiale e nel GBM. Fonti: `Libri/Financial engineering/capitoli/cap10.tex`, `cap15.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/32 - lez 01 aprile - delta hedging opzioni.pdf`.

## Prerequisiti
- [[Modello binomiale multiperiodale]]: albero da calibrare
- [[Teorema del limite centrale]]: somma di passi i.i.d.

## Porta a
- [[Moto browniano geometrico]]: limite in legge dell'albero
- [[Formula di Black-Scholes]]: limite dei prezzi

## Collegati
- [[Limite gaussiano della passeggiata aleatoria]]: stesso meccanismo di convergenza
