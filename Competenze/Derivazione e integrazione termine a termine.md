---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["term-by-term differentiation", "term-by-term integration", "derivazione per serie", "integrazione per serie", "funzione somma di una serie di potenze"]
tags: [competenza, area/analisi]
---

# Derivazione e integrazione termine a termine

> Dentro l'intervallo aperto di convergenza la somma di una serie di potenze è $C^\infty$ e si deriva e integra termine a termine, con lo stesso raggio.

## Definizione / enunciato
**Teorema.** Sia $\sum a_n(x-x_0)^n$ una serie di potenze con raggio $R>0$ e $f(x)=\sum a_n(x-x_0)^n$. Allora $f$ è di classe $C^\infty$ in $(x_0-R,x_0+R)$ e lì
$$f'(x)=\sum_{n=1}^\infty n\,a_n(x-x_0)^{n-1},\qquad f''(x)=\sum_{n=2}^\infty n(n-1)a_n(x-x_0)^{n-2},\ \dots$$
$$\int_{x_0}^xf(t)\,dt=\sum_{n=0}^\infty\frac{a_n}{n+1}(x-x_0)^{n+1}.$$
Tutte le serie ottenute hanno lo stesso raggio $R$.

**Corollario.** $a_n=\dfrac{f^{(n)}(x_0)}{n!}$, come nella formula di Taylor.

## Formule chiave
Sviluppi ottenuti a lezione: dalla geometrica, integrando, $\log(1+t)=\sum_{n\ge0}\frac{(-1)^n}{n+1}t^{n+1}$ per $|t|<1$; con $x=-t^2$ e integrando, $\arctan t=\sum_{n\ge0}\frac{(-1)^nt^{2n+1}}{2n+1}$ per $|t|<1$.

## Intuizione
Una serie di potenze si comporta come un polinomio "infinito" dentro l'intervallo aperto; agli estremi non è garantito nulla.

## Come si usa
- Da $f=\sum\frac{x^n}{n!}$ (raggio $+\infty$) si ottiene $f'=f$ e $f(0)=1$, quindi $f=e^x$.
- Calcolo di derivate alte senza derivare: per $f=xe^{x^5}=\sum\frac{x^{5n+1}}{n!}$, $a_{100}=0$ e $a_{101}=\frac1{20!}$, quindi $f^{(100)}(0)=0$ e $f^{(101)}(0)=\frac{101!}{20!}$.
- Per $xe^x$ attorno a $x_0=5$: $f^{(10)}(5)=15e^5$ e $f^{(11)}(5)=16e^5$.

## Nei corsi
- **Analisi 2** (triennale): lezioni del 07/12 e 12/12/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 20 2022 serie potenze.pdf` (pp. 19-22); `triennale/ANNO 2/analisi 2/AII 21 2022 serie di potenze.pdf` (pp. 1-4, 9-11, 17-22).

## Prerequisiti
- [[Serie di potenze]]: raggio R>0 e funzione somma

## Porta a
- [[Serie di Taylor]]: coefficienti di Taylor

## Collegati
- [[Teorema fondamentale del calcolo integrale]]: integrazione termine a termine da x0 a x
