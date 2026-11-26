---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Ampère-Laplace law", "prima legge elementare di Laplace", "campo magnetico di una carica in moto", "permeabilità magnetica del vuoto", "μ0", "dB = μ0 I dl × u_r / 4πr²"]
tags: [competenza, area/fisica]
---

# Legge di Ampère-Laplace

> Legge sperimentale che dà il campo magnetico generato da un elemento di corrente $I\,d\vec l$ (o da una carica in moto): integrata sul circuito fornisce il campo di qualsiasi corrente.

## Definizione / enunciato
Le sorgenti del campo magnetico sono le cariche in moto. Una carica $q$ con velocità $\vec v$ genera nel punto $\vec r$ un campo proporzionale a $q\vec v\times\vec u_r$ e a $1/\Delta r^2$, con $\Delta\vec r=\vec r-\vec r'$; le linee di campo sono circonferenze attorno alla direzione del moto. $\mu_0$ è la permeabilità magnetica del vuoto. Due osservatori in moto relativo misurano velocità diverse e quindi campi magnetici diversi.
In un filo ci sono $n$ cariche per unità di volume con velocità $\vec v$: un tratto di sezione $S$ e lunghezza $dl$ (volume $S\,dl$) genera il campo $d\vec B$; sommando su tutto il circuito si ottiene la **legge di Ampère-Laplace**, ricavata sperimentalmente.

## Formule chiave
$$\vec B=\frac{\mu_0}{4\pi}\frac{q\vec v\times\vec u_r}{\Delta r^2}=\frac{\mu_0}{4\pi}q\vec v\times\frac{\vec r-\vec r'}{|\vec r-\vec r'|^3},\qquad \mu_0=4\pi\,10^{-7}\ \mathrm{m\,kg\,C^{-2}}$$
$$\vec E=\frac1{4\pi\varepsilon_0}\frac q{\Delta r^2}\vec u_r\;\Rightarrow\;\vec B=\mu_0\varepsilon_0\,\vec v\times\vec E=\frac1{c^2}\vec v\times\vec E$$
$$d\vec B=\frac{\mu_0}{4\pi}\frac{nq(S\,dl)\vec v\times\vec u_r}{\Delta r^2}=\frac{\mu_0}{4\pi}I\frac{d\vec l\times\vec u_r}{\Delta r^2},\qquad \vec B=\frac{\mu_0}{4\pi}I\int_{circuito}d\vec l\times\frac{\vec r-\vec r'}{|\vec r-\vec r'|^3}$$

## Intuizione
Il campo magnetico è un effetto "relativistico" del campo elettrico della stessa carica, ridotto di $v/c^2$. Per cariche con velocità $v,v'$ il rapporto tra forza magnetica ed elettrica è $F_M/F_E=vv'/c^2$: per elettroni atomici con $v\sim10^5$ m/s le slide riportano $F_M/F_E\approx10^{-7}$.

## Come si usa
Si scrive $d\vec B$ per un elemento del circuito, si sceglie la geometria (angoli, distanze) e si integra: il caso classico è il filo rettilineo infinito (legge di Biot-Savart). Dalla stessa espressione si calcolano la divergenza e il rotore di $\vec B$.

## Nei corsi
- **Fisica 2** (triennale): lezione 15&16, campo di una carica in moto, confronto tra interazione elettrica e magnetica, campo di una corrente. Fonti: `triennale/ANNO 2/fisica 2/lezioni/15&16. LEZIONE.pdf` (pp. 2-7).

## Prerequisiti
- [[Corrente elettrica]]: un tratto di filo contiene nqS dl cariche in moto
- [[Prodotto vettoriale]]: dB è proporzionale a dl × u_r

## Porta a
- [[Legge di Biot-Savart]]: si integra dB lungo il filo infinito
- [[Legge di Gauss per il campo magnetico]]: dalla divergenza dell'espressione di B

## Collegati
- [[Campo elettrostatico]]: B = v × E / c² per la stessa carica
