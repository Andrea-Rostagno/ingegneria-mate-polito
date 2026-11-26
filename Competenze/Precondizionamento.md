---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["preconditioning", "matrice di precondizionamento", "preconditioner", "precondizionatore", "Cholesky incompleta", "incomplete Cholesky", "ichol", "gradiente coniugato precondizionato", "PCG"]
tags: [competenza, area/numerica]
---

# Precondizionamento

> Si sostituisce $A\mathbf x=\mathbf b$ con un sistema equivalente meglio condizionato, $P^{-1}A\mathbf x=P^{-1}\mathbf b$, per accelerare i metodi di discesa.

## Definizione / enunciato
$P$ non singolare è una **matrice di precondizionamento** per $A$ se:
1. $K_2(P^{-1}A)\ll K_2(A)$;
2. i suoi elementi si calcolano in modo poco costoso;
3. risolvere $P\mathbf y=\mathbf z$ costa quanto il prodotto $A\mathbf z$.

$P=A$ è ottimale per la (1) ($K_2(I)=1$) ma viola la (3): si sceglie quindi $P$ come approssimazione di $A$.

**Cholesky incompleta** ($A$ sdp, $A=R^TR$): $P=\bar R^T\bar R$ con $\bar r_{ij}=r_{ij}$ se $a_{ij}\ne0$, $\bar r_{ij}=0$ se $a_{ij}=0$. $P$ è sparsa quanto $A$ e $P\mathbf y=\mathbf z$ si risolve con $\bar R^T\mathbf w=\mathbf z$, $\bar R\mathbf y=\mathbf w$.

## Formule chiave
$P^{-1}A$ non è simmetrica, quindi si usa
$$\underbrace{(\bar R^T)^{-1}A\bar R^{-1}}_{\bar A}\ \underbrace{\bar R\mathbf x}_{\bar{\mathbf x}}=\underbrace{(\bar R^T)^{-1}\mathbf b}_{\bar{\mathbf b}},$$
con $\bar A$ simmetrica e definita positiva e $K_2(\bar A)=K_2((\bar R^T)^{-1}R^TR\bar R^{-1})\approx K_2(I)$. Il gradiente coniugato applicato a $\bar A\bar{\mathbf x}=\bar{\mathbf b}$, seguito da $\bar R\mathbf x=\bar{\mathbf x}$, è il **gradiente coniugato precondizionato**.

## Intuizione
Gradiente e gradiente coniugato rallentano se $K_2(A)$ è grande. Un buon precondizionatore "arrotonda" le curve di livello senza costare quanto risolvere il sistema.

## Come si usa
Matlab: `L = ichol(A)` (con `A` sparsa, altrimenti `ichol(sparse(A))`) dà $L=\bar R^T$; `pcg(A,b,tol,kmax,M,N,x0)` usa $P=MN$, con `M=L`, `N=L'` per Cholesky incompleta e `M=[]`, `N=[]` senza precondizionatore. Il file del corso `precondizionamento.m` risolve esplicitamente $\bar A\bar{\mathbf x}=\bar{\mathbf b}$ e poi $\bar R\mathbf x=\bar{\mathbf x}$.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 91-96); codice `triennale/ANNO 2/metodi numerici/precondizionamento.m`.
- **Numerical opt** (magistrale): si cerca $P$ con $K(P^{-1}A)\ll K(A)$, economica da invertire o da usare in un sistema. Il precondizionatore "perfetto" $P=A$ costa quanto risolvere il problema. Per $A$ SPD sparsa si usa la Cholesky incompleta (`ichol`): $P=\tilde R^T\tilde R$, sparsa come $A$, calcolata solo sulle posizioni non nulle di $A$; per matrici generiche si usa ILU. Il CG usa precondizionatori simmetrici per conservare simmetria e positività. Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 38-44); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§3.2.1); codice d'esempio `DellaSanta/labs/lab01_ilu_density_analysis.m`.

## Prerequisiti
- [[Metodo del gradiente coniugato]]: metodo che viene precondizionato
- [[Fattorizzazione di Cholesky]]: base della versione incompleta
- [[Condizionamento di un sistema lineare]]: obiettivo $K_2(P^{-1}A)\ll K_2(A)$

## Porta a
- Nessuno.

## Collegati
- [[Matrice sparsa]]: il precondizionatore conserva il pattern di A
- [[Sostituzione all'indietro e in avanti]]: applicare $P^{-1}$ costa due sistemi triangolari
