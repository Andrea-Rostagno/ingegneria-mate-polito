---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["diagonalizable matrix", "diagonalizzabilità", "diagonalizzazione", "teorema spettrale", "spectral theorem"]
tags: [competenza, area/algebra-geometria]
---

# Matrice diagonalizzabile

> Matrice simile a una diagonale: equivalentemente ha $n$ autovettori linearmente indipendenti, che formano le colonne di $S$.

## Definizione / enunciato
$A$ con autovalori $\lambda_i$ è **diagonalizzabile** se esiste $S$ non singolare con
$$S^{-1}AS=D=\mathrm{diag}(\lambda_1,\dots,\lambda_n).$$
Da $AS=SD$ le colonne di $S$ sono autovettori di $A$.

**Teorema.** $A$ è diagonalizzabile se e solo se possiede $n$ autovettori linearmente indipendenti.

**Condizione sufficiente.** Se gli autovalori sono distinti, $A$ è diagonalizzabile (autovettori di autovalori distinti sono indipendenti).

**Caso simmetrico.** Una matrice reale simmetrica ha $n$ autovettori ortogonali: esiste $V$ ortogonale con $V^TAV=D$.

## Formule chiave
$$S^{-1}AS=D\iff AS=SD,\qquad A=A^T\Rightarrow V^TAV=D,\ V^{-1}=V^T$$

## Intuizione
In una base di autovettori $A$ agisce come una dilatazione separata su ogni asse. Tutte le analisi del corso sugli autovalori (Bauer-Fike, metodo delle potenze) partono da questa base.

## Come si usa
Nel metodo delle potenze si scrive il vettore iniziale come combinazione degli autovettori, possibile perché sono una base. La matrice $S$ degli autovettori determina il condizionamento del problema degli autovalori ($K(S)$ nel teorema di Bauer-Fike); per le simmetriche $S$ è ortogonale e $K_2(S)=1$. Esempio: $\begin{pmatrix}101&-90\\110&-98\end{pmatrix}$ ha autovalori distinti 2 e 1, quindi è diagonalizzabile.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 17-19, 23-24, 31).
- **Algebra lineare** (triennale), parte teorica (slide di S. Mercadante): criterio di diagonalizzabilità ($\sum\mu_a=n$ e $\mu_g=\mu_a$ per ogni autovalore); la matrice diagonalizzante $P$ è la matrice di passaggio dalla base canonica a una base di autovettori; un endomorfismo è *semplice* se la sua matrice è diagonalizzabile; le matrici reali simmetriche sono diagonalizzabili in $\mathbb R$ tramite una $P$ ortogonale speciale. Esempio: $(x,y)\mapsto(x+y,x+y)$ ha autovalori 0 e 2, $P=\begin{bmatrix}-1&1\\1&1\end{bmatrix}$, $P^{-1}FP=\mathrm{diag}(0,2)$. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 26-47); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/Diagonalizzazione1_SpaziRn.pdf`.
- **Equazioni di fisica matematica** (triennale): usata per calcolare l'esponenziale. Se $P^{-1}AP=\Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_n)$, allora $e^{t\Lambda}=\mathrm{diag}(e^{t\lambda_1},\dots,e^{t\lambda_n})$ ed $e^{tA}=Pe^{t\Lambda}P^{-1}$ (lemma: matrici simili hanno esponenziali simili tramite la stessa $P$). Esempio: $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, autovalori $\pm i$, $P=\begin{pmatrix}1&1\\-i&i\end{pmatrix}\in\mathbb C^{2\times2}$, $e^{tA}=\begin{pmatrix}\cos t&-\sin t\\\sin t&\cos t\end{pmatrix}$. Nelle variabili $y=P^{-1}x$ il sistema $\dot x=Ax$ si disaccoppia in $\dot y_i=\lambda_iy_i$. Fonti: `triennale/ANNO 3/eq fisica matematica/05 - Lezione 11_10_23.pdf` (pp. 7-9); `triennale/ANNO 3/eq fisica matematica/06  - Lezione 13_10_23.pdf` (pp. 1-3); `triennale/ANNO 3/eq fisica matematica/08 - Lezione 20_10_23.pdf` (p. 3).

## Prerequisiti
- [[Matrici simili]]: simile a una matrice diagonale
- [[Autovalori e autovettori]]: n autovettori linearmente indipendenti
- [[Matrice ortogonale]]: le simmetriche si diagonalizzano con V ortogonale
- [[Molteplicità algebrica e geometrica]]: criterio operativo µg = µa per ogni autovalore

## Porta a
- [[Teorema di Bauer-Fike]]: ipotesi S^-1 A S = D
- [[Metodo delle potenze]]: vettore iniziale scritto nella base di autovettori
- [[Endomorfismo simmetrico]]: caso particolare con P ortogonale
- [[Sistemi lineari di ODE a coefficienti costanti]]: e^{tA} = Pe^{tΛ}P⁻¹ risolve ẋ = Ax (Equazioni di fisica matematica)

## Collegati
- [[Prodotto di matrici]]: A = PDP⁻¹ rende facile calcolare le potenze
- [[Esponenziale di una matrice]]: l'esponenziale di una diagonale è la diagonale degli esponenziali (Equazioni di fisica matematica)
- [[Forma canonica di Jordan]]: generalizzazione quando A non è diagonalizzabile (Equazioni di fisica matematica)
