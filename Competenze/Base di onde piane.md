---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["plane-wave basis", "onde piane in una scatola", "condizioni periodiche al contorno quantistiche", "rappresentazione degli impulsi", "momentum representation", "funzione d'onda negli impulsi", "distribuzione degli impulsi"]
tags: [competenza, area/fisica]
---

# Base di onde piane

> Le onde piane $e^{i\vec k\cdot\vec x}$, autostati dell'impulso, formano una base completa di $L^2$: lo sviluppo di uno stato su di esse è la trasformata di Fourier, e $|a(\vec k)|^2$ è la densità di probabilità degli impulsi.

## Definizione / enunciato
**In una scatola** cubica di lato $L$ con condizioni periodiche: $\phi_k(\vec x)=e^{i\vec k\cdot\vec x}/\sqrt{L^3}$, $\vec k=\frac{2\pi}{L}(n_1,n_2,n_3)$, $n_i\in\mathbb Z$, ortonormali $(\phi_k,\phi_q)=\delta_{k,q}$. Lo sviluppo $\psi=\sum_ka_k\phi_k$ con $a_k=(\phi_k,\psi)$ è la serie di Fourier (antitrasformata); $a_k$ è la trasformata.
**In $\mathbb R^3$:** $\phi_k=e^{i\vec k\cdot\vec x}/(2\pi)^{3/2}$, $\vec k\in\mathbb R^3$, con normalizzazione alla delta $(\phi_k,\phi_q)=\delta^3(\vec k-\vec q)$: le onde piane non sono normalizzabili ($|\phi_k|^2$ costante), ma $|\phi_k|^2$ dà ancora probabilità relative $P(V_1)/P(V_2)=V_1/V_2$.

## Formule chiave
$$\hat p_j\phi_k=\hbar k_j\phi_k,\qquad H\phi_k=\frac{\hbar^2k^2}{2m}\phi_k$$
$$\psi(\vec x,t)=\int d^3k\,a(\vec k,t)\frac{e^{i\vec k\cdot\vec x}}{(2\pi)^{3/2}},\qquad \int d^3x|\psi|^2=\int d^3k|a(\vec k,t)|^2$$
$$\langle\vec p\rangle=\int d^3k\,|a(\vec k,t)|^2\hbar\vec k,\qquad \langle K\rangle=\int d^3k\,|a(\vec k,t)|^2\frac{\hbar^2k^2}{2m}$$

## Intuizione
Confinare la particella in una scatola discretizza gli impulsi; in tutto lo spazio lo spettro diventa continuo e la somma diventa integrale. Le onde piane diagonalizzano insieme $\hat p_1,\hat p_2,\hat p_3$ (che commutano) e quindi anche l'hamiltoniana libera, il cui spettro è degenere (stesso $|\vec k|$).

## Come si usa
Esempio della dispensa: trasformata di $f(y)=e^{-by^2}$, $a(k)=e^{-k^2/4b}\sqrt{\pi/b}$, e verifica che l'antitrasformata riproduce $e^{-bx^2}$ (`2022_QP.pdf` p. 62). Il cambio di base tra posizione e impulso è unitario: $\langle x|k\rangle=e^{ikx}/\sqrt{2\pi}$ (p. 131). La base di onde piane è comoda per potenziali periodici (elettrone in un reticolo, p. 60).

## Nei corsi
- **Quantum physics** (triennale): §5.2-5.5 e §6.1 della dispensa di V. Penna. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 59-68, 74-76, 131).

## Prerequisiti
- [[Spazio di Hilbert]]: esempio di base completa
- [[Trasformata di Fourier]]: i coefficienti nello spazio intero sono la trasformata
- [[Delta di Dirac]]: normalizzazione e completezza nel continuo

## Porta a
- [[Pacchetto d'onda gaussiano]]: sovrapposizione di onde piane localizzata
- [[Notazione di Dirac]]: rappresentazione degli impulsi $|k\rangle$

## Collegati
- [[Serie di Fourier]]: caso della scatola periodica
- [[Formula di inversione di Fourier]]: l'antitrasformata ricostruisce lo stato
- [[Stati stazionari]]: autostati dell'hamiltoniana libera
- [[Zone di Brillouin]]: stesse condizioni periodiche al contorno sul vettore d'onda
