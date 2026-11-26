---
tipo: competenza
area: ottimizzazione
corsi: [Matematica per l'AI, Data science lab]
livello: [triennale, magistrale]
aliases: ["stochastic gradient descent", "SGD", "discesa del gradiente stocastica", "minibatch", "mini-batch", "metodi mini-batch", "epoca di addestramento", "epoch", "learning rate", "tasso di apprendimento", "early stopping", "criteri di arresto dell'addestramento"]
tags: [competenza, area/ottimizzazione]
---

# Discesa stocastica del gradiente

> Variante dello steepest descent in cui il gradiente della training loss è stimato su un piccolo sottoinsieme casuale (minibatch) degli esempi: ogni passo costa poco e il rumore aiuta l'addestramento delle reti neurali.

## Definizione / enunciato
Quando il training set è molto grande, calcolare $\partial\ell_{\tau_n}/\partial\boldsymbol\theta$ con la backpropagation su tutti gli esempi è troppo costoso. Si vede la training loss come una speranza:
$$\ell_\tau(\mathbf g(\cdot\mid\boldsymbol\theta))=\frac1n\sum_{k=1}^n\mathrm{Loss}(\mathbf y_k,\mathbf g(\mathbf x_k\mid\boldsymbol\theta))=\mathbb E\,\mathrm{Loss}(\mathbf y_K,\mathbf g(\mathbf x_K\mid\boldsymbol\theta)),\qquad\mathbb P[K=k]=1/n,$$
e la si approssima con lo stimatore Monte Carlo
$$\hat\ell_\tau(\mathbf g(\cdot\mid\boldsymbol\theta))=\frac1N\sum_{i=1}^N\mathrm{Loss}(\mathbf y_{K_i},\mathbf g(\mathbf x_{K_i}\mid\boldsymbol\theta)),\qquad N\ll n,$$
dove il campione i.i.d. $K_1,\dots,K_N$ è il **minibatch**. Il passo è $\boldsymbol\theta_{t+1}=\boldsymbol\theta_t-\alpha_t\nabla\hat\ell_\tau(\boldsymbol\theta_t)$.

## Formule chiave
Tre approcci nel laboratorio `MLP.ipynb`, con $\mathbf w\leftarrow\mathbf w-\alpha\nabla\mathrm{Loss}(\mathbf w)$:
1. **nessuna stocasticità**: loss su tutto $\mathcal T$ a ogni passo;
2. **stocasticità pura**: si mescola $\mathcal T$ e si aggiorna con una coppia $(\mathbf x,\mathbf y)$ alla volta;
3. **mini-batch**: a ogni epoca si genera a caso una $K$-partizione $\mathcal B_1,\dots,\mathcal B_K$ di $\mathcal T$ e si aggiorna con $\mathrm{Loss}_{\mathcal B_k}$; gli altri due sono casi particolari.
Un'**epoca** è una ripetizione completa del ciclo di aggiornamenti; $\alpha$ è il **learning rate**. Loss tipiche: MSE, MAE, SSE, SAE (quadratiche preferite per il gradiente).

## Intuizione
Il gradiente su un minibatch è una stima non distorta di quello vero, molto più economica; il rumore rende la discesa meno "liscia" ma spesso basta e permette molte più iterazioni a parità di tempo.

## Come si usa
Esempio delle slide: rete $[1,20,20,1]$ sulla regressione polinomiale, $10^4$ iterazioni, minibatch 20, $\alpha_t=0.005$: rapido progresso iniziale, poi regime stazionario dopo circa 400 iterazioni, loss finale $\approx28.9$. **Criteri di arresto** (laboratorio): numero massimo di epoche $e_{\max}$, oppure **pazienza** di $p$ epoche in cui la loss sul validation set può crescere invece di diminuire, per evitare l'**overfitting**.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/neurtrain.pdf` (p. 5, 20); `neurpyth (1).pdf` (p. 10-13); esempi `MLP.ipynb`.
- **Data science lab** (magistrale): un solo passo di GD raramente converge, servono più passi; un passaggio completo sul training set è un'epoca; il gradiente "ideale" sull'intero dataset è costoso e si approssima su un sottoinsieme (batch), stima più rumorosa ma molto più rapida: è la SGD, gestita in PyTorch con `Dataset` e `DataLoader` ([[Ciclo di addestramento in PyTorch]]). Fonti: `magistrale/Data science lab/slide py/11-PyTorch.pdf` (p. 19).

## Prerequisiti
- [[Metodo del gradiente]]: SGD è steepest descent con gradiente stimato
- [[Backpropagation]]: calcola il gradiente su ogni minibatch
- [[Metodo Monte Carlo]]: la loss sul minibatch è uno stimatore Monte Carlo

## Porta a
- [[Metodi a gradiente adattivo]]: AdaGrad, Adam e momentum migliorano la direzione

## Collegati
- [[Metodo L-BFGS]]: alternativa quasi-Newton per l'addestramento
- [[Overfitting e pruning]]: l'arresto anticipato sul validation set lo previene
- [[Metodi di stima dell'accuratezza]]: training, validation e test set
