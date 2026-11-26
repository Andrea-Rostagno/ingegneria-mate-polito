---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["best response dynamics", "BR dynamics", "BR-dynamics", "dinamica di miglior risposta", "grafo di best response", "BR-graph", "learning dynamics", "dinamiche di apprendimento nei giochi"]
tags: [competenza, area/network]
---

# Dinamica di best response

> A ogni passo un giocatore scelto a caso passa a una miglior risposta: è una catena di Markov sulle configurazioni. Nei giochi potenziali ogni componente pozzo del suo grafo è fatta di equilibri di Nash, quindi la dinamica entra in tempo finito negli equilibri, ma può bloccarsi lontano dal massimo del potenziale.

## Definizione / enunciato
Gioco $(\mathcal V,\{\mathcal A_i\},\{u_i\})$, $\mathcal X=\prod_i\mathcal A_i$. Da $X(0)$, a ogni tempo discreto si sceglie un giocatore $i$ uniformemente; se $X(t)=x$:
$$\mathbb P(X_i(t+1)=a\mid X(t)=x)=\begin{cases}1/|\mathcal B_i(x_{-i})|&a\in\mathcal B_i(x_{-i})\\0&\text{altrimenti,}\end{cases}\qquad X_j(t+1)=X_j(t)\ (j\neq i).$$
Grafi sullo spazio delle configurazioni: ipercubo $\mathcal G_h$, grafo di miglioramento $\mathcal G_I$, **grafo di best response** $\mathcal G_{BR}$ con $(x,y)\in\mathcal E_{BR}$ se $x_{-i}=y_{-i}$, $y_i\in\mathcal B_i(x_{-i})$. Per $x\neq y$: $P_{xy}=\frac1n\frac1{|\mathcal B_i(x_{-i})|}$ se $(x,y)\in\mathcal E_{BR}$, 0 altrimenti.

**Teorema.** In un gioco potenziale ordinale, ogni nodo di una componente pozzo di $\mathcal G_{BR}$ è un equilibrio di Nash.
**Corollario.** Per ogni $X(0)$ esiste un tempo aleatorio $T$, finito con probabilità 1, tale che $X(t)$ è un equilibrio per ogni $t\ge T$.

## Formule chiave
Prova: lungo gli archi di $\mathcal G_{BR}$ il potenziale non diminuisce. Se un pozzo $\mathcal W$ contenesse $x\notin\mathcal N$, esisterebbe $(x,y)\in\mathcal E_{BR}$ con $\Phi(y)>\Phi(x)$; da $y$ non si torna a $x$, quindi $y\notin\mathcal W$ e $\mathcal W$ non sarebbe un pozzo.

## Intuizione
È una spiegazione alternativa del perché si osservano equilibri: non per razionalità perfetta e conoscenza comune, ma come esito di lungo periodo di aggiustamenti miopi. In un contesto ingegneristico è un algoritmo distribuito.

## Come si usa
Si costruisce $\mathcal G_{BR}$ e se ne analizzano i pozzi. Fenomeni mostrati sul 4-ciclo (maggioranza) e sulla minoranza: ci possono essere equilibri fuori dai pozzi; la dinamica può entrare e uscire da $\mathcal N$; gli equilibri nei pozzi possono non essere massimi del potenziale (massimi locali in cui la dinamica resta intrappolata). Rimedio: la noisy best response.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "Learning dynamics in games", "Best Response dynamics", "Analysis of the BR dynamics", "Asymptotics of the BR dynamics for potential games". Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 49-73).

## Prerequisiti
- [[Gioco potenziale]]: il potenziale non decresce lungo la dinamica
- [[Proprietà di miglioramento finito]]: grafi sullo spazio delle configurazioni

## Porta a
- [[Noisy best response]]: versione rumorosa che raggiunge i massimi del potenziale

## Collegati
- [[Grafo di condensazione]]: la dinamica finisce in una componente pozzo
- [[Catena di Markov a tempo discreto]]: la dinamica è una catena sulle configurazioni
- [[Gioco grafico]]: i giochi su rete a cui si applica
