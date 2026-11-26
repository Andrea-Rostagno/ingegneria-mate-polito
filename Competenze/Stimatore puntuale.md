---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["point estimator", "stimatore", "estimator", "stima puntuale", "point estimate", "distorsione", "bias", "stimatore non distorto", "unbiased estimator", "stimatore corretto", "stima vs stimatore"]
tags: [competenza, area/statistica]
---

# Stimatore puntuale

> Una statistica $W(\mathbf X)$ usata per dire qualcosa su un parametro $\theta$; il suo valore sul campione osservato è la stima. Prima proprietà richiesta: non distorsione, $\mathbb E[W(\mathbf X)]=\theta$.

## Definizione / enunciato
**Stimatore puntuale** di $\theta$: qualsiasi funzione $W(X_1,\dots,X_n)$ del campione (è una statistica). **Stima**: il valore $W(x_1,\dots,x_n)$ assunto quando il campione è stato raccolto. Si indica spesso con il "cappello", $\hat\theta$.
**Distorsione** (bias): $\mathbb E(W(\mathbf X))-\theta$. Se è nulla per ogni $\theta$, $W$ è **non distorto** (unbiased).

## Formule chiave
- $\bar X$ è sempre non distorto per $\mathbb E[X_i]$ con dati i.i.d.: $\mathbb E\bar X=\frac1n\sum\mathbb E X_i$.
- Con $\mu$ noto, $\frac1n\sum(X_i-\mu)^2$ è non distorto per $\sigma^2$.
- $\hat\sigma^2=\frac1n\sum(X_i-\bar X)^2$ è **distorto**: $\mathbb E(\hat\sigma^2)=\frac1n(n\sigma^2-n\frac{\sigma^2}n)=\frac{n-1}n\sigma^2$.
- $S^2=\frac n{n-1}\hat\sigma^2$ è non distorto: $\mathbb E(S^2)=\sigma^2$.

## Intuizione
Uno stimatore è una v.a.: ripetendo l'esperimento dà valori diversi. Chiedere che sia non distorto significa chiedere che "in media" dia il valore giusto; per la varianza si perde un grado di libertà perché $\bar X$ è già stato stimato dai dati. Alcuni candidati sono naturali (la media campionaria per la media di una normale, non il minimo), altri no (parametri della Gamma).

## Come si usa
I risultati su $\bar X$, $\hat\sigma^2$ e $S^2$ valgono qualunque sia la legge (servono solo dati i.i.d.). Due temi: metodi per **trovare** stimatori (momenti, massima verosimiglianza) e criteri per **valutarli** (distorsione, errore quadratico medio, Cramér-Rao). In regressione $\frac1{n-2}\sum(y_i-\hat\alpha-\hat\beta x_i)^2$ sostituisce l'MLE di $\sigma^2$ perché non distorto.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali" (lezione 5 di statistica). Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Stima puntuale I-II, Distorsione I-VI).

## Prerequisiti
- [[Campione casuale]]: lo stimatore è una statistica
- [[Valore atteso]]: definizione di distorsione

## Porta a
- [[Metodo dei momenti]]: primo metodo per trovare stimatori
- [[Stimatore di massima verosimiglianza]]: secondo metodo
- [[Errore quadratico medio]]: criterio di valutazione

## Collegati
- [[Media e deviazione standard delle misure]]: $n-1$ nella deviazione standard delle misure
