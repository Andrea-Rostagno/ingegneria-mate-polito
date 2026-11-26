---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Kelley's cutting plane algorithm", "Kelley cutting planes", "metodo dei piani di taglio di Kelley", "piani di taglio di Kelley", "outer approximation", "approssimazione esterna poliedrale", "disuguaglianza valida", "valid inequality"]
tags: [competenza, area/ottimizzazione]
---

# Algoritmo di Kelley

> Metodo a piani di taglio per problemi convessi: si approssima dal basso una funzione (o un vincolo) convessa con l'inviluppo superiore dei suoi iperpiani di supporto, risolvendo una sequenza di LP.

## Definizione / enunciato
Una disuguaglianza $\mathbf a^T\mathbf x\le b$ è **valida** per $X$ se vale per tutti i punti di $X$. Per $\min\mathbf c^T\mathbf x$ con $g_i(\mathbf x)\le0$, $g_i$ convesse, il subgradiente $\mathbf v_i$ in $\bar{\mathbf x}$ dà $g_i(\bar{\mathbf x})+\mathbf v_i^T(\mathbf x-\bar{\mathbf x})\le g_i(\mathbf x)$, quindi il taglio
$$g_i(\tilde{\mathbf x})+\mathbf v_i^T(\mathbf x-\tilde{\mathbf x})\le0$$
è valido. Algoritmo: $LP=\{\mathbf x\in[\mathbf l,\mathbf u]\}$, $\tilde{\mathbf x}=\arg\min_{LP}\mathbf c^T\mathbf x$; finché $\max_ig_i(\tilde{\mathbf x})>\epsilon$ si aggiungono i tagli dei vincoli violati e si risolve di nuovo.

## Formule chiave
Versione per $\min_{\mathbf x\in S}f(\mathbf x)$ convessa: a ogni passo si calcola un subgradiente $\boldsymbol\gamma_k$ con $f(\mathbf x_k)=\alpha_k+\boldsymbol\gamma_k^T\mathbf x_k$, $f(\mathbf x)\ge\alpha_k+\boldsymbol\gamma_k^T\mathbf x$, e
$$u_k=\min\{u_{k-1},f(\mathbf x_k)\},\quad \beta_k(\mathbf x)=\max\{\beta_{k-1}(\mathbf x),\alpha_k+\boldsymbol\gamma_k^T\mathbf x\},\quad l_k=\min_{\mathbf x\in S}\beta_k(\mathbf x);$$
ci si ferma quando $u_k-l_k<\epsilon$ (con $u_0=f(\mathbf x_1)$, $l_0=-\infty$ e funzione minorante iniziale $\beta_0=-\infty$).

## Intuizione
Ogni taglio è un iperpiano di supporto: il modello poliedrale sta sempre sotto la funzione vera e dà un lower bound, mentre i punti valutati danno un upper bound. Benders, L-shaped e SDDP sono applicazioni di questa idea alla funzione valore di un sottoproblema.

## Come si usa
Esempio delle lezioni: $\min x+y$ con $x^2+y^2\le1$ nel box $[-1,1]^2$. La prima soluzione $(-1,-1)$ non è ammissibile; con $g=x^2+y^2-1$, $\nabla g=(2x,2y)$ il taglio $1+[-2,-2]\,(x+1,y+1)^T\le0$ dà $y\ge-x-\frac32$.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Kelley's cutting plane [Ripasso]" nelle lezioni e "Background: Kelley's cutting planes" nelle slide sulla decomposizione. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 42-44); `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 17-18).

## Prerequisiti
- [[Subgradiente]]: definisce i tagli
- [[Programmazione lineare]]: si risolve un LP a ogni iterazione
- [[Insieme convesso]]: approssimazione esterna con iperpiani di supporto

## Porta a
- [[Decomposizione di Benders]]: Kelley applicato alla funzione valore del sottoproblema

## Collegati
- [[Disuguaglianze di cover]]: piani di taglio per problemi interi, non convessi
- [[Funzione convessa]]: la convessità garantisce che i tagli siano sotto la funzione
