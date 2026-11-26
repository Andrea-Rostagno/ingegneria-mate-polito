---
tipo: competenza
area: statistica
corsi: [Prova finale]
livello: [triennale]
aliases: ["goodness-of-fit for copulas", "test di bontà di adattamento per copule", "copula empirica", "empirical copula", "distanza di Cramér-von Mises", "Cramér-von Mises statistic", "diagnostica grafica della copula", "validazione della copula"]
tags: [competenza, area/statistica]
---

# Bontà di adattamento di una copula

> Per validare una copula stimata si confronta la copula empirica dei ranghi con la copula del modello, graficamente (scatter dei ranghi contro un campione simulato) o con una distanza tipo Cramér-von Mises.

## Definizione / enunciato
**Copula empirica** (Pellerey, slide 91): per il campione $(X_i,Y_i)$ con ranghi $(R_i,S_i)$,
$$C_n(u,v)=\frac1n\sum_{i=1}^n\mathbb 1\Big(\frac{R_i}{n+1}\le u,\ \frac{S_i}{n+1}\le v\Big).$$
È una funzione a salti, quindi non è una copula. Se la vera copula $C$ ha derivate parziali prime continue su $(0,1)^2$, il processo $\sqrt n\,(C_n-C)$ converge debolmente a un processo gaussiano centrato: si possono costruire test come il Kolmogorov-Smirnov univariato.

## Formule chiave
Statistica di Cramér-von Mises per la copula candidata $C_j$ (slide 103):
$$S_j=\sum_{i=1}^n\Big(C_n\Big(\frac{R_i}{n+1},\frac{S_i}{n+1}\Big)-C_j\Big(\frac{R_i}{n+1},\frac{S_i}{n+1}\Big)\Big)^2 .$$
Altre statistiche usano la massima differenza assoluta o l'integrale della differenza assoluta.

## Intuizione
L'inferenza su un modello di copula ha tre fasi (slide 92): **selezione** (statistiche descrittive), **stima**, **validazione** (selezione e test di bontà di adattamento). Fra più copule $C_1,\dots,C_k$ stimate si chiede quale si adatti meglio alle osservazioni secondo un criterio scelto dall'utente.

## Come si usa
- **Diagnostica grafica** (slide 102): si confronta lo scatter $\big(\frac{R_i}{n+1},\frac{S_i}{n+1}\big)$ con un campione artificiale della stessa numerosità generato da $C_j$. È ciò che fa `copula-analysis.py` (sezione 9): "volatilità originali uniformate" accanto alla "copula simulata" scelta.
- Nella tesi la selezione finale non usa test formali ma criteri di informazione (AIC, BIC; WAIC nel caso bayesiano); la tesi confronta anche visivamente le trasformazioni parametrica ed empirica (fig. 4.1).

## Nei corsi
- **Prova finale** (triennale): validazione grafica negli script; teoria della copula empirica e dei test dalle slide del relatore. Fonti: `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 90-92, 101-103); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/copula-analysis.py` (sezioni 8-9); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.4.2, p. 34; §5.3.5, p. 85).

## Prerequisiti
- [[Pseudo-osservazioni]]: ranghi normalizzati
- [[Test d'ipotesi]]: struttura del test di adattamento
- [[Copula]]: modello candidato $C_j$

## Porta a
- [[Stima delle copule sul DAX]]: validazione della copula scelta

## Collegati
- [[Criteri di informazione AIC e BIC]]: selezione per penalizzazione, alternativa ai test
- [[Simulazione da una copula]]: genera il campione artificiale del confronto grafico
- [[Campione casuale]]: f.d.r. empirica univariata, analogo unidimensionale
