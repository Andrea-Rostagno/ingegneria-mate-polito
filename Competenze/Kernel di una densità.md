---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["kernel of a density", "kernel e costante di normalizzazione", "costante di normalizzazione", "normalizing constant", "riconoscimento del kernel", "f proporzionale a k"]
tags: [competenza, area/statistica]
---

# Kernel di una densità

> Ogni densità si scrive come kernel diviso costante di normalizzazione: il kernel contiene tutto ciò che dipende dalla variabile e basta da solo a identificare la distribuzione.

## Definizione / enunciato
Una densità (o pmf) di un vettore $\mathbf x$, dipendente da parametri $\theta$, si divide in due parti:
$$f(\mathbf x\mid\theta)=\frac{k(\mathbf x\mid\theta)}{C(\theta)},$$
dove il **kernel** $k(\mathbf x\mid\theta)$ dipende dai dati (e dai parametri) e la **costante di normalizzazione** $C(\theta)$ non dipende dai dati. Poiché $f$ integra a 1,
$$C(\theta)=\int_{\mathcal X}k(\mathbf x\mid\theta)\,d\lambda(\mathbf x),\qquad f(\mathbf x\mid\theta)\propto k(\mathbf x\mid\theta).$$
Nel bayesiano la stessa scomposizione vale per $f(x\mid y)$ con $y$ parametri o dati: il kernel è ciò che dipende dalla variabile "a sinistra" del condizionamento.

## Formule chiave
Kernel elencati nelle slide (BAY p. 25-27):
- $X\sim G(a,b)$: $k(x\mid a,b)=x^{a-1}e^{-bx}$; $X\sim IG(a,b)$: $k=x^{-a-1}e^{-b/x}$;
- $X\sim\mathrm{Beta}(a,b)$: $k=x^{a-1}(1-x)^{b-1}$, con $C(a,b)=B(a,b)$;
- $X\sim\mathrm{Bin}(n,p)$: $k=\frac{1}{x!(n-x)!}p^x(1-p)^{n-x}$;
- $X\sim N(\mu,\sigma^2)$: $k=\exp\bigl(-\frac{x^2-2x\mu}{2\sigma^2}\bigr)$;
- $\mathbf X\sim N_m(\boldsymbol\mu,\Sigma)$: $k=\exp\bigl(-\frac{\mathbf x^T\Sigma^{-1}\mathbf x-2\mathbf x^T\Sigma^{-1}\boldsymbol\mu}{2}\bigr)$.

## Intuizione
Una distribuzione è "totalmente descritta dal solo kernel": la costante si ricava integrando. Per questo si può lavorare a meno di costanti, che spesso sono proprio gli integrali intrattabili (la $f(y)$ di Bayes, la costante di un MRF).

## Come si usa
- **Accept-reject** senza costante: $f\le Mg$ equivale a $k(x\mid\theta)\le C(\theta)Mg(x)=M^*g(x)$; esempio $f(x)\propto e^{-x^2/2}(\sin^2(6x)+3\cos^2(x)\sin^2(4x)+1)$ su $[-\pi,\pi)$, con $k(x)<12g(x)$ e $g$ normale standard (MC p. 51).
- **Posteriori**: con $n=10$ lanci, $y=7$ successi e prior $\mathrm{Beta}(2,2)$ basta $f(\theta\mid y)\propto f(y\mid\theta)f(\theta)\propto\theta^{y+a-1}(1-\theta)^{n+b-y-1}$, kernel di una Beta (BAY p. 27-28).
- **Full conditional**: si raccolgono i fattori che contengono la variabile e si completa il quadrato (MCMC p. 13-14, 29).

## Nei corsi
- **Statistica computazionale** (magistrale): introdotto con l'accept-reject (MC p. 48-51) e ripreso come strumento "fondamentale" per i modelli bayesiani e l'MCMC (BAY p. 24-28). Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 48-51); `magistrale/Statistica computazionale/Modelli Bayesiani (1).pdf` (p. 24-28).

## Prerequisiti
- [[Densità congiunta]]: la densità da scomporre

## Porta a
- [[Metodo accept-reject]]: basta dominare il kernel
- [[Famiglia coniugata]]: si riconosce il kernel della posteriori
- [[Full conditional]]: si ricava raccogliendo il kernel
- [[Lemma di Brook]]: le full conditional danno la congiunta a meno della costante

## Collegati
- [[Distribuzione normale]]: kernel quadratico nell'esponente
- [[Distribuzione Gamma]]: kernel $x^{a-1}e^{-bx}$
- [[Algoritmo di Metropolis-Hastings]]: la costante si semplifica nel rapporto
