---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["nested models", "modelli annidati", "test F per modelli annidati", "minimi quadrati vincolati", "constrained least squares", "RSS0 - RSS", "anova(piccolo, grande)", "test sequenziali", "test di tipo I", "extra sum of squares"]
tags: [competenza, area/statistica]
---

# Confronto di modelli annidati

> Un modello piccolo ottenuto imponendo $q$ vincoli lineari a uno grande si confronta con la statistica $F=\frac{(\mathrm{RSS}_0-\mathrm{RSS})/q}{\mathrm{RSS}/(n-p)}$: l'aumento della somma dei quadrati dei residui misura il costo dei vincoli.

## Definizione / enunciato
- **Minimi quadrati vincolati** (libro, cap. 12, Teorema 12.8): sotto $\mathbf C\boldsymbol\beta=\boldsymbol\theta$,
$$\hat{\boldsymbol\beta}_0=\hat{\boldsymbol\beta}+(\mathbf X'\mathbf X)^{-1}\mathbf C'\bigl(\mathbf C(\mathbf X'\mathbf X)^{-1}\mathbf C'\bigr)^{-1}(\boldsymbol\theta-\mathbf C\hat{\boldsymbol\beta})$$
(moltiplicatori di Lagrange).
- **Pitagora** (Teorema 12.9): $\mathrm{RSS}_0=\mathrm{RSS}+\|\hat{\mathbf Y}-\hat{\mathbf Y}_0\|^2$, con $\|\hat{\mathbf Y}-\hat{\mathbf Y}_0\|^2=(\boldsymbol\theta-\mathbf C\hat{\boldsymbol\beta})'(\mathbf C(\mathbf X'\mathbf X)^{-1}\mathbf C')^{-1}(\boldsymbol\theta-\mathbf C\hat{\boldsymbol\beta})$.
- **Statistica** (Cor. 12.10): $F=\frac{(\mathrm{RSS}_0-\mathrm{RSS})/q}{\mathrm{RSS}/(n-p)}\sim F(q,n-p)$ sotto $H_0$, con $q$ differenza nel numero di parametri.

## Formule chiave
Rapporto di verosimiglianza (Prop. 12.13): $\Lambda=(\mathrm{RSS}/\mathrm{RSS}_0)^{n/2}$, $-2\log\Lambda=n\log(1+\frac q{n-p}F)$, funzione crescente di $F$: il test del rapporto di verosimiglianza coincide con il test $F$; per $n\to\infty$, $-2\log\Lambda\approx qF\to\chi^2(q)$.

## Intuizione
Il modello vincolato proietta su un sottospazio più piccolo; i due residui e la differenza $\hat{\mathbf Y}-\hat{\mathbf Y}_0$ formano un triangolo rettangolo. Se i vincoli sono veri, la differenza è solo rumore, della taglia di $q\,\sigma^2$.

## Come si usa
Palle da golf (libro, Es. `c12-golf`): `distanza ~ mazza + tipo` ($\mathrm{RSS}_0=1588.20$, 27 g.d.l.) contro `mazza * tipo` ($\mathrm{RSS}=822.24$, 24 g.d.l.): $F=\frac{(1588.20-822.24)/3}{822.24/24}=7.452>F_{0.05}(3,24)=3.009$, p-value 0.001079 con `anova(piccolo, grande)`; l'approssimazione $\chi^2(3)$ di $-2\log\Lambda=21.07$ dà un p-value dieci volte più piccolo. Attenzione: `anova(mod)` su un solo modello fa test **sequenziali** (tipo I), che dipendono dall'ordine dei termini.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 12, §12.5-12.7 (Teoremi 12.8-12.9, Cor. 12.10, Prop. 12.13, pp. 201-206). Fonti: `Libri/Modelli statistici/capitoli/cap12.tex`; `magistrale/Modelli statistici/PDF corretti/F.pdf`; `magistrale/Modelli statistici/251204-Piani-Fattoriali.pdf`.

## Prerequisiti
- [[Test F nel modello lineare]]: stessa statistica in forma matriciale
- [[Geometria dei minimi quadrati]]: proiezioni e Pitagora
- [[Moltiplicatori di Lagrange]]: stima vincolata

## Porta a
- [[Devianza di un GLM]]: generalizzazione del confronto ai GLM
- [[ANOVA a due vie]]: test dell'interazione come confronto di modelli

## Collegati
- [[Test del rapporto di verosimiglianza]]: equivalente al test F nel modello normale
- [[Criteri di informazione AIC e BIC]]: confronto anche tra modelli non annidati
