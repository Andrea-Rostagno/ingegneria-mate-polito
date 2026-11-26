---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["linear matrix equations", "equazione matriciale lineare", "AX = B", "e.m.l.", "Rouché-Capelli generalizzato"]
tags: [competenza, area/algebra-geometria]
---

# Equazioni matriciali lineari

> Equazioni $AX=B$ con incognita una matrice $X$: sono $p$ sistemi lineari con la stessa matrice dei coefficienti, risolti insieme riducendo $(A|B)$.

## Definizione / enunciato
Un'**equazione matriciale lineare** è $AX=B$ con $A\in K^{m\times n}$, $X\in K^{n\times p}$, $B\in K^{m\times p}$. Per $p=1$ è un sistema lineare. Le colonne di $X$ risolvono i sistemi $Ax_j=b_j$.

**Rouché-Capelli generalizzato:** $AX=B$ è risolubile se e solo se $\mathrm{rank}(A)=\mathrm{rank}(A|B)$, ed è determinata se inoltre $n=r$.

**Caso quadrato (Cramer):** $AX=B$ è determinata se e solo se $A$ è invertibile, e allora $X=A^{-1}B$. Per $B=\mathbb 1$ l'equazione $AX=\mathbb 1$ è proprio la ricerca dell'inversa.

## Formule chiave
$$AX=B\ \text{risolubile}\iff\mathrm{rank}(A)=\mathrm{rank}(A|B);\qquad A\ \text{invertibile}\Rightarrow X=A^{-1}B$$

## Intuizione
Invece di risolvere $p$ sistemi separati con la stessa $A$ si fa una sola riduzione della matrice $(A|B)$, che ha $p$ colonne di termini noti. È la stessa idea del metodo di riduzione per l'inversa, e della fattorizzazione $PA=LU$ riusata per più termini noti.

## Come si usa
- Esempio (p. 8 di `9_Equazioni_Matriciali_Lineari.pdf`): riducendo $(A|B)$ si trova $\mathrm{rank}(A)=2<\mathrm{rank}(A|B)=3$, quindi l'equazione è incompatibile.
- Esempio (p. 8): $\mathrm{rank}(A)=3=\mathrm{rank}(A|B)$ e $n=3$ righe di $X$: equazione compatibile e determinata.
- Si può fermare la riduzione appena il confronto dei ranghi decide la compatibilità (p. 11).

## Nei corsi
- **Algebra lineare** (triennale): capitolo 9 delle slide di S. Mercadante. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/9_Equazioni_Matriciali_Lineari.pdf` (p. 3-14); `Appunti, riassunti e formulari/6_Calcolo_matriciale.pdf` (p. 2-8).

## Prerequisiti
- [[Teorema di Rouché-Capelli]]: versione generalizzata rank(A) = rank(A|B)
- [[Matrice inversa]]: AX = B si risolve con X = A⁻¹B se A è invertibile

## Porta a
- Nessuno.

## Collegati
- [[Soluzioni di un sistema lineare]]: caso particolare p = 1
- [[Fattorizzazione LU]]: risoluzione numerica di più sistemi con la stessa matrice
