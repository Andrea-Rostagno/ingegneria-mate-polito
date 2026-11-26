---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["density of states", "g(E)", "numero di stati elettronici", "elettroni liberi in una scatola"]
tags: [competenza, area/fisica]
---

# Densità degli stati

> $g(E)\,dE$ è il numero di stati elettronici disponibili tra $E$ ed $E+dE$; per elettroni liberi (o in banda parabolica) in un volume $L^3$ cresce come $E^{1/2}$.

## Definizione / enunciato
Elettrone libero in una scatola cubica di lato $L$, potenziale costante dentro: le soluzioni sono funzioni di Bloch (onde piane). Con le condizioni periodiche al contorno le componenti di $\vec k$ sono multipli di $2\pi/L$, quindi ogni stato occupa un cubetto di volume $(2\pi/L)^3$ nello spazio $k$. Tutti gli stati con lo stesso $|\vec k|$ sono degeneri. Il numero di stati con energia minore di $E$ è il volume della sfera di raggio $k$ diviso il volume di un singolo stato; derivando si ha $g(E)$, che raddoppia per lo spin.

## Formule chiave
$$\Psi(\vec r)=\left(\frac1L\right)^{3/2}e^{i\vec k\cdot\vec r},\qquad k_x=0,\frac{2\pi}{L},\frac{4\pi}{L},\dots,\frac{2\pi}{L}n_x\ \ (\text{idem } k_y,k_z)$$
$$E(k)=\frac{\hbar^2}{2m}(k_x^2+k_y^2+k_z^2)=\frac{\hbar^2}{2m}k^2,\qquad k=\left(\frac{2mE}{\hbar^2}\right)^{1/2}$$
$$N_{STATI}=\frac{\frac43\pi k^3}{\left(\frac{2\pi}{L}\right)^3}=N(E)=\frac{L^3}{6\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}E^{3/2}$$
$$dN(E)=g(E)dE,\qquad g(E)=\frac{L^3}{4\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}E^{1/2}\ \ \text{(senza spin)},\qquad g(E)=\frac{L^3}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}E^{1/2}\ \ \text{(con spin)}$$

## Intuizione
Gli stati sono punti equispaziati di un reticolo nello spazio $k$; in una buccia sferica di raggio $k$ ce ne sono $\propto k^2dk$, e poiché $E\propto k^2$ ne segue $g\propto\sqrt E$. La quantizzazione di $k$ vale per qualunque elettrone in un solido, come conseguenza della forma delle funzioni di Bloch.

## Come si usa
È il "numero di posti" per energia: moltiplicata per la probabilità di occupazione dà gli elettroni per energia, $n(E)dE=g(E)f(E,T)dE$, e integrata fino a $E_F$ fissa l'energia di Fermi. In banda parabolica vale con $m^*$; nei semiconduttori si usa $g_C(E)\propto(E-E_C)^{1/2}$ e $g_V(E)\propto(E_V-E)^{1/2}$.

## Nei corsi
- **Fisica 2** (triennale): presentata nelle lezioni 63-66 (pp. 50-54, conteggio in 1D, 2D, 3D) e svolta per il gas di elettroni liberi nelle 67-68, ripresa nelle 69-70. Fonti: `triennale/ANNO 2/fisica 2/lezioni/67&68. LEZIONE.pdf` (pp. 27-35); `triennale/ANNO 2/fisica 2/lezioni/69&70. LEZIONE.pdf` (pp. 12-14); `triennale/ANNO 2/fisica 2/lezioni/63&64&65&66. LEZIONE.pdf` (pp. 50-54).

## Prerequisiti
- [[Particella in una scatola]]: stati di un elettrone libero in un volume L³
- [[Massa efficace]]: g(E) con m* vicino al bordo di banda

## Porta a
- [[Distribuzione di Fermi-Dirac]]: N = ∫ g(E) f(E,T) dE

## Collegati
- Nessuno.
