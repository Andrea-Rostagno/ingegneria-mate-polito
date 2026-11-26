---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["Lévy's continuity theorem", "teorema di Paul Lévy", "teorema di Lévy", "Levy continuity theorem", "convergenza delle funzioni caratteristiche"]
tags: [competenza, area/probabilita]
---

# Teorema di continuità di Lévy

> La convergenza in legge equivale alla convergenza puntuale delle funzioni caratteristiche, purché il limite sia continuo in 0.

## Definizione / enunciato
Siano $(X_n)$ v.a. con funzioni caratteristiche $\Phi_{X_n}$.
1. Se $X_n\xrightarrow{\mathcal L}X$, con $X$ di funzione caratteristica $\Phi_X$, allora $\lim_n\Phi_{X_n}(t)=\Phi_X(t)$ per ogni $t\in\mathbb R$.
2. Se $\lim_n\Phi_{X_n}(t)=\varphi(t)$ per ogni $t$ e $\varphi$ è **continua in 0**, allora esiste una v.a. $X$ con $\Phi_X=\varphi$ e $X_n\xrightarrow{\mathcal L}X$.

## Formule chiave
$$X_n\xrightarrow{\mathcal L}X\iff\Phi_{X_n}(t)\to\Phi_X(t)\ \ \forall t\in\mathbb R .$$
Il punto 1 è immediato: $\cos(tx)$ e $\sin(tx)$ sono continue e limitate.

## Intuizione
Se $\varphi$ non è continua in 0 non può essere una funzione caratteristica (che è sempre uniformemente continua), quindi $X_n$ non converge in legge: la massa "scappa all'infinito".

## Come si usa
- **TLC**: si mostra $\Phi_{S_n^*}(t)=[\Phi(t/\sqrt n)]^n\to e^{-t^2/2}$, funzione caratteristica di $\mathcal N(0,1)$.
- **Binomiale-Poisson**: $X_n\sim B(n,\frac\lambda n)$, $\Phi_{X_n}(t)=[1-\frac\lambda n+\frac\lambda ne^{it}]^n\to\exp(\lambda(e^{it}-1))=\Phi_X(t)$ con $X\sim\mathcal P(\lambda)$.
- **Somme indipendenti**: se $X_n\perp Y_n$, $X\perp Y$, $X_n\xrightarrow{\mathcal L}X$, $Y_n\xrightarrow{\mathcal L}Y$, allora $\Phi_{X_n+Y_n}=\Phi_{X_n}\Phi_{Y_n}\to\Phi_X\Phi_Y=\Phi_{X+Y}$, quindi $X_n+Y_n\xrightarrow{\mathcal L}X+Y$.

## Nei corsi
- **Prob e statistica** (triennale): "Teorema di Paul Lévy", lezione 17, usato nelle lezioni 18-19. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione17(15-11-2023).pdf` (pp. 6-7); `2023Lezione18(16-11-2023).pdf` (pp. 2-4, 8-9).

## Prerequisiti
- [[Funzione caratteristica]]: caratterizza la legge ed è continua
- [[Convergenza in legge]]: definizione con $f\in C_b$

## Porta a
- [[Teorema del limite centrale]]: dimostrazione nel caso reale

## Collegati
- [[Distribuzione di Poisson]]: limite della binomiale via funzioni caratteristiche
