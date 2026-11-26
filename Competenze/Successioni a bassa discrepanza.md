---
tipo: competenza
area: numerica
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["low-discrepancy sequences", "low discrepancy sequences", "quasi-Monte Carlo", "quasi-random sequences", "sequenze quasi-casuali", "discrepanza", "discrepancy", "successione di Van der Corput", "Van der Corput sequence", "successione di Halton", "Halton sequence", "successione di Sobol", "Sobol sequence", "successione di Faure"]
tags: [competenza, area/numerica]
---

# Successioni a bassa discrepanza

> Successioni deterministiche che riempiono l'ipercubo $[0,1]^m$ in modo più uniforme dei numeri pseudocasuali: sono la base del metodo quasi-Monte Carlo.

## Definizione / enunciato
Dati $N$ punti in $I^m=[0,1]^m$ e i rettangoli $G_{\mathbf X}=[0,x_1)\times\dots\times[0,x_m)$ di volume $x_1\cdots x_m$, con $S_N(G)$ il numero di punti in $G$, una definizione di **discrepanza** è
$$D(\mathbf x_1,\dots,\mathbf x_N)=\sup_{\mathbf X\in I^m}\big|S_N(G_{\mathbf X})-N\,x_1x_2\cdots x_m\big| .$$
Una successione ben distribuita ha discrepanza bassa.

## Formule chiave
- **Van der Corput** in base prima $b$: se $n=\sum_{k=0}^md_kb^k$, si riflettono le cifre dopo la virgola,
$$h(n,b)=\sum_{k=0}^md_k\,b^{-(k+1)} .$$
- **Halton** in $m$ dimensioni: una base prima diversa per ogni dimensione (es. `haltonset(3)` produce 0, 0.5, 0.25, 0.75, ... in base 2 e 0, 0.3333, 0.6667, 0.1111, ... in base 3).
- **Faure**: un'unica base prima maggiore della dimensione, con permutazioni delle successioni di Van der Corput.
- **Sobol**: solo base 2, permutata con un meccanismo legato a polinomi in aritmetica binaria.

Errore di integrazione: $O(1/\sqrt N)$ per Monte Carlo, $O\big((\ln N)^m/N\big)$ per certe successioni a bassa discrepanza.

## Intuizione
I punti pseudocasuali formano grumi e vuoti; le successioni quasi-casuali sono costruite per riempire i buchi lasciati dai punti precedenti. Il vantaggio si perde in dimensione alta, dove Halton richiederebbe basi grandi.

## Come si usa
Le slide confrontano a occhio 100 punti `rand` con Halton in basi 2 e 7 (copertura più uniforme) e mostrano due errori: basi non prime (2 e 4) e basi grandi (109 e 113) danno schemi regolari e cattivi. Nel moto browniano geometrico, Halton usato ingenuamente produce traiettorie insensate, mentre Sobol con scrambling `MatousekAffineOwen` e `skip` 100 funziona bene. Il metodo di accettazione-rifiuto non si combina bene con il quasi-Monte Carlo perché non si conosce a priori quante uniformi servono per ogni variabile.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Low discrepancy sequences" e simulazione quasi-Monte Carlo del GBM. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 19-28, 32); `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 34-36).

## Prerequisiti
- [[Numeri pseudo-casuali]]: il termine di confronto
- [[Metodo Monte Carlo]]: integrazione sull'ipercubo unitario

## Porta a
- [[Moto browniano geometrico]]: simulazione quasi-Monte Carlo di traiettorie

## Collegati
- [[Metodo accept-reject]]: dimensione dell'integrale non nota a priori, problema per il quasi-MC
- [[Formule gaussiane]]: altra integrazione deterministica, con nodi scelti
