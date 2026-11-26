---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["intraclass correlation", "ICC", "correlazione intra-classe", "coefficiente di correlazione intraclasse", "simmetria composta", "compound symmetry"]
tags: [competenza, area/statistica]
---

# Correlazione intraclasse

> Nel modello con intercetta casuale due osservazioni dello stesso gruppo sono correlate con $\rho=\sigma_b^2/(\sigma_b^2+\tau^2)$: la frazione della variabilità totale dovuta alle differenze tra gruppi.

## Definizione / enunciato
Nel modello $y_{ij}=\mathbf x_{ij}'\boldsymbol\beta+b_i+\varepsilon_{ij}$, $b_i\sim N(0,\sigma_b^2)$, $\varepsilon_{ij}\sim N(0,\tau^2)$ (libro, cap. 14, Prop. 14.3):
$$\operatorname{Var}(y_{ij})=\sigma_b^2+\tau^2,\qquad\operatorname{Cov}(y_{ij},y_{ik})=\sigma_b^2\ (j\ne k),\qquad\operatorname{Cov}(y_{ij},y_{hk})=0\ (i\ne h),$$
cioè $\mathbf V_i=\sigma_b^2\mathbf 1\mathbf 1'+\tau^2\mathbf I_{n_i}$, e la **correlazione intraclasse** è
$$\rho=\frac{\sigma_b^2}{\sigma_b^2+\tau^2}.$$

## Formule chiave
Struttura di covarianza a "simmetria composta": stessa varianza sulla diagonale, stessa covarianza fuori diagonale dentro il gruppo, zero tra gruppi diversi.

## Intuizione
L'intercetta casuale $b_i$ è condivisa da tutte le osservazioni del gruppo: è la componente comune che le rende simili. Se $\rho$ è vicino a 0 il raggruppamento è irrilevante; se è vicino a 1 le osservazioni dello stesso gruppo sono quasi ripetizioni.

## Come si usa
Scuole (libro, Es. `c14-scuole`): varianza delle scuole 94.33, residua 21.27, quindi $\hat\rho=94.33/(94.33+21.27)=0.816$: oltre l'80% della variabilità non spiegata dagli effetti fissi è dovuta alle differenze tra scuole. Esercizio tipo: scrivere $\mathbf V_i$ per un gruppo di 3 osservazioni e calcolare $\rho$ da $\sigma_b^2$ e $\tau^2$. Ignorare il raggruppamento fa trattare come indipendenti osservazioni correlate, con errori standard sbagliati.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 14, §14.2 (Prop. 14.3, p. 234). Fonti: `Libri/Modelli statistici/capitoli/cap14.tex`; `magistrale/Modelli statistici/codici/251120 Note Mixed Models.pdf`.

## Prerequisiti
- [[Modello lineare a effetti misti]]: modello con intercetta casuale
- [[Covarianza]]: calcolo di $\operatorname{Cov}(y_{ij},y_{ik})$

## Porta a
- [[Modello gerarchico bayesiano]]: interpretazione come varianza a priori dei gruppi

## Collegati
- [[Coefficiente di correlazione]]: definizione generale di correlazione
- [[Piano a blocchi randomizzati]]: blocchi trattati come casuali
