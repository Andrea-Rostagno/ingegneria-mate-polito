---
tipo: competenza
area: fisica
corsi: [Chimica, Quantum physics]
livello: [triennale]
aliases: ["Schrödinger equation", "equazione d'onda", "wave equation", "funzione d'onda", "wave function", "HΨ = EΨ", "densità di probabilità elettronica", "autofunzioni"]
tags: [competenza, area/fisica]
---

# Equazione di Schrödinger

> Equazione d'onda (1926) che descrive l'elettrone come onda stazionaria: le soluzioni accettabili sono le funzioni d'onda Ψ, ciascuna con un'energia definita, e $\Psi^2$ dà la probabilità di presenza.

## Definizione / enunciato
Schrödinger descrisse l'elettrone attorno al nucleo come un'onda stazionaria; le onde stazionarie sono descritte da equazioni differenziali senza la variabile tempo. La funzione d'onda Ψ descrive l'energia dell'elettrone e la probabilità di trovarlo in un volume di spazio.
Delle infinite soluzioni sono accettabili solo le **autofunzioni**: normalizzate (probabilità totale 1), continue, finite, a un solo valore in ogni punto, nulle all'infinito. Ogni soluzione accettabile ha un valore preciso di energia. L'equazione si risolve esattamente solo per l'idrogeno; per i sistemi a più elettroni servono soluzioni approssimate.

## Formule chiave
$$\hat H\Psi=E\Psi,\qquad \frac{\partial^2\Psi}{\partial x^2}+\frac{\partial^2\Psi}{\partial y^2}+\frac{\partial^2\Psi}{\partial z^2}+\frac{8\pi^2m_e}{h^2}\big(E-V(x,y,z)\big)\Psi=0$$
Orbitale 1s dell'idrogeno: $\Psi_{1s}=\dfrac{1}{\sqrt{\pi a_0^3}}\,e^{-r/a_0}$ con $a_0$ raggio della prima orbita di Bohr (p. 28).

## Intuizione
Il termine con le derivate seconde dice come Ψ varia nello spazio; $E$ è l'energia totale quantizzata, $V$ l'energia potenziale. È un problema agli autovalori: solo certe energie ammettono soluzioni accettabili.

## Come si usa
$\Psi^2$ in funzione di $r$ per l'1s è massima sul nucleo, ma la funzione di distribuzione radiale $4\pi r^2\Psi^2$ ha un massimo a distanza finita (p. 28). Ogni soluzione $\Psi_{nlm}$ è un orbitale, individuato da tre numeri quantici.

## Nei corsi
- **Chimica** (triennale): Lezione 5. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 05 - Atomo quantistico.pdf` (lezione 5, pp. 13-17, 21-22, 28).
- **Fisica 2** (triennale): legge fondamentale non dimostrabile, verificata a posteriori. Argomenti di plausibilità: si sostituisce l'onda piana $\Psi=Ae^{i(kl-\omega t)}$ nell'equazione delle onde e si usa $p=h/\lambda$ per ottenere $-\frac{\hbar^2}{2m}\nabla^2\Psi+V\Psi=E\Psi$, poi $E\Psi=i\hbar\,\partial\Psi/\partial t$. Analogia operatoriale $E\to i\hbar\frac{\partial}{\partial t}$, $\vec p\to-i\hbar\nabla$, che dà sia l'equazione delle onde e.m. sia quella dipendente dal tempo $i\hbar\frac{\partial\Psi}{\partial t}=-\frac{\hbar^2}{2m}\nabla^2\Psi+V(\vec r)\Psi$ ($\hat E\Psi=\hat H\Psi$). Per $n$ particelle $H=\sum_i\frac{p_i^2}{2m_i}+V(\vec r_1,\dots,\vec r_n)$ con $\Psi(\vec r_1,\dots,\vec r_n,t)$. Fonte: `triennale/ANNO 2/fisica 2/lezioni/51. LEZIONE.pdf` (pp. 2-15).
- **Quantum physics** (triennale): cap. 4 della dispensa di V. Penna. Si parte dall'onda elementare $\psi=Ae^{i(kx-\omega t)}$ con $\lambda=2\pi\hbar/p$ (de Broglie) e $E=\hbar\omega$: un'equazione tipo d'Alembert darebbe $\omega^2=\sigma k^2$, cioè $E=cp$ (giusto per i fotoni, non per le particelle massive); l'equazione $i\partial_t\psi+\sigma\partial_x^2\psi=0$ con $\sigma=\hbar/2m$ dà invece $E=p^2/2m$, limite non relativistico di $E=\sqrt{p^2c^2+m^2c^4}$. Da qui $\hat p=-i\hbar\nabla$, $H=\hat p^2/2m+U$, il principio di sovrapposizione e il caso a $N$ particelle. Nelle note di M. Re Fiorentin l'equazione apre il cap. 1, con i requisiti sulla funzione d'onda (continua, limitata, normalizzabile). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 31-34); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (p. 1).

## Prerequisiti
- [[Ipotesi di de Broglie]]: l'elettrone come onda stazionaria
- [[Equazione delle onde]]: l'equazione di d'Alembert, scartata perché dà E = cp (Quantum physics)

## Porta a
- [[Numeri quantici]]: le soluzioni sono indicizzate da n, l, m
- [[Orbitali atomici]]: un orbitale è una funzione d'onda
- [[Teoria degli orbitali molecolari]]: soluzioni approssimate per le molecole
- [[Ampiezza di probabilità]]: Ψ ne è la soluzione
- [[Particella in una scatola]]: equazione stazionaria con V = 0 tra le pareti
- [[Gradino di potenziale]]: soluzioni nelle due regioni e raccordo
- [[Oscillatore armonico quantistico]]: potenziale V = kx²/2
- [[Corrente di probabilità]]: combinata con la coniugata dà l'equazione di continuità (Quantum physics)
- [[Stati stazionari]]: separazione delle variabili con H indipendente dal tempo (Quantum physics)

## Collegati
- [[Autovalori e autovettori]]: HΨ = EΨ è un problema agli autovalori
- [[Atomo di idrogeno]]: trattazione fisica completa della stessa equazione
- [[Derivate parziali]]: il primo termine è la somma delle derivate seconde parziali di Ψ
