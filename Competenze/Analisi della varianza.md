---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["ANOVA", "analysis of variance", "modello ANOVA", "variabili fattore", "factor variables", "variabili dummy", "dummy variables", "corner point", "livello di riferimento", "contrasti", "contrasts", "matrice del disegno", "design matrix", "identificabilità"]
tags: [competenza, area/statistica]
---

# Analisi della varianza

> Regressione su covariate **categoriche** (fattori) codificate con variabili indicatrici: confronta le medie di più gruppi rispetto a un gruppo di riferimento (corner point).

## Definizione / enunciato
Nel modello $\mathbf y=X\boldsymbol\beta+\boldsymbol\epsilon$, $\boldsymbol\epsilon\sim N(\mathbf 0,\sigma^2I)$, la **matrice del disegno** $X$ deve rappresentare le covariate. Un fattore a due livelli si codifica con $x_i\in\{0,1\}$: $y_i\sim N(\alpha,\sigma^2)$ nel gruppo 0 e $N(\alpha+\beta,\sigma^2)$ nel gruppo 1, quindi $\beta=0$ significa nessuna differenza. Con $K$ livelli si usano $K-1$ indicatrici: $y_i=\beta_1+\beta_2x_{i,2}+\beta_3x_{i,3}+\epsilon_i$ e, con tre specie,
$$\text{gruppo 1: }N(\beta_1,\sigma^2),\quad\text{gruppo 2: }N(\beta_1+\beta_2,\sigma^2),\quad\text{gruppo 3: }N(\beta_1+\beta_3,\sigma^2).$$
$\beta_1$ è l'effetto del livello "non presente" (**corner point**), gli altri sono scarti da esso. È un **modello ANOVA**.

## Formule chiave
- Codifica $x_i=0,1,2$ sbagliata: imporrebbe differenze uguali fra livelli consecutivi.
- Intercetta più una colonna per ogni livello: $X$ non ha rango pieno, modello **non identificabile** (infiniti $\beta_1,\beta_2$ con la stessa media).
- Alternativa senza intercetta con una colonna per livello: rango pieno, $\beta_k$ = media del gruppo, ma i test $H_0:\beta_k=0$ non servono.
- **Contrasti**: per confrontare gruppi 2 e 3, $C=(0,-1,1)$ e $C\hat{\boldsymbol\beta}=\hat\beta_3-\hat\beta_2\sim N(\beta_3-\beta_2,\sigma^2C(X'X)^{-1}C')$; in pratica R cambia il corner con `relevel`.

## Intuizione
Il two-sample t-test è il caso a due livelli; la regressione permette di gestire molti gruppi e combinazioni di fattori senza costruire un test per ogni coppia.

## Come si usa
Pinguini, profondità del becco contro la specie: corner Adelie $18.347$, Chinstrap $+0.073$ (p-value 0.657, non diversa), Gentoo $-3.351$ (diversa); $R^2=0.6764$. Contro il sesso: intercetta 16.4255 (femmine, codice 0 assegnato da R), maschi $+1.4656$.

## Nei corsi
- **Prob e statistica** (triennale): slide "Anova, Ancova, interazione, paradossi". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Anova Ancova lez8.pdf` (Regressione con Interazione e Fattori I-XX).
- **Modelli statistici** (magistrale): **dummy** con livello di riferimento (treatment contrasts di R, `relevel`), $L-1$ colonne per un fattore a $L$ livelli (libro, cap. 10, Def. 10.1); due diete = test $t$. **ANOVA a una via** bilanciata $Y_{ik}=\nu+\alpha_i+\epsilon_{ik}$, $i=1..I$, $k=1..K$ (cap. 13, Def. 13.1), sovraparametrizzata: vincolo di somma zero ($\hat\nu=\bar Y_{\cdot\cdot}$, $\hat\alpha_i=\bar Y_{i\cdot}-\bar Y_{\cdot\cdot}$) o livello di riferimento (Prop. 13.2). Scomposizione $\mathrm{RSS}_0=\mathrm{SS}_T+\mathrm{RSS}$ con $\mathrm{SS}_T=K\sum_i(\bar Y_{i\cdot}-\bar Y_{\cdot\cdot})^2$, $\mathrm{RSS}/\sigma^2\sim\chi^2(I(K-1))$ e, sotto $H_0$, $F=\mathrm{MS}_T/\mathrm{MSR}\sim F(I-1,I(K-1))$ (Teorema 13.3); $\mathbb E(\mathrm{MSR})=\sigma^2$, $\mathbb E(\mathrm{MS}_T)=\sigma^2+\frac K{I-1}\sum\alpha_i^2$ (Prop. 13.4). Golf a una via, 4 tipi di palla e 32 tiri: $\mathrm{SS}_T=800.7$, $F=0.222$, p 0.88. È un caso del test $F$ per ipotesi lineari; `lm` e `aov` danno lo stesso risultato; con piani sbilanciati i test di `anova` sono sequenziali. Fonti: `Libri/Modelli statistici/capitoli/cap10.tex` (§10.1), `cap13.tex` (§13.1, pp. 212-215); `magistrale/Modelli statistici/251203 Tabelle AVOVA.pdf`.

## Prerequisiti
- [[Regressione lineare]]: modello $\mathbf y=X\boldsymbol\beta+\boldsymbol\epsilon$
- [[Test t di Student]]: caso a due gruppi
- [[Inferenza sui coefficienti di regressione]]: test sui coefficienti e contrasti

## Porta a
- [[Effetto di interazione]]: fattori e covariate continue insieme (ANCOVA)
- [[ANOVA a due vie]]: due fattori incrociati (Modelli statistici)
- [[Metodo di Tukey]]: confronti multipli tra i livelli (Modelli statistici)
- [[Piano a blocchi randomizzati]]: eliminare una fonte di variabilità nota (Modelli statistici)

## Collegati
- [[Rango di una matrice]]: identificabilità richiede $X$ di rango pieno
