---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Fisica 1, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["cross product", "vector product", "moltiplicazione vettoriale", "regola della mano destra", "determinante formale"]
tags: [competenza, area/algebra-geometria]
---

# Prodotto vettoriale

> Operazione di $V_3(O)$ (e di $\mathbb R^3$) che a due vettori associa un vettore ortogonale a entrambi, di modulo pari all'area del parallelogramma che formano.

## Definizione / enunciato
$\vec u\times\vec v$ è:
- $\vec 0$ se $\vec u\parallel\vec v$;
- altrimenti il vettore con direzione ortogonale al piano di $\vec u,\vec v$, verso dato dalla regola della mano destra (vite destrorsa dal primo al secondo fattore), modulo $\|\vec u\|\|\vec v\|\sin\theta$.

Proprietà: anticommutativo ($\vec u\times\vec v=-\vec v\times\vec u$), distributivo a destra e a sinistra, $(\lambda\vec u)\times\vec v=\lambda(\vec u\times\vec v)=\vec u\times(\lambda\vec v)$. **Non è associativo**: $(\vec i\times\vec i)\times\vec j=\vec 0$, mentre $\vec i\times(\vec i\times\vec j)=\vec i\times\vec k=-\vec j$.

## Formule chiave
$$\vec i\times\vec j=\vec k,\quad \vec j\times\vec k=\vec i,\quad \vec k\times\vec i=\vec j,\quad \vec i\times\vec i=\vec j\times\vec j=\vec k\times\vec k=\vec 0$$
$$\vec u\times\vec v=\begin{vmatrix}\vec i&u_x&v_x\\ \vec j&u_y&v_y\\ \vec k&u_z&v_z\end{vmatrix}=(u_yv_z-u_zv_y)\vec i+(u_zv_x-u_xv_z)\vec j+(u_xv_y-u_yv_x)\vec k$$
$$\|\vec u\times\vec v\|^2=\|\vec u\|^2\|\vec v\|^2-\langle\vec u,\vec v\rangle^2=\|\vec u\|^2\|\vec v\|^2\sin^2\theta$$
Il determinante "formale" non è un vero determinante ma si sviluppa con le stesse regole.

## Intuizione
Il modulo misura quanto i due vettori sono "non paralleli": è massimo quando sono ortogonali e nullo quando sono paralleli. Per questo $x\times y=0$ se e solo se $x,y$ sono linearmente dipendenti.

## Come si usa
- Calcolo diretto (p. 30 di `3_Calcolo_vettori_in_R^3`): $[1,1,3]\times[-1,2,1]=-5i-4j+3k$.
- Versore ortogonale a due vettori: $i\times(i+j)=k$; in generale si calcola $x\times y$ e lo si normalizza.
- Direzione di una retta data come intersezione di due piani: prodotto vettoriale delle due normali.
- Area del parallelogramma di lati $\vec u,\vec v$: $\|\vec u\times\vec v\|$.

## Nei corsi
- **Algebra lineare** (triennale): definito sui vettori geometrici, poi in componenti in $\mathbb R^3$. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/1_Vettori.pdf` (p. 39-41, 70-72); `Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 29-34).
- **Fisica 1** (triennale): lezione di calcolo vettoriale del 2/03/2022: modulo $|\vec A||\vec B|\,\mathrm{sen}\,\theta$, regola della mano destra, non commutativo, calcolo con il determinante; esempio $(\hat i+3\hat j-4\hat k)\times(5\hat i+5\hat j+6\hat k)=38\hat i-26\hat j-10\hat k$. In fisica definisce momento angolare, momento di una forza e le formule di Poisson. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Calcolo_vettoriale/Calcolo_Vettoriale.pdf` (pp. 33-42).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale. In $d=3$, $P_1\times P_2$ è il determinante formale con $i,j,k$ in prima riga, $P_1\times P_2=\|P_1\|_2\|P_2\|_2\sin\theta\,n$ con $n$ versore ortogonale a $\overrightarrow{OP_1}$ e $\overrightarrow{OP_2}$, e $\|P_1\times P_2\|_2$ è l'area del parallelogramma. Usi: il segno di $u\times v$ dice se un punto sta a sinistra o a destra di una retta; $\frac12\|\overrightarrow{OP_i}\times\overrightarrow{OP_{i+1}}\|_2$ dà l'area dei triangoli con cui si calcola l'area di un poligono; $\|(P_1-P_0)\times(P_3-P_2)\|_2\ne0$ dice che due rette non sono parallele; $t=n_1\times n_2$ è la direzione dell'intersezione di due piani; con $n\times k$ e $u\times n$ si costruisce la matrice di rotazione di un piano sul piano $xy$. In $\mathbb R^2$ la componente $x_1y_2-x_2y_1$ può soffrire di cancellazione numerica. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 2-6); `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1); `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_3.pdf` (p. 1) (scansioni lette visivamente).

## Prerequisiti
- [[Vettori applicati e vettori liberi]]: operazione specifica di V3(O)

## Porta a
- [[Prodotto misto]]: si moltiplica scalarmente u×v per un terzo vettore
- [[Equazioni della retta]]: direzione di una retta intersezione di due piani
- [[Distanze tra punti, rette e piani]]: distanza punto-retta e tra rette sghembe
- [[Formule di Poisson]]: la derivata si scrive come omega vettore u
- [[Momento angolare]]: L è il prodotto vettoriale di r-r0 e mv
- [[Momento di una forza]]: τ = (r - r0) × F
- [[Teorema delle velocità relative]]: termine rotatorio ω × r'
- [[Forza di Lorentz]]: F = qv × B
- [[Legge di Ampère-Laplace]]: dB è proporzionale a dl × u_r

## Collegati
- [[Prodotto scalare]]: insieme danno |u×v|² = |u|²|v|² − ⟨u,v⟩²
- [[Determinante]]: le componenti sono minori 2×2; si calcola come determinante formale
