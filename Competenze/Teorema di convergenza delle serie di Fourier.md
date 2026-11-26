---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["Fourier convergence theorem", "convergenza in media quadratica", "convergenza in norma L2", "convergenza puntuale della serie di Fourier", "regolarizzata", "funzione regolarizzata"]
tags: [competenza, area/analisi]
---

# Teorema di convergenza delle serie di Fourier

> Per una $f$ $T$-periodica: continua a tratti dà convergenza in media quadratica, $C^1$ a tratti dà convergenza puntuale alla regolarizzata, continua e $C^1$ a tratti dà convergenza uniforme.

## Definizione / enunciato
**Teorema.** Sia $f:\mathbb R\to\mathbb R$ $T$-periodica con polinomi di Fourier $P_N$.
1. Se $f$ è continua a tratti: $\lim_{N\to+\infty}\int_{-T/2}^{T/2}(P_N(x)-f(x))^2dx=0$ (convergenza in media quadratica, o in norma $L^2$).
2. Se $f$ è continua a tratti e $C^1$ a tratti: $\lim_NP_N(x)=f^*(x)$ per ogni $x$ (convergenza puntuale alla regolarizzata).
3. Se $f$ è continua su $\mathbb R$ e $C^1$ a tratti: $\lim_N\max_{x\in\mathbb R}|P_N(x)-f(x)|=0$ (convergenza uniforme).

## Formule chiave
$$f^*(x)=\begin{cases}f(x)&\text{se }f\text{ è continua in }x\\[2pt]\tfrac12\Big(\lim_{t\to x^+}f(t)+\lim_{t\to x^-}f(t)\Big)&\text{nei punti di salto}\end{cases}$$

## Intuizione
La convergenza uniforme vuol dire che da un certo $N$ il grafico di $P_N$ sta nella fascia $f\pm\varepsilon$. I $P_N$ sono continui e un limite uniforme di funzioni continue è continuo, quindi se $f^*$ ha salti la convergenza uniforme è impossibile.

## Come si usa
Domanda tipica: come converge la serie e quanto vale la somma, senza calcolare i coefficienti.
- Onda triangolare $|x|$ (continua, $C^1$ a tratti): caso 3. In $x=0$ si ricava $\sum_{k\ge0}\frac1{(2k+1)^2}=\frac{\pi^2}8$.
- Onda quadra (salti in $k\pi$): casi 1 e 2 ma non 3; la somma vale $f^*(k\pi)=0$ nei salti. In $x=\frac\pi2$ si ritrova $1-\frac13+\frac15-\dots=\frac\pi4$.

## Nei corsi
- **Analisi 2** (triennale): enunciato il 14/12, riassunto ed esempi il 19/12/2022, nota sulla convergenza uniforme il 21/12. Fonti: `triennale/ANNO 2/analisi 2/AII 22 serie di fourier.pdf` (pp. 11-15); `triennale/ANNO 2/analisi 2/AII 23 2022 serie di fourier.pdf` (pp. 2-3, 10-19); `triennale/ANNO 2/analisi 2/AII 24 2022 esercizi e varie.pdf` (pp. 7-8).

## Prerequisiti
- [[Serie di Fourier]]: polinomi di Fourier P_N
- [[Punti di discontinuità]]: regolarizzata nei punti di salto

## Porta a
- Nessuno.

## Collegati
- [[Convergenza uniforme di successioni di funzioni]]: terzo caso del teorema
