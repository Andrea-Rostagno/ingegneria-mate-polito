---
tipo: competenza
area: analisi
corsi: [Analisi 2, Analisi funzionale]
livello: [triennale]
aliases: ["Parseval's identity for Fourier series", "identità di Parseval per le serie di Fourier", "energia media di un segnale periodico"]
tags: [competenza, area/analisi]
---

# Identità di Parseval

> La media del quadrato di $f$ su un periodo è $a_0^2+\frac12\sum(a_n^2+b_n^2)$: l'energia del segnale si divide tra le armoniche.

## Definizione / enunciato
**Teorema (identità di Parseval).** Se $f$ è continua a tratti e $T$-periodica,
$$\frac1T\int_{-T/2}^{T/2}f(x)^2\,dx=a_0^2+\frac12\sum_{n=1}^\infty(a_n^2+b_n^2).$$

## Formule chiave
Equivalentemente $\int_{-T/2}^{T/2}f^2\,dx=T\big(a_0^2+\frac12\sum(a_n^2+b_n^2)\big)$, che dà la norma $L^2$ di $f$.

## Intuizione
Il primo membro è "l'energia media sul periodo" trasportata dal segnale periodico; per l'ortogonalità l'energia del polinomio di Fourier è la somma delle energie delle singole sinusoidi.

## Come si usa
Esempio della lezione, onda triangolare $|x|$ su $[-\pi,\pi]$: il primo membro è $\frac1{2\pi}\int_{-\pi}^\pi x^2dx=\frac{\pi^2}3$, il secondo $\frac{\pi^2}4+\frac8{\pi^2}\sum_{k\ge0}\frac1{(2k+1)^4}$, quindi
$$\sum_{k=0}^\infty\frac1{(2k+1)^4}=1+\frac1{3^4}+\frac1{5^4}+\dots=\frac{\pi^4}{96}.$$
Negli esercizi si usa anche al contrario: data la serie di Fourier, si calcola $\int f^2$ sommando una serie geometrica dei quadrati dei coefficienti.

## Nei corsi
- **Analisi 2** (triennale): lezione del 19/12/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 23 2022 serie di fourier.pdf` (pp. 7, 13-14).
- **Analisi funzionale** (triennale): versione astratta in uno spazio di Hilbert: un insieme ortonormale $\{e_n\}$ è completo se e solo se $\|x\|^2=\sum_n|\langle x,e_n\rangle|^2$ per ogni $x$, se e solo se $\langle x,y\rangle=\sum_n\langle x,e_n\rangle\overline{\langle y,e_n\rangle}$ (Prop. 6.44(iv)-(v)); per un insieme non completo resta la disuguaglianza di Bessel. Per la base $\{e^{int}/\sqrt{2\pi}\}$ di $L^2(-\pi,\pi)$ con $\alpha_n=\frac1{2\pi}\int_{-\pi}^\pi f(t)e^{-int}dt$ le note scrivono $\|f\|^2_{L^2(-\pi,\pi)}=\frac1{2\pi}\sum_{n\in\mathbb Z}|\alpha_n|^2$ (6.40) (così nella fonte, verificato sulla pagina renderizzata; probabile refuso: con questa normalizzazione di $\alpha_n$, applicando la Prop. 6.44(iv) si ottiene il fattore $2\pi$ invece di $\frac1{2\pi}$, calcolo mio). L'isomorfismo $H\cong\ell^2$ del Cor. 6.48 è Parseval letto come isometria. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 81, 86-87).

## Prerequisiti
- [[Serie di Fourier]]: coefficienti a_n, b_n

## Porta a
- Nessuno.

## Collegati
- [[Serie armonica generalizzata]]: somme come Σ 1/(2k+1)^4 = π^4/96
- [[Formula di inversione di Fourier]]: identità analoga per la trasformata di Fourier
- [[Base ortonormale di uno spazio di Hilbert]]: Parseval caratterizza i sistemi ortonormali completi (Analisi funzionale)
- [[Disuguaglianza di Bessel]]: la disuguaglianza diventa uguaglianza per sistemi completi (Analisi funzionale)
