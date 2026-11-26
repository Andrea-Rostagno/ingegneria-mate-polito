---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Frisch-Waugh-Lovell theorem", "Frisch-Waugh", "FWL", "regressione parziale", "partial regression", "effetto a parità degli altri predittori", "ceteris paribus"]
tags: [competenza, area/statistica]
---

# Teorema di Frisch-Waugh-Lovell

> Il coefficiente di un blocco di predittori nella regressione multipla coincide con quello che si ottiene regredendo i residui di $\mathbf Y$ sui residui di quei predittori, entrambi depurati dagli altri: formalizza l'effetto "a parità degli altri predittori".

## Definizione / enunciato
Si scriva $\mathbf X=(\mathbf X_1\ \ \mathbf X_2)$, $\boldsymbol\beta=(\boldsymbol\beta_1',\boldsymbol\beta_2')'$ e $\mathbf P_1=\mathbf X_1(\mathbf X_1'\mathbf X_1)^{-1}\mathbf X_1'$. Posto $\tilde{\mathbf X}_2=(\mathbf I-\mathbf P_1)\mathbf X_2$ e $\tilde{\mathbf Y}=(\mathbf I-\mathbf P_1)\mathbf Y$ (residui delle regressioni su $\mathbf X_1$), la componente $\hat{\boldsymbol\beta}_2$ dello stimatore del modello completo è (libro, cap. 9, Teorema 9.10)
$$\hat{\boldsymbol\beta}_2=(\tilde{\mathbf X}_2'\tilde{\mathbf X}_2)^{-1}\tilde{\mathbf X}_2'\tilde{\mathbf Y}.$$

## Formule chiave
Conseguenza per un singolo predittore $x_j$ (§9.5): $\operatorname{Var}(\hat\beta_j)=\sigma^2/(\tilde{\mathbf x}_j'\tilde{\mathbf x}_j)=\sigma^2/(S_{jj}(1-R_j^2))$, con $S_{jj}=\sum_i(x_{ij}-\bar x_j)^2$ e $R_j^2$ del predittore $x_j$ regredito sugli altri; da cui il fattore di inflazione $\mathrm{VIF}_j=1/(1-R_j^2)$.

## Intuizione
Nella regressione multipla $\hat\beta_j$ usa solo la parte di $x_j$ che non è già spiegata dagli altri predittori. Se $x_j$ è quasi combinazione lineare degli altri, quella parte è piccola e la stima è instabile (collinearità).

## Come si usa
Per leggere un coefficiente di `lm` come effetto parziale: il coefficiente di un predittore cambia aggiungendo o togliendo altri predittori correlati con esso, mentre resta lo stesso se i predittori sono ortogonali. Per diagnosticare la collinearità si calcolano i VIF.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 9, §9.5 (Teorema 9.10, p. 154; VIF a p. 155). Fonti: `Libri/Modelli statistici/capitoli/cap09.tex`.

## Prerequisiti
- [[Geometria dei minimi quadrati]]: proiezioni su sottospazi di colonne
- [[Matrice di proiezione]]: $\mathbf I-\mathbf P_1$

## Porta a
- [[Multicollinearità]]: varianza dei coefficienti e VIF

## Collegati
- [[Regressione lineare]]: interpretazione dei coefficienti della regressione multipla
- [[Coefficiente di determinazione]]: $R_j^2$ ausiliario nel VIF
