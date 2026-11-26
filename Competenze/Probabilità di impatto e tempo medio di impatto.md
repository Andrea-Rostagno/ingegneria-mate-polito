---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["hitting probability", "hitting time", "tempo di primo impatto", "probabilità di colpire un insieme", "tempo medio di assorbimento", "mean hitting time", "analisi al primo passo", "first-step analysis", "soluzione minimale non negativa", "expected hitting times", "absorbing probabilities", "tempo di ritorno", "return time"]
tags: [competenza, area/probabilita]
---

# Probabilità di impatto e tempo medio di impatto

> Probabilità che una catena di Markov partita da $i$ raggiunga prima o poi un insieme $A$, e tempo medio per farlo; si calcolano risolvendo un sistema lineare (analisi al primo passo).

## Definizione / enunciato
**Tempo di primo impatto** in $A\subseteq I$: variabile aleatoria $H^A:\Omega\to\{0,1,\dots\}\cup\{\infty\}$,
$$H^A(\omega)=\inf\{n\ge0:X_n(\omega)\in A\}\qquad(\inf\emptyset=\infty).$$
**Probabilità di impatto** $h_i^A=P_i(H^A<\infty)$ (se $A$ è chiusa è la probabilità di assorbimento). **Tempo medio di impatto** $k_i^A=E_i(H^A)=\sum_{n<\infty}nP_i(H^A=n)+\infty\cdot P(H^A=\infty)$.

**Teorema.** Il vettore $h^A=(h_i^A:i\in I)$ è la soluzione minimale non negativa di
$$h_i^A=1\ (i\in A),\qquad h_i^A=\sum_jp_{ij}h_j^A\ (i\notin A);$$
il vettore $k^A$ è la soluzione minimale non negativa di $k_i^A=0$ ($i\in A$), $k_i^A=1+\sum_jp_{ij}k_j^A$ ($i\notin A$).

## Formule chiave
Esempio a due stati $P=\begin{pmatrix}1-p&p\\0&1\end{pmatrix}$: $P_1(\text{impatto }2)=\sum_{n\ge1}(1-p)^{n-1}p=1$ e $E_1(\text{tempo di impatto})=\sum_nn(1-p)^{n-1}p=1/p$; con l'analisi al primo passo, $h=(1-p)h+p\Rightarrow h=1$ e $k=1+(1-p)k\Rightarrow k=1/p$.

## Intuizione
Condizionando sul primo passo, la catena "riparte" dallo stato raggiunto con le stesse regole: le incognite soddisfano un sistema lineare. La minimalità seleziona la soluzione giusta quando il sistema ne ha infinite (spazi infiniti o stati che non raggiungono $A$).

## Come si usa
Esempio degli appunti: catena su $\{1,2,3,4\}$ con 1 e 4 assorbenti e passi $\frac12$ fra 2 e 3: $h_i=P_i(\text{hit }4)$ dà $h_2=\frac13$, $h_3=\frac23$; i tempi medi di assorbimento in $\{1,4\}$ danno $k_2=k_3=2$. Altro esempio della prima lezione: probabilità di raggiungere 7 partendo da 1 pari a $\frac14$, ottenuta sia come serie geometrica sia da $h=\frac15+\frac15h$.

## Nei corsi
- **Matematica per l'AI** (triennale): appunti a mano di De Gregorio. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 1 (2).pdf` (p. 3-4); `De Gregorio Mia 2 (1).pdf` (p. 3-5).
- **Dinamiche su network** (magistrale): per il random walk su un grafo finito, $T_{\mathcal S}=\min\{t\ge0:X(t)\in\mathcal S\}$. Teorema: se $\mathcal S$ è globalmente raggiungibile, $\mathbb P_i(T_{\mathcal S}<+\infty)=1$ ed $\mathbb E_i[T_{\mathcal S}]<+\infty$ per ogni $i$; se è anche trapping, il walk viene assorbito in $\mathcal S$ in tempo finito. In questo caso il sistema ha soluzione **unica** (non serve la minimalità): con $\mathcal R=\mathcal V\setminus\mathcal S$ e $Q=P_{|\mathcal R\times\mathcal R}$ asintoticamente stabile ($\|Q^t\mathbb 1\|_\infty\le\beta^t$, $\beta<1$), $\tau=\mathbb 1+Q\tau$, cioè $\tau=(I-Q)^{-1}\mathbb 1$. Probabilità $H_{i,s}=\mathbb P_i(X(T_{\mathcal S})=s)$: $H_{i,s}=\sum_jP_{ij}H_{j,s}$ fuori da $\mathcal S$, $H_{s,s}=1$, $H_{i,s}=0$ su $\mathcal S\setminus\{s\}$. Interpretazioni: $H_{i,s}$ è l'opinione asintotica di $i$ con testardi $u_s=1$, $u_{s'}=0$, e (grafo non orientato) la tensione del nodo $i$. Tempi di ritorno $\mathbb E_i[T^+_i]=1+\sum_jP_{ij}\mathbb E_j[T_i]$ e formula di Kac $\pi_i=1/\mathbb E_i[T_i^+]$. In tempo continuo: $\mathbb E_i[T_{\mathcal S}]=1/\omega_i+\sum_jP_{ij}\mathbb E_j[T_{\mathcal S}]$, probabilità come nel discreto. Esempio a 8 nodi con $\mathcal S=\{v_0,v_7\}$: $\tau=(0,3.0506,3.0253,1,3.1266,3.3291,3.1646,0)$, $H_{\cdot,7}=(0,0.2278,0.1139,0,0.5696,0.4810,0.2405,1)$. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 15-38, 49).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: la dinamica su cui si calcola
- [[Tempo d'arresto]]: $H^A$ è un tempo d'arresto

## Porta a
- [[Ricorrenza e transienza]]: probabilità di ritorno e numero di visite

## Collegati
- [[Rovina del giocatore]]: probabilità di assorbimento per la passeggiata con barriere
- [[Classi di comunicazione]]: classi chiuse e stati assorbenti
- [[Agenti testardi]]: le probabilità di impatto sono opinioni asintotiche con testardi 0-1 (Dinamiche su network)
- [[Random walk su un grafo]]: tempi di impatto e di ritorno del walk (Dinamiche su network)
- [[Grafo di condensazione]]: finitezza dei tempi se il bersaglio è globalmente raggiungibile (Dinamiche su network)
