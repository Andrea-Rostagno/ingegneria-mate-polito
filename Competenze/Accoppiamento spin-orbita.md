---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["spin-orbit coupling", "interazione spin-orbita", "spin-orbit interaction", "correzioni relativistiche", "relativistic corrections", "costante di struttura fine", "fine-structure constant"]
tags: [competenza, area/fisica]
---

# Accoppiamento spin-orbita

> Correzione di origine relativistica (dal limite $v/c\ll1$ dell'equazione di Dirac) che accoppia spin e momento angolare orbitale dell'elettrone, $H_{SL}\propto\frac{1}{r}\frac{dU}{dr}\vec S\cdot\vec L$; insieme al termine cinetico relativistico $H_R$ è piccola di ordine $\alpha^2$ rispetto ai livelli.

## Definizione / enunciato
L'hamiltoniana estesa dell'atomo idrogenoide è $H=H_0+H_\mu+H_{SL}+H_R$ con $H_0=\frac{p^2}{2m}-\frac{Ze^2}{r}$ e (unità di Gauss)
$$H_{SL}=\frac{1}{2m_e^2c^2}\frac1r\frac{dU}{dr}\vec S\cdot\vec L=\frac{Ze^2}{2m_e^2c^2r^3}\vec S\cdot\vec L,\qquad H_R=-\frac{(\vec p^{\,2})^2}{8m_e^3c^2}+\dots$$
$H_R$ viene dallo sviluppo $E=\sqrt{c^2p^2+m_e^2c^4}\simeq m_ec^2+\frac{p^2}{2m_e}-\frac{(p^2)^2}{8m_e^3c^2}$.

## Formule chiave
Con $\vec S\cdot\vec L\approx\hbar^2$, $r\simeq a=\hbar^2/m_ee^2$, $\alpha=\frac{e^2}{\hbar c}\simeq\frac1{137}$, $\alpha a=\hbar/m_ec$:
$$E_{SL}\approx Z\alpha^2|E_1|,\qquad |E_R|\approx\frac{\alpha^2}{4}|E_1|,\qquad \alpha^2\simeq5\times10^{-5}$$
$[\vec S\cdot\vec L,S_3]\ne0$, $[\vec S\cdot\vec L,L_3]\ne0$, ma $[\vec S\cdot\vec L,J^2]=[\vec S\cdot\vec L,J_3]=0$ con $J^2=S^2+L^2+2\vec S\cdot\vec L$.

## Intuizione
Nel riferimento dell'elettrone il nucleo in moto produce un campo magnetico che agisce sul momento magnetico di spin. Poiché $\vec S\cdot\vec L$ non conserva separatamente $m$ e $m_s$, i buoni numeri quantici diventano $j$ e $m_j$.

## Come si usa
Le stime d'ordine giustificano il trattamento perturbativo e la scelta della base accoppiata $|j,m_j,\ell,s\rangle$ nell'effetto Zeeman anomalo (`2022_QP.pdf` pp. 157-159). Nell'hamiltoniana di molti elettroni compare $H_{so}=\sum_i\frac{1}{2m_e^2c^2}\frac{1}{r_i}\frac{dV}{dr_i}\vec L_i\cdot\vec S_i$ (p. 167).

## Nei corsi
- **Quantum physics** (triennale): §13.2 della dispensa di V. Penna (presentazione illustrativa, senza calcolo dei livelli di struttura fine). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 156-159, 167).

## Prerequisiti
- [[Atomo di idrogeno]]: livelli imperturbati e raggio di Bohr
- [[Composizione dei momenti angolari]]: H_SL commuta con J² e J₃

## Porta a
- [[Effetto Zeeman anomalo]]: rende necessaria la base accoppiata

## Collegati
- [[Matrici di Pauli]]: lo spin che si accoppia a L
- [[Teoria delle perturbazioni stazionarie]]: le correzioni sono piccole perturbazioni di H₀
