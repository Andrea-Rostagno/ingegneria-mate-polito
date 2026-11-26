---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["relative positions of lines and planes", "rette sghembe", "skew lines", "rette incidenti", "rette parallele", "piani paralleli", "rette complanari", "intersezione di luoghi geometrici", "intersezione tra due rette", "intersezione tra due piani", "line-line intersection", "plane-plane intersection"]
tags: [competenza, area/algebra-geometria]
---

# Posizioni relative di rette e piani

> Decidere se due piani, una retta e un piano o due rette dello spazio sono incidenti, paralleli, coincidenti o (per le rette) sghembi: si mette a sistema e si confrontano i ranghi.

## Definizione / enunciato
L'intersezione di due luoghi è l'insieme delle soluzioni del sistema delle loro equazioni. Con le equazioni cartesiane si ottiene un sistema lineare $Ax=b$ in 3 incognite, e il teorema di Rouché-Capelli dà la classificazione:
- **due piani:** $\mathrm{rk}A=\mathrm{rk}(A|b)=2$ incidenti in una retta; $\mathrm{rk}A=1$, $\mathrm{rk}(A|b)=2$ paralleli distinti; $\mathrm{rk}A=\mathrm{rk}(A|b)=1$ coincidenti;
- **retta e piano:** $\mathrm{rk}A=\mathrm{rk}(A|b)=3$ incidenti in un punto; $\mathrm{rk}A=2$, $\mathrm{rk}(A|b)=3$ retta parallela al piano; $\mathrm{rk}A=\mathrm{rk}(A|b)=2$ retta contenuta nel piano;
- **due rette** (4 equazioni): se il sistema è compatibile sono incidenti o coincidenti; se è incompatibile ma solo 3 dei 4 piani sono indipendenti le rette sono complanari, quindi parallele; altrimenti sono **sghembe** (né parallele né incidenti).

## Formule chiave
Due rette $r_1=P_1+\mathcal L\{u_1\}$, $r_2=P_2+\mathcal L\{u_2\}$ sono complanari se e solo se $\det(\overrightarrow{P_1P_2},u_1,u_2)=0$; sono parallele se $u_1\parallel u_2$; ortogonali se $\langle u_1,u_2\rangle=0$.

## Intuizione
Ogni equazione indipendente toglie un grado di libertà; un'equazione incompatibile con le altre segnala parallelismo. Nello spazio due rette possono "mancarsi" senza essere parallele: è il caso sghembo, impossibile nel piano.

## Come si usa
- Esempio (p. 62-63 di `5_Geometria_analitica.pdf`): $r_1:\{x-y+z=1,\ 2y-z=0\}$ e $r_2:(1-t,2t-1,-1+3t)$. Sostituendo si ottiene $t=1$, quindi le rette sono incidenti in $(0,1,2)$. Le direzioni $(-1,1,2)$ e $(-1,2,3)$ hanno prodotto scalare $9\neq0$: non sono ortogonali.
- Esempio (p. 66): per $r:\{x-y-z-1=0,\ 2x-3y-z-2=0\}$ e $s:\{x-2y+1=0,\ x-y-z+1=0\}$ risulta $\mathrm{rank}(A|b)>\mathrm{rank}(A)$, quindi nessun punto comune; solo 3 dei 4 piani sono indipendenti, quindi le rette sono parallele e non sghembe.
- Retta e piano: sostituendo la parametrica nella cartesiana si ottiene un'equazione in $t$. Se resta $0=1$ la retta è parallela e non contenuta (p. 70).

## Nei corsi
- **Algebra lineare** (triennale): geometria analitica parte I, ripresa dopo i sistemi lineari. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/5_Geometria_analitica.pdf` (p. 7-10, 61-70); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §2.3, tabella dei ranghi); esercizi `Esercizi ed esercitazioni/Es3-riepilogo su rette e piani_ris.pdf`.
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale, in forma algoritmica. **Problema 3**, intersezione di due rette $r:\ P=P_0+\alpha(P_1-P_0)$ e $s:\ P=P_2+\beta(P_3-P_2)$: uguagliando si ha $\alpha(P_1-P_0)-\beta(P_3-P_2)=P_2-P_0$, un sistema lineare $Ax=b$ nelle incognite $(\alpha,\beta)$, con le colonne di $A$ formate da $P_1-P_0$ e $P_3-P_2$ e $b=P_2-P_0$ (negli appunti il segno di $\beta$ è inglobato nell'incognita). In $d=2$ la soluzione esiste se $\det A=(x_1^1-x_1^0)(x_2^3-x_2^2)-(x_2^1-x_2^0)(x_1^3-x_1^2)\ne0$, cioè $\|(P_1-P_0)\times(P_3-P_2)\|_2\ne0$: rette non parallele. In $d=3$ servono rette non parallele e complanari, $(u\times v)\cdot w=0$. **Problema 4**, intersezione di due piani $n_1^Tx=d_1$, $n_2^Tx=d_2$: la tangente della retta comune è $t=n_1\times n_2$, e un punto $P$ si trova intersecando i due piani con il piano per l'origine ortogonale a $t$, cioè risolvendo $\begin{bmatrix}n_1^T\\n_2^T\\t^T\end{bmatrix}P=\begin{pmatrix}d_1\\d_2\\0\end{pmatrix}$, risolubile se $\det A\ne0$, cioè $t\cdot(n_1\times n_2)\ne0$. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 5-6); `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) (scansioni lette visivamente).

## Prerequisiti
- [[Equazioni della retta]]: si confrontano direzioni e si intersecano le equazioni
- [[Equazione del piano]]: si confrontano le normali e si risolve il sistema
- [[Teorema di Rouché-Capelli]]: classificazione tramite rank(A) e rank(A|b)
- [[Prodotto misto]]: complanarità di due rette nello spazio

## Porta a
- [[Distanze tra punti, rette e piani]]: la distanza ha senso solo senza intersezione

## Collegati
- [[Rango di una matrice]]: il numero di equazioni indipendenti decide la posizione
