---
tipo: competenza
area: ottimizzazione
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["network flow optimization", "ottimizzazione di flussi su rete", "network flow optimization problem", "complementary slackness su rete", "condizioni CS su rete", "costo duale di Fenchel", "Fenchel transform", "trasformata di Fenchel", "dissipazione di potenza"]
tags: [competenza, area/ottimizzazione]
---

# Ottimizzazione convessa di flussi su rete

> Scegliere tra i flussi ammissibili $Bf=\nu$ quello di costo minimo, con costi convessi non decrescenti sugli archi; la dualità lagrangiana con un moltiplicatore per nodo dà condizioni di complementarità arco per arco.

## Definizione / enunciato
Su un multigrafo con matrice di incidenza $B$, costi $\psi_e(f_e)$ convessi non decrescenti, capacità $c_e=\inf\{f_e\ge0:\psi_e(f_e)=+\infty\}$ (finita o no):
$$M(\nu)=\min_{f\in\mathbb R^{\mathcal E}_+,\ Bf=\nu}\ \sum_{e\in\mathcal E}\psi_e(f_e).$$
**Ammissibilità:** il problema è ammissibile se e solo se $\sum_{i\in\mathcal U}\nu_i<c_{\mathcal U}$ per ogni $\mathcal U$ con $\sum_{i\in\mathcal U}\nu_i>0$.

## Formule chiave
Lagrangiana con moltiplicatori $\lambda_i$ sui nodi:
$$\mathcal L(f,\lambda,\nu)=\sum_e\big(\psi_e(f_e)-f_e(\lambda_{\theta(e)}-\lambda_{\kappa(e)})\big)+\sum_i\lambda_i\nu_i,\qquad D(\lambda,\nu)=\sum_i\lambda_i\nu_i-\sum_e\psi^*_e(\lambda_{\theta(e)}-\lambda_{\kappa(e)}),$$
con $\psi^*_e(y)=\sup_{f\ge0}\{yf-\psi_e(f)\}$ trasformata di Fenchel (massimo profitto di un gestore che incassa $y$ per unità e paga $\psi_e$).
**Condizioni CS** su ogni arco:
$$f^*_e\ge0,\qquad \psi'_e(f^*_e)\ge\lambda_{\theta(e)}-\lambda_{\kappa(e)},\qquad f^*_e\big(\psi'_e(f^*_e)-(\lambda_{\theta(e)}-\lambda_{\kappa(e)})\big)=0 .$$
Se $\psi_e$ è strettamente convessa: $f^*_e=0$ se $\lambda_{\theta(e)}-\lambda_{\kappa(e)}\le\psi'_e(0)$, altrimenti $f^*_e=(\psi'_e)^{-1}(\lambda_{\theta(e)}-\lambda_{\kappa(e)})$.
**Teorema.** $f^*$ ammissibile e $\lambda^*$ soddisfano CS su ogni arco se e solo se $f^*$ è ottimo primale, $\lambda^*$ ottimo duale e $M(\nu)=M^*(\nu)$; inoltre, se $M$ è differenziabile, $\partial_{\nu_i}M-\partial_{\nu_j}M=\lambda^*_i-\lambda^*_j$.

## Intuizione
$\lambda_i$ è un "prezzo" o "potenziale" del nodo: il flusso passa sull'arco solo se la differenza di potenziale paga il costo marginale. Il problema si spezza arco per arco una volta fissati i prezzi.

## Come si usa
Metodo: si risolve CS come funzione di $\lambda$, $f^*(\lambda)$, poi si impone $Bf^*(\lambda)=\nu$ (oppure si massimizza il duale, concavo e senza vincoli). Esempi delle slide:
- costi lineari $\psi_e=b_ef_e$ con $\nu=\delta^{(o)}-\delta^{(d)}$: cammino minimo (trasporto ottimo se $\nu=\nu^+-\nu^-$);
- dissipazione $\psi_e=f_e^{\alpha+1}/((\alpha+1)h_e^\alpha)$: $f^*_e=h_e[\lambda_{\theta(e)}-\lambda_{\kappa(e)}]_+^{1/\alpha}$; con $\alpha=1$ (reti DC) $z_{ij}=W_{ij}(\lambda_i-\lambda_j)$ è la legge di Ohm ($\alpha=2$ reti di gas, $\alpha\simeq0.54$ reti idrauliche);
- SO-TAP $\psi_e=f_e\tau_e(f_e)$; su due archi paralleli con ritardi affini $\tau_e=a_ef_e+b_e$ la soluzione interna è $f_1=\frac{2a_2\upsilon+b_2-b_1}{2(a_1+a_2)}$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 4, "Network flow optimization", "Lagrangian techniques and duality", "Complementary slackness conditions". Fonti: `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 3-21).

## Prerequisiti
- [[Matrice di incidenza]]: vincoli di bilancio $Bf=\nu$
- [[Dualità lagrangiana]]: funzione duale e dualità forte
- [[Funzione convessa]]: costi convessi non decrescenti

## Porta a
- [[Equilibrio di Wardrop]]: è il minimo di un costo integrale
- [[Prezzo dell'anarchia]]: confronto tra ottimo di sistema ed equilibrio
- [[Rete elettrica su un grafo]]: costo quadratico, Kirchhoff e Ohm

## Collegati
- [[Problema dei cammini minimi]]: caso con costi lineari
- [[Flusso a costo minimo]]: versione lineare con capacità
- [[Condizioni di Karush-Kuhn-Tucker]]: le CS sono le KKT del problema
- [[Teorema max-flow min-cut]]: l'ammissibilità è una condizione sui tagli
