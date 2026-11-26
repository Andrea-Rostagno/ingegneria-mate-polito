---
tipo: competenza
area: fisica
corsi: [Chimica, Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["quantum numbers", "numero quantico principale", "numero quantico secondario", "numero quantico azimutale", "numero quantico magnetico", "numero quantico di spin", "spin dell'elettrone", "electron spin", "esperimento di Stern-Gerlach", "Stern-Gerlach experiment", "magnetone di Bohr", "fermioni e bosoni"]
tags: [competenza, area/fisica]
---

# Numeri quantici

> Le soluzioni dell'equazione di Schrödinger sono individuate da tre numeri quantici $n, l, m_l$ legati tra loro, più il numero di spin $m_s$ dell'elettrone.

## Definizione / enunciato
- $n$, **principale**: $1,2,3,\dots$; fissa il livello energetico e la distanza media dal nucleo.
- $l$, **secondario (azimutale)**: $0\le l\le n-1$; fissa il sottolivello e la forma dell'orbitale: $l=0,1,2,3$ corrispondono a s, p, d, f.
- $m_l$, **magnetico**: interi da $-l$ a $+l$; orientazione dell'orbitale nello spazio.
- $m_s$, **di spin**: $+\tfrac12$ o $-\tfrac12$; è una proprietà dell'elettrone, non dell'orbitale.
Ogni terna $(n,l,m_l)$ è un orbitale; per il principio di esclusione di Pauli due elettroni non possono avere tutti e quattro i numeri uguali, quindi un orbitale ospita al massimo due elettroni con spin opposto.

## Formule chiave
$$\text{orbitali per sottolivello}=2l+1\ (1,3,5,7),\qquad \text{orbitali per livello}=n^2,\qquad \text{elettroni max per livello}=2n^2$$

## Intuizione
Tre dimensioni, tre numeri: come le armoniche di una corda sono numerate da un intero, le onde stazionarie in tre dimensioni da tre interi vincolati.

## Come si usa
Per $n=2$: $l=0$ (un orbitale 2s) e $l=1$ con $m_l=-1,0,+1$ (tre orbitali 2p): 4 orbitali e 8 elettroni, l'ottetto. La regola $2n^2$ vale fino a $n=4$ nella tavola periodica (lezione 7, p. 11).

## Nei corsi
- **Chimica** (triennale): Lezione 5 e richiamo all'inizio della lezione 6. Fonti: `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 05 - Atomo quantistico.pdf` (lezione 5, pp. 24-26); `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 06 - Config. elettronica (stampabile).pdf` (lezione 6, pp. 3-4); `triennale/ANNO 1/chimica/C. Gerbaldi - CHIMICA - 07 - Tavola periodica e propriet_ .pdf` (lezione 7, p. 11).
- **Fisica 2** (triennale): esperimento di Stern-Gerlach ($F_z=\mu_z\,\partial B/\partial z$): il fascio si divide in due soli punti, quindi la componente $z$ del momento magnetico intrinseco è quantizzata. Spin: $\hat S^2$ ha autovalori $s(s+1)\hbar^2$, $\hat S_z$ autovalori $m_s\hbar$ con $m_s=-s,\dots,s$; elettroni, protoni, neutroni hanno $s=\tfrac12$ (fermioni, spin semi-intero), i fotoni spin intero (bosoni). Momenti magnetici $\vec\mu_L=-\frac{e}{2m}\vec L$, $\vec\mu_S=-2\frac{e}{2m}\vec S$, con $\mu_B=\frac{e\hbar}{2m}$. I quattro numeri $n,l,m,m_s$ sono gli autovalori di un set completo di operatori commutanti. Fonte: `triennale/ANNO 2/fisica 2/lezioni/61. LEZIONE.pdf` (pp. 12-21).
- **Quantum physics** (triennale): nella dispensa di V. Penna il numero quantico principale nasce come $n=N+\ell+1$ dal troncamento della serie radiale ($N$ numero quantico radiale); $\ell$ e $m$ dall'algebra del momento angolare; lo spin dall'esperimento di Stern-Gerlach con atomi di argento ($\ell=0$, eppure due fasci), con $s=\frac12$, $m_s=\pm\frac12$; magnetone di Bohr in unità di Gauss $\mu_B=\frac{e\hbar}{2m_ec}$; nella base accoppiata i numeri diventano $\ell,s,j,m_j$. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 118, 140-142, 145-146, 155-156).

## Prerequisiti
- [[Equazione di Schrödinger]]: le soluzioni sono indicizzate da n, l, m

## Porta a
- [[Orbitali atomici]]: l dà la forma, m l'orientazione
- [[Configurazione elettronica]]: principio di esclusione di Pauli

## Collegati
- [[Momento angolare]]: il numero quantico secondario è legato al momento angolare dell'elettrone
- [[Atomo di idrogeno]]: n, l, m, ms nascono dalle autofunzioni
- [[Spettro del momento angolare]]: ℓ e m dall'algebra degli operatori a scala (Quantum physics)
- [[Matrici di Pauli]]: lo spin come momento angolare con s = 1/2 (Quantum physics)
- [[Composizione dei momenti angolari]]: j e m_j nella base accoppiata (Quantum physics)
