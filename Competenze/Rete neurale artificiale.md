---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Matematica per l'AI, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["artificial neural network", "ANN", "perceptron", "neurone artificiale", "rete neurale feed-forward", "feed-forward neural network", "multi-layer perceptron", "MLP", "percettrone multistrato", "deep learning", "propagazione in avanti", "feed-forward propagation"]
tags: [competenza, area/data-ml]
---

# Rete neurale artificiale

> Modello ispirato al cervello in cui neuroni artificiali, collegati da connessioni pesate, combinano gli input con funzioni di attivazione non lineari; si addestra con la backpropagation.

## Definizione / enunciato
I **neuroni** sono unità di elaborazione e le **sinapsi** la rete di connessione. Architetture diverse per compiti diversi: feed forward (FFNN) per vettori numerici, convolutional (CNN) per immagini, recurrent (RNN) per serie temporali, autoencoder per il denoising.

Un **neurone** fa la somma pesata degli input $x_i$ con i pesi $w_i$, sottrae un offset $\mu_k$ e applica una **funzione di attivazione** $f$, che introduce non linearità:
- sigmoide, tanh: saturano in un intervallo fisso (sigmoide in uscita dà valori in $[0,1]$, interpretabili come verosimiglianza);
- binary step: per output binari, non adatta alla discesa del gradiente;
- ReLU: reti profonde, evita il vanishing gradient;
- softmax: solo nello strato di output, trasforma l'output in una distribuzione di probabilità sulle classi.

## Formule chiave
Uscita del neurone (formula scritta da noi leggendo la figura di p. 106: ingressi $x_0..x_n$, pesi $w_0..w_n$, somma pesata, soglia $-\mu_k$, attivazione $f$):
$$y=f\Big(\sum_{i=0}^{n}w_i x_i-\mu_k\Big)$$

## Intuizione
**Addestramento di una FFNN**: pesi e offset casuali; per ogni istanza si propaga in avanti fino all'output, si confronta con l'output atteso e si **retropropaga l'errore** aggiornando pesi e offset. Ci si ferma quando l'accuratezza supera una soglia, la variazione dei parametri scende sotto una soglia o si raggiunge il numero massimo di epoche.

## Come si usa
Valutazione di una FFNN: fra le più accurate; tuning dei parametri molto complesso e lungo; classificazione molto veloce; scatola nera; non incrementale; robusta a rumore e outlier ma richiede un training set grande. Le slide presentano anche CNN (convoluzione con filtri scorrevoli, ReLU, pooling, tensori $[d,h,w]$), RNN (stato $s(t-1)$, backpropagation through time, LSTM contro il vanishing gradient), autoencoder e word embedding Word2Vec (*king - man + woman = queen*).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Artificial Neural Networks" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 102-138).
- **Matematica per l'AI** (triennale): definizione matematica della rete **feed-forward** (Kroese et al., *Data Science and Machine Learning*, cap. 9). Rete con $L+1$ strati: lo strato di input $l=0$ codifica $\mathbf x$, quello di output $l=L$ la funzione $\mathbf g(\mathbf x)$; ogni strato ha $p_l$ nodi e vettori $\mathbf z_l,\mathbf a_l$ legati da
$$\mathbf z_l=\mathbf W_l\mathbf a_{l-1}+\mathbf b_l,\qquad \mathbf a_l=\mathbf S_l(\mathbf z_l),\qquad \mathbf S_l(\mathbf z)=[S(z_1),\dots,S(z_{\dim\mathbf z})]^\top\ (l<L),$$
con $\mathbf a_0=\mathbf x$, $\mathbf g(\mathbf x)=\mathbf a_L$; $L$ è la **profondità**, $\max_lp_l$ la **larghezza**, $\dim\boldsymbol\theta=\sum_{l=1}^L(p_{l-1}p_l+p_l)$ parametri. È un modello di regressione non lineare parametrico ottenuto componendo mappe lineari e non lineari componente per componente; la profondità controlla la capacità, offrendo una gerarchia naturale per il compromesso stima-approssimazione. Esempi: regressione multi-output con uno strato nascosto (con $p_1=p_2=1$ diventa un modello lineare generalizzato), classificazione multi-logit, densità di una mistura gaussiana. Esempio numerico in Python: rete $[1,20,20,1]$ (481 parametri) sulla regressione polinomiale, addestrata con SGD (minibatch 20, $\alpha=0.005$), loss di training $\approx28.9$. Nel laboratorio `MLP.ipynb` (Della Santa) la stessa rete è scritta $\hat{\mathbf F}(\mathbf x)=\boldsymbol\sigma^{(H+1)}(W^{(H+1)}\cdots\boldsymbol\sigma^{(1)}(W^{(1)}\mathbf x+\mathbf b^{(1)})\cdots)$ e usata con `MLPClassifier` (5 strati nascosti da 256 unità ReLU) sul riconoscimento di volti dopo PCA. Fonti: `triennale/ANNO 3/matematica AI/neuralnet (3).pdf` (p. 2-21); `neurpyth (1).pdf` (p. 3-13); `MLP.ipynb`.
- **Business intelligence per big data** (magistrale): FFNN nel mazzo di classificazione (struttura del neurone, funzioni di attivazione, algoritmo base di addestramento con propagazione in avanti e backpropagation, criteri di arresto, valutazione), seguita da CNN, [[Rete neurale ricorrente|RNN]], autoencoder e [[Word embedding|word embedding]]. Nel mazzo di regressione il percettrone nasce dalla regressione lineare $y=wx+b$ aggiungendo una non linearità, $y=\sigma(wx+b)$; con uno strato nascosto si minimizza $\sum_i\big(y_i-(W^{(2)}\sigma(W^{(1)}x_i+b^{(1)})+b^{(2)})\big)^2$ (formule lette sulle pagine renderizzate 42 e 44). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 105-116, 139); `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 41-44).
- **Data science lab** (magistrale): introduzione al deep learning di Giobergia. Percettrone $y=f\big(\sum_{i=0}^n w_ix_i\big)=f(w^Tx)$ con $x_0=1$: senza $f$ è la regressione lineare, con $f=\sigma$ la regressione logistica; in 2-D con attivazione lineare rappresenta la famiglia $y=w_1x_1+w_2x_2+w_0$. Più percettroni formano uno strato lineare (fully connected; "numero di parametri" = numero totale di pesi, esempio da 6 parametri); senza non linearità due strati collassano in $y=\theta_2^T\theta_1^Tx$, ancora lineare, da cui l'MLP con strati nascosti separati da attivazioni ([[Teorema di approssimazione universale]]). Uscita: logit, poi sigmoide (binaria) o softmax (multiclasse), identità in regressione. Implementazione come `nn.Module` in [[Ciclo di addestramento in PyTorch]]; uso in [[Autoencoder]]. Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 2-14); `slide py/11-PyTorch.pdf` (p. 8-15).

## Prerequisiti
- [[Classificazione supervisionata]]: un modello di classificazione

## Porta a
- Nessuno.
- [[Backpropagation]]: calcolo del gradiente della loss (Matematica per l'AI)
- [[Discesa stocastica del gradiente]]: addestramento (Matematica per l'AI)
- [[Rete neurale convoluzionale]]: architettura con pesi condivisi (Matematica per l'AI)

## Collegati
- [[Support vector machine]]: modelli accurati ma poco interpretabili
- [[Teorema di approssimazione di Kolmogorov]]: ispirazione della struttura a composizione (Matematica per l'AI)
- [[Funzioni di attivazione]]: le non linearità $S$ degli strati nascosti (Matematica per l'AI)
- [[Errore di stima ed errore di approssimazione]]: la profondità regola il compromesso (Matematica per l'AI)
- [[Analisi delle componenti principali]]: la PCA è un autoencoder lineare (Matematica per l'AI)
