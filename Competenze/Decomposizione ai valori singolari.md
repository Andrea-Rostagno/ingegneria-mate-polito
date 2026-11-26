---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Metodi numerici, Matematica per l'AI]
livello: [triennale]
aliases: ["singular value decomposition", "SVD", "valori singolari", "singular values", "vettori singolari", "A = U S V^T", "rango numerico"]
tags: [competenza, area/algebra-geometria]
---

# Decomposizione ai valori singolari

> Fattorizzazione $A=USV^T$ di ogni matrice rettangolare, con $U,V$ ortogonali e $S$ diagonale dei valori singolari $s_1\ge\dots\ge s_p\ge0$.

## Definizione / enunciato
**Teorema.** Ogni $A\in\mathbb R^{m,n}$ si fattorizza come
$$U^TAV=S=\mathrm{diag}(s_1,\dots,s_p)\in\mathbb R^{m,n},\quad p=\min\{m,n\},\quad s_1\ge s_2\ge\dots\ge s_p\ge0,$$
con $U\in\mathbb R^{m,m}$, $V\in\mathbb R^{n,n}$ ortogonali. $S$ è unica, $U$ e $V$ no. Gli $s_i$ sono i **valori singolari**, le colonne $u_i$, $v_i$ i vettori singolari sinistri e destri; $A=USV^T=\sum_{i=1}^ps_iu_iv_i^T$.

**Proprietà** (con $s_r>s_{r+1}=\dots=s_p=0$): 1) $\mathrm{rango}(A)=r$; 2) $A=U_rS_rV_r^T=\sum_{i=1}^rs_iu_iv_i^T$; 3) $u_1,\dots,u_r$ base ortonormale di $\mathrm{Im}(A)$; 4) $v_{r+1},\dots,v_n$ base di $\mathrm{Ker}(A)$; 5) $u_{r+1},\dots,u_m$ base di $\mathrm{Ker}(A^T)$; 6) $v_1,\dots,v_r$ base di $\mathrm{Im}(A^T)$; 7) $s_i^2$ sono gli autovalori non nulli di $A^TA$, con autovettori in $V$; 8) idem per $AA^T$ con $U$; 9) se $A$ è simmetrica, $s_i=|\lambda_i|$.

## Formule chiave
$$|s_i-\tilde s_i|\le\|A-\tilde A\|_2\quad(\text{sempre ben condizionato}),\qquad K_2(A)=\frac{s_1}{s_n}$$
Matlab: `d = svd(A)`, `[U,S,V] = svd(A)`, `rank(A,tol)`.

## Intuizione
Sostituisce per le matrici rettangolari autovalori, determinante e inversa (con valori singolari, rango, pseudo-inversa). I valori singolari misurano la distanza di $A$ dalle matrici singolari. Calcolarli come radici degli autovalori di $A^TA$ è possibile in teoria ma fa perdere accuratezza.

## Come si usa
Applicazioni delle slide: **rango numerico**, numero di valori singolari sopra una tolleranza (`rank(A,tol)`); **condizionamento spettrale** $K_2(A)=s_1/s_n$; **sistema quadrato** $Sy=U^Tb$, $x=Vy$, costo circa $\frac{32}{3}n^3$ (da verificare sul PDF), molto più di $PA=LU$, ma preferibile se il sistema è quasi singolare; **minimi quadrati e sistemi sottodeterminati** di minima norma tramite la pseudo-inversa.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 54-69, 80-81).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): solo un cenno: $A=USV^T$, rango uguale al numero di valori singolari non nulli, soluzione stabile di $A\mathbf x=\mathbf b$ con $S\mathbf y=U^T\mathbf b$, $\mathbf x=V\mathbf y$, ma con costo $32n^3/3$ contro $n^3/3$ del metodo di Gauss. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 33-34).
- **Matematica per l'AI** (triennale): nelle slide ISLR sulla PCA il problema della prima componente principale "si risolve con una decomposizione ai valori singolari della matrice $\mathbf X$"; nell'annotazione a mano $X^TX=U^T\Lambda U$ simmetrica reale semidefinita positiva, $\Lambda=\mathrm{diag}(\lambda_1,\dots,\lambda_p)$, $\lambda_1\ge\dots\ge\lambda_p$. Fonti: `triennale/ANNO 3/matematica AI/PCA.pdf` (p. 34).

## Prerequisiti
- [[Matrice ortogonale]]: U e V ortogonali
- [[Autovalori e autovettori]]: s_i^2 autovalori di A^T A

## Porta a
- [[Approssimazione di rango basso]]: troncamento della somma s_i u_i v_i^T
- [[Pseudo-inversa di Moore-Penrose]]: A^+ = V S^+ U^T

## Collegati
- [[Metodo di eliminazione di Gauss]]: per $A\mathbf x=\mathbf b$ la SVD è stabile ma costa $32n^3/3$ contro $n^3/3$ (Metodi numerici)
- [[Condizionamento di un sistema lineare]]: K_2(A) = s_1/s_n
- [[Norma spettrale]]: ||A||_2 = s_1
- [[Rango di una matrice]]: numero dei valori singolari non nulli
- [[Nucleo e immagine]]: basi ortonormali date dai vettori singolari
- [[Analisi delle componenti principali]]: le componenti principali si calcolano dalla SVD di $X$ (Matematica per l'AI)
- [[Riduzione della dimensionalità]]: la SVD è una delle tecniche di riduzione (Matematica per l'AI)
