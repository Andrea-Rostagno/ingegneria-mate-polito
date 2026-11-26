---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["potential step", "regione classicamente proibita", "onda evanescente", "continuità della funzione d'onda e della derivata"]
tags: [competenza, area/fisica]
---

# Gradino di potenziale

> Una particella che incontra un gradino di altezza $V_0>E$ non si ferma bruscamente: la funzione d'onda penetra nella regione classicamente proibita con un'onda che decade esponenzialmente.

## Definizione / enunciato
Particella di massa $m$ che si propaga verso $x>0$; il potenziale vale $0$ per $x<0$ (regione I) e $V_0$ per $x>0$ (regione II). Si scrive l'equazione stazionaria nelle due regioni e si raccordano le soluzioni imponendo: (1) continuità di $\Psi$ e di $d\Psi/dx$ in $x=0$ e niente divergenze per $x\to\infty$; (2) normalizzazione. Nel caso interessante $V_0>E$ il numero d'onda in II diventa immaginario ($\beta=i\gamma$) e si ha $D=0$.

## Formule chiave
$$(I)\ \frac{d^2\Psi}{dx^2}+\frac{2m}{\hbar^2}E\Psi=0\ \ (x<0),\qquad (II)\ \frac{d^2\Psi}{dx^2}+\frac{2m}{\hbar^2}(E-V_0)\Psi=0\ \ (x>0)$$
$$\Psi_I(x)=Ae^{i\alpha x}+Be^{-i\alpha x},\quad \alpha=\sqrt{\frac{2mE}{\hbar^2}};\qquad \Psi_{II}(x)=Ce^{i\beta x}+De^{-i\beta x},\quad \beta=\sqrt{\frac{2m(E-V_0)}{\hbar^2}}$$
Per $V_0>E$:
$$\gamma=\sqrt{\frac{2m(V_0-E)}{\hbar^2}},\qquad \Psi_{II}(x)=Ce^{-\gamma x}$$
$$\Psi_I(0)=\Psi_{II}(0),\quad \left.\frac{d\Psi_I}{dx}\right|_0=\left.\frac{d\Psi_{II}}{dx}\right|_0\ \Rightarrow\ B=\frac{(i\alpha+\gamma)}{(i\alpha-\gamma)}A,\quad C=\frac{2i\alpha}{(i\alpha-\gamma)}A$$

## Intuizione
In I l'onda incidente si sovrappone a quella riflessa; in II resta una coda $e^{-\gamma x}$ tanto più corta quanto più $V_0-E$ è grande. La probabilità di trovare la particella dove $E<V$ non è nulla: è il germe dell'effetto tunnel.

## Come si usa
Schema generale per ogni potenziale a tratti costanti: soluzioni oscillanti dove $E>V$, esponenziali dove $E<V$; si scartano i termini che divergono; si impone la continuità di $\Psi$ e $\Psi'$ a ogni salto. Conseguenza qualitativa (`62. LEZIONE.pdf` p. 7): in una buca a pareti finite la particella ha probabilità finita di uscire anche con $E<V_0$ (soluzione rimandata dalle slide).

## Nei corsi
- **Fisica 2** (triennale): lezione 62, "La particella soggetta ad un gradino di potenziale (l'effetto tunnel)"; nelle slide $\beta$ in II diventa $\gamma$ per $V_0>E$. Fonti: `triennale/ANNO 2/fisica 2/lezioni/62. LEZIONE.pdf` (pp. 1-7, riepilogo a p. 12).

## Prerequisiti
- [[Equazione di Schrödinger]]: soluzioni nelle due regioni e raccordo

## Porta a
- [[Effetto tunnel]]: stesso raccordo su tre regioni

## Collegati
- Nessuno.
