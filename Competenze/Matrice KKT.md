---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["KKT matrix", "KKT system", "sistema KKT", "sistema KKT di un QP", "inerzia della matrice KKT", "inertia of the KKT matrix", "QP con vincoli di uguaglianza", "equality-constrained QP"]
tags: [competenza, area/ottimizzazione]
---

# Matrice KKT

> Matrice simmetrica e indefinita $K=\begin{pmatrix}Q&A^T\\A&0\end{pmatrix}$ del sistema lineare che esprime le condizioni di ottimalità di un QP con soli vincoli di uguaglianza. Un teorema sull'inerzia di $K$ garantisce soluzione unica e minimo globale.

## Definizione / enunciato
QP con vincoli di uguaglianza:
$$\min_{x\in\mathbb R^n}\tfrac12x^TQx+c^Tx\quad\text{s.t.}\quad Ax=b,$$
con $Q$ simmetrica almeno semidefinita positiva e $A\in\mathbb R^{m\times n}$ di rango pieno, $m<n$ (spesso $m\ll n$). Se $m=n$ con $A$ non singolare c'è un solo punto ammissibile; se $m>n$ il sistema è sovradeterminato.

Con $\mathcal L(x,\lambda)=\frac12x^TQx+c^Tx+\lambda^T(Ax-b)$, il teorema dei moltiplicatori di Lagrange dà le condizioni di ottimalità $Qx+A^T\lambda=-c$, $Ax=b$. Qui LICQ equivale ad avere le righe di $A$ indipendenti.

## Formule chiave
$$K\,w=d,\qquad K=\begin{pmatrix}Q&A^T\\A&0\end{pmatrix}\in\mathbb R^{(n+m)\times(n+m)},\quad w=\begin{pmatrix}x\\\lambda\end{pmatrix},\quad d=\begin{pmatrix}-c\\b\end{pmatrix}.$$
L'**inerzia** di una matrice simmetrica $B$ è la terna $(s,t,u)$ dei numeri di autovalori positivi, negativi e nulli.

**Teorema.** Ipotesi:
- $A$ ha rango pieno;
- $Q$ è semidefinita positiva;
- $Z^TQZ$ è definita positiva, dove $Z$ ha per colonne una base di $\ker A$.

Tesi:
1. $\mathrm{inerzia}(K)=(n,m,0)$;
2. quindi $K$ è invertibile e $Kw=d$ ha un'unica soluzione $w^*=(x^*,\lambda^*)$;
3. $x^*$ è minimo locale e anche globale.

## Intuizione
$Z^TQZ$ definita positiva vuol dire che $Q$ è definita positiva sui vettori ammissibili $v=Zy\in\ker A$, non necessariamente ovunque. Se $Q$ è definita positiva ovunque, l'ipotesi è automatica. $K$ è simmetrica ($K^T=K$) ma indefinita, con $n$ autovalori positivi e $m$ negativi: niente Cholesky né `pcg`.

## Come si usa
Solutori per $Kw=d$:
- **diretti:** $LDL^T$, pensata per matrici simmetriche indefinite;
- **iterativi:** GMRES oppure metodi per matrici simmetriche.

Per $K$ molto grande conviene sfruttarne la struttura: complemento di Schur (solo se $Q$ è invertibile) oppure spazio nullo (per ogni $Q$). Esempio delle note: $n=4$, $m=2$, vincoli $x_1+x_2=0$, $x_2+x_3=1$, $\mathrm{rank}A=2$.

## Nei corsi
- **Numerical opt** (magistrale): lezione sul QP con vincoli di uguaglianza (Pieraccini) e laboratorio 11 di Della Santa. Convenzione di P6: $\mathcal L=f+\lambda^Th$. DS §11.3 scrive $\begin{pmatrix}Q&\pm A^T\\A&0\end{pmatrix}$ per ammettere entrambe le convenzioni e poi usa il "+", come P6. Fonti: `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 1-6); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§11.2-11.3, eq. 78-82, Obs. 11.1).

## Prerequisiti
- [[Programmazione quadratica]]: il problema di cui $K$ dà le condizioni di ottimalità
- [[Moltiplicatori di Lagrange]]: da cui nasce il sistema
- [[Constraint qualification]]: LICQ, cioè $A$ di rango pieno
- [[Matrice simmetrica definita positiva]]: ipotesi su $Z^TQZ$
- [[Segnatura di una forma quadratica]]: l'inerzia $(s,t,u)$ conta gli autovalori positivi, negativi e nulli, come la segnatura

## Porta a
- [[Metodo del complemento di Schur]]: risoluzione per blocchi con $Q$ invertibile
- [[Metodo dello spazio nullo]]: risoluzione tramite una base di $\ker A$

## Collegati
- [[Condizioni di Karush-Kuhn-Tucker]]: il sistema $Kw=d$ è la forma delle KKT per il QP con soli vincoli di uguaglianza
