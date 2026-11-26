---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["log-linear model", "modello loglineare", "modelli log-lineari", "loglinear model", "modello saturo per tabelle", "modello di indipendenza"]
tags: [competenza, area/statistica]
---

# Modello log-lineare

> Modello per le frequenze attese di una tabella di contingenza in cui il logaritmo della media di cella è somma di effetti di riga, di colonna e di interazione: l'indipendenza corrisponde ad azzerare l'interazione.

## Definizione / enunciato
Per una tabella $I\times J$ il modello saturo è (libro, cap. 16, Def. 16.17)
$$\log\mu_{ij}=\lambda+\lambda_i^X+\lambda_j^Y+\lambda_{ij}^{XY},$$
con vincoli di identificabilità analoghi a quelli dell'ANOVA; i $\lambda_{ij}^{XY}$ sono le interazioni. Il **modello di indipendenza** è quello con $\lambda_{ij}^{XY}=0$: $\log\mu_{ij}=\lambda+\lambda_i^X+\lambda_j^Y$.

## Formule chiave
È un GLM di Poisson con link logaritmico: `glm(Freq ~ X + Y, family = poisson)`; la sua devianza residua è il test del rapporto di verosimiglianza per l'indipendenza, $G^2=2\sum N_{ij}\log(N_{ij}/E_{ij})$, asintoticamente equivalente a $X^2$.

## Intuizione
Sotto indipendenza $\mu_{ij}=n\pi_{i+}\pi_{+j}$: il prodotto diventa somma sui logaritmi, come un'ANOVA a due vie senza interazione. Il modello saturo ha tanti parametri quante celle e riproduce i dati.

## Come si usa
Dati UCLA (stato socioeconomico × programma): il modello di indipendenza ha devianza residua $G^2=16.78$ con 4 g.d.l., p-value 0.0021, contro $X^2=16.60$ di Pearson (libro, §16.8). Il vantaggio emerge con tre o più variabili categoriche, dove si possono confrontare sistematicamente modelli con diverse interazioni.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 16, §16.8 (Def. 16.17, p. 279), con il collegamento al cap. 17. Fonti: `Libri/Modelli statistici/capitoli/cap16.tex`.

## Prerequisiti
- [[Test chi-quadro di indipendenza e omogeneità]]: ipotesi di indipendenza
- [[Regressione di Poisson]]: GLM con link logaritmico

## Porta a
- [[Devianza di un GLM]]: confronto tra modello di indipendenza e saturo

## Collegati
- [[ANOVA a due vie]]: stessa struttura di effetti principali e interazione
- [[Modello lineare generalizzato]]: il modello log-lineare è un GLM
