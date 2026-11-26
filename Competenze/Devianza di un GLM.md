---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["deviance", "devianza residua", "residual deviance", "devianza nulla", "null deviance", "modello saturo", "saturated model", "test della devianza", "deviance test", "teorema di Wilks", "residui di devianza", "residui di Pearson"]
tags: [competenza, area/statistica]
---

# Devianza di un GLM

> Misura di quanto un GLM si allontana dal modello saturo (che riproduce i dati): la differenza di devianza tra due modelli annidati è il test del rapporto di verosimiglianza, asintoticamente chi-quadro.

## Definizione / enunciato
Il **modello saturo** ha un parametro per osservazione, $\hat\mu_i=y_i$, e la massima log-verosimiglianza $L(\hat{\boldsymbol\beta}_{\max};\mathbf y)$. La **devianza** è (libro, cap. 17, Def. 17.9)
$$D=2\bigl(L(\hat{\boldsymbol\beta}_{\max};\mathbf y)-L(\hat{\boldsymbol\beta};\mathbf y)\bigr)\ge0;$$
quella del modello con sola intercetta è la **devianza nulla**. **Test della devianza** (Teorema 17.10): se il modello ridotto $M_0$ ($q$ parametri) è vero, $\Delta D=D_0-D_1\to\chi^2(p-q)$; si rifiuta $M_0$ se $\Delta D>\chi^2_\alpha(p-q)$, altrimenti si sceglie il modello più parsimonioso.

## Formule chiave
- Caso normale: $D=\mathrm{RSS}/\sigma^2$ e, stimando $\sigma^2$, si ritorna al test $F$ dei modelli annidati.
- Residui di Pearson e di devianza; AIC per confronti anche non annidati.
- In R: `anova(m0, m1, test = "Chisq")`; in `summary(glm)` "Null deviance" e "Residual deviance".

## Intuizione
È l'analogo della somma dei quadrati dei residui per i GLM: piccola se il modello è vicino ai dati. Confrontata con i gradi di libertà residui dice anche se c'è sovradispersione.

## Come si usa
- Taglio cesareo (libro, §17.6): devianza nulla 554.52 su 399 g.d.l., residua 489.06 su 393, AIC 503.06.
- Warpbreaks (§17.7): devianza nulla 297.37 su 53, residua 210.39 su 50, $\Delta D=86.98$ con 3 g.d.l. (i predittori servono); ma $210.39$ è molto più dei 50 g.d.l., quindi il modello non si adatta (p-value $\approx10^{-21}$); con l'interazione $182.31$ su 48 ($\Delta D=28.09$, 2 g.d.l.), ancora sovradisperso.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 17, §17.5 (Def. 17.9, Teorema 17.10, pp. 288-289). Fonti: `Libri/Modelli statistici/capitoli/cap17.tex`; `magistrale/Modelli statistici/codici/251211 GLM.pdf`; codici `magistrale/Modelli statistici/codici/251211 regressione logistica.R`, `codici/251218 PoissonGlm.R`.

## Prerequisiti
- [[Modello lineare generalizzato]]: modelli da confrontare
- [[Funzione di verosimiglianza]]: log-verosimiglianze massimizzate
- [[Test del rapporto di verosimiglianza]]: $\Delta D$ è $-2\log\Lambda$

## Porta a
- [[Sovradispersione]]: devianza residua molto maggiore dei gradi di libertà

## Collegati
- [[Confronto di modelli annidati]]: caso normale, test $F$
- [[Criteri di informazione AIC e BIC]]: confronto tra modelli non annidati
- [[Distribuzione chi-quadro]]: legge asintotica di $\Delta D$
- [[Modello log-lineare]]: devianza come $G^2$ per l'indipendenza
