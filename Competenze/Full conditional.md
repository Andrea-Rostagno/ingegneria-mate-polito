---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["full conditional distribution", "distribuzione condizionata completa", "condizionata completa", "Markov blanket", "coperta di Markov", "X_j | ..."]
tags: [competenza, area/statistica]
---

# Full conditional

> La distribuzione di una variabile dato il valore di tutte le altre; nei modelli bayesiani si ricava dal DAG e dal kernel ed è il mattone del Gibbs sampler.

## Definizione / enunciato
Dato $\mathbf X=(X_1,\dots,X_p)$ con congiunta $f(X_1,\dots,X_p)$, la **full conditional** di $X_j$ è la distribuzione di
$$X_j\mid X_1,\dots,X_{j-1},X_{j+1},\dots,X_p,$$
indicata per brevità $X_j\mid\dots$, con densità $f(x_j\mid\dots)$. Servono le full conditional della **a posteriori**: poiché
$$f(w_2\mid\dots)=\frac{f(\text{tutto})}{f(\text{tutto tranne }w_2)}\propto f(\text{tutto}),$$
basta il numeratore della posteriori, cioè la congiunta rappresentata dal DAG.

## Formule chiave
- **Regola del DAG**: la full conditional di una variabile dipende solo dalla sua distribuzione (dato i genitori) e da quella dei nodi a cui punta; l'insieme dei nodi entranti e uscenti rilevanti è il **Markov blanket**.
- **Esempio** (MCMC p. 9-14): $y_t=\beta_0+\beta_1t+w_t+\varepsilon_t$, $\varepsilon_t\overset{iid}\sim N(0,\sigma^2)$, $w_t\mid w_{t-1}\sim N(\alpha w_{t-1},\tau^2)$, con $y_2$ mancante. Si ha $f(w_2\mid\dots)\propto f(w_2\mid w_1,\tau^2,\alpha)f(w_3\mid w_2,\tau^2,\alpha)f(y_2\mid w_2,\beta_0,\beta_1,\sigma^2)$ e, completando il quadrato,
$$w_2\mid\dots\sim N(m,v),\quad v=\Bigl(\frac{1+\alpha^2}{\tau^2}+\frac1{\sigma^2}\Bigr)^{-1},\quad m=v\Bigl(\frac{\alpha w_1+\alpha w_3}{\tau^2}+\frac{y_2-\beta_0-2\beta_1}{\sigma^2}\Bigr);$$
il dato mancante è un parametro con $y_2\mid\dots\sim N(\beta_0+2\beta_1+w_2,\sigma^2)$.

## Intuizione
Dividendo la congiunta per la sua marginale tutti i fattori che non contengono la variabile si semplificano: resta un prodotto locale. Nel bayesiano non c'è differenza tra parametri, latenti e dati mancanti: "i parametri del modello sono tutte le cose che non conosciamo", e ognuno ha la sua full conditional.

## Come si usa
1. Scrivere il DAG e la congiunta come prodotto di condizionate. 2. Tenere i fattori che contengono la variabile. 3. Riconoscere il kernel (normale, IG, Dirichlet, discreta...). Se il kernel non è noto, la si campiona con un passo Metropolis.

## Nei corsi
- **Statistica computazionale** (magistrale): definita all'inizio degli algoritmi MCMC e usata in tutti i modelli del corso (regressione, misture, HMM, MRF). Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 3, 9-14).

## Prerequisiti
- [[Distribuzione condizionata]]: è una condizionata particolare
- [[Kernel di una densità]]: si ricava a meno della costante
- [[Rete bayesiana]]: il DAG dice quali fattori restano

## Porta a
- [[Gibbs sampler]]: campiona a turno dalle full conditional
- [[Markov random field]]: modello definito direttamente dalle full conditional

## Collegati
- [[Lemma di Brook]]: le full conditional determinano la congiunta
- [[Algoritmo di Metropolis-Hastings]]: serve quando la full conditional non ha forma nota
