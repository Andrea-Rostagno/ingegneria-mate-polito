---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["normal-normal conjugacy", "prior normale per la media", "normale con varianza nota", "precisione", "additività della precisione", "intervallo di credibilità normale"]
tags: [competenza, area/statistica]
---

# Coniugatezza normale-normale

> Per un campione normale con varianza nota, una prior normale sulla media dà una posteriori normale, con precisione pari alla somma delle precisioni e media pari alla media delle medie pesata con le precisioni.

## Definizione / enunciato
Siano $X_1,\dots,X_n\mid\mu\overset{iid}\sim N(\mu,1/\tau)$ con precisione $\tau=1/\sigma^2$ nota e $\mu\sim N(\mu_0,1/\tau_0)$. Allora (libro, cap. 3, Teorema 3.13)
$$\mu\mid x_1,\dots,x_n\sim N\Bigl(\frac{\tau_0\mu_0+n\tau\bar x}{\tau_0+n\tau},\ \frac1{\tau_0+n\tau}\Bigr).$$
La dimostrazione completa il quadrato nell'esponente di $\exp\{-\frac{\tau_0}2(\mu-\mu_0)^2-\frac\tau2\sum(x_i-\mu)^2\}$.

## Formule chiave
- **La precisione è additiva**: precisione a posteriori $=\tau_0+n\tau$; la prior vale $\tau_0/\tau=\sigma^2/\sigma_0^2$ osservazioni fittizie.
- Media a posteriori $=$ media pesata di $\mu_0$ e $\bar x$ con pesi $\tau_0$ e $n\tau$.
- Con prior vaga ($\tau_0\to0$) si ritrova $N(\bar x,\sigma^2/n)$ e l'intervallo di credibilità coincide numericamente con quello di confidenza $z$.

## Intuizione
Ogni fonte di informazione pesa quanto è precisa: una prior larga conta poco, molte misure contano molto. È il "caso prototipico" che il libro usa nel cap. 2 per confrontare le due scuole.

## Come si usa
- Analisi di laboratorio (libro, Es. `c03-normale-lab`): $\sigma=15$, prior $N(100,10^2)$, $n=9$, $\bar x=110$. Precisioni $\tau_0=0.01$, $n\tau=0.04$; posteriori con precisione 0.05 (varianza 20) e media $\tilde\mu=(0.01\cdot100+0.04\cdot110)/0.05=108$; peso della prior 0.2, pari a 2.25 misure.
- Frequentista contro bayesiano (Es. `c02-confronto-normale`): $\sigma=2$, $n=10$, $\bar x=5.2$, prior $N(4,1)$: intervallo di confidenza $(3.960;\ 6.440)$; posteriori con precisione 3.5 e deviazione standard 0.535, media spostata verso 4. I due intervalli si interpretano diversamente.
- Con media e precisione entrambe incognite la posteriori congiunta non è nota: si usa il campionamento di Gibbs, alternando questa condizionata e la Gamma per $\tau$.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 2 §2.4 e cap. 3 §3.7 (Teorema 3.13, p. 49); in JAGS `dnorm(media, precisione)`. Fonti: `Libri/Modelli statistici/capitoli/cap02.tex`, `cap03.tex`; `magistrale/Modelli statistici/PDF corretti/251001stavsfreq.pdf`.

## Prerequisiti
- [[Distribuzione normale]]: modello e prior
- [[Famiglia coniugata]]: schema dell'aggiornamento

## Porta a
- [[Algoritmo di Metropolis-Hastings]]: condizionata completa di $\mu$ nel Gibbs
- [[Elicitazione della prior]]: sensibilità della posteriori alla scelta di $\mu_0,\tau_0$
- [[Modello gerarchico bayesiano]]: prior normali a più livelli

## Collegati
- [[Intervallo di confidenza]]: confronto frequentista
- [[Condizionamento di un vettore gaussiano]]: stesso risultato visto come condizionata di $(\mu,\bar X)$ congiuntamente normali
