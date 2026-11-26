---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Geometria differenziale, Analisi funzionale]
livello: [triennale]
aliases: ["symmetric endomorphism", "self-adjoint operator", "operatore autoaggiunto", "teorema spettrale per endomorfismi simmetrici", "diagonalizzazione ortogonale", "matrice reale simmetrica", "endomorfismo simmetrico rispetto a una metrica", "forma bilineare associata a un endomorfismo"]
tags: [competenza, area/algebra-geometria]
---

# Endomorfismo simmetrico

> Un endomorfismo di $\mathbb R^n$ la cui matrice in una base ortonormale è simmetrica. Per il teorema spettrale si diagonalizza sempre con una base ortonormale di autovettori.

## Definizione / enunciato
Sia $E$ una base ortonormale di $\mathbb R^n$. L'endomorfismo $f$ è **simmetrico** se e solo se $M_{E,E}(f)$ è una matrice simmetrica (Notari, Prop. 14). Attenzione: la simmetria si legge dalla matrice solo se questa è riferita a una base **ortonormale**, la stessa in partenza e in arrivo (Mercadante, p. 46). La definizione intrinseca tramite il prodotto scalare non compare esplicitamente nelle slide del corso (da verificare sul PDF).

**Teorema spettrale** (Notari, Teor. 15; Mercadante, p. 38-43). Se $f$ è simmetrico:
1. tutte le radici del polinomio caratteristico sono reali;
2. $\dim V(\lambda)=\mu_a(\lambda)$ per ogni autovalore;
3. autospazi di autovalori distinti sono ortogonali.

Viceversa, se esiste una base ortonormale di autovettori di $f$, allora $f$ è simmetrico.

**Corollario.** Una matrice reale $A$ è diagonalizzabile tramite una matrice ortogonale ($^tPAP$ diagonale) se e solo se è simmetrica. $P$ si può scegliere ortogonale speciale.

## Formule chiave
$$A={}^tA\in\mathbb R^{n\times n}\iff\exists P\ \text{ortogonale}:\ {}^tPAP=P^{-1}AP=D$$

## Intuizione
La simmetria "allinea" geometria e algebra: gli assi su cui $f$ agisce come dilatazione sono a due a due perpendicolari. È il risultato che rende possibile classificare forme quadratiche, coniche e quadriche con una rotazione degli assi.

## Come si usa
Procedura: si trovano gli autospazi; in ciascuno si costruisce una base ortogonale (Gram-Schmidt, o risolvendo una condizione di ortogonalità); si normalizza; i versori sono le colonne di $P$.
- Esempio (p. 38-45 di `12_Eigenvalues,...pdf`): $A=\begin{bmatrix}5&2\\2&8\end{bmatrix}$ ha autovalori 4 e 9, con autovettori $(2,-1)$ e $(1,2)$, ortogonali. Normalizzati danno $P$, e $R_{-\theta}AR_\theta=\mathrm{diag}(4,9)$.
- Esempio (p. 43-44): autovalore $-3$ doppio. I due generatori trovati non sono ortogonali tra loro: si sostituisce il secondo con un vettore dell'autospazio ortogonale al primo, poi si normalizza.
- Esercizio 5 (`Diagonalizzazione2_MatOrtog.pdf`): $p_A(\lambda)=\lambda^2(6-\lambda)$; base ortogonale di $V_0=\{x-y+2z=0\}$ partendo da $(1,1,0)$.

## Nei corsi
- **Algebra lineare** (triennale): chiusura del capitolo sulla diagonalizzazione e base per le forme quadratiche. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 38-47); `Appunti, riassunti e formulari/euclidei-slides.pdf` (R. Notari, §10); `Appunti, riassunti e formulari/Diagonalizzazione2_MatOrtog.pdf`; `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §7.5.4).
- **Geometria differenziale** (triennale): definizione intrinseca rispetto a una metrica $g$, cioè $g(f(v),w)=g(v,f(w))$.
  - **Forma bilineare associata:** $b(v,w)=g(f(v),w)$, simmetrica.
  - Teorema spettrale (senza dimostrazione): $f$ è diagonalizzabile con autospazi $g$-ortogonali. Una base ortonormale si ottiene "essenzialmente con Gram-Schmidt".
  - In base ortonormale la matrice di $f$ è simmetrica (dimostrato).
  - In base qualsiasi: $b_{ij}=g_{jk}A_{ki}$, cioè $\boxed{b=g\cdot A,\ A=g^{-1}b}$. Il prodotto di due simmetriche non è in generale simmetrico, quindi $A$ può non esserlo.
  - Senza basi: $g^{-1}\circ b:V\to V$, vedendo $g$ e $b$ come mappe $V\to V^*$.
  - È la base per l'operatore forma $-N_*$, simmetrico rispetto alla prima forma fondamentale.
  - Fonte: `triennale/ANNO 2/geometria differenziale/Lezione10_GD.pdf` (pp. 15-24).
- **Analisi funzionale** (triennale): versione in dimensione infinita, **operatore autoaggiunto** $T\in\mathcal B(H)$ su uno spazio di Hilbert, $T^*=T$ (Def. 10.8). Se $\mathbb F=\mathbb C$, $T$ è autoaggiunto $\iff\langle Tx,x\rangle\in\mathbb R$ per ogni $x$ (Prop. 10.16); $\sigma(T)\subseteq\mathbb R$ (Prop. 10.24) e $\|T\|_{op}$ oppure $-\|T\|_{op}$ sta in $\sigma(T)$ (Prop. 11.30). $T^*T$ è sempre autoaggiunto; $D_w$ lo è se e solo se $w$ è reale. Il teorema spettrale vale per gli autoaggiunti **compatti** (anche nel caso reale), con base ortonormale di autovettori se $H$ è separabile. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 152-155, 158, 179-182); `triennale/ANNO 3/analisi funzionale/09_aggiunto_handout.pdf` (pp. 6-8, 11).

## Prerequisiti
- [[Matrice diagonalizzabile]]: caso particolare con P ortogonale
- [[Matrice ortogonale]]: la matrice diagonalizzante è ortogonale
- [[Spazio vettoriale euclideo]]: la simmetria si legge in base ortonormale

## Porta a
- [[Forma quadratica]]: si riduce a forma canonica diagonalizzando la sua matrice simmetrica
- [[Operatore forma]]: -N_* è simmetrico rispetto alla prima forma fondamentale (Geometria differenziale)
- [[Invarianti di un endomorfismo]]: det f = det b/det g, tr f = tr(g⁻¹b) (Geometria differenziale)

## Collegati
- [[Autospazio]]: autospazi distinti sono ortogonali
- [[Procedimento di Gram-Schmidt]]: base ortonormale dentro un autospazio di dimensione > 1
- [[Matrice simmetrica definita positiva]]: caso con tutti gli autovalori positivi
- [[Riduzione a forma canonica di una conica]]: autodirezioni ortogonali del blocco quadratico
- [[Operatori quantistici]]: gli operatori hermitiani sono l'analogo degli autoaggiunti: autovalori reali
- [[Postulati della meccanica quantistica]]: autovalori reali e autovettori ortogonali degli osservabili (Quantum physics)
- [[Equazioni di Hamilton]]: la matrice simmetrica dell'energia cinetica è invertibile (Quantum physics)
- [[Operatore aggiunto]]: autoaggiunto significa T* = T in uno spazio di Hilbert (Analisi funzionale)
- [[Teorema spettrale per operatori compatti]]: generalizzazione a operatori compatti autoaggiunti (Analisi funzionale)
