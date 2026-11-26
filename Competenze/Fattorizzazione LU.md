---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["LU decomposition", "PA = LU", "fattorizzazione PA=LU", "calcolo del determinante", "calcolo dell'inversa"]
tags: [competenza, area/numerica]
---

# Fattorizzazione LU

> Scrittura $PA=LU$ prodotta dal metodo di Gauss; separa la fase costosa ($n^3/3$) dalla risoluzione ($n^2$) e dà determinante e inversa.

## Definizione / enunciato
Il metodo di Gauss senza scambi realizza $A=LU$, con $U$ la triangolare superiore finale e $L$ triangolare inferiore a diagonale unitaria che contiene i moltiplicatori ($\ell_{ii}=1$, $\ell_{ij}=m_{ij}$ per $i>j$). Con scambi realizza
$$PA=LU,$$
con $P$ matrice di permutazione degli scambi. Il costo è lo stesso, circa $n^3/3$.

## Formule chiave
$$Ax=b\iff L\underbrace{Ux}_{y}=Pb:\quad Ly=Pb,\quad Ux=y$$
$$\det(A)=(-1)^s\prod_{i=1}^nu_{ii},\qquad A^{-1}=U^{-1}L^{-1}P$$
Costi: sistema con fattori noti $n^2$; inversa $\approx n^3$; $p$ sistemi con la stessa $A$: $n^3/3+pn^2$ (contro $pn^3/3$).

## Intuizione
La parte costosa (l'eliminazione) dipende solo da $A$: una volta fattorizzata, ogni nuovo termine noto costa due sistemi triangolari. Calcolare $x=A^{-1}b$ non conviene, perché l'inversa costa il triplo di Gauss.

## Come si usa
Function `elleu(A)` delle slide: Gauss più `L = tril(A,-1)+eye(n)`, `U = triu(A)`. Matlab: `[L,U,P] = lu(A)`; `det(A)` e `inv(A)` si basano su questa fattorizzazione. Esempio della trasmissione del calore in una parete a 4 strati: sistema $3\times3$ per $T_1,T_2,T_3$ ($19.7596$, $-7.0214$, $-9.7462$ °C, flusso $66.785$ W su 10 m²), poi ripetuto per $T_e=-10,\dots,2$ °C fattorizzando una sola volta.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 61-76, 81-85).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): $PA=LU$ (`[L,U,P]=lu(A)`), costo $n^3/3$, poi $L\mathbf y=P\mathbf b$, $U\mathbf x=\mathbf y$ con costo $n^2$ se i fattori sono già noti; esistenza e unicità se i minori principali di testa sono non nulli. Usata nella function `newton_system` per il passo del metodo di Newton per sistemi; esempio di fill-in su una matrice sparsa $200\times200$. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 25-26, 28, 38); `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 55-56).
- **Numerical opt** (magistrale): laboratorio 1 (metodi diretti). Si studiano eliminazione di Gauss, sistemi quadrati, solutori diretti in Matlab e Python e densità dei fattori su matrici sparse (fill-in). Tabella delle lezioni: LU per matrici generiche di piccola o media scala, GMRES su larga scala. Il costo $\approx\frac13N^3$ serve a confrontare la soluzione del sistema KKT intero con il [[Metodo del complemento di Schur]]. Fonti: `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§1.2-1.7); `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 38); `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 10).

## Prerequisiti
- [[Metodo di eliminazione di Gauss]]: L dei moltiplicatori, U finale
- [[Matrice di permutazione]]: P registra gli scambi
- [[Sostituzione all'indietro e in avanti]]: risolve Ly = Pb e Ux = y

## Porta a
- [[Metodo di Newton per sistemi]]: risolve a ogni passo il sistema con la jacobiana, riusabile se J resta fissa (Metodi numerici)
- [[Metodo delle potenze inverse]]: fattorizza A - pI una volta sola

## Collegati
- [[Fattorizzazione di Cholesky]]: variante per sdp con metà del costo
- [[Determinante]]: det A dal prodotto dei pivot di U, con il segno di P
- [[Equazioni matriciali lineari]]: risoluzione numerica di più sistemi con la stessa matrice
- [[Matrice inversa]]: calcolo numerico dell'inversa colonna per colonna
