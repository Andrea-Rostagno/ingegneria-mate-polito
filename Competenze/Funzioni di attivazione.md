---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Business intelligence per big data, Data science lab]
livello: [triennale, magistrale]
aliases: ["activation functions", "funzione di attivazione", "ReLU", "rectified linear unit", "funzione logistica", "sigmoide", "logistic activation", "Heaviside", "gradino unitario", "saturazione", "saturation"]
tags: [competenza, area/data-ml]
---

# Funzioni di attivazione

> Funzioni non lineari scalari applicate componente per componente negli strati nascosti di una rete neurale; la loro forma decide capacità rappresentativa e facilità di addestramento.

## Definizione / enunciato
Negli strati nascosti $l=1,\dots,L-1$: $\mathbf a_l=\mathbf S_l(\mathbf z_l)$ con $\mathbf S_l(\mathbf z)=[S(z_1),\dots,S(z_{\dim\mathbf z})]^\top$, dove $S:\mathbb R\to\mathbb R$ è la stessa per tutti gli strati nascosti. La funzione dello strato di output è più generale e dipende dal compito (identità in regressione, softmax in classificazione).

## Formule chiave
Esempi delle slide:
$$\text{gradino (Heaviside)}\ \mathbb I\{z>0\},\qquad \text{ReLU}\ z\,\mathbb I\{z>0\},\qquad \text{logistica}\ S(z)=(1+\exp(-z))^{-1}.$$
Nel gradiente compare $\mathbf D_l=\mathrm{diag}(S'(z_{l,1}),\dots,S'(z_{l,p_l}))$.

## Intuizione
Si vogliono le attivazioni più semplici che diano grande capacità rappresentativa e basso costo di addestramento. **Saturazione:** la derivata della logistica decade esponenzialmente a zero lontano dall'origine, quindi per $z$ grande non porta informazione; la derivata della ReLU vale 1 per ogni $z>0$ e guida bene l'ottimizzazione. Per questo la ReLU, pur con il punto angoloso, è preferita per l'addestramento con backpropagation.

## Come si usa
Perché il gradiente esista ovunque servirebbero attivazioni differenziabili (la logistica lo è, la ReLU no in $z=0$). In pratica l'angolo della ReLU non crea problemi: per gli errori di arrotondamento è quasi impossibile valutarla esattamente in 0, ed è per questo che nel teorema della backpropagation basta una loss differenziabile **quasi ovunque**. Nei laboratori si usa ReLU (`MLPClassifier`, CNN in PyTorch).

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/neuralnet (3).pdf` (p. 9-13); `neurback.pdf` (p. 5, 12-13).
- **Business intelligence per big data** (magistrale): ruolo dell'attivazione (simula la risposta biologica, introduce non linearità, satura le uscite); sigmoide e tanh saturano in un intervallo fisso (sigmoide in uscita per leggere l'output come probabilità); binary step non adatta alla discesa del gradiente (derivata non definita in 0 e nulla altrove); ReLU usata nelle reti profonde, non satura ed evita il vanishing gradient; softmax solo nello strato di uscita, dà una distribuzione di probabilità sulle classi. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 110-113).
- **Data science lab** (magistrale): due ruoli: (1) imporre proprietà all'uscita (la sigmoide $\sigma(x)=1/(1+e^{-x})$ porta l'uscita in $[0,1]$ e dà $p(+|x)$, con $p(-|x)=1-p(+|x)$); (2) introdurre non linearità, senza le quali gli strati collassano in uno lineare; più convergenza veloce, sparsità, ecc. Funzioni elencate: ReLU, sigmoide, Leaky ReLU, tanh, softmax, lineare, GeLU; l'identità ha senso solo in uscita per la regressione. In PyTorch `torch.relu` ($\max(0,x)$: `[-1,0,1,2]` $\to$ `[0,0,1,2]`) e `torch.sigmoid` ($\sigma(0)=0.5$, $\sigma(3)=0.9526$). Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 5-9, 14); `slide py/11-PyTorch.pdf` (p. 10-12).

## Prerequisiti
- [[Teorema di approssimazione di Kolmogorov]]: le attivazioni sostituiscono le funzioni univariate ignote

## Porta a
- [[Backpropagation]]: le derivate $S'$ entrano nella ricorsione
- [[Softmax e cross-entropy]]: attivazione dello strato di output in classificazione

## Collegati
- [[Rete neurale artificiale]]: la non linearità di ogni strato
- [[Kernel definito positivo]]: il kernel sigmoidale lega SVM e reti neurali
