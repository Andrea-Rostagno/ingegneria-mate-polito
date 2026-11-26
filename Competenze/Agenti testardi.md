---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["stubborn agents", "stubborn nodes", "nodi testardi", "DeGroot con agenti testardi", "matrice substocastica", "sub-stochastic matrix", "problema di Dirichlet su grafo", "equazione di Laplace su grafo con condizioni al bordo"]
tags: [competenza, area/network]
---

# Agenti testardi

> Nodi che non cambiano mai opinione: le opinioni degli altri convergono a combinazioni convesse delle loro, con coefficienti dati da equazioni di Laplace sul grafo con condizioni al bordo (problema di Dirichlet).

## Definizione / enunciato
**Teorema generale.** Siano $\mathcal S_1,\dots,\mathcal S_s$ le componenti pozzo di $\mathcal G$, tutte aperiodiche, $\mathcal S=\cup_k\mathcal S_k$, $\mathcal R=\mathcal V\setminus\mathcal S$. Allora
(i) $x(t+1)=Px(t)$ converge: $x(t)\to H\bar x$, con $H\in\mathbb R^{n\times s}_+$, $H\mathbb 1=\mathbb 1$, $\bar x_k=\sum_{i\in\mathcal S_k}\pi^{(k)}_ix_i(0)$ ($\pi^{(k)}$ invariante supportata su $\mathcal S_k$);
(ii) $H$ è caratterizzata da
$$H_{ik}=\sum_jP_{ij}H_{jk}\ \ (i\notin\mathcal S),\qquad H_{ik}=\begin{cases}1&i\in\mathcal S_k\\0&i\in\mathcal S\setminus\mathcal S_k.\end{cases}$$
**Modello con testardi:** si dichiarano testardi i nodi $\mathcal S$ e si sostituisce $P=\begin{pmatrix}Q&E\\F&G\end{pmatrix}$ con $\tilde P=\begin{pmatrix}Q&E\\0&I\end{pmatrix}$: stessa dinamica per i regolari, $x(t+1)=Qx(t)+E\bar x$.

## Formule chiave
$$x(t)=Q^tx(0)+\sum_{s=0}^{t-1}Q^sE\bar x\ \longrightarrow\ (I-Q)^{-1}E\bar x,\qquad H=\begin{pmatrix}(I-Q)^{-1}E\\ I\end{pmatrix}.$$
$Q$ è **substocastica**; se $\mathcal S$ è globalmente raggiungibile esistono $m$ e $\alpha<1$ con $\sum_jQ^m_{ij}\le\alpha$, quindi $\|Q^t\|_\infty\le\alpha^{\lfloor t/m\rfloor}\to0$, $\rho(Q)<1$ e $(I-Q)^{-1}=\sum_tQ^t$.
In forma laplaciana: $((I-P)H)_{|\mathcal R}=0$, cioè $(LH)_{|\mathcal R}=0$.

## Intuizione
I testardi sono i "pozzi" dell'influenza: chi ascolta, direttamente o indirettamente, solo testardi diventa una loro media. L'opinione asintotica è una funzione armonica sul grafo con valori fissati sui testardi.

## Come si usa
Esempio delle slide: linea $0,1,\dots,n$ con testardi $x_0=0$, $x_n=1$. L'equazione di Laplace $2x_i-x_{i-1}-x_{i+1}=0$ dà incrementi costanti $x_i-x_{i-1}=1/n$, quindi $x_k=k/n$. Altro esempio (7 nodi, pozzi $\mathcal S_1=\{4,5,6\}$, $\mathcal S_2=\{7\}$): $H_{11}=7/10$, $H_{21}=3/5$, $H_{31}=4/5$. Interpretazioni: leader, convinzioni primitive, coordinamento di agenti mobili; legame con la centralità di Bonacich.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 5, "A general convergence result", "On the proof (substochastic matrices)", "Averaging models with stubborn agents"; ripreso in Slides 6 come problema di Dirichlet. Fonti: `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (pp. 122-153); `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 50-54).

## Prerequisiti
- [[Modello di French-DeGroot]]: la dinamica di base
- [[Grafo di condensazione]]: componenti pozzo e raggiungibilità globale

## Porta a
- [[Rete elettrica su un grafo]]: opinioni asintotiche = tensioni
- [[Centralità di influenza armonica]]: dove piazzare un testardo

## Collegati
- [[Probabilità di impatto e tempo medio di impatto]]: $H_{ik}$ è la probabilità di colpire prima $\mathcal S_k$
- [[Funzione armonica]]: analogo continuo dell'equazione di Laplace con dati al bordo
- [[Problema di Dirichlet e moto browniano]]: stessa struttura nel caso continuo
- [[Modello input-output di Leontief]]: serie di Neumann $(I-Q)^{-1}=\sum_tQ^t$
- [[Gioco di coordinazione su rete]]: anche lì compaiono giocatori testardi
