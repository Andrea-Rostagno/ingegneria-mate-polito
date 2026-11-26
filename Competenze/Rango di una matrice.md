---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["rank of a matrix", "rango", "rank", "rk(A)", "numero di righe linearmente indipendenti", "rango per righe e per colonne"]
tags: [competenza, area/algebra-geometria]
---

# Rango di una matrice

> Il numero massimo di righe (equivalentemente di colonne) linearmente indipendenti di una matrice: si legge contando le righe non nulle della sua forma ridotta a scalini.

## Definizione / enunciato
Per una matrice ridotta a scalini il **rango** $\mathrm{rank}(A)$ (o $\mathrm{rk}(A)$, $\rho(A)$) è il numero di righe non nulle, uguale al numero di colonne marcate. In generale è il numero di righe linearmente indipendenti. Le mosse di Gauss lo conservano, quindi per calcolarlo conviene prima ridurre.

## Formule chiave
Per $A\in K^{m\times n}$:
- $0\le\mathrm{rank}(A)\le\min(m,n)$, e $\mathrm{rank}(A)=0\iff A=0$;
- $\mathrm{rank}(A)=\mathrm{rank}(^tA)$ (rango per righe = rango per colonne);
- $\mathrm{rank}(A)=k\iff$ ci sono $k$ righe linearmente indipendenti la cui combinazione lineare dà ogni altra riga;
- $\mathrm{rank}(AB)\le\min(\mathrm{rank}A,\mathrm{rank}B)$;
- $\mathrm{rank}(A+B)\le\mathrm{rank}A+\mathrm{rank}B$.

Per $A$ quadrata di ordine $n$: $A$ invertibile $\iff\mathrm{rank}(A)=n$ (criterio del rango massimo).

## Intuizione
Il rango conta le informazioni "vere" contenute nelle righe: equazioni che sono combinazioni di altre non aggiungono vincoli. Per questo il rango governa il numero di soluzioni dei sistemi ($\infty^{n-r}$) e la dimensione dell'immagine di un'applicazione lineare.

## Come si usa
- Rango al variare di un parametro (p. 25 di `6_Calcolo_matriciale.pdf`): dopo la riduzione si studia l'annullarsi dell'ultimo pivot, e si trova $\mathrm{rank}=3$ per $a\neq0$, $\mathrm{rank}=2$ per $a=0$.
- Quiz (p. 26): con $b=0$ il rango è $\le2$; il minimo, $\mathrm{rank}(A)=1$, si ha per $a=6$, $b=0$.
- In geometria: il confronto tra $\mathrm{rank}(A)$ e $\mathrm{rank}(A|b)$ classifica le posizioni relative di rette e piani.

## Nei corsi
- **Algebra lineare** (triennale): calcolo matriciale parte II e sistemi lineari (slide di S. Mercadante); nel modulo numerico ritorna come rango numerico tramite la SVD. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/6_Calcolo_matriciale.pdf` (p. 23-29, 68); `Appunti, riassunti e formulari/7_Spazi_vettoriali.pdf` (p. 45, Row(A) e Col(A)); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §4.3).

## Prerequisiti
- [[Riduzione a scalini di una matrice]]: numero di righe non nulle della ridotta
- [[Dipendenza e indipendenza lineare]]: righe linearmente indipendenti

## Porta a
- [[Teorema di Rouché-Capelli]]: confronto tra rank(A) e rank(A|b)
- [[Matrice inversa]]: criterio del rango massimo
- [[Teorema della dimensione]]: il rango di A è la dimensione dell'immagine
- [[Classificazione delle coniche]]: rank B distingue i casi degeneri

## Collegati
- [[Decomposizione ai valori singolari]]: il rango è il numero di valori singolari non nulli
- [[Posizioni relative di rette e piani]]: il numero di equazioni indipendenti decide la posizione
- [[Determinante]]: rango massimo se e solo se det A ≠ 0
