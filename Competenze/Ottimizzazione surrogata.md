---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["surrogate optimization", "metamodello", "metamodel", "funzione surrogata", "response surface method", "RSM", "radial basis function", "RBF", "kriging", "Gaussian process regression", "black-box optimization", "ottimizzazione bayesiana"]
tags: [competenza, area/ottimizzazione]
---

# Ottimizzazione surrogata

> Quando valutare $f$ è costoso o rumoroso si costruisce un metamodello $\hat f$ economico da valutare, adattato a un campione di punti, e si ottimizza quello.

## Definizione / enunciato
Dato un campione $\{\mathbf x^{(1)},\dots,\mathbf x^{(n)}\}$ con valori $y^{(i)}$ (calcolati o stimati), si cerca $\hat f\approx f$:
- senza rumore, con la condizione di **interpolazione** $\hat f(\mathbf x^{(i)})=y^{(i)}$;
- con rumore, $y^{(i)}=f(\mathbf x^{(i)})+\epsilon^{(i)}$ ($\epsilon^{(i)}$ non osservabile), minimizzando per esempio
$$\sum_{i\in[n]}\big(\hat f(\mathbf x^{(i)})-y^{(i)}\big)^2 .$$

## Formule chiave
Architetture possibili: superfici di risposta (RSM) lineari o quadratiche; funzioni di base radiali (RBF); **kriging** (dall'ingegnere minerario Danie Krige, per la geostatistica), oggi Gaussian Process Regression (GPR), base dell'ottimizzazione bayesiana.

## Intuizione
I metodi a popolazione (genetici, PSO) sprecano valutazioni e non sfruttano il fatto che, se $f$ è continua, il valore in un punto informa sui valori vicini: il metamodello "trasferisce" questa informazione.

## Come si usa
Si usa per funzioni obiettivo non note in forma chiusa (per esempio valutate con una simulazione Monte Carlo). A differenza della regressione lineare classica il fitting può non essere facile, perché l'approssimazione può essere non lineare nei parametri o non parametrica.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 35-36); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 37).

## Prerequisiti
- [[Regressione lineare]]: fitting ai minimi quadrati del metamodello
- [[Interpolazione polinomiale]]: condizione di interpolazione senza rumore

## Collegati
- [[Algoritmi genetici]]: limiti dei metodi a popolazione che motivano i surrogati
- [[Metodo Monte Carlo]]: valutazioni rumorose dell'obiettivo
