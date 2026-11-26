---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["noisy best response dynamics", "NBR", "log-linear learning", "apprendimento log-lineare", "dinamica logit", "logit dynamics", "misura di Gibbs di un gioco potenziale", "Gibbs measure", "best response rumorosa"]
tags: [competenza, area/network]
---

# Noisy best response

> Variante rumorosa della best response: il giocatore attivo sceglie ogni azione con probabilità proporzionale a $e^{\beta u_i}$. Nei giochi potenziali esatti la catena è reversibile con stazionaria di Gibbs $\propto e^{\beta\Phi}$, che per $\beta\to\infty$ si concentra sui massimi del potenziale.

## Definizione / enunciato
A ogni passo si sceglie un giocatore $i$ uniformemente; se $X(t)=x$,
$$\mathbb P(X_i(t+1)=a\mid X(t)=x)=\frac{e^{\beta u_i(a,x_{-i})}}{Z_i(x)},\qquad Z_i(x)=\sum_{a'\in\mathcal A_i}e^{\beta u_i(a',x_{-i})},$$
e gli altri restano fermi. Il grafo di transizione è l'ipercubo (con cappi); per $x\neq y$ con $x_{-i}=y_{-i}$: $P_{xy}=\frac1n\frac{e^{\beta u_i(y_i,x_{-i})}}{Z_i(x)}$. $\beta=0$: random walk puro sull'ipercubo; $\beta\to+\infty$: best response.

**Teorema.** In un gioco potenziale esatto con potenziale $\Phi$, la NBR è una catena di Markov ergodica e reversibile con unica distribuzione stazionaria (misura di Gibbs)
$$\pi_x=\frac{e^{\beta\Phi(x)}}{\sum_{y\in\mathcal X}e^{\beta\Phi(y)}},\qquad \lim_{\beta\to+\infty}\pi=\text{uniforme su }\arg\max\Phi .$$

## Formule chiave
Prova: l'ipercubo è fortemente connesso, quindi la catena è ergodica. Per $x_{-i}=y_{-i}$ si ha $Z_i(x)=Z_i(y)$ e la differenza di utilità è la differenza di potenziale, da cui il bilancio dettagliato
$$e^{\beta\Phi(x)}P_{xy}=e^{\beta\Phi(y)}P_{yx}.$$
*(Nella slide il rapporto $P_{xy}/P_{yx}$ è scritto $e^{\beta[\Phi(x)-\Phi(y)]}$; il bilancio e la misura di Gibbs richiedono $e^{\beta[\Phi(y)-\Phi(x)]}$: refuso, da verificare sul PDF.)*
$$\lim_{\beta\to+\infty}\lim_{t\to+\infty}\mathbb P(X(t)=x)=\begin{cases}1/|\arg\max\Phi|&x\in\arg\max\Phi\\0&\text{altrimenti.}\end{cases}$$

## Intuizione
Il rumore permette ogni tanto mosse peggiorative, quindi la dinamica può uscire dai massimi locali in cui la best response si blocca. Con $\beta$ grande le mosse cattive sono rare ma possibili: è una ricottura simulata giocata dagli agenti.

## Come si usa
Algoritmo per massimizzare un potenziale: con $\beta$ grande, dopo un transitorio $X(t)$ sta con alta probabilità su un massimo e campiona approssimativamente in modo uniforme $\arg\max\Phi$. Applicazione delle slide: decidere se un grafo è $k$-colorabile e trovarne una colorazione.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "Noisy Best Response dynamics (log-linear learning)", "Behavior of the NBR dynamics", "Using the NBR dynamics", "NBR for coloring graphs"; ripresa come dinamica logit in Slides 11. Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 74-81); `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (p. 57).

## Prerequisiti
- [[Dinamica di best response]]: caso limite $\beta\to\infty$
- [[Bilancio dettagliato]]: reversibilità rispetto alla misura di Gibbs
- [[Gioco potenziale]]: il potenziale definisce la stazionaria

## Porta a
- [[Dinamica logit di campo medio]]: limite per popolazioni grandi

## Collegati
- [[Algoritmo di Metropolis-Hastings]]: altra catena reversibile costruita per campionare una distribuzione data
- [[Gioco di colorazione]]: applicazione alla colorazione dei grafi
- [[Softmax e cross-entropy]]: la scelta logit è una softmax delle utilità
- [[Teorema di Hammersley-Clifford]]: altra comparsa delle distribuzioni di Gibbs
