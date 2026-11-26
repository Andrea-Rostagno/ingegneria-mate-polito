---
tipo: competenza
area: finanza
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [Black-Scholes formula, Black-Scholes-Merton formula, formula di Black e Scholes, prezzo della call europea, prezzo della put europea, d1, d2, N(d1), N(d2), blsprice]
tags: [competenza, area/finanza]
---

# Formula di Black-Scholes

> Prezzo in forma chiusa di call e put europee quando il sottostante è un moto browniano geometrico: $c=S\,N(d_1)-Ke^{-r(T-t)}N(d_2)$.

## Definizione / enunciato
**Teorema** (teo. c16-black-scholes): nel mercato di Black-Scholes il prezzo in $t\in[0,T)$ di una call europea con strike $K$ e scadenza $T$ è
$$c(t)=S_tN(d_1)-Ke^{-r(T-t)}N(d_2),$$
$$d_1=\frac{\ln(S_t/K)+(r+\frac12\sigma^2)(T-t)}{\sigma\sqrt{T-t}},\qquad d_2=d_1-\sigma\sqrt{T-t}=\frac{\ln(S_t/K)+(r-\frac12\sigma^2)(T-t)}{\sigma\sqrt{T-t}} .$$
**Put** (cor. c16-put): $p(t)=Ke^{-r(T-t)}N(-d_2)-S_tN(-d_1)$.

**Significato** (prop. c16-prob-neutrale): $\mathbb Q(S_T>K\mid\mathcal F_t)=N(d_2)$, $S_tN(d_1)=e^{-r(T-t)}\mathbb E^{\mathbb Q}[S_T\mathbf 1_{\{S_T>K\}}\mid\mathcal F_t]$.

## Formule chiave
Dividend yield continuo $q$: $S_0e^{-qT}$ al posto di $S_0$ e $r-q$ in $d_1$. Dimostrazione: $c=e^{-r(T-t)}\mathbb E^{\mathbb Q}[(S_T-K)^+]$ con $S_T$ lognormale sotto $\mathbb Q$.

## Intuizione
$N(d_2)$ è la probabilità di esercizio sotto $\mathbb Q$ (non sotto $\mathbb P$): il secondo termine è lo strike scontato pagato con quella probabilità; il primo è il valore atteso scontato dell'azione ricevuta. Il prezzo non dipende da $\mu$. Errori frequenti: $d_2$ con $-r+\frac12\sigma^2$, put con $N(d_2)$, payoff della put $(S_T-K)^+$. Controllo: $p\ge0$ e parità put-call.

## Come si usa
Esempi del libro: $S_0=52$, $K=50$, $r=12\%$, $\sigma=30\%$, 3 mesi: $d_1=0.5365$, $d_2=0.3865$, $c=5.06$, $p=1.58$. Lezione (Rosazza-Sgarra 7.2): $S_0=16$, $K=18$, $r=4\%$, $\sigma=40\%$, $T=1$: $d_1=0.0055$, $d_2=-0.3945$, $c_0=2.04$, $p_0=3.34$; se fra sei mesi $S=16.4$ la call vale 1.36, meno di $2.04e^{0.02}=2.08$: conveniva aspettare. In MATLAB `blsprice(Price,Strike,Rate,Time,Volatility)`: la scadenza precede la volatilità.

## Nei corsi
- **Financial engineering** (magistrale): cap. 16 §La formula di Black-Scholes (dimostrazione completa); cap. 10 (limite del CRR). Fonti: `Libri/Financial engineering/capitoli/cap16.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/37 - lez 24 aprile a - formula Black Scholes.pdf`, `38 - lez 24 aprile b - esercizi Black Scholes.pdf` (la lezione ha un segno sbagliato in $d_2$ e $N(d_2)$ nella put, corretti nel libro).
- **Ottimizzazione in condizione di incertezza** (magistrale): usata come valore esatto per controllare il Monte Carlo; esempio $S_0=K=50$, $r=0.1$, $\sigma=0.4$, $T=5/12$: $d_1=0.2905$, $d_2=0.0323$, $C_0=6.1165$; delta $\Phi(d_1)$ di riferimento (0.5231) per la stima con numeri casuali comuni. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 38-40); `magistrale/Ottimizzazione in condizione di incertezza/04 - VarianceReduction.pdf` (p. 17).

## Prerequisiti
- [[Valutazione neutrale al rischio]]: prezzo come attesa sotto $\mathbb Q$
- [[Distribuzione lognormale]]: legge di $S_T$
- [[Opzioni call e put]]: payoff

## Porta a
- [[Greche]]: derivate della formula
- [[Delta hedging]]: $\Delta=N(d_1)$
- [[Modello di Merton]]: equity come call sulle attività

## Collegati
- [[Parità put-call]]: put dalla call
- [[Parametri di Cox-Ross-Rubinstein]]: limite del prezzo binomiale
- [[Equazione di Black-Scholes]]: la formula ne è la soluzione
- [[Probabilità di esercizio di un'opzione]]: $N(d_2)$ contro $N(\hat d_2)$
- [[Distribuzione normale]]: tavole di $N(x)$
