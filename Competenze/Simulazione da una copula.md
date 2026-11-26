---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["copula simulation", "simulating copulas", "campionamento da una copula", "sampling from a copula", "simulazione Monte Carlo con copule", "scenari simulati", "stress test con copule"]
tags: [competenza, area/probabilita]
---

# Simulazione da una copula

> Si generano coppie uniformi con la dipendenza della copula e poi si applicano le quantili marginali: così si simulano scenari congiunti con marginali e dipendenza scelte separatamente.

## Definizione / enunciato
Schema generale (Sklar + trasformazione integrale): se $(U,V)\sim C$ e $F,G$ sono marginali, $(F^{-1}(U),G^{-1}(V))$ ha f.d.r. $C(F(x),G(y))$.
**Copula gaussiana** (tesi §6.1.3):
1. si generano normali bivariate con media 0 e covarianza $\Sigma=\begin{pmatrix}1&\rho\\\rho&1\end{pmatrix}$;
2. si trasformano in uniformi con la CDF normale, $U=\Phi(Z)$;
3. si convertono in rendimenti con le quantili marginali (nella tesi normali, "per semplicità").

## Formule chiave
- **Copula t** (`copula-analysis.py`, sezione 8): $Z$ normale bivariata come sopra, $W=\chi^2_\nu/\nu$, $T=Z/\sqrt W$, $U=t_\nu(T)$.
- Rendimento giornaliero nella tesi: $r=\Phi^{-1}_{\mu/252,\ \sigma/\sqrt{252}}(U)$, con `stats.norm.ppf(u, mu/252, sigma/sqrt(252))`.
- Aggiornamento del prezzo: $P_t=P_{t-1}(1+r_t)$, $P_0=100$.
- Archimedee: il codice ha formule dirette per Clayton e Frank e un'approssimazione dichiarata per Gumbel; non le riporto perché non sono verificate sulle fonti teoriche.

## Intuizione
La copula si simula sempre su $[0,1]^2$; solo alla fine si sceglie che legge dare alle componenti. Con la stessa correlazione, copule diverse producono numeri molto diversi di eventi estremi congiunti (Pellerey, slide 51: 51 contro 92 punti nell'angolo in alto a destra per gaussiana e Gumbel).

## Come si usa
- **Portafoglio long** (§6.1.3): 10000 simulazioni, 252 giorni, copula gaussiana con $\rho=0.95$; a ogni passo si rigenera una coppia di uniformi per Open e Close.
- **Stress test** (`copula-analysis.py`, sezione 11, non nella tesi): 5000 scenari dalla copula scelta, riportati alle volatilità con l'inversa della CDF empirica; sono "di stress" gli scenari sopra il 95° percentile della volatilità di portafoglio.
- **Confronto grafico** con i dati uniformati per validare la copula.

## Nei corsi
- **Prova finale** (triennale): §6.1.3 "Simulazione Monte Carlo con la copula stimata". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 101-104); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/copula-analysis.py` (sezioni 8 e 11); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/long-portfolio-simulations.py`; `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 18, 51).

## Prerequisiti
- [[Trasformazione integrale di probabilità]]: dalle uniformi alle marginali
- [[Vettore gaussiano]]: si simula una normale bivariata
- [[Copula gaussiana]]: copula simulata nella tesi

## Porta a
- [[Value at Risk]]: percentile dei valori simulati
- [[Expected Shortfall]]: media degli scenari peggiori

## Collegati
- [[Metodo Monte Carlo]]: stima per media sugli scenari
- [[Copula t di Student]]: simulazione per mescolanza con una chi-quadro
- [[Teorema di Sklar]]: giustifica la costruzione
