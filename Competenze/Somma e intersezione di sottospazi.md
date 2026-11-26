---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["sum of subspaces", "intersection of subspaces", "somma diretta", "direct sum", "X1 + X2", "X1 ⊕ X2", "unione di sottospazi"]
tags: [competenza, area/algebra-geometria]
---

# Somma e intersezione di sottospazi

> Le operazioni tra sottospazi che danno ancora sottospazi: l'intersezione e la somma $X_1+X_2$ (diretta se $X_1\cap X_2=\{0\}$). L'unione invece in generale non lo è.

## Definizione / enunciato
Siano $X_1,X_2$ sottospazi di $K^n$.
- **Intersezione**: $X_1\cap X_2$ è un ss.v. Se i due sono dati come Ker, si mettono a sistema le loro equazioni.
- **Unione**: $X_1\cup X_2$ in generale **non** è un ss.v.; lo è solo se uno dei due contiene l'altro. Esempio: l'unione dei due assi di $\mathbb R^2$ non è chiusa per somma.
- **Somma**: $X_1+X_2=\{x_1+x_2\mid x_i\in X_i\}$ è il più piccolo ss.v. che contiene $X_1\cup X_2$. Se $X_i=\mathcal L\{G_i\}$, allora $X_1+X_2=\mathcal L\{G_1\cup G_2\}$.
- **Somma diretta** $X_1\oplus X_2$: è la somma quando $X_1\cap X_2=\{0\}$. In tal caso ogni elemento si scrive **in modo unico** come $x_1+x_2$.

## Formule chiave
$$X_1+X_2=\mathcal L\{G_1\cup G_2\},\qquad X_1\oplus X_2\iff X_1\cap X_2=\{0\}$$

## Intuizione
L'intersezione aggiunge vincoli (equazioni), la somma aggiunge generatori. Per l'intersezione conviene la forma implicita, per la somma quella con generatori. La somma diretta è quella "senza sovrapposizioni": non c'è ambiguità nello scomporre.

## Come si usa
- Intersezione (p. 43 di `10_Spazi_Vettoriali_II.pdf`): in $\mathbb R^5$, $X_1=\{2x_1-x_2-x_3=0,\ x_4-3x_5=0\}$ e $X_2=\{2x_1-x_2+x_3+4x_4+4x_5=0\}$. Il sistema unito ha rango 3, quindi $\dim(X_1\cap X_2)=5-3=2$.
- Somma (p. 56, quiz 15/07/2011): $U=\mathcal L\{(1,0,0),(2,3,4)\}$, $V=\mathcal L\{(2,0,0),(2,0,4)\}$. $U+V$ è lo span dei 4 vettori, il cui rango è 3, quindi $U+V=\mathbb R^3$.
- Somma non diretta (p. 57): $\mathcal L\{i,j\}+\mathcal L\{i,k\}=\mathbb R^3$ ma $(1,2,3)=(i+2j)+3k=2j+(i+3k)$; invece $\mathcal L\{i,j\}\oplus\mathcal L\{k\}$ è diretta.

## Nei corsi
- **Algebra lineare** (triennale): operazioni tra sottospazi (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/10_Spazi_Vettoriali_II.pdf` (p. 40-59); `Appunti, riassunti e formulari/SpaziRn_OPERAZIONI.pdf`.

## Prerequisiti
- [[Sottospazio vettoriale]]: operazioni che restituiscono sottospazi
- [[Sottospazio generato]]: la somma è lo span dell'unione dei generatori

## Porta a
- [[Formula di Grassmann]]: lega le dimensioni di somma e intersezione

## Collegati
- [[Complemento ortogonale]]: V = U ⊕ U⊥ è una somma diretta notevole
- [[Autospazio]]: autospazi di autovalori distinti hanno intersezione nulla
