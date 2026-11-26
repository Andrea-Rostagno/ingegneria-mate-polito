---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Prova finale, Business intelligence per big data, Data science lab]
livello: [triennale, magistrale]
aliases: ["correlation coefficient", "coefficiente di correlazione lineare", "rho(X,Y)", "correlazione di Pearson", "Pearson correlation", "perfetta correlazione"]
tags: [competenza, area/probabilita]
---

# Coefficiente di correlazione

> Covarianza resa adimensionale: $\rho(X,Y)=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}X\operatorname{Var}Y}}\in[-1,1]$, con $|\rho|=1$ solo per relazioni lineari.

## Definizione / enunciato
Per $X,Y\in L^2$ non degeneri
$$\rho(X,Y)=\frac{\operatorname{Cov}(X,Y)}{\sqrt{\operatorname{Var}(X)\operatorname{Var}(Y)}} .$$
Dà le stesse informazioni di segno della covarianza ma è un numero puro, non influenzato dai cambi di scala.

## Formule chiave
1. $\rho(aX,bY)=\rho(X,Y)$ per $a,b>0$.
2. $-1\le\rho(X,Y)\le1$: per Cauchy-Schwarz $|\mathbb E[(X-\mathbb EX)(Y-\mathbb EY)]|\le\|X-\mathbb EX\|_2\|Y-\mathbb EY\|_2$.
3. $\rho(X,Y)=\pm1\iff Y=aX+b$ q.o. con $a\ne0$, e $\rho=\operatorname{sign}(a)$.

## Intuizione
Per il punto 3, se $\rho=-1$: $\operatorname{Var}\big(\frac X{\sigma_X}+\frac Y{\sigma_Y}\big)=2(1+\rho)=0$, quindi $\frac X{\sigma_X}+\frac Y{\sigma_Y}$ è costante q.o. e $Y$ è funzione affine di $X$. $\rho$ misura quanto i punti stanno vicini a una retta.

## Come si usa
Esercizio (lezione 6): $X\sim B(4,\frac14)$, $Y\sim U([0,2])$, $\operatorname{Cov}=\frac14$, $\operatorname{Var}X=\frac34$, $\operatorname{Var}Y=\frac13$: $\rho=\frac{1/4}{\sqrt{1/4}}=\frac12$. Nelle slide di statistica un vettore gaussiano con $\Sigma=\begin{pmatrix}2&4\\4&8\end{pmatrix}$ ha $\rho=\frac4{\sqrt{16}}=1$: perfetta correlazione, $Y_2=2Y_1$, vettore degenere.

## Nei corsi
- **Prob e statistica** (triennale): lezione 6; ripreso nelle slide su vettori gaussiani e, come correlazione campionaria fra covariate, nella regressione. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione06(13-10-2023).pdf` (pp. 9-12); `statistica/Distribuzioni lez1.pdf` (Normale Multivariata XVII); `statistica/Stime Puntuali lez5.pdf` (Cramer Rao III, $\operatorname{Cov}^2\le\operatorname{Var}\operatorname{Var}$).
- **Prova finale** (triennale): coefficiente di Pearson $\rho_{XY}=\operatorname{cov}(X,Y)/\sqrt{\operatorname{var}X\operatorname{var}Y}$ come misura "limitata" che le copule superano. Limiti elencati (Pellerey, slide 13-14): esiste solo con varianze finite (non per certe Pareto); $\rho=0$ non implica indipendenza ($X_1\sim N(0,1)$, $X_2=X_1^2$); $\rho$ e le marginali non determinano la congiunta; non ogni $\rho\in[-1,1]$ è raggiungibile con marginali date; è invariante solo per trasformazioni affini crescenti. Valori sul DAX: correlazioni dei log-rendimenti Open-High-Low-Close fra 0.3141 e 0.5610 (tab. 4.4); 0.8873 fra le volatilità rolling di Open e Close (tab. 5.6), usato come punto iniziale delle stime. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§3.1.1, pp. 19-20; tab. 4.4, p. 35; tab. 5.6, p. 72); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 12-16).
- **Business intelligence per big data** (magistrale): correlazione fra oggetti con variabili binarie o continue nel mazzo di preprocessing, usata nell'esplorazione dei dati e per rimuovere le feature correlate. Limite mostrato con un esempio: $x=(-3,\dots,3)$, $y_i=x_i^2$ dà correlazione 0 pur con dipendenza perfetta (non lineare). Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 72-76; la formula di Pearson è un'immagine, p. 74). Collegamento: [[Feature selection]], rimozione delle feature correlate.
- **Data science lab** (magistrale): "data correlation" come misura della relazione lineare fra due oggetti, utile nell'esplorazione dei dati e per eliminare feature correlate; correlazione di Pearson, valutazione visiva con scatter plot da $-1$ a $1$ ([[Grafici con Matplotlib]]) e limite: con $x=(-3,-2,-1,0,1,2,3)$ e $y=x^2=(9,4,1,0,1,4,9)$ la correlazione è nulla pur essendoci una dipendenza perfetta. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 95-99).

## Prerequisiti
- [[Covarianza]]: numeratore
- [[Disuguaglianza di Cauchy-Schwarz]]: dà $|\rho|\le1$

## Porta a
- [[Disuguaglianza di Cramér-Rao]]: la dimostrazione usa $\operatorname{Cov}^2(Z,Y)\le\operatorname{Var}Z\operatorname{Var}Y$
- [[Multicollinearità]]: covariate molto correlate

## Collegati
- [[Misure di similarità]]: la correlazione come misura di similarità fra oggetti nel data mining
- [[Tau di Kendall]]: alternativa basata sui ranghi, invariante per trasformazioni crescenti
- [[Rho di Spearman]]: altra misura di concordanza basata sui ranghi
- [[Copula]]: descrive la dipendenza oltre la sola correlazione lineare
