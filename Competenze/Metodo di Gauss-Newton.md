---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["Gauss-Newton method", "Gauss-Newton", "GN", "nonlinear least squares", "minimi quadrati non lineari", "problema dei minimi quadrati non lineari", "regressione non lineare", "nonlinear regression"]
tags: [competenza, area/ottimizzazione]
---

# Metodo di Gauss-Newton

> Metodo per i minimi quadrati non lineari $\min\frac12\|F(x)\|^2$, con $F:\mathbb R^n\to\mathbb R^m$ e $m\ge n$. Si ottiene da Newton trascurando nell'hessiana il termine con le derivate seconde, così basta la jacobiana.

## Definizione / enunciato
Con $f(x)=\frac12\|F(x)\|_2^2$:
$$\nabla f(x)=J_F(x)^TF(x),\qquad \nabla^2f(x)=J_F(x)^TJ_F(x)+\sum_{i=1}^mF_i(x)\,\nabla^2F_i(x).$$
Il secondo termine è costoso, soprattutto se $m$ è grande. Gauss-Newton lo trascura: a ogni passo risolve
$$J_F(x^{(k)})^TJ_F(x^{(k)})\,p_{GN}^{(k)}=-J_F(x^{(k)})^TF(x^{(k)}),$$
poi pone $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p_{GN}^{(k)}$, con $\alpha^{(k)}$ da line search.

## Formule chiave
**La direzione è sempre di discesa** se $J_F(x^{(k)})$ ha rango pieno:
$$\nabla f(x^{(k)})^Tp_{GN}^{(k)}=-p_{GN}^{(k)T}J_F^TJ_F\,p_{GN}^{(k)}=-\|J_F(x^{(k)})p_{GN}^{(k)}\|^2<0.$$
Infatti $B^TB$ è semidefinita positiva ($y^TB^TBy=\|By\|^2\ge0$), e definita positiva se $B$ ha rango pieno.

**Doppia lettura.** $p_{GN}^{(k)}$ risolve il problema lineare ai minimi quadrati
$$\min_p\tfrac12\|J_F(x^{(k)})p+F(x^{(k)})\|^2,$$
cioè il caso $A=J_F(x^{(k)})$, $b=-F(x^{(k)})$, dove $F(x^{(k)})+J_F(x^{(k)})p$ è il modello lineare di $F$.

## Intuizione
L'approssimazione $J_F^TJ_F\approx\nabla^2f$ è buona quando i residui $F_i(x^{(k)})$ sono piccoli o le $F_i$ sono quasi lineari ($\nabla^2F_i$ piccola). Anche fuori da questi casi il comportamento è "quite good". Il metodo si può vedere in due modi:
- un Newton con hessiana semplificata;
- la linearizzazione di $F$ seguita da un problema lineare ai minimi quadrati.

## Come si usa
**Fitting non lineare di parametri.** Esempio delle note: si cerca $f(x;\alpha_1,\alpha_2)=\alpha_1x^{\alpha_2}$ tale che $\alpha_1x_i^{\alpha_2}\approx y_i$. Con $\alpha_1+\alpha_2x$ il problema sarebbe lineare.

**Regressione nel ML (laboratorio).** Dato un training set $\{(x_i,\tilde y_i)\}$ con $\tilde y_i=F^*(x_i)+\epsilon_i$, si minimizza $\frac12\|\mathrm{Err}(\theta)\|^2$ con $\mathrm{Err}_i(\theta)=F(x_i;\theta)-\tilde y_i$.

## Nei corsi
- **Numerical opt** (magistrale): parte finale delle lezioni su equazioni non lineari e laboratorio 9 di Della Santa. Fonti: `magistrale/Numerical opt/Pieraccini/Part_4_Nonlinear_equations_and_Nonlinear_Least_Squares.pdf` (p. 9-24); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§9, eq. 54-61); codice d'esempio `DellaSanta/labs/gaussnewton.m`.

## Prerequisiti
- [[Funzione di merito]]: l'obiettivo $\frac12\|F\|^2$ e il suo gradiente $J_F^TF$
- [[Problema dei minimi quadrati]]: il sottoproblema lineare risolto a ogni passo
- [[Metodo di Newton in ottimizzazione]]: il metodo che si approssima
- [[Matrice jacobiana]]: unica derivata richiesta

## Porta a
- [[Regressione lineare]]: caso lineare; Gauss-Newton la estende alla regressione non lineare

## Collegati
- [[Backtracking line search]]: scelta del passo $\alpha^{(k)}$
