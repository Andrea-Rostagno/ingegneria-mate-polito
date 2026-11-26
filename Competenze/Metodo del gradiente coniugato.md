---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["conjugate gradient method", "CG", "gradiente coniugato", "direzioni A-coniugate", "A-conjugate directions"]
tags: [competenza, area/numerica]
---

# Metodo del gradiente coniugato

> Metodo di discesa per sistemi simmetrici definiti positivi con direzioni mutuamente A-coniugate: in aritmetica esatta termina in al più $n$ passi, e la sua velocità dipende da $\sqrt{K_2(A)}$.

## Definizione / enunciato
$$\mathbf d^{(k)}=\begin{cases}\mathbf r^{(0)}&k=0\\ \mathbf r^{(k)}+\beta_k\mathbf d^{(k-1)}&k\ge1\end{cases}$$
con $\beta_k$ scelto in modo che $(\mathbf d^{(k)})^TA\mathbf d^{(k-1)}=0$ (direzioni **A-coniugate**). Si dimostra che $(\mathbf d^{(j)})^TA\mathbf d^{(k)}=0$ e $(\mathbf r^{(j)})^T\mathbf r^{(k)}=0$ per ogni $j\ne k$.

Poiché $\mathbf r^{(0)},\dots,\mathbf r^{(n-1)}$ sono ortogonali in $\mathbb R^n$, $\mathbf r^{(n)}=\mathbf o$ e $\mathbf x^{(n)}=\mathbf x^*$: in aritmetica infinita il metodo è **diretto**. Si usa come iterativo perché per $n$ grande e $A$ non mal condizionata basta un numero di passi molto minore di $n$.

**Teorema.** Il metodo converge per ogni $\mathbf x^{(0)}$ in al più $n$ iterazioni e
$$\|\mathbf e^{(k)}\|_A\le2\left(\frac{\sqrt{K_2(A)}-1}{\sqrt{K_2(A)}+1}\right)^k\|\mathbf e^{(0)}\|_A .$$

## Formule chiave
L'espressione esplicita di $\beta_k$ non è riportata nelle slide, che la definiscono solo tramite la condizione di A-coniugazione. Matlab: `x = pcg(A,b)` (da $\mathbf x^{(0)}=\mathbf o$), `pcg(A,b,tol,kmax)` con arresto $\|\mathbf r\|_2/\|\mathbf b\|_2\le$ tol (default $10^{-6}$, kmax $=\min\{n,20\}$).

## Intuizione
Il gradiente semplice usa solo due direzioni indipendenti, che si alternano. Il coniugato non "disfa" mai il lavoro dei passi precedenti: ogni direzione è nuova rispetto alla metrica di $A$.

## Come si usa
Esempio delle slide: $A=\mathrm{diag}(1,5)$, $\mathbf x^{(0)}=(0.6,0.6)^T$, convergenza in **due** iterazioni contro lo zig-zag del gradiente. Il costo per passo è lo stesso del gradiente (circa $n^2$ per il prodotto $A\mathbf d^{(k)}$). Con $n$ passi e $A$ piena il totale sarebbe $O(n^3)$, più di Cholesky; ma nei sistemi che nascono da problemi differenziali $A$ è sparsa e bastano pochi passi. Se $K_2(A)\gg1$ possono servire $n$ passi e gli arrotondamenti possono impedire una buona approssimazione.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 82-90); codice `triennale/ANNO 2/metodi numerici/gradienteconiugato.m` (chiama `pcg`).
- **Numerical opt** (magistrale): algoritmo efficiente con un solo prodotto $Ad$ per iterazione. Stima:
  $$\|x^{(k)}-x^*\|_A\le2\Big(\frac{\sqrt{K(A)}-1}{\sqrt{K(A)}+1}\Big)^k\|x^{(0)}-x^*\|_A,$$
  più favorevole di quella del gradiente. `pcg` di Matlab è lo stato dell'arte per sistemi SPD molto grandi (default: $x^{(0)}=0$, residuo relativo, tolleranza $10^{-6}$). Nel corso è:
  - il solutore interno del [[Metodo di Newton inesatto]] e del [[Metodo di Newton troncato]], quest'ultimo con test di curvatura $d^TBd>0$;
  - il modello del [[Gradiente coniugato non lineare]].

  Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 30-34, 37-38); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§3.2); codice d'esempio `DellaSanta/labs/cg_linsys.m`.

## Prerequisiti
- [[Metodo del gradiente]]: stessa struttura, direzioni diverse
- [[Metodi di discesa]]: passo ottimale lungo $\mathbf d^{(k)}$
- [[Base e dimensione]]: n residui ortogonali non nulli formano una base di $\mathbb R^n$

## Porta a
- [[Precondizionamento]]: gradiente coniugato precondizionato

## Collegati
- [[Fattorizzazione di Cholesky]]: alternativa diretta per matrici sdp piene
- [[Matrice sparsa]]: caso in cui il metodo è più conveniente
- [[Metodo delle differenze finite]]: genera i sistemi sparsi sdp a cui si applica
