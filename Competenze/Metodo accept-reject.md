---
tipo: competenza
area: statistica
corsi: [Statistica computazionale, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["accept-reject sampling", "acceptance-rejection method", "metodo del rigetto", "rejection sampling", "teorema fondamentale della simulazione", "probabilità di accettazione 1/M"]
tags: [competenza, area/statistica]
---

# Metodo accept-reject

> Si simula da una densità strumentale $g$ facile e si accetta il valore proposto con probabilità $f(y)/(Mg(y))$: i valori accettati hanno densità $f$, che basta saper calcolare (anche solo a meno di una costante).

## Definizione / enunciato
**Teorema** (MC p. 37-38): simulare $X\sim f(x)$ equivale a simulare $(X,U)$ uniforme su $\{(x,u):0<u<f(x)\}$, perché $f(x)=\int_0^{f(x)}1\,d\lambda(u)$; $U$ è una variabile **ausiliaria** o latente.

**Corollario** (MC p. 47): se $f(x)\le Mg(x)$ per una densità $g$ e una costante $M\ge1$, per simulare $X\sim f$ basta generare
$$Y\sim g,\qquad U\mid Y=y\sim U(0,Mg(y))$$
finché $0<u<f(y)$.

## Formule chiave
- Algoritmo (MC p. 54): **repeat** genera $Y\sim G$, $U\sim U(0,1)$ **until** $u<\dfrac{f(y)}{Mg(y)}$; poi $x\leftarrow y$.
- Probabilità di accettazione: $P(\mathrm{Acc.})=\int_{\mathcal X}\int_0^{f(y)}\frac{g(y)}{Mg(y)}du\,d\lambda(y)=\frac1M$.
- Caso "scatola" $[a,b]\times[0,m]$ con $Y\sim U(a,b)$: $P(\mathrm{Acc.})=\frac{1}{(b-a)m}$, che "può diventare molto piccola molto velocemente".
- Senza costante: $f\le Mg\iff k(x\mid\theta)\le C(\theta)Mg(x)=M^*g(x)$.

## Intuizione
I punti $(y,u)$ uniformi sotto $Mg$ che cadono sotto il grafico di $f$ sono uniformi sotto $f$; la loro ascissa ha quindi densità $f$. Più $Mg$ aderisce a $f$, più si accetta (limite: $g=f$, $M=1$).

## Come si usa
Esempio delle slide: $\mathrm{Beta}(3,1.2)$ con la scatola $[0,1]\times[0,m]$, $m$ = densità nella moda $(a-1)/(a+b-2)$; probabilità di accettazione 0.46 (MC p. 41-44). Con un kernel non normalizzato si domina $k(x)<12g(x)$ con $g$ normale standard (MC p. 51-53).

## Nei corsi
- **Statistica computazionale** (magistrale): sezione "Metodi Accept-Reject", con codice R delle figure. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 36-55); `magistrale/Statistica computazionale/esercitazioni/Monte Carlo.R` (sezione "Teorema Accept-Reject").
- **Ottimizzazione in condizione di incertezza** (magistrale): notazione con funzione maggiorante $t(x)\ge f_X(x)$ sul supporto $I$, $c=\int_It(x)\,dx$ e densità $g=t/c$: si genera $Y\sim g$ e $U\sim U(0,1)$ indipendente, si accetta $X=Y$ se $U\le f_X(Y)/t(Y)$. Esempio motivante: la Beta, la cui CDF richiederebbe un'inversione numerica costosa. Servono una maggiorante stretta ($c$ piccolo) e la consapevolezza che il numero di uniformi per variabile non è noto a priori: la dimensione dell'integrale Monte Carlo è ignota, il che ostacola l'uso di successioni a bassa discrepanza. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 29, 31-32).

## Prerequisiti
- [[Distribuzione uniforme continua]]: le proposte e la soglia
- [[Kernel di una densità]]: basta dominare il kernel
- [[Trasformazione integrale di probabilità]]: metodo diretto, quando $F^{-1}$ è disponibile

## Porta a
- [[Algoritmo di Metropolis-Hastings]]: proposta e accettazione dentro una catena di Markov

## Collegati
- [[Campionamento per importanza]]: anch'esso usa una densità strumentale $g$
- [[Distribuzione Beta]]: esempio $B(3,1.2)$
- [[Successioni a bassa discrepanza]]: difficili da combinare con l'accettazione-rifiuto (Ottimizzazione in condizione di incertezza)
