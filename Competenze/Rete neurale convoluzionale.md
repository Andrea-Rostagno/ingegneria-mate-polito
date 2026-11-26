---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Business intelligence per big data]
livello: [triennale, magistrale]
aliases: ["convolutional neural network", "CNN", "rete convoluzionale", "strato convoluzionale", "convolution layer", "parameter sharing", "condivisione dei pesi"]
tags: [competenza, area/data-ml]
---

# Rete neurale convoluzionale

> Rete in cui gli strati calcolano convoluzioni con un piccolo kernel a pesi condivisi: le matrici dei pesi sono sparse e di Toeplitz, adatte alle immagini.

## Definizione / enunciato
Se la connettività fra strati è sparsa e i pesi sono condivisi (**parameter sharing**) per tutte le coppie $(i,j)$ con $|i-j|$ fissato, le matrici dei pesi sono sparse e di **Toeplitz**, e i prodotti matrice-vettore si calcolano in fretta (per esempio con la FFT). Nella CNN gli strati codificano la convoluzione
$$\mathbf W_l\mathbf a_{l-1}=\mathbf w_l*\mathbf a_{l-1},\qquad[\mathbf x*\mathbf y]_i:=\sum_kx_ky_{i-k+1}.$$

## Formule chiave
Immagine di input $m_1\times m_2$, kernel $k\times k$ (in genere $k=3$ o 5): l'output dello strato convoluzionale ha dimensione
$$(m_1-k+1)\times(m_2-k+1).$$
Esempio della slide: input $5\times5$, kernel $2\times2$, output $4\times4$. Nel codice PyTorch (Fashion-MNIST, immagini $28\times28$, kernel $3\times3$, due strati convoluzionali da 16 e 32 canali) il primo strato denso ha dimensione $\big((28-3+1)-3+1\big)^2\times32=18432$.

## Intuizione
Lo stesso piccolo filtro scorre su tutta l'immagine: riconosce un motivo locale ovunque si trovi, con pochissimi parametri rispetto a uno strato denso. La struttura di Toeplitz è la traduzione matriciale di questa invarianza per traslazione.

## Come si usa
Architettura dell'esempio: blocco convoluzionale (2 strati), poi tre strati densi (gli altri da 100 neuroni), ReLU ovunque, 10 nodi di output per le classi (T-shirt, pantaloni, ..., stivaletto); minibatch di 100 immagini con `DataLoader`, loss cross-entropy, ottimizzatore Adam ($\alpha=0.001$, 50 epoche), accuratezza sul test 91.02%.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/neuralnet (3).pdf` (p. 22-23); `neurpyth (1).pdf` (p. 14-25).
- **Business intelligence per big data** (magistrale): estrazione automatica di feature da immagini e classificazione con softmax; strato tipico convoluzione (centinaia di filtri scorrevoli con i pesi addestrabili), attivazione ReLU, pooling (maxpool); dati come tensori di rango e forma dati (immagine $[d,h,w]$, con $N$ filtri l'uscita è $[N,h,w]$); filtri superficiali riconoscono texture e bordi, profondi oggetti e parti; CNN di segmentazione semantica encoder-decoder (SegNet). Nel mazzo sulle serie storiche: VGGish estrae embedding da spettrogrammi log-mel di segnali audio, per la classificazione. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 117-129); `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (pp. 38-40). Collegamento: [[Rete neurale ricorrente]], alternativa per la previsione di sequenze.

## Prerequisiti
- [[Rete neurale artificiale]]: la CNN è una rete feed-forward con pesi strutturati
- [[Convoluzione]]: l'operazione eseguita da ogni strato

## Porta a
- Nessuno nel corso.

## Collegati
- [[Softmax e cross-entropy]]: loss usata per la classificazione delle immagini
- [[Metodi a gradiente adattivo]]: addestramento con Adam
