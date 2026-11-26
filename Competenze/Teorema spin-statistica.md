---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["spin-statistics theorem", "teorema di spin-statistica", "principio di simmetrizzazione", "symmetrization principle", "determinante di Slater", "Slater determinant", "condensazione di Bose-Einstein", "Bose-Einstein condensation"]
tags: [competenza, area/fisica]
---

# Teorema spin-statistica

> Particelle identiche di spin intero (bosoni) hanno funzione d'onda simmetrica e seguono la statistica di Bose-Einstein; quelle di spin semintero (fermioni) hanno funzione d'onda antisimmetrica (determinante di Slater) e seguono Fermi-Dirac, da cui il principio di esclusione di Pauli.

## Definizione / enunciato
**Teorema:** un sistema di particelle identiche di spin intero ha funzione d'onda simmetrica sotto lo scambio $\vec x_j\leftrightarrow\vec x_i$; uno di spin semintero ha funzione d'onda antisimmetrica. In meccanica quantistica non relativistica è un principio empirico (principio di simmetrizzazione); la dimostrazione sta nella teoria quantistica dei campi relativistica.
Per un'hamiltoniana separabile $H=\sum_iH_i$ gli stati sono prodotti di spinori di singola particella $\Psi_{\alpha_j}(\vec x_j)$, $\alpha_j=(v_j,\sigma_j)$, $v_j=(n_j,\ell_j,m_j)$.

## Formule chiave
Fermioni:
$$\Phi_a=\frac{1}{\sqrt{N!}}\det\begin{pmatrix}\Psi_{\alpha_1}(\vec x_1)&\cdots&\Psi_{\alpha_1}(\vec x_N)\\\vdots&&\vdots\\\Psi_{\alpha_N}(\vec x_1)&\cdots&\Psi_{\alpha_N}(\vec x_N)\end{pmatrix}=0\ \text{ se }\alpha_i=\alpha_j$$
Bosoni con $N_1,\dots,N_r$ particelle negli stati $\alpha_1,\dots,\alpha_r$:
$$\Phi_s=\frac{\sqrt{N_1!\cdots N_r!}}{\sqrt{N!}}\sum_P{}^*P\left[\prod\Psi_{\alpha_1}(\vec x_{p_1})\cdots\prod\Psi_{\alpha_r}(\vec x_{p_r})\right]$$

## Intuizione
Ogni stato di singola particella può contenere 0 o 1 fermioni, ma un numero illimitato di bosoni: da qui l'esclusione di Pauli per gli elettroni e la **condensazione di Bose-Einstein** (a temperatura zero un numero macroscopico di bosoni, circa $10^6$, si raccoglie nello stato a impulso nullo).

## Come si usa
Particelle composte fortemente legate hanno statistica definita dal numero di fermioni: $^{87}$Rb (37 protoni, 50 neutroni) e $^{41}$K (19 protoni, 22 neutroni) sono bosoni usati per i condensati, $^{40}$K è un fermione; $^4$He bosone, $^3$He fermione (`2022_QP.pdf` p. 175). Per due spin 1/2 le funzioni di spin di tripletto sono simmetriche e quella di singoletto antisimmetrica.

## Nei corsi
- **Quantum physics** (triennale): §15.2 della dispensa di V. Penna (bosoni, fermioni, principio di esclusione, teorema spin-statistica). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 140, 171-176).

## Prerequisiti
- [[Particelle identiche]]: stati simmetrici e antisimmetrici
- [[Singoletto e tripletto di spin]]: funzioni d'onda di spin di definita simmetria
- [[Matrici di Pauli]]: spinori di singola particella

## Porta a
- [[Atomo di elio]]: la funzione d'onda totale di due elettroni deve essere antisimmetrica

## Collegati
- [[Configurazione elettronica]]: il principio di esclusione di Pauli riempie gli orbitali
- [[Distribuzione di Fermi-Dirac]]: statistica dei fermioni
- [[Numeri quantici]]: spin semintero dei fermioni e intero dei bosoni
