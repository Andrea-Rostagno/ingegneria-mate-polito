---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["scalar triple product", "triple product", "moltiplicazione mista", "complanarità di tre vettori", "volume del parallelepipedo"]
tags: [competenza, area/algebra-geometria]
---

# Prodotto misto

> Lo scalare $\langle\vec u\times\vec v,\vec w\rangle$: è il volume (con segno) del parallelepipedo di spigoli $\vec u,\vec v,\vec w$ e si annulla se e solo se i tre vettori sono complanari.

## Definizione / enunciato
$$\langle\bullet\times\bullet,\bullet\rangle:\ V_3(O)\times V_3(O)\times V_3(O)\to\mathbb R,\qquad (\vec u,\vec v,\vec w)\mapsto\langle\vec u\times\vec v,\vec w\rangle .$$
In $\mathbb R^3$ coincide con il determinante dei tre vettori: $\langle x\times y,z\rangle=\det(x,y,z)$.

**Complanarità.** Tre vettori applicati nello stesso punto sono complanari se e solo se il loro prodotto misto è nullo.

## Formule chiave
$$\langle x\times y,z\rangle=\det(x,y,z),\qquad \langle x\times y,x\rangle=\langle x\times y,y\rangle=0$$
- Ogni scambio di due fattori cambia il segno.
- Se un argomento è ripetuto il prodotto è nullo.

## Intuizione
$\|\vec u\times\vec v\|$ è l'area di base del parallelepipedo; moltiplicando scalarmente per $\vec w$ si prende la componente di $\vec w$ lungo la normale alla base, cioè l'altezza. Dal fatto che $\langle x\times y,x\rangle=0$ segue che $x\times y$ è ortogonale a entrambi i fattori.

## Come si usa
- Esempio (p. 32 di `3_Calcolo_vettori_in_R^3`): $\langle[1,0,0]\times[-1,1,0],[0,0,2]\rangle=2$, che coincide con il determinante della matrice di colonne i tre vettori.
- Test di complanarità di tre vettori o di quattro punti (vettori differenza), quindi anche di incidenza di due rette nello spazio.
- Volume del parallelepipedo di spigoli dati (valore assoluto del prodotto misto); la dispensa Sisto elenca anche il tetraedro (`AlgebraGeometriaLineare.pdf` §2.4), ma solo come titolo, senza formula.

## Nei corsi
- **Algebra lineare** (triennale): introdotto sui vettori geometrici e ripreso in $\mathbb R^3$ in attesa del determinante. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/1_Vettori.pdf` (p. 42-44, 62-64); `Appunti, riassunti e formulari/3_Calcolo_vettori_in_R^3.pdf` (p. 32-33).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale, "triple product". Nell'intersezione di due rette in $d=3$ il sistema ha soluzione se le rette non sono parallele e sono **complanari**: $(u\times v)\cdot w=0$, cioè $\det\begin{pmatrix}w_1&w_2&w_3\\u_1&u_2&u_3\\v_1&v_2&v_3\end{pmatrix}=0$, con $u$, $v$ direzioni delle rette e $w$ vettore tra due loro punti. Nell'intersezione di due piani il sistema per il punto della retta comune è risolubile se $t\cdot(n_1\times n_2)\ne0$ ("no coplanarity"). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_1.pdf` (p. 6); `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1) (scansioni lette visivamente).

## Prerequisiti
- [[Prodotto vettoriale]]: si moltiplica scalarmente u×v per un terzo vettore
- [[Prodotto scalare]]: prodotto scalare di un prodotto vettoriale con un terzo vettore

## Porta a
- [[Posizioni relative di rette e piani]]: complanarità di due rette nello spazio
- [[Equazione del piano]]: condizione di complanarità det(P0P,u,v) = 0

## Collegati
- [[Determinante]]: il prodotto misto è il determinante dei tre vettori
- [[Dipendenza e indipendenza lineare]]: prodotto misto nullo se e solo se i tre vettori sono dipendenti
