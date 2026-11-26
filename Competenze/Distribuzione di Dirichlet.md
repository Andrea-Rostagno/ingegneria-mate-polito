---
tipo: competenza
area: probabilita
corsi: [Modelli statistici, Statistica computazionale]
livello: [magistrale]
aliases: ["Dirichlet distribution", "Dir(alpha)", "simplesso unitario", "unit simplex", "aggregazione della Dirichlet", "marginali Beta della Dirichlet"]
tags: [competenza, area/probabilita]
---

# Distribuzione di Dirichlet

> Distribuzione su vettori di probabilità $(P_1,\dots,P_D)$ con somma 1, cioè sul simplesso: generalizza la Beta ed è la prior naturale per le probabilità di categorie.

## Definizione / enunciato
Simplesso $S_d=\{(p_1,\dots,p_d):p_i\ge0,\ \sum p_i\le1\}$, $d=D-1$, con $p_D=1-\sum_{i\le d}p_i$ (libro, cap. 6, Def. 6.1). Con $\alpha_1,\dots,\alpha_D>0$ e $\alpha_0=\sum\alpha_i$, $\mathbf P\sim\mathrm{Dir}(\alpha_1,\dots,\alpha_D)$ se $(P_1,\dots,P_d)$ ha densità (Def. 6.2)
$$f(p_1,\dots,p_d)=\frac{\Gamma(\alpha_0)}{\prod_{i=1}^D\Gamma(\alpha_i)}\prod_{i=1}^Dp_i^{\alpha_i-1},\qquad(p_1,\dots,p_d)\in S_d .$$
Per $D=2$ è la Beta.

## Formule chiave
- **Aggregazione** (Prop. 6.4): sommando le componenti di gruppi di una partizione si ottiene una Dirichlet con i parametri sommati, per esempio $(P_1+P_2,P_3+P_4,P_5+P_6)\sim\mathrm{Dir}(\alpha_1+\alpha_2,\alpha_3+\alpha_4,\alpha_5+\alpha_6)$.
- **Marginali** (Cor. 6.5): $P_i\sim\mathrm{Beta}(\alpha_i,\alpha_0-\alpha_i)$.
- **Rinormalizzazione** (Prop. 6.7): $(P_1,\dots,P_k)/(P_1+\dots+P_k)\sim\mathrm{Dir}(\alpha_1,\dots,\alpha_k)$, indipendente dalla somma e dalle altre componenti.
- **Momenti** (Prop. 6.8): $\mathbb E(P_i)=\alpha_i/\alpha_0$, $\operatorname{Var}(P_i)=\frac{\alpha_i(\alpha_0-\alpha_i)}{\alpha_0^2(\alpha_0+1)}$, $\operatorname{Cov}(P_i,P_j)=-\frac{\alpha_i\alpha_j}{\alpha_0^2(\alpha_0+1)}$; con $\mathbf m=\boldsymbol\alpha/\alpha_0$, $\operatorname{VarCov}(\mathbf P)=\frac1{\alpha_0+1}(\operatorname{diag}(\mathbf m)-\mathbf m\mathbf m')$.

## Intuizione
Le $\alpha_i$ relative fissano il centro, la somma $\alpha_0$ la concentrazione: $\alpha_0$ grande dà una distribuzione stretta attorno a $\mathbf m$. Le covarianze sono negative perché le componenti si contendono una somma fissa.

## Come si usa
- $\mathbf P\sim\mathrm{Dir}(2,1,1)$: $P_1\sim\mathrm{Beta}(2,2)$, quindi $P(P_1>1/2)=1/2$; $P_2+P_3\sim\mathrm{Beta}(2,2)$ e $P(P_2+P_3<0.2)=3(0.2)^2-2(0.2)^3=0.104$ (libro, Es. `c06-probabilita`).
- $\mathrm{Dir}(2,3,5)$: media $(0.2,0.3,0.5)$, $\operatorname{Var}(P_1)=0.01455$, $\operatorname{Cov}(P_1,P_2)=-0.00545$, correlazione $\approx-0.327$ (Es. `c06-momenti-numerici`).
- $\mathrm{Dir}(1,\dots,1)$ è l'uniforme sul simplesso.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 6 (Def. 6.1-6.2, Prop. 6.4-6.8, pp. 93-98). Fonti: `Libri/Modelli statistici/capitoli/cap06.tex`; `magistrale/Modelli statistici/251015B Dirichlet.pdf`; codice `magistrale/Modelli statistici/codici/251023 Dirichlet_senza_ggtern.R`.
- **Statistica computazionale** (magistrale): prior $\boldsymbol\pi\sim\mathrm{Dir}(\boldsymbol\alpha)=\mathrm{Dir}(\alpha_1,\dots,\alpha_L)$ sui pesi di una mistura e sulle righe della matrice di transizione di un HMM, con densità $f(\boldsymbol\pi\mid\boldsymbol\alpha)=\frac{\Gamma(\sum_k\alpha_k)}{\prod_k\Gamma(\alpha_k)}\prod_{k=1}^L\pi_k^{\alpha_k-1}$, $\alpha_k>0$, "generalizzazione della Beta". Full conditional $\boldsymbol\pi\mid\dots\sim\mathrm{Dir}(\alpha_1+n_1,\dots,\alpha_L+n_L)$ (e $\boldsymbol\pi_j\mid\dots\sim\mathrm{Dir}(\alpha_1+n_{j,1},\dots,\alpha_L+n_{j,L})$ con i conteggi di transizione). Marginalizzazione: $\int_S\prod_k\pi_k^{n_k+\alpha_k-1}d\boldsymbol\pi=\frac{\prod_k\Gamma(\alpha_k+n_k)}{\Gamma(\sum_k(\alpha_k+n_k))}$ sul simplesso $S$, che introduce dipendenza tra le latenti. Fonti: `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 8-9, 16, 21-25, 43-44).

## Prerequisiti
- [[Distribuzione Beta]]: caso $D=2$ e marginali
- [[Distribuzione Gamma]]: costante di normalizzazione con la funzione Gamma
- [[Vettore aleatorio]]: densità sul simplesso

## Porta a
- [[Rappresentazione di Rényi]]: costruzione con Gamma normalizzate
- [[Stick breaking]]: spaziature delle uniformi e costruzione sequenziale
- [[Coniugatezza Dirichlet-multinomiale]]: prior per probabilità di categorie
- [[Modello mistura finita]]: prior sui pesi delle componenti (Statistica computazionale)
- [[Hidden Markov model]]: prior sulle righe della matrice di transizione (Statistica computazionale)

## Collegati
- [[Distribuzione multinomiale]]: stessa struttura di varianze e covarianze, $\operatorname{diag}(\boldsymbol\pi)-\boldsymbol\pi\boldsymbol\pi'$
- [[Matrice di covarianza]]: covarianze negative tra le componenti
