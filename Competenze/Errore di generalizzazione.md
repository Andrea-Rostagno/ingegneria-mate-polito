---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["generalization error", "errore vero", "true error", "rischio atteso", "errore empirico", "empirical error", "rischio empirico", "empirical risk", "funzione di perdita", "loss function", "insieme di ipotesi", "hypothesis set"]
tags: [competenza, area/data-ml]
---

# Errore di generalizzazione

> Errore atteso di un'ipotesi su un nuovo esempio estratto dalla distribuzione dei dati; si confronta con l'errore empirico misurato sul campione di addestramento.

## Definizione / enunciato
**Impostazione supervisionata** (Mohri, *Foundations of Machine Learning*): spazio degli input $\mathcal X$, spazio degli output $\mathcal Y$, **funzione di perdita** $L:\mathcal Y\times\mathcal Y\to\mathbb R$ ($L(\hat y,y)$ = costo di prevedere $\hat y$ invece di $y$): perdita 0-1 $L(y,y')=1_{y\neq y'}$ in classificazione binaria, perdita quadratica $(y'-y)^2$ in regressione. **Insieme di ipotesi** $H\subseteq\mathcal Y^{\mathcal X}$: le funzioni fra cui il learner sceglie; dipende dalle feature e codifica la conoscenza a priori. Campione $S=((x_1,y_1),\dots,(x_m,y_m))$ i.i.d. secondo una distribuzione $D$ su $\mathcal X\times\mathcal Y$.

- **Errore di generalizzazione** di $h\in H$: $R(h)=\mathbb E_{(x,y)\sim D}[L(h(x),y)]$.
- **Errore empirico** su $S$: $\hat R_S(h)=\frac1m\sum_{i=1}^m L(h(x_i),y_i)$.

Caso deterministico: l'etichetta è funzione dell'input, $y=f(x)$; caso stocastico: l'output è una funzione probabilistica dell'input.

## Formule chiave
Nel caso di un concetto target $c$ con perdita 0-1:
$$R(h)=\Pr_{x\sim D}[h(x)\neq c(x)],\qquad \hat R_S(h)=\frac1m\sum_{i=1}^m 1_{h(x_i)\neq c(x_i)},\qquad R(h)=\mathop{\mathbb E}_{S\sim D^m}\big[\hat R_S(h)\big].$$

## Intuizione
$\hat R_S(h)$ è uno stimatore non distorto di $R(h)$ **per $h$ fissata**. Il problema è che l'ipotesi restituita $h_S$ dipende da $S$: per controllare $R(h_S)$ servono limiti uniformi su tutto $H$, che sono l'oggetto della teoria dell'apprendimento.

## Come si usa
Esempio guida delle slide: rilevazione di SPAM, dove le fasi sono dati etichettati, scelta delle feature e di $H$, addestramento, test. Adattare troppo $H$ ai dati ("fitting") non garantisce un errore di generalizzazione piccolo: serve una nozione di complessità di $H$.

## Nei corsi
- **Matematica per l'AI** (triennale): lezione introduttiva sui fondamenti del machine learning, notazione di Mohri-Rostamizadeh-Talwalkar. Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 15-20, 37); `FML.pdf` cap. 1-2.

## Prerequisiti
- [[Valore atteso]]: $R(h)$ è una speranza rispetto a $D$
- [[Classificazione supervisionata]]: il compito di cui si misura l'errore

## Porta a
- [[Errore di Bayes]]: il minimo errore raggiungibile da qualunque ipotesi
- [[Modello PAC]]: richiede $R(h_S)\le\epsilon$ con alta probabilità
- [[Empirical risk minimization]]: minimizza $\hat R_S$ come sostituto di $R$
- [[Disuguaglianza di Hoeffding]]: controlla lo scarto fra $\hat R_S(h)$ e $R(h)$

## Collegati
- [[Overfitting e pruning]]: errore empirico piccolo ma errore di generalizzazione grande
- [[Legge dei grandi numeri]]: per $h$ fissata, $\hat R_S(h)\to R(h)$
