---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [diffusion process, diffusione, processo di Markov continuo, densità di transizione, transition density, spazio degli stati di una diffusione, diffusione regolare, equazione di Fokker-Planck, Fokker-Planck equation, Chapman-Kolmogorov per diffusioni, processo di Markov]
tags: [competenza, area/probabilita]
---

# Processo di diffusione

> Processo di Markov con traiettorie continue, descritto dalla densità di transizione $f(x,t\mid y,\tau)$, che soddisfa le equazioni di Chapman-Kolmogorov e di Fokker-Planck.

## Definizione / enunciato
**Processo di Markov** (def. c11-markov): $\mathbb P(X_t\in A\mid\mathcal F_s)=\mathbb P(X_t\in A\mid X_s)$ q.c. per $s\le t$.

**Diffusione** (def. c19-diffusione): processo di Markov con traiettorie continue; lo **spazio degli stati** è un intervallo $I=(\ell,r)$; è **regolare** se da ogni punto interno raggiunge qualunque stato di $I$ con probabilità positiva. Densità di transizione $f(x,t\mid y,\tau)$, ripartizione $F(x,t\mid y,\tau)$.

**Chapman-Kolmogorov** (prop. c19-chapman-kolmogorov): per $\tau<u<t$
$$f(x,t\mid y,\tau)=\int_\ell^rf(x,t\mid z,u)\,f(z,u\mid y,\tau)\,dz .$$
**Fokker-Planck** (prop. c19-fokker-planck, enunciato): con momenti infinitesimali $A_1$, $A_2$ regolari,
$$\partial_tf=-\partial_x\big[A_1(x,t)f\big]+\tfrac12\partial_{xx}\big[A_2(x,t)f\big],\qquad f\to\delta(x-y)\ \text{per }t\downarrow\tau .$$

## Formule chiave
Browniano: $A_1=0$, $A_2=1$, Fokker-Planck = equazione del calore $\partial_tf=\frac12\partial_{xx}f$, risolta dalla densità gaussiana. OU: $\partial_tf=-\partial_x[\theta(\mu-x)f]+\frac12\sigma^2\partial_{xx}f$, risolta dalla normale con media $\mu+(y-\mu)e^{-\theta t}$ e varianza $\frac{\sigma^2}{2\theta}(1-e^{-2\theta t})$.

## Intuizione
Le soluzioni delle SDE con coefficienti regolari sono diffusioni. Chapman-Kolmogorov dice che per andare da $y$ a $x$ si passa per un qualche $z$ al tempo intermedio; Fokker-Planck descrive come la densità si sposta (drift $A_1$) e si allarga (varianza $A_2$). Markov e martingala sono proprietà indipendenti.

## Come si usa
Esempio del libro (OU con $\theta=1$, $\mu=0$, $\sigma=1$, $y=2$): $(m,v)=(1.810,0.091)$ a $t=0.1$, $(0.736,0.432)$ a $t=1$, $(0.100,0.499)$ a $t=3$: la campana si sposta verso 0 e si allarga fino alla densità stazionaria $\mathcal N(0,\frac12)$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 11 §Proprietà di Markov; cap. 19 §Processi di Markov e diffusioni. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`, `cap19.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 08 - analisi stocastica - 26 mag 26.pdf`, `Lezione 09 - analisi stocastica - 29 mag 26.pdf`.

## Prerequisiti
- [[Equazione differenziale stocastica]]: le soluzioni sono diffusioni
- [[Speranza condizionata]]: proprietà di Markov

## Porta a
- [[Momenti infinitesimali]]: coefficienti di Fokker-Planck
- [[Tempo di primo passaggio di una diffusione]]: equazione integrale con la densità di transizione
- [[Densità stazionaria di una diffusione]]: limite della densità di transizione

## Collegati
- [[Equazioni di Chapman-Kolmogorov]]: versione per catene di Markov
- [[Equazioni di Kolmogorov]]: versioni in avanti e all'indietro per le CTMC
- [[Equazione del calore]]: Fokker-Planck del browniano
- [[Formula di Feynman-Kac]]: equazione all'indietro con il generatore
