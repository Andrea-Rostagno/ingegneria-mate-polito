---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["change of basis", "matrice di passaggio", "matrice del cambiamento di base", "transition matrix", "cambiamento di rappresentazione", "covarianza di un vettore", "P_BB'"]
tags: [competenza, area/algebra-geometria]
---

# Cambiamento di base

> Come cambiano le componenti di un vettore passando da una base $B$ a un'altra $B'$: tramite la matrice di passaggio $P_{BB'}=B^{-1}B'$.

## Definizione / enunciato
Dette $B$ e $B'$ anche le matrici che hanno per colonne i vettori delle due basi di $K^n$, la **matrice di passaggio** $P_{BB'}$ è definita da
$$B'=B\,P_{BB'}\qquad\Longrightarrow\qquad P_{BB'}=B^{-1}B' .$$
La colonna $i$ di $P_{BB'}$ contiene le componenti di $b'_i$ rispetto a $B$ ($b'_i=p^j{}_i\,b_j$). Se la base di partenza è quella canonica, $P_{EB}=B$.

**Cambio di rappresentazione di un vettore** (problema della covarianza): se $x=Bx_B=B'x_{B'}$, allora
$$x_{B'}=P_{BB'}^{-1}\,x_B,\qquad x_B=B^{-1}x .$$

## Formule chiave
$$P_{BB'}=B^{-1}B',\qquad x_{B'}=(P_{BB'})^{-1}x_B,\qquad x_B=B^{-1}x$$
Attenzione: in generale $b'_i\neq P\,b_i$; la matrice agisce "da destra" sulla matrice delle basi.

## Intuizione
Le componenti sono "controvarianti": se si raddoppiano i vettori di base, le componenti si dimezzano. Per questo le componenti si trasformano con l'inversa della matrice che trasforma le basi. Una base "brutta" può semplificare un problema, per esempio una base di autovettori diagonalizza un endomorfismo.

## Come si usa
- Esempio (p. 25 di `10_Spazi_Vettoriali_II.pdf`): $(1,2,3)=(1,2,3)_E=(-1,2,0)_B=(1,0,1)_{B'}$. La matrice $P_{BB'}$ permette di passare da $(-1,2,0)_B$ a $(1,0,1)_{B'}$ senza risolvere un nuovo sistema.
- Più vettori nella stessa base: si calcola una volta $B^{-1}$ e poi si fanno prodotti $x_{iB}=B^{-1}x_i$ (p. 31).
- Lo stesso endomorfismo in due basi ha matrici simili: $M_{B'}=P^{-1}M_BP$.

## Nei corsi
- **Algebra lineare** (triennale): spazi vettoriali parte II e applicazioni lineari (slide di S. Mercadante); dispensa dedicata ai cambi di base. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/10_Spazi_Vettoriali_II.pdf` (p. 21-32); `Appunti, riassunti e formulari/ApplicazioniLineari2_CAMBIdiBASE.pdf`; esercizi `Esercizi ed esercitazioni/Es9-Riep.AppliLinCambiBase_ris.pdf`.

## Prerequisiti
- [[Base e dimensione]]: componenti dello stesso vettore in basi diverse
- [[Matrice inversa]]: la matrice di cambio base è invertibile

## Porta a
- [[Matrici simili]]: matrici dello stesso endomorfismo in basi diverse

## Collegati
- [[Matrice associata a un'applicazione lineare]]: la matrice dipende dalle basi scelte
- [[Procedimento di Gram-Schmidt]]: con basi ortonormali la matrice di passaggio è ortogonale
