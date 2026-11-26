---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["incidence matrix", "node-link incidence matrix", "matrice di incidenza nodo-arco", "matrice di incidenza nodo-link", "link-path incidence matrix", "matrice di incidenza link-cammino", "multigrafo", "multigraph"]
tags: [competenza, area/network]
---

# Matrice di incidenza

> La matrice $B\in\{-1,0,+1\}^{\mathcal V\times\mathcal E}$ che dice da quale nodo esce e in quale entra ogni arco: traduce la conservazione della massa in $Bf=\nu$ e fattorizza il laplaciano.

## Definizione / enunciato
Multigrafo $\mathcal G=(\mathcal V,\mathcal E,h)$ con coda $\theta(e)$ e testa $\kappa(e)$ di ogni arco. La **matrice di incidenza nodo-arco** è
$$B_{ie}=\begin{cases}+1&\theta(e)=i\neq\kappa(e)\\-1&\theta(e)\neq i=\kappa(e)\\0&\text{altrimenti (incluso il cappio)}.\end{cases}$$
Un multigrafo non pesato senza cappi è determinato da $B$.
Fissati $o\neq d$ e l'insieme $\Gamma_{od}$ dei cammini $o$-$d$, la **matrice di incidenza arco-cammino** è $A\in\{0,1\}^{\mathcal E\times\Gamma_{od}}$, $A_{e\gamma}=1$ se l'arco $e$ sta sul cammino $\gamma$.

## Formule chiave
$$BB'=\operatorname{diag}(w)-W+\operatorname{diag}(w^-)-W'=L+L^*,$$
con $L^*$ laplaciano del grafo con gli archi invertiti; per un grafo semplice $BB'=2L$.
$$(BA)_{i\gamma}=\begin{cases}+1&i=o\\-1&i=d\\0&\text{altrimenti}\end{cases}\qquad\Longrightarrow\qquad BA=\delta^{(o)}\mathbb 1'-\delta^{(d)}\mathbb 1'.$$
Bilancio dei flussi: $\nu_i+\sum_{e:\kappa(e)=i}f_e=\sum_{e:\theta(e)=i}f_e$, in forma compatta $Bf=\nu$.

## Intuizione
Ogni colonna di $B$ è un arco con un $+1$ alla partenza e un $-1$ all'arrivo; $Bf$ calcola, nodo per nodo, uscite meno entrate. Lungo un cammino i nodi intermedi si cancellano e restano solo origine e destinazione.

## Come si usa
Esempio delle slide: nodi $o,a,b,d$, archi $e_1,\dots,e_5$; cammini $\gamma_1=(e_1,e_4)$, $\gamma_2=(e_1,e_3,e_5)$, $\gamma_3=(e_2,e_5)$; si verifica che ogni colonna di $BA$ è $(+1,0,0,-1)'$. Le colonne di $A$ sono flussi unitari $o$-$d$ e combinandole si costruiscono flussi ammissibili.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 3, "Prologue: multigraphs", "node-link incidence matrix", "Link-path incidence matrices"; usata in Slides 4. Fonti: `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (pp. 2-5, 14-17); `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 3, 23-24).

## Prerequisiti
- [[Grafo]]: archi orientati, multigrafi

## Porta a
- [[Decomposizione dei flussi]]: $f=Az$ dai flussi sui cammini
- [[Ottimizzazione convessa di flussi su rete]]: vincoli $Bf=\nu$

## Collegati
- [[Laplaciano di un grafo]]: $BB'=L+L^*$
- [[Percorso euleriano]]: stessi multigrafi con coda e testa
- [[Flusso a costo minimo]]: vincoli di conservazione in forma matriciale
