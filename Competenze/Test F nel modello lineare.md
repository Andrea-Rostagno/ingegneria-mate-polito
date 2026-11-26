---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["F test for linear hypotheses", "test F generale", "ipotesi lineare", "linear hypothesis", "test globale", "overall F test", "F-statistic di lm", "test tutto o niente", "H0: Cβ = θ"]
tags: [competenza, area/statistica]
---

# Test F nel modello lineare

> Test di un'ipotesi lineare $H_0:\mathbf C\boldsymbol\beta=\boldsymbol\theta$ ($q$ vincoli) nel modello lineare normale: la statistica è il pivot $F$ valutato sotto $H_0$ e ha legge $F(q,n-p)$.

## Definizione / enunciato
Con $\mathbf C$ $q\times p$ di rango $q$ (libro, cap. 12, Teorema 12.1):
$$F=\frac{(\mathbf C\hat{\boldsymbol\beta}-\boldsymbol\theta)'\bigl(\mathbf C(\mathbf X'\mathbf X)^{-1}\mathbf C'\bigr)^{-1}(\mathbf C\hat{\boldsymbol\beta}-\boldsymbol\theta)}{qS^2}.$$
1. Sotto $H_0$, $F\sim F(q,n-p)$; 2. il test che rifiuta se $F>F_\alpha(q,n-p)$ ha livello $\alpha$; 3. sotto $H_1$, $F$ è una $F$ non centrale con $\lambda=(\mathbf C\boldsymbol\beta-\boldsymbol\theta)'(\mathbf C(\mathbf X'\mathbf X)^{-1}\mathbf C')^{-1}(\mathbf C\boldsymbol\beta-\boldsymbol\theta)/\sigma^2$, e la potenza cresce con $\lambda$; 4. p-value $P(F(q,n-p)>F_{\text{oss}})$.

## Formule chiave
- **Test globale** $H_0:\beta_1=\dots=\beta_{p-1}=0$ (Prop. 12.3-12.4): $F=\frac{\sum(\hat Y_i-\bar Y)^2/(p-1)}{\sum(Y_i-\hat Y_i)^2/(n-p)}=\frac{R^2/(p-1)}{(1-R^2)/(n-p)}$, cioè $R^2=\frac{(p-1)F}{(n-p)+(p-1)F}$.
- **Un coefficiente** (Cor. 12.5): per $H_0:\beta_j=0$, $F=t_j^2$ con $t_j=\hat\beta_j/(S\sqrt{v_{jj}})\sim t(n-p)$; stesse decisioni e stessi p-value.

## Intuizione
Si misura quanto $\mathbf C\hat{\boldsymbol\beta}$ dista da $\boldsymbol\theta$ in metrica di Mahalanobis e si divide per la stima della varianza; è il duale dell'ellissoide di confidenza: si rifiuta se $\boldsymbol\theta$ è fuori dalla regione.

## Come si usa
- Termini non lineari (libro, Es. `c12-polinomiale`): $Y=\beta_0+\beta_1x+\beta_2x^2+\beta_3x^3+\beta_4z+\beta_5z^2+\varepsilon$, $H_0:\beta_2=\beta_3=\beta_5=0$ con $\mathbf C$ $3\times6$; è un test simultaneo, diverso da tre test $t$ separati.
- Due diete uguali? $\mathbf C=(0,1,-1)$: $t=-3.168/1.375=-2.30$, $F=5.30$ con 1 e 42 g.d.l., p-value 0.026 (Es. `c12-diete-bc`).
- Ipotesi con $\boldsymbol\theta\ne\mathbf 0$: $H_0:\beta_1=0.6$ nell'esempio altezza-peso.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 12, §12.1-12.4 e §12.8 (Teorema 12.1, Prop. 12.3-12.4, Cor. 12.5, pp. 197-200). Fonti: `Libri/Modelli statistici/capitoli/cap12.tex`; `magistrale/Modelli statistici/251203 Test F.pdf`; `magistrale/Modelli statistici/PDF corretti/F.pdf`.

## Prerequisiti
- [[Regione di confidenza ellissoidale]]: stesso pivot
- [[Teorema di Cochran]]: numeratore e denominatore chi-quadro indipendenti
- [[Test d'ipotesi]]: livello, regione di rifiuto, potenza

## Porta a
- [[Confronto di modelli annidati]]: forma con le somme dei quadrati
- [[Analisi della varianza]]: il test F dell'ANOVA è un caso particolare
- [[ANOVA a due vie]]: test per effetti principali e interazione

## Collegati
- [[Coefficiente di determinazione]]: relazione tra $R^2$ e $F$ globale
- [[Inferenza sui coefficienti di regressione]]: test $t$ come caso $q=1$
- [[Test F sul rapporto di varianze]]: altro test con statistica $F$
