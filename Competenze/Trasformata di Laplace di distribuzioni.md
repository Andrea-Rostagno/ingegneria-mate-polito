---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Laplace transform of distributions", "L-trasformata di distribuzioni", "distribuzione L-trasformabile", "trasformata di Laplace della delta"]
tags: [competenza, area/analisi]
---

# Trasformata di Laplace di distribuzioni

> Per una distribuzione con supporto in $[0,+\infty)$ si pone, formalmente, $\mathcal L(T)(s)=\langle T(t),e^{-st}\rangle$: così si trasformano la delta, le sue derivate e il treno di impulsi, e la derivata si trasforma senza termine di bordo.

## Definizione / enunciato
- **Def. 6.31** ($T$ a supporto compatto in $[0,+\infty)$): $\mathcal L(T)(s):=\langle T(t),e^{-st}\rangle$, $s\in\mathbb C$ (6.27).
- **Def. 6.32** ($T\in\mathcal S'$ con supporto in $[0,+\infty)$): si usa $\langle T,\xi(t)e^{-st}\rangle$ con $\xi\in C^\infty(\mathbb R)$, $\xi(t)=0$ per $t\le-1$, $\xi(t)\in[0,1]$ per $-1<t<0$, $\xi(t)=1$ per $t\ge0$ (6.28; la dispensa stampa "$t\le0$" nell'ultima riga, refuso), così che $\xi e^{-st}\in\mathcal S$ per $\operatorname{Re}s>0$.
- **Def. 6.33-6.34** (caso generale): $T\in\mathcal D'$ con supporto in $[0,+\infty)$ è **L-trasformabile** se $e^{-s_0t}T\in\mathcal S'$ per qualche $s_0$; con $\lambda_T=\inf\{\operatorname{Re}s: e^{-st}T\in\mathcal S'\}$ e $\Omega_T=\{\operatorname{Re}s>\lambda_T\}$,
$$\mathcal L(T)(s):=\big\langle e^{-\lambda_0t}T(t),\ \xi(t)e^{-(s-\lambda_0)t}\big\rangle,\qquad\lambda_0\in\,]\lambda_T,\operatorname{Re}s[\quad(6.33),$$
indipendente dalle scelte; per le funzioni L-trasformabili ritrova la definizione classica (Prop. 6.35).

## Formule chiave
Proposizione 6.37 (in $\Omega_T$): linearità, $\mathcal L(e^{s_0t}T)(s)=\mathcal L(T)(s-s_0)$, $\mathcal L(T(t-t_0))=e^{-t_0s}\mathcal L(T)$, $\mathcal L(T(at))(s)=\frac1a\mathcal L(T)(\frac sa)$, $[\mathcal L(T)]'(s)=-\mathcal L(tT)(s)$ (quindi $\mathcal L(T)$ è analitica), e
$$\mathcal L(T')(s)=s\,\mathcal L(T)(s)\qquad\text{(derivata nel senso delle distribuzioni)}.$$
Tavola: $\mathcal L(\delta_{t_0}^{(k)})(s)=s^ke^{-t_0s}$, $s\in\mathbb C$; in particolare $\mathcal L(\delta_0)=1$. Convoluzione: $\mathcal L(T*S)=\mathcal L(T)\mathcal L(S)$ (6.40).

## Intuizione
La regola $\mathcal L(f')=s\mathcal L(f)-f(0^+)$ non contraddice $\mathcal L(T')=s\mathcal L(T)$: la derivata distribuzionale di $H(t)f(t)$ contiene il termine $f(0^+)\delta_0$, che compensa il dato iniziale.

## Come si usa
Esempio 6.39: treno di impulsi per tempi positivi $T=\sum_{k\ge0}\delta_k$:
$$\mathcal L(T)(s)=\sum_{k=0}^\infty e^{-sk}=\frac1{1-e^{-s}}.$$

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §6.4 "L-trasformata di distribuzioni". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 6 (1).pdf` (pp. 14-19 del PDF); tavola in `formulario_analisi.pdf`; `13 - Trasformata di Laplace.pdf` (Richiami di teoria).

## Prerequisiti
- [[Trasformata di Laplace]]: estensione alle distribuzioni
- [[Supporto di una distribuzione]]: supporto contenuto in $[0,+\infty)$

## Porta a
- Nessuno.

## Collegati
- [[Delta di Dirac]]: $\mathcal L(\delta_0)=1$
