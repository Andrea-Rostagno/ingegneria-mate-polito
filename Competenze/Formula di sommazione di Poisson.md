---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Poisson summation formula", "sommazione di Poisson", "trasformata del treno di impulsi", "trasformata del pettine di Dirac"]
tags: [competenza, area/analisi]
---

# Formula di sommazione di Poisson

> Per $\varphi$ rapidamente decrescente, la somma dei campioni interi di $\varphi$ è uguale alla somma dei campioni interi di $\hat\varphi$; in termini distribuzionali il treno di impulsi è trasformato in sé stesso.

## Definizione / enunciato
**Teorema 5.44.** Per ogni $\varphi\in\mathcal S(\mathbb R)$
$$\sum_{n=-\infty}^{\infty}\varphi(n)=\sum_{n=-\infty}^{\infty}\hat\varphi(n)\quad(5.55).$$
**Conseguenza (5.57):**
$$\mathcal F\Big(\sum_{n=-\infty}^{\infty}\delta_n\Big)=\sum_{n=-\infty}^{\infty}\delta_n.$$

## Formule chiave
Dimostrazione: $f(t)=\sum_n\varphi(t-n)$ è $C^\infty$ e periodica di periodo 1; i suoi coefficienti di Fourier sono
$$c_k=\int_{-1/2}^{1/2}f(s)e^{-2\pi iks}ds=\int_{-\infty}^{+\infty}\varphi(\sigma)e^{-2\pi ik\sigma}d\sigma=\hat\varphi(k)\quad(5.56),$$
quindi $\sum_n\varphi(t-n)=\sum_k\hat\varphi(k)e^{2\pi ikt}$ e la tesi segue con $t=0$.

## Intuizione
Periodizzare una funzione nel tempo equivale a campionarne la trasformata sulle frequenze intere: è il ponte fra trasformata di Fourier e serie di Fourier, e il cuore del campionamento dei segnali.

## Come si usa
Per il treno di impulsi $T=\sum\delta_n$: $\langle T,\varphi\rangle=\sum\varphi(n)=\sum\hat\varphi(n)=\sum\langle\hat\delta_n,\varphi\rangle=\big\langle\sum e^{2\pi in\nu},\varphi\big\rangle$, quindi $T=\sum_n e^{2\pi in\nu}$; trasformando e usando $\mathcal F(e^{2\pi in\nu})=\delta_n$ si ottiene (5.57). Serve anche la continuità di $\mathcal F$ in $\mathcal S'$ (Lemma 5.45).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §5.6, Teorema 5.44 e (5.57). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 5 (3).pdf` (pp. 25-26 del PDF). Il treno di impulsi compare anche in `Capitolo 4 (1).pdf` (Es. 4.33) e in `Capitolo 6 (1).pdf` (Es. 6.39, trasformata di Laplace).

## Prerequisiti
- [[Trasformata di Fourier di distribuzioni temperate]]: trasformata del treno di impulsi

## Porta a
- Nessuno.

## Collegati
- [[Delta di Dirac]]: il treno di impulsi è una somma di delta
- [[Serie di Fourier]]: coefficienti della periodizzata
