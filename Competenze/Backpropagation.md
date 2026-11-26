---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Numerical opt, Business intelligence per big data, Data science lab]
livello: [triennale, magistrale]
aliases: ["back-propagation", "retropropagazione", "retropropagazione dell'errore", "algoritmo di backpropagation", "gradiente della training loss", "BP"]
tags: [competenza, area/data-ml]
---

# Backpropagation

> Algoritmo che calcola il gradiente della loss di una rete neurale rispetto a tutti i pesi e bias con una passata in avanti e una all'indietro, propagando i vettori $\boldsymbol\delta_l=\partial C/\partial\mathbf z_l$ dall'output verso l'input.

## Definizione / enunciato
$\boldsymbol\theta=\{\mathbf W_l,\mathbf b_l\}$, training loss $\ell_\tau(\mathbf g(\cdot\mid\boldsymbol\theta))=\frac1n\sum_{i=1}^nC_i(\boldsymbol\theta)$ con $C_i(\boldsymbol\theta)=\mathrm{Loss}(\mathbf y_i,\mathbf g(\mathbf x_i\mid\boldsymbol\theta))$.

**Teorema (gradiente della training loss).** Per una coppia $(\mathbf x,\mathbf y)$ e $C(\boldsymbol\theta)$ differenziabile quasi ovunque, dati $\{\mathbf z_l,\mathbf a_l\}$ della propagazione in avanti ($\mathbf a_0=\mathbf x$, $\mathbf a_L=\mathbf g$), per $l=1,\dots,L$:
$$\frac{\partial C}{\partial\mathbf W_l}=\boldsymbol\delta_l\mathbf a_{l-1}^\top,\qquad\frac{\partial C}{\partial\mathbf b_l}=\boldsymbol\delta_l,$$
con $\boldsymbol\delta_l:=\partial C/\partial\mathbf z_l$ calcolato all'indietro per $l=L,\dots,2$:
$$\boldsymbol\delta_{l-1}=\mathbf D_{l-1}\mathbf W_l^\top\boldsymbol\delta_l=\mathbf S'(\mathbf z_{l-1})\odot\mathbf W_l^\top\boldsymbol\delta_l,\qquad \boldsymbol\delta_L=\frac{\partial\mathbf S_L}{\partial\mathbf z_L}\frac{\partial C}{\partial\mathbf g}.$$

## Formule chiave
**Algoritmo 1:** (feed-forward) $\mathbf a_0\leftarrow\mathbf x$; per $l=1..L$: $\mathbf z_l\leftarrow\mathbf W_l\mathbf a_{l-1}+\mathbf b_l$, $\mathbf a_l\leftarrow\mathbf S_l(\mathbf z_l)$; (BP) calcola $\boldsymbol\delta_L$; per $l=L..1$: $\partial C/\partial\mathbf b_l\leftarrow\boldsymbol\delta_l$, $\partial C/\partial\mathbf W_l\leftarrow\boldsymbol\delta_l\mathbf a_{l-1}^\top$, $\boldsymbol\delta_{l-1}\leftarrow\mathbf S'(\mathbf z_{l-1})\odot\mathbf W_l^\top\boldsymbol\delta_l$.
**Algoritmo 2:** il gradiente della training loss è la media su $i=1..n$ dei gradienti dei singoli $C_i$.
Regressione multi-output con perdita quadratica $\|\mathbf y-\mathbf g\|^2$: $\boldsymbol\delta_L=\mathbf S_L'(\mathbf z_L)\odot2(\mathbf g(\mathbf x\mid\boldsymbol\theta)-\mathbf y)$.

## Intuizione
È la regola della catena organizzata in modo da riusare i calcoli: ogni $\boldsymbol\delta_l$ serve per quello dello strato precedente. Quasi tutto è prodotto matrice-vettore, e il prodotto per una matrice diagonale diventa un prodotto componente per componente ($\mathrm{diag}(\mathbf a)\mathbf b=\mathbf a\odot\mathbf b$), quindi l'algoritmo è efficiente e adatto alle GPU.

## Come si usa
Fornisce il gradiente $\mathbf u_t$ per steepest descent, SGD, L-BFGS e Adam. Nel codice `backward(W,b,X,y)` di `neurpyth` implementa esattamente le due passate per la rete $[1,20,20,1]$. Dimostrazione nelle slide tramite la derivata vettore/vettore di una mappa lineare.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/neurback.pdf` (p. 3-17); `neurpyth (1).pdf` (p. 7-8).
- **Numerical opt** (magistrale): presentata come la modalità reverse della [[Differenziazione automatica]]. Linnainmaa la sviluppò negli anni '70; i ricercatori di reti neurali la ritrovarono in modo indipendente alla fine degli anni '80. Con un solo seme $\bar z=1$ dà l'intero gradiente di una funzione scalare. Fonti: `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§12, §12.3).
- **Business intelligence per big data** (magistrale): solo come passo dell'algoritmo base della FFNN (pesi e offset casuali, istanze una alla volta, propagazione in avanti, confronto con l'uscita attesa, backpropagation dell'errore aggiornando pesi e offset; arresto per accuratezza, variazione dei parametri o numero massimo di epoche) e, per le RNN, come *backpropagation through time*. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 114-115, 136). Collegamento: [[Rete neurale ricorrente]].
- **Data science lab** (magistrale): "solo un nome elegante per l'uso della regola della catena" $\frac{dz}{dx}=\frac{dz}{dy}\frac{dy}{dx}$, applicata dalla fine del grafo computazionale all'indietro. Esempio svolto: un punto $(x,y)$, modello $\theta_1\theta_2x$, $\mathcal L=(\theta_1\theta_2x-y)^2$, variabili intermedie $a=\theta_1\theta_2$, $b=ax$, $c=b-y$, $\mathcal L=c^2$; passo forward per calcolare $\mathcal L$, passo backward $\partial\mathcal L/\partial c=2c$, $\partial\mathcal L/\partial b=2c$, $\partial\mathcal L/\partial a=2cx$, fino a $\partial\mathcal L/\partial\theta_1=2(\theta_1\theta_2x-y)x\theta_2$ e $\partial\mathcal L/\partial\theta_2=2(\theta_1\theta_2x-y)x\theta_1$; lo stesso esempio è verificato in PyTorch (`theta1.grad` $=80$, `theta2.grad` $=60$ con $x=1,y=2,\theta_1=3,\theta_2=4$). Vedi [[Differenziazione automatica]]. Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 20-24); `slide py/11-PyTorch.pdf` (p. 5-7).

## Prerequisiti
- [[Rete neurale artificiale]]: la struttura feed-forward su cui si deriva
- [[Regola della catena in più variabili]]: la ricorsione è la regola della catena
- [[Matrice jacobiana]]: derivate vettore/vettore degli strati
- [[Funzioni di attivazione]]: le derivate $S'$ nella ricorsione

## Porta a
- [[Discesa stocastica del gradiente]]: usa il gradiente calcolato
- [[Metodo L-BFGS]]: metodo quasi-Newton che usa i gradienti

## Collegati
- [[Softmax e cross-entropy]]: forma esplicita di $\boldsymbol\delta_L$ in classificazione
