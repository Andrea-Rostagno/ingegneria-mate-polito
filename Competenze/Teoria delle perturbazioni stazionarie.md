---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["time-independent perturbation theory", "teoria delle perturbazioni indipendenti dal tempo", "perturbation theory", "teoria perturbativa di Rayleigh-Schrödinger", "correzione al primo ordine", "first-order correction", "correzione al secondo ordine", "second-order correction", "perturbazioni degeneri"]
tags: [competenza, area/fisica]
---

# Teoria delle perturbazioni stazionarie

> Se $H=H_0+\tau V$ con $V$ piccola, autovalori e autostati si sviluppano in potenze di $\tau$: al primo ordine $E_n^1=\langle n|V|n\rangle$, al secondo $E_n^2=-\sum_{k\ne n}\frac{|\langle k|V|n\rangle|^2}{E_k^0-E_n^0}$.

## Definizione / enunciato
Sia $H_0|n\rangle=E_n^0|n\rangle$ con spettro non degenere, e $V$ "piccola" nel senso che gli elementi $\langle m|V|n\rangle$ sono piccoli rispetto agli autovalori di $H_0$. Si pone
$$|E_n\rangle=|n\rangle+\tau|b_n\rangle+\tau^2|c_n\rangle+\dots,\qquad E_n=E_n^0+\tau E_n^1+\tau^2E_n^2+\dots$$
con $\langle n|b_n\rangle=\langle n|c_n\rangle=0$. Uguagliando gli ordini di $(H_0+\tau V)|E_n\rangle=E_n|E_n\rangle$:
$$(H_0-E_n^0)|b_n\rangle=-V|n\rangle+E_n^1|n\rangle,\quad (H_0-E_n^0)|c_n\rangle=-V|b_n\rangle+E_n^1|b_n\rangle+E_n^2|n\rangle,\ \dots$$
Proiettando su $\langle n|$ e su $\langle k|$ ($k\ne n$) si ottengono le correzioni.

## Formule chiave
$$E_n^1=\langle n|V|n\rangle,\qquad E_n^2=\langle n|V|b_n\rangle=-\sum_{k\ne n}\frac{\langle n|V|k\rangle\langle k|V|n\rangle}{E_k^0-E_n^0}$$
$$|E_n\rangle=|n\rangle-\tau\sum_{k\ne n}\frac{\langle k|V|n\rangle}{E_k^0-E_n^0}|k\rangle+\tau^2\sum_{k\ne n}C_k(n)|k\rangle+\dots$$

## Intuizione
Al primo ordine l'energia si sposta del valor medio della perturbazione sullo stato imperturbato; al secondo ordine gli altri stati "si mescolano", tanto più quanto più sono vicini in energia. Con stati degeneri occorre prima scegliere la combinazione in cui la perturbazione è diagonale.

## Come si usa
**Esempio della dispensa** (`2022_QP.pdf` pp. 165-166): oscillatore con molla $k=k_0(1+\tau)$, $V=\frac{k_0}{2}x^2$. Con $x=\sqrt{\hbar/2m\omega_0}(a+a^+)$: $E_n^1=\frac{\hbar\omega_0}{2}(n+\frac12)$, $E_n^2=-\frac{\hbar\omega_0}{8}(n+\frac12)$, cioè $E_n=\hbar\omega_0(n+\frac12)(1+\frac\tau2-\frac{\tau^2}8+\dots)$, che coincide con lo sviluppo di Taylor dell'esatto $\hbar\omega_0\sqrt{1+\tau}(n+\frac12)$. Altri usi: Zeeman anomalo (p. 160), atomo di elio con il caso degenere (p. 178).

## Nei corsi
- **Quantum physics** (triennale): cap. 14 della dispensa di V. Penna. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 160, 163-166, 178).

## Prerequisiti
- [[Stati stazionari]]: autostati e autovalori di H₀
- [[Notazione di Dirac]]: elementi di matrice ⟨k|V|n⟩
- [[Oscillatore armonico quantistico]]: base dell'esempio svolto

## Porta a
- [[Effetto Zeeman anomalo]]: correzione ⟨S₃⟩ al primo ordine
- [[Atomo di elio]]: repulsione elettrone-elettrone come perturbazione

## Collegati
- [[Teorema di Bauer-Fike]]: stima numerica dello spostamento degli autovalori sotto perturbazione
- [[Formula di Taylor con resto di Lagrange]]: la serie perturbativa riproduce lo sviluppo dell'esatto
- [[Metodo variazionale]]: altro metodo approssimato per gli autovalori di H
