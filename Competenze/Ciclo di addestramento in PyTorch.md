---
tipo: competenza
area: informatica
corsi: [Data science lab]
livello: [magistrale]
aliases: [PyTorch, training loop, ciclo di training, tensori PyTorch, torch.Tensor, nn.Module, nn.Linear, strato lineare, fully connected layer, optimizer.step, zero_grad, loss.backward, DataLoader, Dataset, MSELoss, BCEWithLogitsLoss, CrossEntropyLoss, torch.optim]
tags: [competenza, area/informatica]
---

# Ciclo di addestramento in PyTorch

> Schema con cui si addestra una rete in PyTorch: modello come `nn.Module`, funzione di perdita, ottimizzatore, e ripetizione del passo di discesa del gradiente in cinque sotto-passi su batch ed epoche.

## Definizione / enunciato
- **Tensori**: struttura dati di base, simili agli array NumPy (stessa interfaccia per funzioni, broadcasting, indicizzazione; `torch.from_numpy`, `torch.tensor`, `.numpy()`), ma con differenziazione automatica (autograd), supporto GPU e operazioni specifiche per il deep learning. Con `requires_grad=True` si costruisce il grafo computazionale; `.backward()` propaga i gradienti, che finiscono in `.grad` e **si accumulano** fra più backward.
- **Strato lineare** `nn.Linear(in_features=3, out_features=2)`: matrice dei pesi e bias (default `bias=True`), con gradiente richiesto di default; equivale a `input @ weight.t() + bias`.
- **Modulo**: un modello estende `nn.Module`; in `__init__()` (che chiama per prima cosa `super().__init__()`) si dichiarano i componenti, in `forward()` si descrive il flusso dei dati.
- **Loss**: `nn.MSELoss()` (regressione), `nn.BCEWithLogitsLoss()` (binaria), `nn.CrossEntropyLoss()` (multiclasse); le ultime due vogliono **logit** e applicano internamente sigmoide/softmax, per stabilità numerica.
- **Ottimizzatore**: `optim.Adam(model.parameters(), lr=0.001)`; `.step()` fa un passo $\theta_{t+1}=\theta_t-\alpha\nabla_\theta\mathcal L(\theta_t)$.

## Formule chiave
Un passo di GD in 5 sotto-passi (`11-PyTorch.pdf` p. 18):
```python
optimizer.zero_grad()          # 1. azzera i gradienti
output = model(x)              # 2. forward
loss = loss_fn(output, y)      # 3. loss
loss.backward()                # 4. backward
optimizer.step()               # 5. aggiorna i parametri
```
Esempio di autograd (p. 6): $x=3$, $y=x^2$, `x.grad` $=6$. Modello $\hat y=x\theta_1\theta_2$ con $x=1$, $y=2$, $\theta_1=3$, $\theta_2=4$, $\mathcal L=(\hat y-y)^2$: `theta1.grad` $=80$, `theta2.grad` $=60$ (p. 7), coerenti con $\partial\mathcal L/\partial\theta_1=2(\theta_1\theta_2x-y)x\theta_2$.

## Intuizione
Un solo passo raramente basta: il ciclo ripete i 5 sotto-passi. Un passaggio completo sul training set è un'**epoca**; il gradiente "ideale" su tutto il dataset è costoso, quindi lo si approssima su un **batch** (SGD), con `Dataset` e `DataLoader` di `torch.utils.data` (p. 19).

## Come si usa
Esercizio end-to-end delle slide (p. 20): Iris, rete con input 4, strato nascosto $4\to2$, ReLU, uscita $2\to3$ (logit), softmax, CrossEntropyLoss, qualche passo di GD, valutazione e grafico dello spazio latente dopo il primo strato. Esempio di modulo a due strati (p. 15): `Linear(3,4)`, ReLU, `Linear(4,2)`.

## Nei corsi
- **Data science lab** (magistrale): slide PyTorch (tensori e autograd, strati lineari, attivazioni, moduli, loss, ottimizzatori, training loop). Fonti: `magistrale/Data science lab/slide py/11-PyTorch.pdf` (p. 2-20); ciclo completo anche in `slide testo/anomaly-detection.ipynb` (autoencoder).

## Prerequisiti
- [[Differenziazione automatica]]: autograd costruisce il grafo e calcola i gradienti in modalità reverse
- [[Discesa stocastica del gradiente]]: aggiornamento su batch ed epoche

## Collegati
- [[Rete neurale artificiale]]: il modello definito come `nn.Module`
- [[Softmax e cross-entropy]]: `CrossEntropyLoss` riceve i logit
- [[Metodi a gradiente adattivo]]: Adam come ottimizzatore di default
- [[Broadcasting]]: i tensori seguono le regole di NumPy
