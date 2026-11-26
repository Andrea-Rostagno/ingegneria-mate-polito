---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [one-period binomial model, binomiale uniperiodale, modello binomiale uniperiodale, albero a un passo, condizione d<1+r<u, prezzo per replica, portafoglio senza rischio, tre metodi di pricing]
tags: [competenza, area/finanza]
---

# Modello binomiale a un periodo

> Il mercato più piccolo in cui si vedono tutte le idee del pricing: un titolo che sale di $u$ o scende di $d$, un conto in banca, replica e misura neutrale al rischio.

## Definizione / enunciato
$\mathcal M=(B,S)$ con $B(0)=1$, $B(1)=1+r$ ($r>-1$; con tasso continuo $1+r=e^{r\Delta t}$), $S(1)=S_0u$ con probabilità $p_u$ o $S_0d$ con $p_d$, $0<d<u$ (def. c09-mercato-un-periodo). Portafoglio $h=(x,y)$, $V_h(1)=x(1+r)+yS(1)$. Arbitraggio: $V_h(0)=0$, $\mathbb P(V_h(1)\ge0)=1$, $\mathbb P(V_h(1)>0)>0$.

- **Non arbitraggio** (prop. c09-non-arbitraggio): privo di arbitraggio $\iff d<1+r<u$.
- **Prezzo per replica** (teo. c09-prezzo-replica): se $d<1+r<u$ ogni payoff $\varphi(S(1))$ è replicato dall'unico
$$y=\frac{\varphi(u)-\varphi(d)}{S_0(u-d)},\qquad x=\frac1{1+r}\,\frac{u\varphi(d)-d\varphi(u)}{u-d},$$
e $\Pi(0,X)=x+yS_0=\frac1{1+r}[q_u\varphi(u)+q_d\varphi(d)]$.
- **Tre metodi equivalenti** (prop. c09-tre-metodi): replica; portafoglio senza rischio ($\Delta$ azioni lunghe, un derivato corto, valore uguale nei due stati); misura neutrale al rischio.

## Formule chiave
$$q_u=\frac{1+r-d}{u-d},\qquad q_d=\frac{u-(1+r)}{u-d}.$$

## Intuizione
Se $1+r\ge u$ il conto in banca domina l'azione (si vende l'azione e si investe); se $1+r\le d$ il contrario. Le probabilità reali **non** entrano nel prezzo: sono già incorporate in $S_0$ e la replica funziona in entrambi gli scenari.

## Come si usa
Esempio del libro (lezione): $S_0=100$, $u=1.2$, $d=0.8$, $r=1\%$, $p_u=0.6$: $q_u=0.525$; call con $K=100$: $y=1/2$, $x=-39.604$, prezzo $10.396$ con entrambi i metodi; con la misura reale si otterrebbe 11.88 e un arbitraggio di 1.49. Esempio di Hull: $S=50\to53/48$, due mesi, $r=10\%$ continuo, $K=49$: $\Delta=0.8$, $q_u=0.5681$, $c=2.23$. Violazione: $u=1.10$, $d=0.95$, $1+r=1.12$: $h=(100,-1)$ dà $+2$ o $+17$ a costo nullo.

## Nei corsi
- **Financial engineering** (magistrale): cap. 9 §§1-4. Le Serie (Hull) chiamano $p$ la probabilità neutrale al rischio. Fonti: `Libri/Financial engineering/capitoli/cap09.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/27 - lez 24 marzo - modello binomiale uniperiodale.pdf`, `32 - lez 01 aprile - delta hedging opzioni.pdf`.

## Prerequisiti
- [[Portafoglio replicante]]: prezzo = costo della replica
- [[Opzioni call e put]]: payoff da replicare
- [[Opportunità di arbitraggio]]: definizione in un periodo

## Porta a
- [[Misura neutrale al rischio]]: $q_u$, $q_d$
- [[Modello binomiale multiperiodale]]: ripetizione del passo singolo
- [[Primo teorema fondamentale dell'asset pricing]]: caso più semplice

## Collegati
- [[Mercato completo]]: il binomiale a un periodo è completo
- [[Delta hedging]]: il $\Delta$ del portafoglio senza rischio
