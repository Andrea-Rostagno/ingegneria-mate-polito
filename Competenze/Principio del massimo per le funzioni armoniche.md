---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["maximum principle for harmonic functions", "principio del massimo debole", "principio del massimo forte", "principio del minimo", "weak maximum principle", "strong maximum principle", "unicità per il problema di Poisson"]
tags: [competenza, area/analisi]
---

# Principio del massimo per le funzioni armoniche

> Su un aperto limitato una funzione armonica assume il massimo sul bordo (forma debole); su un aperto connesso, se ha un massimo interno è costante (forma forte).

## Definizione / enunciato
**Teorema 3.2.1 (debole).** Sia $\Omega\subset\mathbb R^n$ aperto limitato e $u\in C^2(\Omega)\cap C^0(\overline\Omega)$ armonica in $\Omega$. Allora
$$\max_{\overline\Omega}u=\max_{\partial\Omega}u.\qquad(3.10)$$
**Teorema 3.2.4 (forte).** Sia $\Omega$ aperto connesso e $u$ armonica in $\Omega$. Se $u$ ha un punto di massimo interno a $\Omega$, allora è costante.

**Corollario 3.2.5 (unicità).** Se $\Omega$ è aperto limitato, $f\in C^0(\Omega)$, $g\in C^0(\partial\Omega)$, la soluzione di $-\Delta u=f$ in $\Omega$, $u=g$ su $\partial\Omega$ (3.12) è unica.

## Formule chiave
Dimostrazione del debole (vale per $-\Delta u\le0$): se $-\Delta u<0$ in $\Omega$ (3.11) un massimo interno $x_0$ avrebbe hessiana semidefinita negativa, quindi $-\Delta u(x_0)\ge0$, assurdo. In generale si perturba con $u_\varepsilon(x)=u(x)+\varepsilon|x|^2$, $\Omega\subset B_M$:
$$-\Delta u_\varepsilon=-\Delta u-2\varepsilon n<0,\qquad\max_{\overline\Omega}u\le\max_{\overline\Omega}u_\varepsilon=\max_{\partial\Omega}u_\varepsilon\le\max_{\partial\Omega}u+\varepsilon M^2,$$
e si manda $\varepsilon\to0$. Forte: $A=\{u=u(x_0)\}$ e $B=\{u<u(x_0)\}$ sono aperti disgiunti; si contraddice la connessione.

## Intuizione
In un massimo interno stretto il laplaciano è $\le0$; una funzione con laplaciano nullo non può "incurvarsi verso il basso" dappertutto, quindi il massimo scappa sul bordo. La limitatezza è cruciale: in $\Omega=(0,+\infty)\times(-\pi/2,\pi/2)$, $u=\Re(e^{x+iy})=e^x\cos y$ è il controesempio indicato dalla fonte per il dominio illimitato (Oss. 3.2.2); in $\mathbb R^2\setminus B_1$ sia $\log|x|$ sia $0$ risolvono $-\Delta u=0$, $u=0$ su $\partial B_1$ (Oss. 3.2.6).

## Come si usa
- Unicità: la differenza di due soluzioni di (3.12) è armonica e nulla al bordo; massimo e minimo (principio applicato a $\pm w$) danno $w=0$.
- Stabilità: è lo strumento per la stima (2.12), $\|u\|_\infty\le C\|g\|_\infty$, per Laplace con dato di Dirichlet.
- Positività della funzione di Green.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.2, Teor. 3.2.1 e 3.2.4, Oss. 3.2.2 e 3.2.6, Cor. 3.2.5, Esercizio 3.2.3 (principio del minimo). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 23-25).

## Prerequisiti
- [[Funzione armonica]]: ipotesi del teorema
- [[Classificazione dei punti critici]]: hessiana semidefinita negativa in un massimo
- [[Buona positura secondo Hadamard]]: unicità e dipendenza continua sono ciò che si vuole ottenere

## Porta a
- [[Principio del massimo di Hopf]]: segno della derivata normale nel punto di massimo al bordo
- [[Problema di Dirichlet per l'equazione di Poisson]]: unicità della soluzione
- [[Funzione di Green per il laplaciano]]: non negatività della funzione di Green

## Collegati
- [[Principio del massimo per l'equazione del calore]]: analogo parabolico sul cilindro
- [[Formula integrale di Cauchy]]: principio del massimo per le funzioni olomorfe
