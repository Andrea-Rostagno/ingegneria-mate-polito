---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["p value", "valore p", "livello di significatività osservato", "observed significance level", "Pr(>|t|)"]
tags: [competenza, area/statistica]
---

# p-value

> Statistica fra 0 e 1, piccola quando i dati danno evidenza contro $H_0$; rifiutare $H_0$ quando è minore di $\alpha$ dà un test di livello $\alpha$, e il suo valore dice quanto è netto il rifiuto.

## Definizione / enunciato
Un **p-value** è una statistica $0\le p(\mathbf x)\le1$ per cui valori piccoli supportano $H_1$. È **valido** se per ogni $\theta\in\Theta_0$ e $0<\alpha<1$: $\mathbb P_\theta(p(\mathbf X)\le\alpha)\le\alpha$.
**Teorema.** Se $W(\mathbf X)$ è una statistica test i cui valori elevati danno evidenza per $H_1$,
$$p(\mathbf x)=\sup_{\theta\in\Theta_0}\mathbb P_\theta\big(W(\mathbf X)\ge W(\mathbf x)\big)$$
è un p-value valido.

## Formule chiave
- $H_0:\mu\ge\mu_0$ (normale, varianza nota): si rifiuta se $Z=\frac{\bar x-\mu_0}{\sqrt{\sigma^2/n}}\le-z_\alpha$; con $W=-Z$ (valori grandi di $-Z$ supportano $H_1$) la slide scrive $p(\mathbf x)=\mathbb P(-Z\ge z_\alpha)\equiv\mathbb P(Z\le-z_\alpha)$, dove al posto di $z_\alpha$ va inteso il valore osservato della statistica (da verificare sul PDF).
- Ipotesi puntuali: si usa $Z^2\sim\chi^2(1)$ oppure $|Z|$; in generale, se non si trova di meglio, $p(\mathbf x)=2\min\big(\mathbb P(W(\mathbf X)\le W(\mathbf x)),\mathbb P(W(\mathbf X)\ge W(\mathbf x))\big)$.

## Intuizione
Supera la risposta dicotomica accetto/rifiuto: un p-value appena sotto $\alpha$ rifiuta $H_0$ con meno sicurezza di uno prossimo a zero.

## Come si usa
Nell'output di `lm` in R la colonna `Pr(>|t|)` è il p-value del test $H_0:\beta_j=0$: per la regressione delle temperature sull'anno $0.0000322$ (pendenza significativa), per l'intercetta $0.202$. Nel two-sample t-test sulla profondità del becco dei pinguini maschi contro femmine $p=2.066\cdot10^{-12}$.

## Nei corsi
- **Prob e statistica** (triennale): slide sui test, poi letto negli output di regressione e ANOVA. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Test d'Ipotesi e Intervalli di Confidenza lez6.pdf` (p-value I-IV); `statistica/regressione lez7.pdf` (Stima dei parametri XXI-XXII); `statistica/Anova Ancova lez8.pdf` (Regressione con Interazione e Fattori IX).
- **Modelli statistici** (magistrale): probabilità, sotto $H_0$, di un valore della statistica almeno altrettanto lontano da $H_0$ di quello osservato; per il test bilaterale sulla media $2(1-\Phi(|z|))$ (libro, cap. 2, Def. 2.8). Esempio: $\mu_0=10$, $\sigma=2$, $n=25$, $\bar x=10.8$: $z=2$, p-value $\approx0.0455$. Errore tipico in R: `pnorm(-stat, mu0, sigma)` invece di `pnorm(-abs(z))`. Versione **esatta** per conteggi discreti: somma delle probabilità $p_0(\mathbf x)\le p_0(\mathbf x_{\text{oss}})$ (test esatto di Fisher, cap. 5); p-value del test $F$, $P(F(q,n-p)>F_{\text{oss}})$ (cap. 12). Fonti: `Libri/Modelli statistici/capitoli/cap02.tex` (p. 28), `cap05.tex`, `cap12.tex`.

## Prerequisiti
- [[Test d'ipotesi]]: livello e statistica test

## Porta a
- [[Inferenza sui coefficienti di regressione]]: colonna `Pr(>|t|)`
- [[Test esatto di Fisher]]: p-value esatto per conteggi (Modelli statistici)
- [[Test F nel modello lineare]]: p-value $P(F(q,n-p)>F_{\text{oss}})$ (Modelli statistici)

## Collegati
- [[Test t di Student]]: p-value dei test sulle medie
