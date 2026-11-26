---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["variational principle", "principio variazionale", "variational method", "metodo di Rayleigh-Ritz", "Rayleigh-Ritz method", "equazione secolare", "secular equation", "matrice di sovrapposizione", "overlap matrix", "problema agli autovalori generalizzato", "generalized eigenvalue problem"]
tags: [competenza, area/fisica]
---

# Metodo variazionale

> Uno stato che rende stazionario il valore atteso $E=\langle\psi|H|\psi\rangle/\langle\psi|\psi\rangle$ è un autostato di $H$; restringendo la ricerca a una base finita si ottiene l'equazione secolare $\det[H-E\,\mathbb 1]=0$ che approssima i primi autovalori.

## Definizione / enunciato
**Principio variazionale:** con $P=\langle\psi|H|\psi\rangle$, $Q=\langle\psi|\psi\rangle$ ed $E=P/Q$, sviluppando al primo ordine in una variazione $|\delta\psi\rangle$:
$$\delta E=\frac{1}{\langle\psi|\psi\rangle}\left[\langle\delta\psi|H|\psi\rangle-E\langle\delta\psi|\psi\rangle\right]+\text{c.c.}$$
Imponendo $\delta E=0$ per ogni variazione si ottiene $H|\psi\rangle=E|\psi\rangle$.
**Base finita:** con $|\psi\rangle=\sum_{i=1}^Nc_i|\varphi_i\rangle$ (non necessariamente autostati) e $H_{ij}=\langle\varphi_i|H|\varphi_j\rangle$, la condizione $dE/dc_k=0$ dà un sistema lineare.

## Formule chiave
$$\sum_{j=1}^N(H_{ij}-E\,\delta_{ij})c_j=0\ \Rightarrow\ \mathbf H\mathbf c=E\mathbf c,\qquad \det[\mathbf H-E\,\mathbb 1]=0$$
Base non ortonormale, $\langle\varphi_i|\varphi_j\rangle=S_{ij}$ (matrice di sovrapposizione, hermitiana):
$$\mathbf H\mathbf c=E\,\mathbf S\mathbf c\quad\text{(problema agli autovalori generalizzato)}$$
Si diagonalizza $S$ con $Q^\dagger SQ=D_s$, si normalizza con $A=\mathrm{diag}(1/\sqrt{s_i})$, $P=QA$, $P^\dagger SP=\mathbb 1$; con $\mathbf c=P\mathbf u$ si ha $\tilde{\mathbf H}\mathbf u=E\mathbf u$, $\tilde{\mathbf H}=P^\dagger\mathbf HP$.

## Intuizione
Lo spazio di Hilbert è infinito e non si può trattare numericamente; si cerca il miglior stato dentro un sottospazio di dimensione $N$. Si ottengono le approssimazioni dei primi $N$ autovalori, tanto migliori quanto più grande è la base.

## Come si usa
È la base dei metodi computazionali per la struttura elettronica: si sceglie una base comoda (anche non ortogonale), si calcolano $H_{ij}$ e $S_{ij}$ e si risolve l'equazione secolare (`QM_notes3.pdf` pp. 33-38).

## Nei corsi
- **Quantum physics** (triennale): cap. 3 delle note di M. Re Fiorentin (pagine del PDF; la p. 37 è bianca). Fonti: `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 33-38).

## Prerequisiti
- [[Stati stazionari]]: l'equazione agli autovalori da approssimare
- [[Autovalori e autovettori]]: l'equazione secolare è un problema agli autovalori
- [[Notazione di Dirac]]: elementi di matrice H_ij e S_ij

## Porta a
- [[Principio variazionale dipendente dal tempo]]: estensione all'evoluzione temporale

## Collegati
- [[Quoziente di Rayleigh]]: $E=\langle\psi|H|\psi\rangle/\langle\psi|\psi\rangle$ è un quoziente di Rayleigh
- [[Trasformazione unitaria]]: diagonalizzazione unitaria della matrice di sovrapposizione
- [[Teoria delle perturbazioni stazionarie]]: altro metodo approssimato
