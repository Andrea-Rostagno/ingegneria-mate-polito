---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Prova finale, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["likelihood function", "verosimiglianza", "likelihood", "L(theta|x)", "log-verosimiglianza", "log-likelihood", "principio di verosimiglianza", "likelihood principle"]
tags: [competenza, area/statistica]
---

# Funzione di verosimiglianza

> La densità congiunta del campione vista come funzione del parametro, a dati fissati: $L(\theta|\mathbf x)=f(\mathbf x|\theta)$. Dice quanto è verosimile che $\theta$ abbia generato i dati osservati.

## Definizione / enunciato
Se $f(\mathbf x|\theta)$ è la congiunta (pmf o pdf) di $(X_1,\dots,X_n)$ e si è osservato $\mathbf X=\mathbf x$, la **funzione di verosimiglianza** è
$$L(\theta|\mathbf x)=f(\mathbf x|\theta),\qquad\theta\in\Theta .$$
Non richiede dati i.i.d., solo la congiunta. Non integra a 1 in $\theta$: non è una pmf/pdf e $\theta$ non è una v.a.
**Principio di verosimiglianza**: se $L(\theta|\mathbf x)=C(\mathbf x,\mathbf y)L(\theta|\mathbf y)$ per ogni $\theta$, l'inferenza su $\theta$ basata sui due campioni dovrebbe essere la stessa.

## Formule chiave
- Nel discreto $L(\theta_1|\mathbf x)>L(\theta_2|\mathbf x)\iff\mathbb P_{\theta_1}(\mathbf X=\mathbf x)>\mathbb P_{\theta_2}(\mathbf X=\mathbf x)$; nel continuo lo stesso vale per intorni piccoli di $\mathbf x$.
- Si ragiona sui **rapporti** $L(\theta_1|\mathbf x)/L(\theta_2|\mathbf x)$ (es. "due volte più verosimile"), dove la costante $C(\mathbf x,\mathbf y)$ si semplifica.
- Si lavora con la **log-verosimiglianza** $\log L$, monotona crescente; per un campione i.i.d. $\log L(\theta|\mathbf x)=\sum_i\log f(x_i|\theta)$.

## Intuizione
Congiunta e verosimiglianza sono la stessa formula; cambia cosa è fisso: nella congiunta il parametro, nella verosimiglianza il campione.

## Come si usa
Esempio: $\mathcal N(\mu,1)$, $L(\mu|\mathbf x)=(2\pi)^{-n/2}\exp(-\frac12\sum(x_i-\mu)^2)$. Nello script R si valuta la log-verosimiglianza su una griglia di valori di $\mu$ e se ne cerca il massimo, vicino al valore vero usato per simulare. Per il teorema di fattorizzazione $L(\theta|\mathbf x)\propto g(T(\mathbf x)|\theta)$: basta la verosimiglianza della statistica sufficiente.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Massima verosimiglianza I-VI, XVI); codice in `statistica/R/Stime Puntuali Vers 1.0.0.R` (chunk massima verosimiglianza).
- **Prova finale** (triennale): $L(\theta;\mathbf x_1,\dots,\mathbf x_n)=\prod_if(\mathbf x_i;\theta)$ con la densità congiunta fattorizzata da Sklar; con marginali note dipende dal parametro solo tramite $\prod_ic(F_1(x_{i1}),\dots;\theta)$. Nel codice si minimizza la log-verosimiglianza cambiata di segno; nella stima bayesiana $f(y\mid\theta)$ è la verosimiglianza che aggiorna la prior. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.1, p. 42; §5.2.7, p. 54).
- **Modelli statistici** (magistrale): $L(\theta;x_1,\dots,x_n)=f(x_1,\dots,x_n;\theta)$, $\ell=\log L$ (libro, cap. 2, Def. 2.2), dentro un modello statistico $\{f(\mathbf x;\theta):\theta\in\Theta\}$ (Def. 2.1); nel bayesiano è il fattore che moltiplica la prior, a meno di costanti in $\theta$ (perciò il coefficiente binomiale non compare). Nel modello lineare normale $\ell(\boldsymbol\beta,\sigma^2)=-\frac n2\log(2\pi\sigma^2)-\frac{1}{2\sigma^2}\|\mathbf Y-\mathbf X\boldsymbol\beta\|^2$ (cap. 9); nei GLM è la base di score, informazione e devianza (cap. 17). Fonti: `Libri/Modelli statistici/capitoli/cap02.tex` (§2.1, p. 24), `cap09.tex`, `cap17.tex`.

## Prerequisiti
- [[Densità congiunta]]: $f(\mathbf x|\theta)$
- [[Campione casuale]]: prodotto delle densità per dati i.i.d.

## Porta a
- [[Stimatore di massima verosimiglianza]]: massimo di $L$
- [[Informazione di Fisher]]: momenti della derivata di $\log f$
- [[Test del rapporto di verosimiglianza]]: rapporto di massimi di $L$
- [[Massima verosimiglianza per copule]]: verosimiglianza costruita con la densità di copula
- [[Stima bayesiana]]: la verosimiglianza aggiorna la distribuzione a priori
- [[Famiglia coniugata]]: si riconosce il nucleo di prior per verosimiglianza (Modelli statistici)
- [[Devianza di un GLM]]: confronto con la verosimiglianza del modello saturo (Modelli statistici)
