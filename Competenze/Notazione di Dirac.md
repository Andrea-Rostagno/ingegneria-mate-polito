---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Dirac notation", "bra-ket", "notazione bra-ket", "ket", "bra", "Dirac picture", "rappresentazione di Dirac", "meccanica quantistica matriciale", "matrix mechanics", "elementi di matrice", "rappresentazione delle coordinate", "coordinate representation"]
tags: [competenza, area/fisica]
---

# Notazione di Dirac

> Formulazione astratta della meccanica quantistica: gli stati sono vettori ket $|\psi\rangle$ (e bra $\langle\psi|$) di uno spazio di Hilbert, gli operatori sono matrici, e le funzioni d'onda sono le componenti in una base particolare.

## Definizione / enunciato
Il teorema di Fisher-Riesz associa a ogni $\psi(x)$ un vettore $|\psi\rangle=\sum_kc_k|k\rangle$; i bra $\langle v|=\sum_kv_k^*\langle k|$ sono i duali (vettori riga), e $\langle a|b\rangle$ è il prodotto scalare. Un autostato di un operatore hermitiano si indica con l'autovalore: $\hat n\psi_n=n\psi_n\to|n\rangle$, $\hat p\phi_k=\hbar k\phi_k\to|k\rangle$, $\hat x\phi_\xi=\xi\phi_\xi\to|\xi\rangle$ con $\phi_\xi(x)=\delta(x-\xi)$.
Un operatore $A$ in una base ortonormale ha elementi di matrice $A_{nm}=(\phi_n,A\phi_m)$ e si scrive $\tilde A=\sum_{ij}|i\rangle A_{ij}\langle j|$; è hermitiano se e solo se la matrice lo è; nella propria base è diagonale, $\tilde A=\sum_na_n|n\rangle\langle n|$.

## Formule chiave
$$I=\sum_n|n\rangle\langle n|=\int dk\,|k\rangle\langle k|=\int d\xi\,|\xi\rangle\langle\xi|$$
$$\langle x|n\rangle=\psi_n(x),\qquad \langle x|k\rangle=\frac{e^{ikx}}{\sqrt{2\pi}},\qquad \langle k|n\rangle=\psi_n(k)$$
$$i\hbar\,\partial_t|\psi\rangle=H|\psi\rangle\ \Rightarrow\ i\hbar\dot c_n=\sum_mH_{nm}c_m$$
Coordinate: $\langle\xi|\tilde x|\eta\rangle=\eta\,\delta(\eta-\xi)$, $\langle\xi|\tilde p|\eta\rangle=-i\hbar\partial_\xi\delta(\xi-\eta)$; impulsi: $\langle q|\tilde x|k\rangle=i\partial_q\delta(q-k)$, $\langle q|\tilde p|k\rangle=\hbar k\,\delta(q-k)$.

## Intuizione
Lo stesso stato ha infinite rappresentazioni (energia, impulso, posizione...), legate da trasformazioni unitarie: la funzione d'onda è solo la rappresentazione nella base delle posizioni. Ogni equazione di Schrödinger diventa un sistema lineare.

## Come si usa
Proiettando l'equazione $i\hbar\partial_t|\psi\rangle=H|\psi\rangle$ su $\langle x|$ e usando $\langle x|\tilde p^2|\xi\rangle=-\hbar^2\partial_x^2\delta(x-\xi)$ si riottiene l'equazione di Schrödinger nella forma usuale (`2022_QP.pdf` p. 133). Nella base dell'energia $c_m(t)=c_m(0)e^{-itE_m/\hbar}$. Esercizio della dispensa: forma nella rappresentazione degli impulsi, con $\hat x=+i\partial_k$ (p. 134). Matrici di spin e del momento angolare sono esempi finiti.

## Nei corsi
- **Quantum physics** (triennale): cap. 11 della dispensa di V. Penna (§11.2-11.3); notazione usata in tutte le note di M. Re Fiorentin (cap. 2). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 125, 128-134); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 17-24).

## Prerequisiti
- [[Spazio di Hilbert]]: ket e bra come vettori e duali
- [[Base di onde piane]]: rappresentazione degli impulsi $|k\rangle$
- [[Postulati della meccanica quantistica]]: riformulati in forma astratta

## Porta a
- [[Trasformazione unitaria]]: il cambio di rappresentazione
- [[Matrici di Pauli]]: lo spin è rappresentato direttamente da matrici
- [[Teoria delle perturbazioni stazionarie]]: elementi di matrice ⟨k|V|n⟩

## Collegati
- [[Matrice associata a un'applicazione lineare]]: un operatore è una matrice in una base
- [[Delta di Dirac]]: autostati della posizione e completezza
