---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["finite mixture model", "modello di mistura", "modello mistura", "mistura gaussiana", "Gaussian mixture model", "GMM", "mistura di normali", "variabile latente di allocazione"]
tags: [competenza, area/statistica]
---

# Modello mistura finita

> I parametri della distribuzione dei dati cambiano secondo una variabile latente discreta $z_i\in\{1,\dots,L\}$; marginalmente la densità è una media pesata di $L$ componenti, e la stima bayesiana procede con un Gibbs sulle full conditional.

## Definizione / enunciato
$y_i\mid z_i\sim F(\theta_{z_i})$, $z_i\sim\mathrm{Disc}(\boldsymbol\pi)=\mathrm{Disc}(\pi_1,\dots,\pi_L)$. Caso normale con prior:
$$y_i\mid z_i=k\sim N(\mu_k,\sigma_k^2),\quad z_i\mid\boldsymbol\pi\sim\mathrm{Disc}(\boldsymbol\pi),\quad\boldsymbol\pi\sim\mathrm{Dir}(\boldsymbol\alpha),\quad\mu_k\sim N(m,v),\quad\sigma_k^2\sim IG(a,b).$$
Marginalizzando $z$: $f(y_i)=\sum_{k=1}^L\pi_k(2\pi\sigma_k^2)^{-1/2}\exp\bigl(-\frac{(y_i-\mu_k)^2}{2\sigma_k^2}\bigr)$. $L$ deve essere noto (la dimensione dello spazio a posteriori dipende da $L$): lo si sceglie col WAIC.

## Formule chiave
Con $I_k=\{i:z_i=k\}$ di cardinalità $n_k$:
$$\mu_k\mid\dots\sim N\Bigl(\bigl(\tfrac{n_k}{\sigma_k^2}+\tfrac1v\bigr)^{-1}\bigl(\tfrac{\sum_{i\in I_k}y_i}{\sigma_k^2}+\tfrac mv\bigr),\ \bigl(\tfrac{n_k}{\sigma_k^2}+\tfrac1v\bigr)^{-1}\Bigr),\qquad\sigma_k^2\mid\dots\sim IG\Bigl(a+\tfrac{n_k}2,\ b+\tfrac{\sum_{i\in I_k}(y_i-\mu_k)^2}2\Bigr),$$
$$\boldsymbol\pi\mid\dots\sim\mathrm{Dir}(\alpha_1+n_1,\dots,\alpha_L+n_L),\qquad z_i\mid\dots\sim\mathrm{Discrete}\Bigl(\frac{\pi_1g_1}{\sum_k\pi_kg_k},\dots,\frac{\pi_Lg_L}{\sum_k\pi_kg_k}\Bigr),$$
con $g_k=(\sigma_k^2)^{-1/2}\exp\bigl(-\frac{(y_i-\mu_k)^2}{2\sigma_k^2}\bigr)$ (nella media della full conditional di $\mu_k$ la slide scrive $\sum_{i\in I_k}y_i/\sigma^2$, senza indice $k$).
**Marginalizzando $\boldsymbol\pi$** (integrale del kernel di Dirichlet sul simplesso) le $z_i$ diventano dipendenti e
$$z_i\mid\dots\sim\mathrm{Discrete}\Bigl(\frac{(n_1^{-i}+\alpha_1)g_1}{\sum_k(n_k^{-i}+\alpha_k)g_k},\dots,\frac{(n_L^{-i}+\alpha_L)g_L}{\sum_k(n_k^{-i}+\alpha_k)g_k}\Bigr),$$
con $n_k^{-i}$ numerosità del gruppo $k$ senza $z_i$ (si usa $\Gamma(x+1)=x\Gamma(x)$).

## Intuizione
Simulando con $L=2$, $\boldsymbol\pi=(0.3,0.7)$, $\sigma_1^2=2^2$, $\sigma_2^2=3^2$ si passa da una densità chiaramente bimodale ($\mu_1=-10$, $\mu_2=20$) a una quasi unimodale ($\mu_1=4$, $\mu_2=6$). La variabile latente rappresenta per esempio lo "stato del vento".

## Come si usa
Dati del vento (direzione circolare e log-velocità orarie): $\log x_i\mid z_i\sim N(\mu_{z_i},\sigma_{z_i}^2)$, direzione con distribuzione wrapped Cauchy $WC(\cdot,\cdot)$ di parametri dipendenti da $z_i$ (distribuzione per variabili circolari su $[0,2\pi)$), $L=4$ migliore per WAIC (10715.38, 9730.153, 9180.096 per $L=2,3,4$); frequenze dei 4 gruppi 265, 791, 234, 834. Per $\hat z_i$ si prende il valore più probabile per ogni $i$, oppure il vettore che massimizza la verosimiglianza.

## Nei corsi
- **Statistica computazionale** (magistrale): "Modelli mistura", "Stima Bayesiana", "Dataset Wind". Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 2-32); notebook `magistrale/Statistica computazionale/modelli_mistura_HMM_change_R.ipynb` (Gibbs per la mistura gaussiana in R).

## Prerequisiti
- [[Modello gerarchico bayesiano]]: livello latente discreto
- [[Distribuzione di Dirichlet]]: prior sui pesi
- [[Gibbs sampler]]: stima tramite full conditional

## Porta a
- [[Trucco log-sum-exp]]: campionamento numericamente stabile di $z_i$
- [[Label switching]]: non identificabilità delle etichette
- [[Hidden Markov model]]: latenti con dipendenza markoviana

## Collegati
- [[Cluster analysis]]: le componenti definiscono cluster
- [[Distribuzione condizionata]]: la marginale è una mistura di condizionate
- [[Criteri di informazione AIC e BIC]]: scelta di $L$ col WAIC
