---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Tukey's method", "Tukey HSD", "honestly significant differences", "intervalli di Tukey", "range studentizzato", "studentized range distribution", "TukeyHSD", "qtukey", "confronti multipli a coppie"]
tags: [competenza, area/statistica]
---

# Metodo di Tukey

> Intervalli simultanei per tutte le differenze tra le medie dei gruppi in un'ANOVA a una via bilanciata, con copertura globale esattamente $1-\alpha$, basati sulla distribuzione del range studentizzato.

## Definizione / enunciato
Se $Z_1,\dots,Z_I\overset{iid}\sim N(0,1)$ e $W\sim\chi^2(m)$ è indipendente, $Q=\frac{\max_iZ_i-\min_iZ_i}{\sqrt{W/m}}$ ha la **distribuzione del range studentizzato** con parametri $I$ e $m$; $q_\alpha(I,m)$ è il suo punto estremo superiore (in R `qtukey(1-alpha, I, m)`). Gli **intervalli di Tukey** (HSD) sono (libro, cap. 13, Def. 13.6)
$$\bar Y_{i\cdot}-\bar Y_{j\cdot}\pm q_\alpha\bigl(I,\,I(K-1)\bigr)\sqrt{\frac{\mathrm{MSR}}K},$$
con copertura simultanea esattamente $1-\alpha$.

## Formule chiave
Verifica: le $\bar Y_{i\cdot}-\mu_i$ sono i.i.d. $N(0,\sigma^2/K)$, indipendenti da $\mathrm{MSR}$, con $I(K-1)\mathrm{MSR}/\sigma^2\sim\chi^2(I(K-1))$; quindi $\max_{i,j}|(\bar Y_{i\cdot}-\mu_i)-(\bar Y_{j\cdot}-\mu_j)|/\sqrt{\mathrm{MSR}/K}$ ha esattamente la legge del range studentizzato.

## Intuizione
Invece di correggere ogni confronto separatamente (Bonferroni, conservativo), si controlla direttamente la differenza più grande: se quella sta nell'intervallo, ci stanno tutte.

## Come si usa
Dopo un test $F$ dell'ANOVA a una via che rifiuta l'uguaglianza delle medie, per sapere *quali* gruppi differiscono. In R `TukeyHSD(aov(...))`: la colonna `p adj` è il p-value aggiustato per la molteplicità, cioè il più piccolo $\alpha$ al quale l'intervallo della coppia esclude lo zero.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 13, §13.2 (Def. 13.6, p. 217). Fonti: `Libri/Modelli statistici/capitoli/cap13.tex`; `magistrale/Modelli statistici/251204-Piani-Fattoriali.pdf`.

## Prerequisiti
- [[Analisi della varianza]]: modello a una via e MSR
- [[Statistiche d'ordine]]: massimo e minimo delle medie standardizzate

## Porta a
- [[Piano a blocchi randomizzati]]: confronti tra trattamenti dopo il test

## Collegati
- [[Correzione di Bonferroni]]: alternativa conservativa
- [[Distribuzione t di Student]]: stesso schema normale su radice di chi-quadro
