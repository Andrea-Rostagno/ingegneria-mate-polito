---
tipo: competenza
area: analisi
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Stirling's formula", "approssimazione di Stirling", "Stirling approximation", "asintotica del fattoriale", "log n!"]
tags: [competenza, area/analisi]
---

# Formula di Stirling

> Approssimazione asintotica del fattoriale, $n!\sim\sqrt{2\pi}\,n^{n+1/2}e^{-n}$; trasforma conteggi combinatori in espressioni analitiche maneggevoli.

## Definizione / enunciato
Per $n\to\infty$
$$n!\simeq\sqrt{2\pi}\,n^{n+\frac12}e^{-n},\qquad\text{equivalentemente}\qquad\log n!\simeq n\log n+\frac12\log n-n+\log\sqrt{2\pi}.$$

## Formule chiave
Applicata al coefficiente binomiale centrale della passeggiata aleatoria simmetrica in una dimensione:
$$p(0,n)=\binom n{n/2}p^{n/2}q^{n/2}\simeq\sqrt{\frac2\pi}\,\frac{2^n}{\sqrt n}\,p^{n/2}q^{n/2}=\sqrt{\frac2\pi}\,\frac1{\sqrt n}(4pq)^{n/2}\qquad(n\ \text{pari}).$$

## Intuizione
Il fattoriale cresce come $n^n e^{-n}$ con una correzione $\sqrt{2\pi n}$; nei logaritmi i termini dominanti sono $n\log n-n$, e il termine $\frac12\log n$ è proprio quello che negli appunti viene trascurato per errore e poi recuperato ("non c'è", corretto in coda).

## Come si usa
Due usi negli appunti: (1) **criterio di ricorrenza** della passeggiata in una dimensione: se $p=q=\frac12$, $\sum_np(0,n)\sim\sum_n\sqrt{2/\pi}\,/\sqrt n=\infty$ (ricorrente); se $p\neq q$, $4pq<1$ e la serie converge (transiente); (2) **limite gaussiano** di $p(m,n)$: sviluppando $\log p(x,n)$ con Stirling e $x=m/n$ piccolo si ottiene $p(m,n)\simeq\sqrt{2/(\pi n)}\,e^{-m^2/2n}$.

## Nei corsi
- **Matematica per l'AI** (triennale): appunti a mano di De Gregorio sulla passeggiata aleatoria. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 13-14); `De Gregorio Mia 3.pdf` (p. 1, 9-10, calcolo rivisto in coda).

## Prerequisiti
- [[Teorema binomiale]]: i fattoriali nei coefficienti binomiali

## Porta a
- [[Limite gaussiano della passeggiata aleatoria]]: sviluppo di $\log p(m,n)$
- [[Ricorrenza della passeggiata aleatoria]]: stima di $p(0,n)$ e criterio sulla serie

## Collegati
- [[Distribuzione binomiale]]: le probabilità della passeggiata sono binomiali
