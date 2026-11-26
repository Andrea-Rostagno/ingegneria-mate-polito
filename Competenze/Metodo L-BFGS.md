---
tipo: competenza
area: ottimizzazione
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["limited-memory BFGS", "L-BFGS", "BFGS a memoria limitata", "limited memory BFGS", "aggiornamento BFGS", "condizione delle secanti", "secant condition", "quasi-Newton a memoria limitata"]
tags: [competenza, area/ottimizzazione]
---

# Metodo L-BFGS

> Metodo quasi-Newton che approssima l'azione dell'inversa dell'hessiana usando solo le ultime $h$ coppie (spostamento, variazione del gradiente), con costo lineare nel numero di parametri.

## Definizione / enunciato
Newton $\boldsymbol\theta_{t+1}=\boldsymbol\theta_t-\mathbf H_t^{-1}\mathbf u_t$ è impraticabile per reti grandi: calcolare $\mathbf H_t$ costa $O(d^2)$ e risolvere per la direzione $O(d^3)$. Il quasi-Newton approssima $\mathbf H_t^{-1}$ con $\mathbf C_t$ che verifica la **condizione delle secanti**
$$\mathbf C_t\mathbf g_{t-1}=\boldsymbol\delta_{t-1},\qquad\boldsymbol\delta_t:=\boldsymbol\theta_{t+1}-\boldsymbol\theta_t,\quad\mathbf g_t:=\mathbf u_{t+1}-\mathbf u_t .$$

## Formule chiave
**Aggiornamento BFGS** ($O(d^2)$):
$$\mathbf C_{t+1}=\big(\mathbf I-\upsilon_t\mathbf g_t\boldsymbol\delta_t^\top\big)^\top\mathbf C_t\big(\mathbf I-\upsilon_t\mathbf g_t\boldsymbol\delta_t^\top\big)+\upsilon_t\boldsymbol\delta_t\boldsymbol\delta_t^\top,\qquad\upsilon_t:=(\mathbf g_t^\top\boldsymbol\delta_t)^{-1}.$$
**Memoria limitata** (Algoritmo 2): data la storia $\{\boldsymbol\delta_j,\mathbf g_j\}_{j=1}^h$, $\mathbf d=-\mathbf C_h\mathbf u$ si calcola con due ricorsioni senza costruire $\mathbf C_h$:
- all'indietro, da $\mathbf q\leftarrow\mathbf u$, per $i=h,\dots,1$: $\upsilon_i\leftarrow(\boldsymbol\delta_i^\top\mathbf g_i)^{-1}$, $\tau_i\leftarrow\boldsymbol\delta_i^\top\mathbf q$, $\mathbf q\leftarrow\mathbf q-\upsilon_i\tau_i\mathbf g_i$;
- $\mathbf q\leftarrow\mathbf C_0\mathbf q$; in avanti per $i=1,\dots,h$: $\mathbf q\leftarrow\mathbf q+\upsilon_i(\tau_i-\mathbf g_i^\top\mathbf q)\boldsymbol\delta_i$; infine $\mathbf d\leftarrow-\mathbf q$.
Con $\mathbf C_0=\mathbf I$ il costo è $O(hd)$.

## Intuizione
Le coppie $(\boldsymbol\delta_t,\mathbf g_t)$ contengono informazione di secondo ordine ricavata gratis dai gradienti già calcolati. Tenendo solo le più recenti si ha una curvatura "locale" aggiornata e si evita di memorizzare una matrice $d\times d$.

## Come si usa
**Algoritmo 3** (quasi-Newton con L-BFGS): a ogni passo si calcolano loss e gradiente con la backpropagation, si aggiunge la coppia più recente alla storia (scartando la più vecchia oltre $h$), si calcola $\mathbf d$, poi **line search**: $\alpha\leftarrow1$ e $\alpha\leftarrow\alpha/1.5$ finché $\ell_\tau(\boldsymbol\theta_t+\alpha\mathbf d)\ge\ell_{\rm value}+10^{-4}\alpha\mathbf d^\top\mathbf u_t$; infine $\boldsymbol\theta_{t+1}=\boldsymbol\theta_t+\alpha\mathbf d$.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/neurtrain.pdf` (p. 6-15).

## Prerequisiti
- [[Metodo di Newton in ottimizzazione]]: L-BFGS ne è una versione quasi-Newton
- [[Backpropagation]]: fornisce i gradienti $\mathbf u_t$

## Porta a
- [[Metodi a gradiente adattivo]]: altri modi di sfruttare la storia dei gradienti

## Collegati
- [[Backtracking line search]]: la riduzione $\alpha/1.5$ con condizione di decrescita sufficiente
- [[Discesa stocastica del gradiente]]: alternativa del primo ordine
