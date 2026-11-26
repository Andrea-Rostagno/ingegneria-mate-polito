---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["speed of convergence", "speed of convergence to consensus", "tempo di convergenza", "convergence time", "spectral gap", "gap spettrale", "secondo autovalore", "complessità computazionale per nodo"]
tags: [competenza, area/network]
---

# Velocità di convergenza al consenso

> La distanza dal consenso decresce come $\lambda_2^t$, dove $\lambda_2$ è il secondo autovalore di $P$: il tempo di convergenza è inversamente proporzionale al gap spettrale $1-\lambda_2$, che dipende fortemente dalla topologia.

## Definizione / enunciato
**Teorema.** $\mathcal G$ non orientato e connesso, $P=\frac12(D^{-1}W+I)$. Gli autovalori di $P$ sono reali, $1=\lambda_1>\lambda_2\ge\dots\ge\lambda_n\ge0$, e
$$\|x(t)-\mathbb 1\pi'x(0)\|_2\le\sqrt{\frac{\max\pi_i}{\min\pi_i}}\ \lambda_2^t\ \|x(0)\|_2 .$$

## Formule chiave
$$\sqrt{\frac{\max\pi_i}{\min\pi_i}}\lambda_2^t\le\epsilon\iff t\ge\tau_{\mathrm{conv}}(\epsilon):=\frac{\log(\epsilon^{-1}\max\pi_i/\min\pi_i)}{2\log\lambda_2^{-1}},\qquad \log\lambda_2^{-1}\sim1-\lambda_2\ (\lambda_2\to1).$$
Complessità di calcolo per nodo: $\gamma(\epsilon)=\tau_{\mathrm{conv}}(\epsilon)\,|\mathcal E|/|\mathcal V|$.
Confronto per famiglie di grafi con $n$ nodi (tabella delle slide):
| grafo | $1-\lambda_2$ | $\tau_{\mathrm{conv}}$ | diametro | $\gamma$ |
|---|---|---|---|---|
| linea, ciclo | $C/n^2$ | $Cn^2$ | $Cn$ | $Cn^2$ |
| griglie $d$-dim. | $Cn^{2/d}$ (così nella slide; per coerenza con $\tau_{\mathrm{conv}}$ ci si aspetterebbe $C/n^{2/d}$: da verificare sul PDF) | $n^{2/d}$ | $Cn^{1/d}$ | $Cdn^{2/d}$ |
| completo | $1/2$ | $1$ | $1$ | $Cn$ |
| expander | $C$ | $C\log n$ | $C\log n$ | $C\log n$ |
Gli expander includono grafi aleatori, Barabási, small world.

## Intuizione
La componente lungo $\mathbb 1$ è il consenso; tutte le altre si smorzano almeno come $\lambda_2^t$. Un grafo con colli di bottiglia (linea, barbell) ha $\lambda_2$ vicino a 1 e mescola lentamente.

## Come si usa
Per valutare un algoritmo di consenso si stima $1-\lambda_2$, direttamente o tramite la disuguaglianza di Cheeger, e si ricava il numero di iterazioni per una precisione $\epsilon$. Per matrici reversibili generiche il fattore $\lambda_2$ va sostituito da $\max\{\lambda_2,|\lambda_n|\}$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 5, "Speed of convergence", "Performance comparison". Fonti: `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (pp. 115-121).

## Prerequisiti
- [[Modello di French-DeGroot]]: limite di consenso
- [[Calcolo distribuito della media]]: la matrice $P=(D^{-1}W+I)/2$

## Porta a
- [[Disuguaglianza di Cheeger]]: stima di $1-\lambda_2$ con la geometria del grafo

## Collegati
- [[Bilancio dettagliato]]: reversibilità e diagonalizzabilità di $P$
- [[Grafo di Erdős-Rényi]]: esempio di expander con convergenza rapida
