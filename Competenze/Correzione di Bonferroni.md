---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Bonferroni correction", "disuguaglianza di Bonferroni", "Bonferroni inequality", "intervalli simultanei", "simultaneous intervals", "confronti multipli", "multiple comparisons", "copertura globale"]
tags: [competenza, area/statistica]
---

# Correzione di Bonferroni

> Per avere copertura globale almeno $1-\alpha$ su $q$ intervalli di confidenza costruiti separatamente, basta dare a ciascuno livello $1-\alpha/q$; funziona qualunque sia la dipendenza tra gli intervalli.

## Definizione / enunciato
Per eventi qualsiasi $P(\bigcup_iA_i)\le\sum_iP(A_i)$. Quindi, se $[\hat\theta_{iL},\hat\theta_{iH}]$ ha livello $1-\alpha_i$ per $\theta_i$, $i=1,\dots,q$, il rettangolo $R^*$ prodotto soddisfa (libro, cap. 11, Teorema 11.6)
$$P\bigl(R^*\ni(\theta_1,\dots,\theta_q)\bigr)\ge1-\sum_{i=1}^q\alpha_i ;$$
con $\alpha_i=\alpha/q$ (**correzione di Bonferroni**) la copertura globale è almeno $1-\alpha$.

## Formule chiave
Per $q$ coefficienti del modello lineare si usano gli intervalli $t$ del singolo coefficiente, ciascuno al livello $1-\alpha/q$ (la forma esplicita del quantile è da verificare sul PDF).

## Intuizione
Si applica la disuguaglianza agli eventi "l'intervallo $i$ sbaglia": la probabilità che almeno uno sbagli non supera la somma delle probabilità d'errore. È conservativa: per $q$ grande gli intervalli diventano troppo larghi.

## Come si usa
Due intervalli, uno al 95% e uno al 90% (libro, Es. `c11-bonferroni`): il rettangolo ha copertura almeno $1-0.05-0.10=85\%$; se i due intervalli fossero indipendenti sarebbe $0.95\cdot0.90=85.5\%$. Confronto grafico con l'ellisse di confidenza per $(\beta_0,\beta_1)$: il rettangolo di Bonferroni ignora la correlazione tra le stime, l'ellisse no. Nell'ANOVA i confronti a coppie si correggono con Bonferroni o, più efficientemente, con Tukey.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 11, §11.4 (Teorema 11.6, p. 185); richiamato nel cap. 13 per i confronti multipli. Fonti: `Libri/Modelli statistici/capitoli/cap11.tex`; `magistrale/Modelli statistici/251126 Regioni di confidenza.pdf`.

## Prerequisiti
- [[Intervallo di confidenza]]: gli intervalli da combinare
- [[Spazio di probabilità]]: subadditività della probabilità

## Porta a
- [[Metodo di Tukey]]: confronti a coppie con copertura esatta

## Collegati
- [[Regione di confidenza ellissoidale]]: regione congiunta esatta
- [[Inferenza sui coefficienti di regressione]]: intervalli separati per i coefficienti
