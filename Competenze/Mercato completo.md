---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [complete market, completezza del mercato, secondo teorema fondamentale dell'asset pricing, second fundamental theorem of asset pricing, mercato incompleto, incomplete market, modello trinomiale, intervallo dei prezzi di non arbitraggio]
tags: [competenza, area/finanza]
---

# Mercato completo

> Un mercato in cui ogni derivato è replicabile; senza arbitraggio, è completo se e solo se la misura neutrale al rischio è unica.

## Definizione / enunciato
Un mercato è **completo** se ogni payoff $X=(X(\omega_1),\dots,X(\omega_m))$ è replicabile: esiste $h$ con $Dh=X$, dove $D$ è la matrice dei payoff (def. c09-completezza).

**Replicabilità e rango** (prop. c09-rango): $X$ è replicabile $\iff\operatorname{rank}[D\mid X]=\operatorname{rank}D$; il mercato è completo $\iff\operatorname{rank}D=m$ (almeno tanti titoli, contando $B$, quanti stati). Se non ci sono arbitraggi, il prezzo di un $X$ replicabile $\frac1{1+r}\mathbb E^{\mathbb Q}[X]$ non dipende né dalla replica né da $\mathbb Q$.

**Secondo teorema fondamentale** (teo. c09-ftap2; multiperiodale teo. c10-ftap, parte 2): un mercato privo di arbitraggio con un numero finito di stati è completo $\iff$ la misura martingala equivalente è unica. Il binomiale (anche multiperiodale) è completo (cor. c10-completo).

## Formule chiave
In un mercato incompleto un payoff non replicabile ha un **intervallo aperto** di prezzi di non arbitraggio $\big\{\frac1{1+r}\mathbb E^{\mathbb Q}[X]\big\}$ al variare di $\mathbb Q$.

## Intuizione
Ogni titolo fornisce un vettore di payoff: con meno vettori indipendenti che stati non si generano tutti i payoff. Più misure $\mathbb Q$ compatibili significano che il mercato non sceglie un prezzo unico per ciò che non può replicare.

## Come si usa
Esempio del libro (trinomiale, lezione): azione a 20 che in 4 mesi va a 24, 20 o 16, $r=4\%$ annuo composto ($1+r=1.013159$). Nel binomiale (24/16) la call con $K=20$ si replica con $y=0.5$, $x=-7.896$, prezzo 2.104. Nel trinomiale il sistema di replica (tre equazioni, due incognite) non ha soluzione: $\operatorname{rank}D=2<3$, mercato incompleto; il sistema per $\mathbb Q$ dà $q_m=1.06580-2q_u$, $q_d=q_u-0.06580$, positivi per $0.0658<q_u<0.5329$: infinite misure, nessun arbitraggio.

## Nei corsi
- **Financial engineering** (magistrale): cap. 9 §Più stati e più titoli; cap. 10 §I teoremi fondamentali. Fonti: `Libri/Financial engineering/capitoli/cap09.tex`, `cap10.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/28 - lez 25 marzo a - modello binomiale multiperiodale.pdf`, `30 - lez 31 marzo a - replica opzioni in albero binomiale.pdf`.

## Prerequisiti
- [[Portafoglio replicante]]: completezza = tutto replicabile
- [[Primo teorema fondamentale dell'asset pricing]]: esistenza di $\mathbb Q$
- [[Rango di una matrice]]: criterio $\operatorname{rank}D=m$

## Porta a
- [[Modello binomiale multiperiodale]]: modello completo
- [[Valutazione neutrale al rischio]]: prezzo unico nel mercato di Black-Scholes completo

## Collegati
- [[Teorema di Rouché-Capelli]]: compatibilità del sistema di replica
- [[Misura neutrale al rischio]]: unicità
- [[Modello binomiale a un periodo]]: due stati e due titoli
