---
tipo: competenza
area: probabilita
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["diffusive limit of a random walk", "derivazione microscopica dell'equazione del calore", "derivazione dell'equazione del calore da un processo particellare", "passeggiata aleatoria con pausa", "scaling diffusivo"]
tags: [competenza, area/probabilita]
---

# Limite diffusivo della passeggiata aleatoria

> Una particella che salta a caso di $\pm\Delta x$ ogni $\Delta t$ ha, nel limite con $\Delta x^2\sim\Delta t$, una densità di posizione che risolve l'equazione del calore $\partial_tu=D\partial_x^2u$.

## Definizione / enunciato
Modello microscopico su $\mathbb R$ (L26 p. 1):
$$X_{t+\Delta t}=X_t+TM\Delta x,\qquad \Delta t,\Delta x>0,$$
con $M\in\{-1,1\}$, $P(M=-1)=P(M=1)=\frac12$, e $T\in\{0,1\}$, $T\sim\mathrm{Bernoulli}\big(2D\frac{\Delta t^\beta}{\Delta x^\alpha}\big)$, $\alpha,\beta\ge1$ ($T=0$: la particella resta ferma).

## Formule chiave
Per $\varphi\in C_c^\infty(\mathbb R)$, condizionando su $T$ e sviluppando $\varphi(X_t\pm\Delta x)$ con Taylor al secondo ordine:
$$\frac{\mathbb E[\varphi(X_{t+\Delta t})]-\mathbb E[\varphi(X_t)]}{\Delta t^\beta}=D\,\mathbb E[\varphi''(X_t)]\,\Delta x^{2-\alpha}+o(\Delta x^{2-\alpha}).$$
La scelta $\alpha=2$, $\beta=1$ e il limite $\Delta t,\Delta x\to0^+$ danno
$$\frac{d}{dt}\mathbb E[\varphi(X_t)]=D\,\mathbb E[\varphi''(X_t)].$$
Se $u(x,t)$ è la densità di $X_t$, integrando due volte per parti: $\int_{\mathbb R}\varphi\,(\partial_tu-D\partial_x^2u)\,dx=0$ per ogni $\varphi$, cioè $\partial_tu-D\partial_x^2u=0$.

## Intuizione
L'equazione del calore descrive la distribuzione di probabilità della posizione di una particella che diffonde. Il docente sceglie $\alpha=2$, $\beta=1$, cioè $\Delta x^2\propto\Delta t$. Dalla formula si vede che con $\alpha\ne2$ il fattore $\Delta x^{2-\alpha}$ tende a 0 o all'infinito (osservazione nostra).

## Come si usa
Giustifica l'interpretazione probabilistica di $u$ usata in seguito: soluzione fondamentale come densità gaussiana, condizione di Neumann omogenea come "la particella non esce da $\Omega$", conservazione di $\int u=1$ e positività.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonte `triennale/ANNO 3/eq fisica matematica/26 - Lezione 12_12_23.pdf` (pp. 1-5).

## Prerequisiti
- [[Distribuzione binomiale]]: T è una variabile di Bernoulli
- [[Formula di Taylor con resto di Lagrange]]: sviluppo al secondo ordine di φ(X_t ± Δx)
- [[Funzioni test]]: si testa la legge di X_t con φ a supporto compatto

## Porta a
- [[Equazione del calore]]: è l'equazione soddisfatta dalla densità limite

## Collegati
- [[Moto browniano]]: processo limite della passeggiata riscalata
- [[Limite gaussiano della passeggiata aleatoria]]: stessa passeggiata, approssimazione gaussiana di p(m,n)
- [[Soluzione fondamentale dell'equazione del calore]]: è la densità della particella partita dall'origine
