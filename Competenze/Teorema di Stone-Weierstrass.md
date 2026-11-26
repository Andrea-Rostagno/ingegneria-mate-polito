---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Stone-Weierstrass theorem", "teorema di approssimazione di Weierstrass", "Weierstrass approximation theorem", "densità dei polinomi", "approssimazione uniforme con polinomi"]
tags: [competenza, area/analisi]
---

# Teorema di Stone-Weierstrass

> Ogni funzione continua su un intervallo chiuso e limitato è limite uniforme di polinomi: i polinomi sono densi in $(C[a,b],\|\cdot\|_\infty)$.

## Definizione / enunciato
**Teor. 4.30.** Sia $[a,b]\subset\mathbb R$ chiuso e limitato. Se $f\in C[a,b]$, esiste una successione di polinomi $(p_n)$ con
$$p_n|_{[a,b]}\rightrightarrows f\qquad(\|f-p_n\|_\infty\to0).$$
**Cor. 4.31.** $(C[a,b],\|\cdot\|_\infty)$ è separabile.

## Formule chiave
Passi della dimostrazione (note, pp. 41-43):
1. riduzione a $[0,1]$ con $\Phi(t)=a+(b-a)t$;
2. riduzione a $f(0)=f(1)=0$ sottraendo $q(t)=f(0)+t(f(1)-f(0))$;
3. stima $C_n:=\int_{-1}^1(1-x^2)^n\,dx\ge\frac{4}{3\sqrt n}>\frac1{\sqrt n}$ (da $1-nx^2\le(1-x^2)^n$);
4. nuclei $Q_n(t)=C_n^{-1}(1-t^2)^n$: polinomi, $\ge0$ su $[-1,1]$, $\int_{-1}^1Q_n=1$, $Q_n(t)\le\sqrt n(1-\delta^2)^n$ per $\delta\le|t|\le1$;
5. $p_n=f*Q_n$ è un polinomio e
$$\|p_n|_{[0,1]}-f\|_\infty\le\sup_{t\in[0,1],|s|<\delta}|f(t-s)-f(t)|+4\sup_{[0,1]}|f|\,\sqrt n(1-\delta^2)^n.$$

## Intuizione
I nuclei $(1-x^2)^n/C_n$ hanno integrale 1 e si concentrano attorno a 0 quando $n$ cresce: convolvere $f$ con essi è una media locale sempre più stretta, che converge uniformemente a $f$ e resta un polinomio.

## Come si usa
- Separabilità: i polinomi a coefficienti razionali sono un denso numerabile di $C[a,b]$.
- Non chiusura: i polinomi sono un sottospazio denso proprio, quindi non chiuso e non di Banach (Es. 4.17).
- Completezza delle basi trigonometriche in $L^2(0,\pi)$: con il cambio di variabile $\arccos$ ci si riconduce all'approssimazione polinomiale di $f\circ\arccos$ su $[-1,1]$ (Prop. 6.51); insieme alla densità di $C[a,b]$ in $L^p(a,b)$ dà la separabilità di $L^p(a,b)$.

## Nei corsi
- **Analisi funzionale** (triennale): §4.6 (Teor. 4.30 con dimostrazione, Cor. 4.31). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 40-43); `triennale/ANNO 3/analisi funzionale/03_spazinormati_handout.pdf` (p. 9).

## Prerequisiti
- [[Convergenza uniforme di successioni di funzioni]]: tipo di approssimazione
- [[Spazio normato]]: densità nella norma del sup
- [[Teorema di Heine-Cantor]]: la f continua su [0,1] è uniformemente continua

## Porta a
- [[Serie di Fourier]]: completezza delle basi trigonometriche in L^2
- [[Sottospazi densi di Lp]]: separabilità di Lp(a,b)

## Collegati
- [[Spazio separabile]]: C[a,b] è separabile
- [[Convoluzione]]: l'approssimazione si fa convolvendo con nuclei polinomiali
