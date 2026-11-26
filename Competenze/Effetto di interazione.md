---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["interaction effect", "interazione", "interaction", "termine di interazione", "ANCOVA", "analysis of covariance", "analisi della covarianza", "interazione fattore-covariata", "effetto marginale"]
tags: [competenza, area/statistica]
---

# Effetto di interazione

> Termine $\beta_4x_{i,1}x_{i,2}$ che fa dipendere l'effetto di una covariata dal valore di un'altra; con fattori e covariate continue insieme si ottiene un modello ANCOVA.

## Definizione / enunciato
Modello con interazione:
$$y_i=\beta_1+\beta_2x_{i,BMI}+\beta_3x_{i,length}+\beta_4x_{i,BMI}x_{i,length}+\epsilon_i .$$
Aumentando di 1 la lunghezza a parità del resto, il coefficiente della lunghezza si somma a $\beta_4x_{i,BMI}$: la slide scrive $y_{i'}=y_i+\beta_2+\beta_4x_{i,BMI}$ e chiama $\beta_2$ l'effetto "marginale", ma con il modello come scritto il coefficiente della lunghezza è $\beta_3$ (da verificare sul PDF). L'incremento dovuto a $\beta_4$ dipende da $x_{i,BMI}$; se $\beta_4=0$ la relazione fra lunghezza e $y$ non cambia con il BMI.
Un modello con covariate continue, interazioni e variabili fattore si chiama **ANCOVA**.

## Formule chiave
Interazione fattore-covariata: colonne $x_{i}\mathbb 1_{\text{gruppo }k}$ danno a ogni gruppo il proprio coefficiente angolare,
$$\text{gruppo 1: }N(\beta_1+\beta_2x_i,\sigma^2),\quad\text{gruppo 2: }N(\beta_1+(\beta_2+\beta_3)x_i,\sigma^2),\quad\text{gruppo 3: }N(\beta_1+(\beta_2+\beta_4)x_i,\sigma^2);$$
aggiungendo anche le indicatrici dei gruppi ogni gruppo ha intercetta e pendenza proprie. Testare $\beta_3=\beta_4=0$ verifica se la relazione cambia fra gruppi. In R: `y ~ x1 + x2 + x1:x2`.

## Intuizione
Senza interazione le rette dei gruppi (o per diversi valori di una covariata) sono parallele; l'interazione permette pendenze diverse.

## Come si usa
Pinguini, profondità del becco contro lunghezza delle pinne e log della massa: senza interazione l'effetto marginale delle pinne è negativo ($-0.10238$), con l'interazione diventa positivo; aggiungendo il sesso (ANCOVA) $R^2$ passa a 0.6617.

## Nei corsi
- **Prob e statistica** (triennale): slide "Anova, Ancova, interazione, paradossi". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Anova Ancova lez8.pdf` (Regressione con Interazione e Fattori XXI-XXVI; Paradosso di Simpson IV-VIII).
- **Modelli statistici** (magistrale): due predittori interagiscono se l'effetto di uno dipende dal valore dell'altro; si aggiunge il prodotto delle colonne, `y ~ x1 * x2` = `x1 + x2 + x1:x2` (libro, cap. 10, Def. 10.3). Predittore quantitativo × binario: rette parallele contro rette con pendenze diverse; con l'interazione il coefficiente "principale" è l'effetto al livello di riferimento. Isolamento termico (dati `whiteside` di `MASS`, $n=56$ settimane): `cons ~ when + temp` contro `cons ~ when * temp`. Advertising: con TV e radio la pendenza della TV vale 0.43 senza radio, 0.87 con 20 e 1.31 con 40 di spesa in radio. Nell'ANOVA a due vie è il termine $(\alpha\gamma)_{ij}$. Fonti: `Libri/Modelli statistici/capitoli/cap10.tex` (§10.2, p. 165); codici `magistrale/Modelli statistici/codici/251119 Regressione Lineare Insulate.R`, `codici/251119 Regressione Lineare Advertising.R`.

## Prerequisiti
- [[Analisi della varianza]]: codifica dei fattori
- [[Regressione lineare]]: interpretazione dei coefficienti

## Porta a
- [[Paradosso di Simpson]]: pendenze per gruppo opposte a quella globale
- [[ANOVA a due vie]]: interazione tra due fattori (Modelli statistici)
- [[Confronto di modelli annidati]]: test dell'interazione, modello additivo contro modello con interazione (Modelli statistici)
