---
tipo: competenza
area: analisi
corsi: [Analisi 2, Analisi funzionale]
livello: [triennale]
aliases: ["Fourier series", "polinomio trigonometrico", "trigonometric polynomial", "relazioni di ortogonalità", "sviluppo di Fourier", "serie trigonometrica"]
tags: [competenza, area/analisi]
---

# Serie di Fourier

> Una funzione $T$-periodica si scrive come somma di sinusoidi di frequenze $\omega,2\omega,3\omega,\dots$; i coefficienti sono quelli del polinomio trigonometrico che la approssima meglio in media quadratica.

## Definizione / enunciato
Sia $f:\mathbb R\to\mathbb R$ $T$-periodica e continua a tratti, $\omega=\frac{2\pi}T$. Un **polinomio trigonometrico** di grado $N$ è $P_N(x)=a_0+\sum_{n=1}^N(a_n\cos n\omega x+b_n\sin n\omega x)$, ed è $T$-periodico. Tra tutti i $P_N$, quello che rende minimo lo scarto quadratico $\int_{-T/2}^{T/2}(P_N-f)^2dx$ ha coefficienti
$$a_0=\frac1T\int_{-T/2}^{T/2}f(x)\,dx,\quad a_n=\frac2T\int_{-T/2}^{T/2}f(x)\cos(n\omega x)\,dx,\quad b_n=\frac2T\int_{-T/2}^{T/2}f(x)\sin(n\omega x)\,dx.$$
Poiché non dipendono da $N$, i $P_N$ sono le somme parziali della **serie di Fourier** $a_0+\sum_{n\ge1}(a_n\cos n\omega x+b_n\sin n\omega x)$.

## Formule chiave
Relazioni di ortogonalità (prodotto scalare $L^2$: $\langle f,g\rangle=\int_{-T/2}^{T/2}fg$): gli integrali su un periodo di $\cos n\omega x$, $\sin n\omega x$ ($n\ge1$), $\cos n\omega x\sin m\omega x$, e dei prodotti con $n\ne m$, sono nulli; $\int_{-T/2}^{T/2}\cos^2(n\omega x)=\int_{-T/2}^{T/2}\sin^2(n\omega x)=\frac T2$. Quindi $\int P_N^2=Ta_0^2+\frac T2\sum(a_n^2+b_n^2)$.

## Intuizione
Lo scarto è una somma di parabole nei coefficienti: il minimo si trova ponendo $\frac{\partial g}{\partial a_n}=\frac{\partial g}{\partial b_n}=0$. Una sinusoide $A\sin(\omega x+\varphi)$ equivale a $a\cos\omega x+b\sin\omega x$ con $A=\sqrt{a^2+b^2}$. Se $f$ è pari tutti i $b_n$ sono nulli, se è dispari tutti gli $a_n$.

## Come si usa
Esempi della lezione ($T=2\pi$, $\omega=1$):
- onda triangolare $|x|$: $a_0=\frac\pi2$, $a_n=\frac2\pi\frac{(-1)^n-1}{n^2}$ (cioè $-\frac4{\pi n^2}$ per $n$ dispari), $b_n=0$;
- onda quadra $\mathrm{sgn}(x)$: $a_n=0$, $b_n=\frac4{n\pi}$ per $n$ dispari, quindi la serie è $\frac4\pi\sum_k\frac{\sin(2k+1)x}{2k+1}$.

## Nei corsi
- **Analisi 2** (triennale): lezioni del 14/12 e 19/12/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 22 serie di fourier.pdf` (pp. 1-10); `triennale/ANNO 2/analisi 2/AII 23 2022 serie di fourier.pdf` (pp. 1, 8-10, 15-18).
- **Analisi funzionale** (triennale): §6.4, la serie di Fourier come sviluppo in una base ortonormale di $L^2$. Le famiglie trigonometriche della Prop. 6.51 (coseni e seni in $L^2(0,\pi)$, base reale e $\{e^{int}/\sqrt{2\pi}\}_{n\in\mathbb Z}$ in $L^2(-\pi,\pi)$) sono basi ortonormali; la completezza si ottiene dalla densità di $C[0,\pi]$ in $L^2$ e da Stone-Weierstrass (via $\arccos$). Ne segue che ogni $f\in L^2(-\pi,\pi)$ è $f=\sum_{n\in\mathbb Z}\alpha_ne^{int}$ con convergenza **in $L^2$**, $\alpha_n=\frac1{2\pi}\int_{-\pi}^\pi f(t)e^{-int}dt$ (Oss. 6.52); per traslazioni e dilatazioni si passa a $L^2(a,b)$ e con prodotti tensori a serie multidimensionali (Prop. 6.54). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 84-88).

## Prerequisiti
- [[Funzioni pari, dispari e periodiche]]: funzioni T-periodiche
- [[Serie numerica]]: somme parziali e convergenza di una serie
- [[Integrazione per parti]]: relazioni di ortogonalità e calcolo dei coefficienti

## Porta a
- [[Teorema di convergenza delle serie di Fourier]]: convergenza della serie
- [[Identità di Parseval]]: identità di Parseval

## Collegati
- [[Proiezione ortogonale di un vettore]]: coefficienti come proiezioni nel prodotto scalare L²
- [[Trasformata di Fourier]]: motivazione per i segnali non periodici
- [[Punti critici in più variabili]]: minimo dello scarto quadratico con derivate parziali nulle
- [[Velocità di gruppo]]: un segnale si scompone in componenti armoniche
- [[Base ortonormale di uno spazio di Hilbert]]: le funzioni trigonometriche sono una base di L^2 (Analisi funzionale)
- [[Teorema di Stone-Weierstrass]]: usato per la completezza delle basi trigonometriche (Analisi funzionale)
