---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Data science lab]
livello: [triennale, magistrale]
aliases: ["softmax", "funzione softmax", "cross-entropy loss", "perdita di entropia incrociata", "classificazione multi-logit", "multi-logit classification", "regressione logistica multinomiale"]
tags: [competenza, area/data-ml]
---

# Softmax e cross-entropy

> Lo strato di output softmax trasforma i valori della rete in un vettore di probabilità sulle classi; combinato con la perdita cross-entropy dà un gradiente molto semplice: probabilità prevista meno indicatrice della classe vera.

## Definizione / enunciato
Classificazione di $\mathbf x$ in $p_L$ categorie $0,1,\dots,p_L-1$. Output della rete
$$\mathbf g(\mathbf x\mid\boldsymbol\theta)=\mathbf a_L=\mathbf S_L(\mathbf z_L),\qquad \mathbf S_L:\mathbf z_L\mapsto\frac{\exp(\mathbf z_L)}{\sum_{k=1}^{p_L}\exp(z_{L,k})}.$$
La componente $(y+1)$-esima $g_{y+1}(\mathbf x\mid\boldsymbol\theta)=g(y\mid\boldsymbol\theta,\mathbf x)$ stima la vera probabilità condizionata $f(y\mid\mathbf x)$; il classificatore è $\arg\max_{k}g_{k+1}(\mathbf x)$ (equivalente al classificatore multi-logit).

## Formule chiave
Perdita cross-entropy:
$$\mathrm{Loss}\big(f(y\mid\mathbf x),g(y\mid\boldsymbol\theta,\mathbf x)\big)=-\ln g_{y+1}(\mathbf x\mid\boldsymbol\theta)=-z_{y+1}+\ln\sum_{k=1}^{p_L}\exp(z_k),$$
da cui
$$\delta_{L,k}=\frac{\partial}{\partial z_k}\Big(-z_{y+1}+\ln\sum_k\exp(z_k)\Big)=g_k(\mathbf x\mid\boldsymbol\theta)-\mathbb I\{y=k-1\}.$$
Si può togliere un nodo dallo strato finale perché $g_1=1-\sum_{k=2}^{p_L}g_k$.

## Intuizione
La softmax è una versione "morbida" dell'argmax; la cross-entropy penalizza poca probabilità assegnata alla classe vera. L'errore che si retropropaga è semplicemente quanto la probabilità prevista si discosta dall'etichetta one-hot.

## Come si usa
È la riga 5 dell'algoritmo di backpropagation per la classificazione. Esempio con uno strato: $\mathbf z_1=\mathbf W_1\mathbf x+\mathbf b_1$, $\mathbf a_1=\mathrm{softmax}(\mathbf z_1)$ come pre-classificatore. In PyTorch la CNN su Fashion-MNIST usa `nn.CrossEntropyLoss()`.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/neurback.pdf` (p. 15-16); `neuralnet (3).pdf` (p. 19); `neurpyth (1).pdf` (p. 22).
- **Data science lab** (magistrale): il modello produce logit $z=(z_1,\dots,z_n)=model(x)$ e la softmax dà $P(c_i|x)=e^{z_i}/\sum_je^{z_j}$, con $P\in[0,1]$ e somma 1; nel caso binario un solo logit e la sigmoide. Loss: **binary cross-entropy** $\mathcal L=-y\log(\hat y)-(1-y)\log(1-\hat y)$ con $y\in\{0,1\}$ che fa da "selettore" ($y=1\Rightarrow-\log\hat y$, $y=0\Rightarrow-\log(1-\hat y)$); **cross-entropy** multiclasse $\mathcal L=-\sum_iy_i\log(\hat y_i)$ con $y_i=1$ solo per la classe vera. Esempio PyTorch: `softmax([2,4,6])` dà $e^2/(e^2+e^4+e^6)=0.0159$; `BCEWithLogitsLoss` e `CrossEntropyLoss` ricevono i logit e applicano sigmoide/softmax per stabilità numerica ([[Ciclo di addestramento in PyTorch]]). Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 11-13, 25-26); `slide py/11-PyTorch.pdf` (p. 13, 16).

## Prerequisiti
- [[Funzioni di attivazione]]: softmax come attivazione dello strato di output
- [[Probabilità condizionata]]: l'output stima $f(y\mid\mathbf x)$

## Porta a
- [[Backpropagation]]: dà $\boldsymbol\delta_L$
- [[Rete neurale convoluzionale]]: loss usata per la classificazione di immagini

## Collegati
- [[Codifica delle variabili categoriche]]: l'indicatrice $\mathbb I\{y=k-1\}$ è la codifica one-hot dell'etichetta
