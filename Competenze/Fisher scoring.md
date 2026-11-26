---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Fisher scoring", "IRLS", "iteratively reweighted least squares", "minimi quadrati pesati iterati", "score di un GLM", "informazione di Fisher di un GLM", "test di Wald", "Wald test", "normalità asintotica dello stimatore GLM", "risposta di lavoro", "working response"]
tags: [competenza, area/statistica]
---

# Fisher scoring

> Algoritmo per lo stimatore di massima verosimiglianza di un GLM: Newton-Raphson con l'informazione attesa al posto dell'hessiana, che si riscrive come una sequenza di regressioni lineari pesate (IRLS). L'informazione dà anche gli errori standard e il test di Wald.

## Definizione / enunciato
Con $\mathbf V=\operatorname{diag}(\operatorname{Var}(y_i))$ e $\mathbf D=\operatorname{diag}(\partial\mu_i/\partial\eta_i)$ (libro, cap. 17, Teorema 17.6):
$$U_j=\sum_{i=1}^n\frac{(y_i-\mu_i)x_{ij}}{\operatorname{Var}(y_i)}\frac{\partial\mu_i}{\partial\eta_i},\qquad\mathbf U=\mathbf X'\mathbf D\mathbf V^{-1}(\mathbf y-\boldsymbol\mu),$$
$\mathbb E(\mathbf U)=\mathbf 0$ e $\mathbf J=\operatorname{VarCov}(\mathbf U)=\mathbf X'\mathbf W\mathbf X$, $W_{ii}=\frac1{\operatorname{Var}(y_i)}\bigl(\frac{\partial\mu_i}{\partial\eta_i}\bigr)^2$, $\mathbf J=-\mathbb E(\partial\mathbf U/\partial\boldsymbol\beta')$.

## Formule chiave
- **Fisher scoring**: $\boldsymbol\beta^{(m+1)}=\boldsymbol\beta^{(m)}+\mathbf J(\boldsymbol\beta^{(m)})^{-1}\mathbf U(\boldsymbol\beta^{(m)})$; con il link canonico coincide con Newton-Raphson.
- **IRLS**: $\boldsymbol\beta^{(m+1)}=(\mathbf X'\mathbf W\mathbf X)^{-1}\mathbf X'\mathbf W\mathbf z$, risposta di lavoro $z_i=\eta_i+(y_i-\mu_i)\partial\eta_i/\partial\mu_i$.
- **Normalità asintotica** (Teorema 17.7): $\hat{\boldsymbol\beta}\approx N_p(\boldsymbol\beta,\mathbf J^{-1})$, con $\hat{\mathbf J}=\mathbf X'\hat{\mathbf W}\mathbf X$.
- **Wald** (Def. 17.8): $\mathrm{SE}(\hat\beta_j)=\sqrt{[\hat{\mathbf J}^{-1}]_{jj}}$, $z=(\hat\beta_j-b_j)/\mathrm{SE}\approx N(0,1)$, intervallo $\hat\beta_j\pm z_{\alpha/2}\mathrm{SE}$; per un contrasto $\mathbf v'\hat{\boldsymbol\beta}\approx N(\mathbf v'\boldsymbol\beta,\mathbf v'\mathbf J^{-1}\mathbf v)$.

## Intuizione
A ogni passo si linearizza il link attorno alle medie correnti e si fa una regressione pesata: le osservazioni con varianza grande pesano meno. È la stessa macchina dei minimi quadrati, ripetuta finché i coefficienti si stabilizzano.

## Come si usa
Il libro scrive IRLS a mano per la regressione logistica del taglio cesareo e lo confronta con `glm`, che converge in 4 iterazioni di Fisher scoring. Gli intervalli di Wald si ottengono con `confint.default`; la colonna `z value` di `summary(glm)` è la statistica di Wald.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 17, §17.4 (Teoremi 17.6-17.7, Def. 17.8, pp. 286-288). Fonti: `Libri/Modelli statistici/capitoli/cap17.tex`; `magistrale/Modelli statistici/codici/251211 GLM.pdf`; codice `magistrale/Modelli statistici/codici/251211 regressione logistica.R`.

## Prerequisiti
- [[Modello lineare generalizzato]]: modello da stimare
- [[Informazione di Fisher]]: matrice $\mathbf J$
- [[Minimi quadrati generalizzati]]: ogni passo è un WLS

## Porta a
- [[Regressione logistica]]: stima e test di Wald dei coefficienti
- [[Regressione di Poisson]]: contrasti con $\mathbf v'\mathbf J^{-1}\mathbf v$

## Collegati
- [[Stimatore di massima verosimiglianza]]: normalità asintotica
- [[Metodo di Newton in ottimizzazione]]: Fisher scoring come Newton-Raphson con l'informazione attesa al posto dell'hessiana
