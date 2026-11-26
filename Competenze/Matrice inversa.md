---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["inverse matrix", "matrice invertibile", "invertibilità", "A^{-1}", "matrice aggiunta", "adjugate", "aggiunta classica", "criterio della regolarità", "criterio del rango massimo"]
tags: [competenza, area/algebra-geometria]
---

# Matrice inversa

> $A\in K^{n\times n}$ è invertibile se esiste $B$ con $AB=\mathbb 1_n=BA$. L'inversa $A^{-1}$ è unica ed esiste se e solo se $\det A\neq0$, cioè se e solo se $\mathrm{rank}A=n$.

## Definizione / enunciato
$A$ quadrata è **invertibile** se esiste $B$ tale che $AB=\mathbb 1_n=BA$. Basta una delle due uguaglianze, e $B$ è unica: la si indica con $A^{-1}$. Per matrici rettangolari non si parla di inversa.

**Criteri di invertibilità** (condizioni necessarie e sufficienti):
- regolarità: $\det A\neq0$;
- rango massimo: $\mathrm{rank}(A)=n$.

## Formule chiave
$$(AB)^{-1}=B^{-1}A^{-1},\qquad (A^n)^{-1}=(A^{-1})^n=:A^{-n},\qquad ({}^tA)^{-1}={}^t(A^{-1})$$
$$A^{-1}=\frac{1}{\det A}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}\quad\text{per }A=\begin{bmatrix}a&b\\c&d\end{bmatrix},\qquad A^{-1}=\frac{{}^t\tilde A}{\det A}$$
Qui $\tilde A=[(-1)^{i+j}\det A_{ij}]$ è la matrice dei cofattori e ${}^t\tilde A$ è l'**aggiunta classica**.

**Metodo di riduzione:** se $\det A\neq0$ la forma super-ridotta di $(A|\mathbb 1_n)$ è $(\mathbb 1_n|A^{-1})$.

## Intuizione
Nei numeri reali solo lo 0 non è invertibile; tra le matrici quadrate lo sono tutte le matrici singolari ($\det=0$), perché "schiacciano" lo spazio su un sottospazio e l'informazione persa non si recupera. L'inversa è la soluzione dell'equazione matriciale $AX=\mathbb 1_n$.

## Come si usa
- Studio dell'invertibilità al variare di $t$ (p. 66 di `6_Calcolo_matriciale.pdf`): $\det A=4+t^2\neq0$, quindi $A$ è sempre invertibile; $\det B=t^2-3t-10=0$ per $t=-2$ e $t=5$, quindi $B$ è invertibile per $t\neq-2,5$.
- Inversione $3\times3$ per riduzione: si scrive $(A|\mathbb 1)$ e si applicano mosse di Gauss fino a $(\mathbb 1|A^{-1})$ (p. 73).
- Le inverse delle matrici elementari sono ancora elementari (p. 75).

## Nei corsi
- **Algebra lineare** (triennale): calcolo matriciale parte II (slide di S. Mercadante); nel modulo numerico l'inversa si calcola risolvendo $n$ sistemi con $PA=LU$. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/6_Calcolo_matriciale.pdf` (p. 58-75).

## Prerequisiti
- [[Prodotto di matrici]]: inversa rispetto al prodotto righe per colonne
- [[Determinante]]: criterio di regolarità e formula dell'aggiunta
- [[Rango di una matrice]]: criterio del rango massimo
- [[Riduzione a scalini di una matrice]]: super-riduzione di (A|1)

## Porta a
- [[Regola di Cramer]]: x = A⁻¹b per sistemi quadrati regolari
- [[Equazioni matriciali lineari]]: AX = B si risolve con X = A⁻¹B se A è invertibile
- [[Cambiamento di base]]: la matrice di cambio base è invertibile

## Collegati
- [[Fattorizzazione LU]]: calcolo numerico dell'inversa colonna per colonna
- [[Matrice ortogonale]]: caso speciale con A⁻¹ = ᵗA
- [[Isomorfismo di spazi vettoriali]]: l'inversa di un automorfismo ha matrice A⁻¹
