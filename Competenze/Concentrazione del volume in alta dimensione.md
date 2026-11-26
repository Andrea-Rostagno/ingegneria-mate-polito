---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["volume della palla in dimensione p", "volume of the ball", "volume del guscio", "shell volume", "angoli dell'ipercubo", "massa della gaussiana in alta dimensione", "concentration phenomena"]
tags: [competenza, area/probabilita]
---

# Concentrazione del volume in alta dimensione

> In dimensione alta il volume della palla unitaria tende a zero, quasi tutto il volume sta vicino al bordo e la massa di una gaussiana sta lontano dal suo massimo: l'intuizione geometrica di $\mathbb R^2$ e $\mathbb R^3$ fallisce.

## Definizione / enunciato
Volume della palla di raggio $r$ in $\mathbb R^p$:
$$V_p(r)=r^p\frac{\pi^{p/2}}{\Gamma(p/2+1)} .$$
La figura delle slide ($p\le100$) mostra che il volume della palla unitaria, dopo un massimo per dimensioni piccole, tende a 0.

## Formule chiave
- **Ricoprimento:** per coprire $[0,1]^p$ con $n$ palle unitarie serve $n\ge\frac1{V_p}=\frac{\Gamma(p/2+1)}{\pi^{p/2}}\underset{p\to\infty}{\sim}\Big(\frac p{2\pi e}\Big)^{p/2}\sqrt{p\pi}$; per $p=100$, $n=42\cdot10^{39}$.
- **Guscio:** per $X$ uniforme nella palla unitaria, $P(X\in S_{0.9}(p))=1-0.9^p\to1$ per $p\to\infty$.
- **Gaussiana standard:** massa nell'anello fra $r$ e $r+dr$
$$P[r\le\|X\|\le r+dr]\simeq\frac{e^{-r^2/2}}{(2\pi)^{p/2}}\,r^{p-1}p\,dr\,V_p(1),$$
massima per $r=\sqrt{p-1}$.

## Intuizione
Il volume "fugge" verso gli angoli dell'ipercubo e verso il bordo delle palle: campionando uniformemente nel cubo quasi tutti i punti stanno negli angoli. Per la gaussiana, la densità è massima in 0 ma quasi tutta la massa sta su una sfera di raggio circa $\sqrt p$, in zone dove la densità è piccolissima rispetto al massimo.

## Come si usa
Conseguenza per la stima: i campioni sono più vicini al bordo dello spazio dei campioni che agli altri campioni, quindi vicino ai bordi del training set si deve **estrapolare** invece di interpolare, e la previsione diventa molto più difficile.

## Nei corsi
- **Matematica per l'AI** (triennale): sezione "In high dimensional spaces, nobody can hear you scream" di `triennale/ANNO 3/matematica AI/curse.pdf` (p. 20-35).

## Prerequisiti
- [[Maledizione della dimensionalità]]: il fenomeno che questi calcoli quantificano
- [[Distribuzione normale]]: la gaussiana standard multivariata
- [[Distribuzione Gamma]]: la funzione $\Gamma$ nel volume della palla

## Porta a
- [[Legge di Marchenko-Pastur]]: anche gli autovalori campionari si "spargono"

## Collegati
- [[Vettore gaussiano]]: la norma di un vettore gaussiano standard si concentra
