---
tipo: competenza
area: ottimizzazione
corsi: [Matematica per l'AI, Data science lab]
livello: [triennale, magistrale]
aliases: ["adaptive gradient methods", "AdaGrad", "Adam", "adaptive moment estimation", "metodo del momento", "momentum method", "normal approximation method", "approssimazione normale dell'hessiana"]
tags: [competenza, area/ottimizzazione]
---

# Metodi a gradiente adattivo

> Metodi economici che usano la storia dei gradienti per riscalare componente per componente la direzione di discesa (AdaGrad, Adam) o per darle inerzia (momentum), senza invertire hessiane.

## Definizione / enunciato
**Approssimazione normale.** Hessiana approssimata con gli ultimi $h$ gradienti:
$$\hat{\mathbf H}_t=\gamma\mathbf I+\frac1h\sum_{i=t-h+1}^t\mathbf u_i\mathbf u_i^\top,$$
($\gamma$ parametro, es. $1/h$), direzione $-\hat{\mathbf H}_t^{-1}\mathbf u_t$ in tempo $O(h^2d)$.
**AdaGrad.** Usa solo la diagonale: direzione $-\mathrm{diag}(\hat{\mathbf H}_t)^{-1/2}\mathbf u_t$; senza memorizzare la storia, la direzione componente per componente
$$-\mathbf u_t\big/\sqrt{\mathbf v_t+\gamma\mathbf 1},\qquad \mathbf v_t=\Big(1-\frac1h\Big)\mathbf v_{t-1}+\frac1h\,\mathbf u_t\odot\mathbf u_t .$$

## Formule chiave
**Adam** (Algoritmo 4), parametri $(\alpha,h_v,h_u)$, ad esempio $(10^{-3},10^3,10)$:
$$\hat{\mathbf u}_t=\Big(1-\tfrac1{h_u}\Big)\hat{\mathbf u}_{t-1}+\tfrac1{h_u}\mathbf u_t,\qquad\mathbf v_t=\Big(1-\tfrac1{h_v}\Big)\mathbf v_{t-1}+\tfrac1{h_v}\mathbf u_t\odot\mathbf u_t,$$
correzioni $\hat{\mathbf u}_t\leftarrow\hat{\mathbf u}_t/(1-(1-h_u^{-1})^t)$, $\mathbf v_t\leftarrow\mathbf v_t/(1-(1-h_v^{-1})^t)$, aggiornamento
$$\boldsymbol\theta_{t+1}=\boldsymbol\theta_t-\alpha\,\hat{\mathbf u}_t\big/\big(\sqrt{\mathbf v_t}+10^{-8}\mathbf 1\big).$$
**Momentum:** $\boldsymbol\theta_{t+1}=\boldsymbol\theta_t-\alpha_t\mathbf u_t+\gamma\boldsymbol\delta_{t-1}$, con $\boldsymbol\delta_{t-1}=\boldsymbol\theta_t-\boldsymbol\theta_{t-1}$.

## Intuizione
Le componenti con gradienti grandi e frequenti vengono smorzate, quelle con gradienti piccoli amplificate: è un precondizionamento diagonale stimato online. Adam media anche i gradienti (primo momento), il momentum evita cambi bruschi della direzione di ricerca e spesso batte lo steepest descent "vanilla".

## Come si usa
SGD, L-BFGS e i metodi adattivi gestiscono reti con molti strati nascosti, purché parametri e inizializzazione siano scelti sperimentando. Nel codice PyTorch su Fashion-MNIST la CNN è addestrata con `torch.optim.Adam` ($\alpha=0.001$, 50 epoche), accuratezza sul test 91.02%.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/neurtrain.pdf` (p. 16-20); `neurpyth (1).pdf` (p. 21-25).
- **Data science lab** (magistrale): momento, learning rate adattivi e schedule sono citati come rimedi ai minimi locali della discesa del gradiente, senza formule; Adam (Kingma 2014) è l'ottimizzatore usato in PyTorch: `optim.Adam(model.parameters(), lr=0.001)` e `.step()` per un aggiornamento ([[Ciclo di addestramento in PyTorch]]). Fonti: `magistrale/Data science lab/slide testo/DSML-Deep-Learning-Intro.pdf` (p. 19); `slide py/11-PyTorch.pdf` (p. 17).

## Prerequisiti
- [[Discesa stocastica del gradiente]]: i metodi adattivi ne modificano la direzione
- [[Metodo L-BFGS]]: stessa idea di sfruttare la storia dei gradienti

## Porta a
- [[Rete neurale convoluzionale]]: addestrata con Adam nell'esempio

## Collegati
- [[Metodo di Newton in ottimizzazione]]: approssimazioni economiche dell'hessiana
