---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Rouché-Capelli theorem", "Rouché-Capelli", "Kronecker-Capelli", "compatibilità di un sistema lineare", "sistema compatibile", "sistema impossibile", "infinito alla n meno r"]
tags: [competenza, area/algebra-geometria]
---

# Teorema di Rouché-Capelli

> Un sistema lineare $Ax=b$ ha soluzioni se e solo se $\mathrm{rank}(A)=\mathrm{rank}(A|b)$; in tal caso le soluzioni dipendono da $n-r$ parametri.

## Definizione / enunciato
Sia $Ax=b$ con $A\in K^{m\times n}$ e matrice completa $(A|b)$. Vale sempre $r(A)\le r(A|b)\le r(A)+1$.

**Teorema (Rouché-Capelli).**
- $r(A)<r(A|b)$: sistema impossibile (0 soluzioni).
- $r(A)=r(A|b)=r$: il sistema ammette soluzioni dipendenti da $n-r$ parametri ("$\infty^{n-r}$ soluzioni"); se $n=r$ la soluzione è unica.

## Formule chiave
$$\text{compatibile}\iff\mathrm{rank}(A)=\mathrm{rank}(A|b),\qquad \#\text{soluzioni}=\infty^{\,n-r}$$
Il numero $m$ di equazioni è irrilevante: conta il numero di equazioni linearmente indipendenti, cioè il rango.

## Intuizione
$\mathrm{rank}(A|b)>\mathrm{rank}(A)$ significa che $b$ non è combinazione lineare delle colonne di $A$: l'ultima riga ridotta è del tipo $0=c\neq0$. Se invece i ranghi coincidono, $r$ equazioni significative fissano $r$ incognite in funzione delle altre $n-r$.

## Come si usa
- Discussione con parametri (p. 28 di `8_Sistemi_lineari.pdf`): $\{2x+y-1=0,\ kx+y+l=0\}$.
  - Per $k\neq2$: $r(A)=r(A|b)=2$, soluzione unica (in particolare per $k=0$).
  - Per $k=2$, $l=-1$: $r(A)=r(A|b)=1$, $\infty^1$ soluzioni.
  - Per $k=2$, $l\neq-1$: $r(A)<r(A|b)$, nessuna soluzione.
- Geometria analitica: una retta di $E_3$ data da due piani ha $\mathrm{rank}A=\mathrm{rank}(A|b)=2$, quindi $\infty^{3-2}=\infty^1$ punti.
- Versione generalizzata per $AX=B$: risolubile se e solo se $\mathrm{rank}(A)=\mathrm{rank}(A|B)$.

## Nei corsi
- **Algebra lineare** (triennale): cuore del capitolo sui sistemi lineari (slide di S. Mercadante), usato poi in geometria analitica e negli spazi vettoriali. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/8_Sistemi_lineari.pdf` (p. 23-30); `Appunti, riassunti e formulari/9_Equazioni_Matriciali_Lineari.pdf` (p. 8); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §4.4).

## Prerequisiti
- [[Rango di una matrice]]: confronto tra rank(A) e rank(A|b)
- [[Soluzioni di un sistema lineare]]: quando esistono soluzioni e quante

## Porta a
- [[Regola di Cramer]]: caso quadrato con rango massimo
- [[Posizioni relative di rette e piani]]: classificazione tramite rank(A) e rank(A|b)
- [[Equazioni matriciali lineari]]: versione generalizzata rank(A) = rank(A|B)

## Collegati
- [[Equazioni della retta]]: rank 2 su 3 incognite dà ∞^1 punti
- [[Teorema della dimensione]]: n − r è la dimensione del nucleo
