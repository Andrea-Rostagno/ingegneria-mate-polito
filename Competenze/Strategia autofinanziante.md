---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [self-financing strategy, autofinanziamento, strategia di trading, trading strategy, strategia prevedibile, valore scontato di una strategia]
tags: [competenza, area/finanza]
---

# Strategia autofinanziante

> Strategia dinamica in cui a ogni ribilanciamento il nuovo portafoglio si compra esattamente con il valore del vecchio: il valore cambia solo per effetto dei prezzi.

## Definizione / enunciato
**Tempo discreto** (def. c10-strategia, c10-autofinanziante): una strategia è una successione $h_n=(x(n),y(n))$, $n=1,\dots,T$, costruita in $n-1$ e tenuta su $[n-1,n)$, **prevedibile** (dipende solo da $S(0),\dots,S(n-1)$); valore $V_h(n)=x(n)B(n)+y(n)S(n)$. È autofinanziante se
$$x(n)B(n)+y(n)S(n)=x(n+1)B(n)+y(n+1)S(n),\qquad n=1,\dots,T-1 .$$
**Lemma** (lem. c10-martingala-valore): se $h$ è autofinanziante, $V_h(n)/(1+r)^n$ è una $\mathbb Q$-martingala e $V_h(0)=(1+r)^{-T}\mathbb E^{\mathbb Q}[V_h(T)]$.

**Tempo continuo** (def. c16-autofinanziante): $h_t=(x_t,y_t)$ adattata, con $\int_0^T|x_t|dt<\infty$, $\int_0^Ty_t^2S_t^2dt<\infty$ q.c., valore $V_h(t)=x_tB(t)+y_tS_t$, autofinanziante se
$$dV_h(t)=x_t\,dB(t)+y_t\,dS_t .$$

## Formule chiave
Valore scontato in tempo continuo: $dV^D_t=y_t\,dS^D_t$ con $S^D_t=e^{-rt}S_t$.

## Intuizione
Dopo l'investimento iniziale non si aggiunge né si toglie denaro. Misurando tutto in unità di conto in banca, gli interessi spariscono e il valore scontato si muove solo con il prezzo scontato dell'azione: se questo è una martingala sotto $\mathbb Q$, lo è anche il valore.

## Come si usa
Esempio del libro (lezione): albero con $S_0=80$, $u=1.5$, $d=0.5$, $r=0$, call $K=80$, $T=3$. Lungo il percorso $80\to120\to60\to90$ i portafogli (liquidità, azioni) sono $(-22.5,0.625)$, $(-42.5,0.7917)$, $(-5,0.1667)$: a ogni data il valore del vecchio (52.5, 5) è esattamente il costo del nuovo, e a scadenza si ha 10, il payoff della call.

## Nei corsi
- **Financial engineering** (magistrale): cap. 10 §Strategie, autofinanziamento, arbitraggio; cap. 16 §Il mercato di Black-Scholes. La lezione SEM/36-38 inverte $x$ e $y$. Fonti: `Libri/Financial engineering/capitoli/cap10.tex`, `cap16.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/28 - lez 25 marzo a - modello binomiale multiperiodale.pdf`.

## Prerequisiti
- [[Portafoglio replicante]]: la replica dinamica è autofinanziante
- [[Martingala]]: il valore scontato è una martingala

## Porta a
- [[Modello binomiale multiperiodale]]: replica nodo per nodo
- [[Equazione di Black-Scholes]]: portafoglio autofinanziante in tempo continuo
- [[Delta hedging]]: ribilanciamento senza apporti di denaro

## Collegati
- [[Trasformata di martingala]]: il guadagno $\sum y_n\Delta S^D_n$ è una trasformata di martingala (collegamento concettuale, non esplicito nel libro)
- [[Integrale di Itô]]: guadagno $\int y\,dS$ in tempo continuo
