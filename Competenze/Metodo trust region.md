---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["trust region method", "metodi trust region", "regione di confidenza", "rapporto di riduzione", "raggio della trust region"]
tags: [competenza, area/ottimizzazione]
---

# Metodo trust region

> A ogni iterazione si minimizza il modello quadratico di $f$ solo in un intorno (la trust region) di raggio $\Delta_k$, che si allarga o restringe secondo quanto il modello ha previsto bene la riduzione effettiva.

## Definizione / enunciato
Con $\mathbf g_k=\nabla f(\mathbf x^{(k)})$, $H_k=\nabla^2f(\mathbf x^{(k)})$ e il modello
$$f_2(\mathbf x)=f(\mathbf x^{(k)})+\mathbf g_k^T(\mathbf x-\mathbf x^{(k)})+\tfrac12(\mathbf x-\mathbf x^{(k)})^TH_k(\mathbf x-\mathbf x^{(k)}),$$
si risolve
$$\min\ \tfrac12\boldsymbol\delta_k^TH_k\boldsymbol\delta_k+\mathbf g_k^T\boldsymbol\delta_k\quad\text{s.t. }\|\boldsymbol\delta_k\|_2^2\le\Delta_k$$
(nell'algoritmo delle slide il vincolo è scritto $\|\mathbf x-\mathbf x^{(k)}\|_2\le\Delta_k$, senza quadrato).

## Formule chiave
Rapporto di riduzione (effettiva su prevista):
$$R_k=\frac{f(\mathbf x^{(k)})-f(\mathbf x^{(k+1)})}{f_2(\mathbf x^{(k)})-f_2(\mathbf x^{(k+1)})}.$$
Parametri $0<\beta_1<\beta_2<1$, $0<\gamma_1<1<\gamma_2$: se il passo non migliora $f$, $\Delta_{k+1}=\gamma_1\Delta_k$ e si ripete; se $R_k<\beta_1$, $\Delta_{k+1}=\gamma_1\Delta_k$; se $R_k>\beta_2$ e il passo tocca il bordo, $\Delta_{k+1}=\gamma_2\Delta_k$; altrimenti $\Delta_{k+1}=\Delta_k$. Arresto se $\|\nabla f(\mathbf x^{(k)})\|_\infty<\epsilon$.

## Intuizione
Il modello quadratico è affidabile solo vicino al punto corrente. $R_k<1$ indica una previsione ottimistica: il modello è inadeguato per un passo così grande e il raggio va ridotto.

## Come si usa
Si può dimostrare che esiste $\mu_k\ge0$ con $(H_k+\mu_kI_n)\boldsymbol\delta_k+\mathbf g_k=\mathbf 0$ e $H_k+\mu_kI_n$ semidefinita positiva; quindi $-\boldsymbol\delta_k^T\mathbf g_k=\boldsymbol\delta_k^T(H_k+\mu_kI_n)\boldsymbol\delta_k\ge0$ e, se la matrice è definita positiva, il passo è una direzione di discesa anche quando $H_k$ non lo è.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 21-23).

## Prerequisiti
- [[Metodo di Newton in ottimizzazione]]: stesso modello quadratico locale
- [[Formula di Taylor in più variabili]]: approssimazione al secondo ordine

## Collegati
- [[Backtracking line search]]: altra strategia di controllo del passo
- [[Moltiplicatori di Lagrange]]: $\mu_k$ è il moltiplicatore del vincolo sul raggio (collegamento concettuale, non nelle slide)
- [[Metodi di discesa]]: il passo trust region è di discesa se $H_k+\mu_kI$ è definita positiva
