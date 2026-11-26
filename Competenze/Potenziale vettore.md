---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["vector potential", "B = rot A", "scelta di gauge", "div A = 0", "∇²A = -μ0 j", "potenziale ritardato", "retarded potential"]
tags: [competenza, area/fisica]
---

# Potenziale vettore

> Campo vettoriale $\vec A$ il cui rotore è il campo magnetico: esiste perché $\vec B$ ha divergenza nulla e soddisfa un'equazione di Poisson con sorgente $\mu_0\vec j$.

## Definizione / enunciato
La divergenza del rotore di una funzione vettoriale regolare è sempre nulla, quindi da $\vec\nabla\cdot\vec B=0$ il vettore $\vec B$ è scrivibile come $\vec B=\vec\nabla\times\vec A$. $\vec A$ **non è unico**: aggiungendo il gradiente di una funzione scalare $\Phi$ il campo non cambia, perché $\vec\nabla\times\vec\nabla\Phi=0$. Si sceglie $\Phi$ in modo che $\vec\nabla\cdot\vec A=0$.
Dalla legge di Ampère-Laplace, con $-\vec\nabla(1/|\vec r-\vec r'|)=(\vec r-\vec r')/|\vec r-\vec r'|^3$ e l'identità per $\vec\nabla\times(f\vec u)$, si ottiene direttamente $\vec A$ come integrale sulle correnti. Con $\vec\nabla\times(\vec\nabla\times\vec A)=-\Delta\vec A+\vec\nabla(\vec\nabla\cdot\vec A)$ e la scelta $\vec\nabla\cdot\vec A=0$, la legge $\vec\nabla\times\vec B=\mu_0\vec j$ diventa un'equazione di Poisson vettoriale.
**Caso dinamico (lezione opzionale):** i campi si propagano a velocità finita $c$, quindi in $\vec r$ al tempo $t$ i potenziali sono dovuti alla configurazione di carica all'istante precedente $t-|\vec r-\vec r'|/c$: potenziale ritardato.

## Formule chiave
$$\vec B=\vec\nabla\times\vec A,\qquad \vec B'=\vec\nabla\times(\vec A+\vec\nabla\Phi)=\vec B,\qquad \vec\nabla\cdot\vec A=0$$
$$\vec A(\vec r)=\frac{\mu_0}{4\pi}\int_{\tau'(circuito)}\frac{\vec j(\vec r')}{|\vec r-\vec r'|}d\tau',\qquad \Delta\vec A(\vec r)=-\mu_0\vec j(\vec r)$$
$$\vec A(\vec r,t)=\mu_0\int_{V'}\frac{\vec j\left(t-\frac{|\vec r-\vec r'|}{c}\right)d\tau}{4\pi|\vec r-\vec r'|}$$

## Intuizione
$\Delta\vec A=-\mu_0\vec j$ è formalmente identica all'equazione di Poisson $\Delta V=-\rho/\varepsilon_0$: ogni componente di $\vec A$ si comporta come un potenziale elettrostatico con "carica" $\vec j$ al posto di $\rho$ e $\mu_0$ al posto di $1/\varepsilon_0$. La soluzione è quindi già nota.

## Come si usa
Si calcola $\vec A$ integrando le correnti (più semplice di Ampère-Laplace: niente prodotto vettoriale) e poi $\vec B=\vec\nabla\times\vec A$. Esempio delle slide: la spira quadrata a grande distanza, che dà il campo del dipolo magnetico.

## Nei corsi
- **Fisica 2** (triennale): lezione 19&20 (il calcolo completo è rinviato dalla slide a Mencuccini-Silvestrini, pp. 243-246); potenziale ritardato nella lezione 33b, opzionale. Fonti: `triennale/ANNO 2/fisica 2/lezioni/19&20.  LEZIONE.pdf` (pp. 7-14, 20, 25-26); `triennale/ANNO 2/fisica 2/lezioni/33b_OPZIONALE. LEZIONE.pdf` (pp. 7-8).

## Prerequisiti
- [[Legge di Gauss per il campo magnetico]]: div B = 0 permette di scrivere B = rot A
- [[Equazione di Poisson]]: ∇²A = -μ0 j ha la stessa forma, quindi la stessa soluzione

## Porta a
- [[Dipolo magnetico]]: si calcola A della spira a grande distanza
- [[Dipolo oscillante]]: potenziale ritardato della corrente del dipolo

## Collegati
- Nessuno.
