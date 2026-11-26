---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["stationary measure", "misura invariante"]
tags: [competenza, area/probabilita]
---

# Misura stazionaria

> Soluzione non necessariamente normalizzabile di $\eta=\eta P$; esiste sempre per catene irriducibili ricorrenti ed è costruita con le visite durante un'escursione.

## Definizione / enunciato
Ogni vettore $\eta\ge0$ che risolve $\eta=\eta P$ è una **misura stazionaria**. Se $\sum_x\eta(x)<\infty$, normalizzandola si ottiene una distribuzione stazionaria; se $\sum_x\eta(x)=\infty$ non è possibile.

**Teorema.** Se la catena è irriducibile e ricorrente, esiste una misura stazionaria $\eta$ con $\eta(x)>0$ per ogni $x$ (non necessariamente finita in massa). Fissato $x$:
$$\eta(y)=\mathbb E_x\Big[\sum_{n\ge1}\mathbf 1\{X_n=y,\ T_x\ge n\}\Big]=\sum_{n\ge1}\mathbb P_x(X_n=y,\ T_x\ge n),$$
cioè il numero atteso di visite a $y$ entro il ritorno $T_x$. Per catene finite segue anche da [[Teorema di Perron-Frobenius]].

## Formule chiave
$$\sum_y\eta(y)=\sum_{n\ge1}\mathbb P_x(T_x\ge n)=\mathbb E_x[T_x].$$
Per le catene nascita-morte (`.tex`) la misura reversibile è
$$\pi(n)=\pi(0)\prod_{k=0}^{n-1}\frac{p_k}{q_{k+1}},$$
che diventa una distribuzione se la somma è finita.

## Intuizione
La massa totale della misura delle escursioni è il tempo medio di ritorno. Esiste quindi sempre una misura invariante, ma diventa una distribuzione esattamente quando il ritorno medio è finito (ricorrenza positiva).

## Come si usa
- Esistenza della stazionaria: se $\mathbb E_x[T_x]<\infty$, $\pi=\eta/\mathbb E_x[T_x]$.
- Nelle CTMC le misure stazionarie della catena embedded vanno pesate con i tempi di permanenza: $\pi(x)\propto\alpha(x)/\lambda(x)$.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 8 ("Stationary distributions and stationary measures"), lezione 12 (confronto CTMC/embedded); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Reversibilità e birth-death discrete (misura reversibile). La positività della misura è dimostrata nel materiale del corso, non nelle slide. Fonti principali: `magistrale/Processi stocastici/Lezione_08_14_10.pdf` (lezione 8), `magistrale/Processi stocastici/Lezione_12_28_10.pdf` (lezione 12).

## Prerequisiti
- [[Distribuzione stazionaria di una DTMC]]: versione non normalizzata
- [[Ricorrenza e transienza]]: esiste per catene ricorrenti

## Porta a
- [[Esistenza e unicità della distribuzione stazionaria]]: costruzione tramite escursioni tra ritorni
- [[Misure stazionarie di CTMC ed embedded]]: pesata per i tempi di permanenza

## Collegati
- [[Teorema di Perron-Frobenius]]: esistenza per catene finite
