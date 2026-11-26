---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["convergence of distributions", "convergenza in D'", "convergenza debole", "convergenza nel senso delle distribuzioni", "successioni approssimanti la delta"]
tags: [competenza, area/analisi]
---

# Convergenza di distribuzioni

> $T_n\to T$ in $\mathcal D'$ se converge l'azione su ogni funzione test: una convergenza debolissima, in cui convergono anche successioni di funzioni che non convergono puntualmente.

## Definizione / enunciato
Data $(T_n)\subset\mathcal D'$, $T_n\to T$ in $\mathcal D'$ se
$$\langle T_n,\varphi\rangle\to\langle T,\varphi\rangle\qquad\forall\varphi\in\mathcal D.$$
È lineare: $T_n\to T$, $S_n\to S$ implicano $\lambda T_n+\mu S_n\to\lambda T+\mu S$; e $T_n\to T\iff T_n-T\to0$.

## Formule chiave
- Esempio 4.31: $n(\delta_{1/n}-\delta_0)\to-\delta_0'$, perché $\frac{\varphi(1/n)-\varphi(0)}{1/n}\to\varphi'(0)$.
- Esempio 4.41: $f_n=n\,p_{1/n}$ (porta di base $1/n$, altezza $n$) dà $T_{f_n}\to\delta_0$.
- Esempio 4.33: $\sum_{k=-n}^{n}\delta_k\to\sum_{n\in\mathbb Z}\delta_n$ (treno di impulsi).

## Intuizione
Una funzione test ha supporto compatto, quindi "non vede" ciò che scappa all'infinito ($\delta_n\to0$, Esempio 4.30) e media le oscillazioni rapide: $T_{\sin nx}\to0$ (Esempio 4.40) anche se $\sin nx$ non converge in nessun punto.

## Come si usa
Per stabilire il limite si calcola $\langle T_n,\varphi\rangle$ e si passa al limite per $\varphi$ fissata:
- $\delta_{(-1)^n}$ non converge, perché $\varphi(\pm1)$ può essere diverso (Esempio 4.32);
- $\frac1n\sum_{k=1}^n\delta_{k/n}\to T_{I_{[0,1]}}$, perché è una somma integrale di Riemann di $\varphi$ (Esempio 4.42);
- $n\,I_{[-n,n]}$ non converge in $\mathcal D'$ (Esempio 4.39).

La convergenza passa alla convoluzione: se $T_n\to T$ e $S$ ha supporto compatto, $T_n*S\to T*S$ (Proposizione 4.55).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.6 "Convergenza di distribuzioni". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (pp. 24-29 del PDF); `10 - Derivata distribuzionale e Convergenza.pdf` (Richiami di teoria).
- **Equazioni alle derivate parziali** (triennale): Def. 5.1.6 ($T_k\to T$ in $\mathcal D'(\Omega)$ se $\langle T_k,\varphi\rangle\to\langle T,\varphi\rangle$ per ogni $\varphi$, convergenza di tipo debole); Es. 5.1.7: $f_k\to f$ in $L^1_{\rm loc}$ implica $T_{f_k}\to T_f$, cioè l'inclusione $L^1_{\rm loc}\subset\mathcal D'$ è continua. Applicazione: la soluzione fondamentale del calore verifica $U(\cdot,t)\to\delta_0$ per $t\to0^+$ (6.12). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (p. 50, 59-60).

## Prerequisiti
- [[Distribuzione (funzione generalizzata)]]: convergenza dell'azione sulle funzioni test

## Porta a
- [[Soluzione fondamentale dell'equazione del calore]]: il dato iniziale $\delta_0$ è un limite in $\mathcal D'$ (Equazioni alle derivate parziali)

## Collegati
- [[Delta di Dirac]]: limite di nuclei che si concentrano
