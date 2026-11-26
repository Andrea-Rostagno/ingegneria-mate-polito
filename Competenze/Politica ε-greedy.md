---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["epsilon-greedy policy", "ε-greedy", "epsilon-greedy", "politica epsilon-greedy", "GLIE", "greedy in the limit with infinite exploration", "esplorazione e sfruttamento", "exploration-exploitation", "exploration vs exploitation"]
tags: [competenza, area/data-ml]
---

# Politica ε-greedy

> Con probabilità $1-\epsilon$ si sceglie l'azione migliore secondo la stima corrente, altrimenti un'azione a caso: il modo più semplice di bilanciare esplorazione e sfruttamento, e garantisce comunque un miglioramento della politica.

## Definizione / enunciato
Con $|\mathcal A|$ azioni:
$$\pi(a\mid s)=\begin{cases}\dfrac{\epsilon}{|\mathcal A|}+1-\epsilon&\text{se }a=\arg\max_{a\in\mathcal A}Q(s,a)\\[2mm]\dfrac{\epsilon}{|\mathcal A|}&\text{altrimenti.}\end{cases}$$
Una successione di politiche è **GLIE** (Greedy in the Limit with Infinite Exploration) se tutte le coppie stato-azione sono esplorate infinitamente spesso, $\lim_kN_k(s,a)=\infty$, e la politica converge a quella greedy, $\lim_k\pi_k(a\mid s)=\mathbf 1_{a=\arg\max_{a'}Q_k(s,a')}$; per esempio $\epsilon$-greedy con $\epsilon=1/k$.

## Formule chiave
**Teorema**: per ogni politica $\epsilon$-greedy $\pi$, la politica $\epsilon$-greedy $\pi'$ rispetto a $Q^\pi$ è un miglioramento, $V^{\pi'}(s)\ge V^\pi(s)$. Dimostrazione (con $m=|\mathcal A|$):
$$\sum_a\pi'(a\mid s)Q^\pi(s,a)=\frac\epsilon m\sum_aQ^\pi(s,a)+(1-\epsilon)\max_aQ^\pi(s,a)\ge\frac\epsilon m\sum_aQ^\pi(s,a)+(1-\epsilon)\sum_a\frac{\pi(a\mid s)-\epsilon/m}{1-\epsilon}Q^\pi(s,a)=V^\pi(s),$$
perché il massimo supera ogni combinazione convessa; poi si applica il teorema di miglioramento della politica.

## Intuizione
Esempio delle due porte: la sinistra dà 0, la destra dà +1, poi +3, poi +2... Sfruttando solo la stima corrente non si saprà mai se la porta scartata era migliore. Gli esempi della lezione (scelta del ristorante) illustrano esplorazione contro sfruttamento.

## Come si usa
È la regola di scelta delle azioni in GLIE Monte Carlo control, Sarsa e Q-learning; con approssimazione lineare della funzione $Q$ si usa lo stesso miglioramento $\epsilon$-greedy. Le politiche stocastiche del policy gradient sono un'alternativa più morbida.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Control Policy" e "Perché ε-greedy?" della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 3, 45-48).

## Prerequisiti
- [[Policy iteration]]: teorema di miglioramento della politica
- [[Processo decisionale di Markov]]: politiche stocastiche e funzione $Q$

## Porta a
- [[Sarsa]]: converge con politiche GLIE
- [[Q-learning]]: politica comportamentale che esplora

## Collegati
- [[Combinazioni coniche, affini e convesse]]: il massimo domina ogni combinazione convessa
- [[Valutazione Monte Carlo di una policy]]: GLIE Monte Carlo control
