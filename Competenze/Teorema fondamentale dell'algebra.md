---
tipo: competenza
area: analisi
corsi: [Analisi 1, Algebra lineare, Metodi matematici e probabilità, Istituzioni algebra]
livello: [triennale]
aliases: ["fundamental theorem of algebra", "radici di un polinomio", "molteplicità di una radice", "campo algebricamente chiuso", "algebraically closed field"]
tags: [competenza, area/analisi]
---

# Teorema fondamentale dell'algebra

> Ogni polinomio complesso di grado $n$ ha esattamente $n$ radici in $\mathbb C$, contate con molteplicità, e si fattorizza in fattori di primo grado.

## Definizione / enunciato
Uno **zero** o radice di $f$ è un $c$ con $f(c)=0$; se $c$ è radice di un polinomio $P$, allora $P(z)=Q(z)(z-c)$ (Ruffini).

**Teorema (1.5.43).** Siano $a_1,\dots,a_n\in\mathbb C$ e $P(z)=z^n+a_1z^{n-1}+\dots+a_{n-1}z+a_n$. Allora esistono $K\le n$ radici distinte $z_1,\dots,z_K\in\mathbb C$ e molteplicità $\mu_1,\dots,\mu_K\in\mathbb N$ con $\sum_k\mu_k=n$ tali che
$$P(z)=\prod_{k=1}^K(z-z_k)^{\mu_k}.$$
**Corollario (1.5.44).** Se i coefficienti sono reali, le radici non reali compaiono in coppie coniugate con la stessa molteplicità; se $n$ è dispari esiste almeno una radice reale.

## Formule chiave
$$P(z)=(z-z_1)^{\mu_1}\cdots(z-z_K)^{\mu_K},\qquad \mu_1+\dots+\mu_K=n$$

## Intuizione
In $\mathbb R$ un polinomio come $x^2+1$ può non avere radici; aggiungendo $i$ non manca più nessuna radice. È la "necessità algebrica" dei complessi: $\mathbb C$ è algebricamente chiuso.

## Come si usa
Serve a fattorizzare i polinomi reali in fattori lineari e quadratici irriducibili (coppie coniugate): è il passo iniziale dell'integrazione delle funzioni razionali e della soluzione delle equazioni differenziali lineari (equazione caratteristica con radici complesse coniugate). La dimostrazione è rinviata da Morandotti al §7.3.2.

## Nei corsi
- **Analisi 1** (triennale): "teorema fondamentale dell'algebra", solo enunciato. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 1.5.42, teor. 1.5.43, cor. 1.5.44, PDF pp. 45-46; dimostrazione §7.3.2, PDF p. 313).
- **Algebra lineare** (triennale): applicato al polinomio caratteristico, di grado $n$: una matrice $n\times n$ ha $n$ autovalori complessi contati con la molteplicità algebrica; con coefficienti reali le radici non reali vengono a coppie coniugate, quindi una matrice reale di ordine dispari ha almeno un autovalore reale. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 10, 47); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/2_Matrici.pdf` (p. 37).
- **Metodi matematici e probabilità** (triennale): enunciato come Teorema 1.4 ($p(z)=a_n(z-z_1)^{\mu_1}\cdots(z-z_m)^{\mu_m}$, coefficienti complessi, $a_n\ne0$) con l'osservazione sulle radici coniugate per coefficienti reali; poi **dimostrato** in §2.8 come conseguenza del teorema di Liouville: se $P$ non avesse zeri, $1/P$ sarebbe intera e limitata, quindi costante. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (§1.1.5, p. 11); `Capitolo 2 (1).pdf` (§2.8, p. 24 del PDF).
- **Istituzioni algebra** (triennale): enunciato come "$\mathbb C$ è algebricamente chiuso" (Def. 1: ogni polinomio di grado $\ge1$ in $K[x]$ ha una radice in $K$). Conseguenze:
  - **Prop. 2:** gli irriducibili di $\mathbb C[x]$ sono i polinomi di grado 1, e $f=a(x-\alpha_1)\cdots(x-\alpha_n)$.
  - **Prop. 4:** gli irriducibili di $\mathbb R[x]$ sono quelli di grado 1 e i quadratici con $b^2-4ac<0$.
  - **Oss. 5:** un polinomio reale di grado dispari ha una radice reale, dimostrabile anche con limiti e continuità.
  - Con l'assioma della scelta ogni campo ha una chiusura algebrica.

  Fonti: `triennale/ANNO 2/istituzioni/Alg-13-12-22.pdf` (lezioni 31/32, pp. 2-6); `triennale/ANNO 2/istituzioni/Alg-14-12-22.pdf` (lezioni 33/34, p. 20).

## Prerequisiti
- [[Radici n-esime dei numeri complessi]]: z^n=w ha n soluzioni
- [[Numeri complessi]]: radici complesse coniugate
- [[Teorema di Liouville]]: dimostrazione, 1/P sarebbe intera e limitata

## Porta a
- [[Integrazione delle funzioni razionali]]: fattorizzazione del denominatore

## Collegati
- [[Polinomio irriducibile]]: irriducibili di $\mathbb C[x]$ e $\mathbb R[x]$
- [[Teorema di Ruffini]]: ogni radice stacca un fattore lineare
- [[Estensione semplice]]: campo di spezzamento e chiusura algebrica
- [[Molteplicità algebrica e geometrica]]: il polinomio caratteristico ha n radici complesse contate con molteplicità, quindi in C la condizione Σµa = n è automatica
