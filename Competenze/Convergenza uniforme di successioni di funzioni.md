---
tipo: competenza
area: analisi
corsi: [Analisi 2, Analisi funzionale]
livello: [triennale]
aliases: ["uniform convergence of sequences of functions", "convergenza puntuale", "pointwise convergence", "metrica uniforme", "spazio C^0(I)", "limite uniforme di funzioni continue"]
tags: [competenza, area/analisi]
---

# Convergenza uniforme di successioni di funzioni

> $f_N\to f$ uniformemente se lo scarto massimo $\sup|f_N-f|$ tende a zero: è più forte della convergenza puntuale e conserva la continuità.

## Definizione / enunciato
Per $f_N,f$ definite su un intervallo $I$:
- $f_N\to f$ **puntualmente** su $I$ se $\lim_Nf_N(x)=f(x)$ per ogni $x\in I$;
- $f_N\to f$ **uniformemente** su $I$ se $\lim_N\sup_{x\in I}|f_N(x)-f(x)|=0$.

La convergenza uniforme implica quella puntuale, non viceversa.

**Spazio $C^0(I)$.** Su $X=C^0(I)$ ($I=[a,b]$ o un compatto) la distanza $d(f,g)=\max_{x\in I}|f(x)-g(x)|$ (lo "scarto massimo") rende $X$ uno spazio metrico, e la convergenza in $(X,d)$ è la convergenza uniforme. **Teorema:** $(X,d)$ è completo (enunciato a lezione senza dimostrazione).

## Formule chiave
Conseguenza: il limite uniforme di funzioni continue è continuo.

## Intuizione
Puntuale: ogni $x$ arriva al limite con i suoi tempi. Uniforme: da un certo $N$ tutto il grafico di $f_N$ sta nella fascia $f\pm\varepsilon$.

## Come si usa
- Controesempio della lezione: $f_N(x)=Nxe^{-Nx}$ su $[0,10]$ tende a $0$ puntualmente, ma il massimo vale $\frac1e$ in $x=\frac1N$ per ogni $N$, quindi non c'è convergenza uniforme; con $N^2xe^{-Nx}$ lo scarto massimo $\frac Ne$ tende addirittura a $+\infty$.
- Applicazione alle serie di Fourier: se $f$ non è continua i polinomi $P_N$ (continui) non possono convergere uniformemente a $f$. Altrimenti sarebbero di Cauchy in $C^0$, quindi convergerebbero a una $g$ continua, che dovrebbe coincidere con $f$.
- Applicazione alle EDO: la metrica uniforme e la completezza servono per il teorema di esistenza e unicità locale.

## Nei corsi
- **Analisi 2** (triennale): lezioni del 19/12 e 21/12/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 23 2022 serie di fourier.pdf` (pp. 3-7); `triennale/ANNO 2/analisi 2/AII 24 2022 esercizi e varie.pdf` (pp. 6-8).
- **Analisi funzionale** (triennale): la convergenza uniforme è la convergenza nella metrica $d_\infty(f,g)=\sup_{t\in S}|f(t)-g(t)|$, che è una distanza sullo spazio $F_b(S,\mathbb F)$ delle funzioni limitate; $(F_b(S,\mathbb F),d_\infty)$ è completo (Teor. 2.15), e così $(C_{\mathbb F}(M),d_\infty)$ per $M$ compatto (Teor. 2.37). Prop. 2.19: limite uniforme di continue è continuo; se $f_n\in C^1(I)$, $f_n\rightrightarrows f$ e $f_n'\rightrightarrows g$ allora $f'=g$; su $[a,b]$ si scambiano limite e integrale. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§2.3, pp. 14-15, 21); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (pp. 7-9).

## Prerequisiti
- [[Funzione continua]]: il limite uniforme di continue è continuo

## Porta a
- [[Teorema di esistenza e unicità locale]]: punto fisso in C^0

## Collegati
- [[Serie di potenze]]: convergenza uniforme e derivazione termine a termine
- [[Teorema di convergenza delle serie di Fourier]]: terzo caso del teorema
- [[Funzioni test]]: convergenza uniforme usata in D
- [[Convergenza del polinomio interpolante]]: errore in norma infinito
- [[Spazio metrico completo]]: (F_b(S), d∞) e (C(M), d∞) sono completi (Analisi funzionale)
- [[Teorema di Stone-Weierstrass]]: i polinomi approssimano uniformemente le continue (Analisi funzionale)
