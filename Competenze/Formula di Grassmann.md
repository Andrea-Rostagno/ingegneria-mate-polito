---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Grassmann formula", "Grassmann's identity", "formula delle dimensioni", "dim(X1+X2)"]
tags: [competenza, area/algebra-geometria]
---

# Formula di Grassmann

> $\dim(X_1+X_2)=\dim X_1+\dim X_2-\dim(X_1\cap X_2)$: dà la dimensione della somma di due sottospazi conoscendo quella dell'intersezione, o viceversa.

## Definizione / enunciato
**Formula di Grassmann.** Per due sottospazi $X_1,X_2$ di uno stesso spazio finitamente generato ($K^n$ nelle slide):
$$\dim(X_1+X_2)=\dim(X_1)+\dim(X_2)-\dim(X_1\cap X_2).$$
In particolare la somma è diretta ($X_1\cap X_2=\{0\}$) se e solo se $\dim(X_1+X_2)=\dim X_1+\dim X_2$.

## Formule chiave
$$\dim(X_1+X_2)=\dim X_1+\dim X_2-\dim(X_1\cap X_2),\qquad \dim\{Ax=0\}=n-\mathrm{rank}A$$

## Intuizione
È il principio di inclusione-esclusione per le dimensioni: sommando le dimensioni si conta due volte la parte comune, che va tolta. Unendo le basi dei due sottospazi si ottiene un sistema di generatori della somma in cui la base dell'intersezione compare due volte.

## Come si usa
Esempio (p. 60 di `10_Spazi_Vettoriali_II.pdf`): in $\mathbb R^5$ è vero che $X_1+X_2=\mathbb R^5$?
- $X_1=\{2x_1-x_2-x_3=0=x_4-3x_5\}$ ha $\mathrm{rank}(A_1)=2$, quindi $\dim X_1=5-2=3$.
- $X_2=\{2x_1-x_2+x_3+4x_4+4x_5=0\}$ ha $\mathrm{rank}(A_2)=1$, quindi $\dim X_2=4$.
- Dall'esercizio precedente (p. 43) $\dim(X_1\cap X_2)=2$.

Quindi $\dim(X_1+X_2)=3+4-2=5$ e $X_1+X_2=\mathbb R^5$ (conclusione ricavata dai dati delle p. 43 e 60).

Uso tipico (esempio di applicazione, non tratto dalle slide): due piani vettoriali distinti di $\mathbb R^3$ hanno somma $\mathbb R^3$, quindi la loro intersezione ha dimensione $2+2-3=1$, cioè è una retta.

## Nei corsi
- **Algebra lineare** (triennale): chiusura del capitolo sulle operazioni tra sottospazi (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/10_Spazi_Vettoriali_II.pdf` (p. 60-63); `Appunti, riassunti e formulari/SpaziRn_OPERAZIONI.pdf`.

## Prerequisiti
- [[Somma e intersezione di sottospazi]]: lega le dimensioni di somma e intersezione
- [[Base e dimensione]]: relazione tra dimensioni di somma e intersezione

## Porta a
- Nessuno.

## Collegati
- [[Teorema della dimensione]]: altra relazione additiva tra dimensioni
