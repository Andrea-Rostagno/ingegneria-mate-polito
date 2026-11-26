---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["merit function", "funzione di merito per sistemi non lineari", "Newton con line search per equazioni non lineari", "Newton-tangent method with line search", "globalizzazione del metodo di Newton per sistemi"]
tags: [competenza, area/ottimizzazione]
---

# Funzione di merito

> Funzione scalare $f(x)=\frac12\|F(x)\|_2^2$ i cui minimi globali sono le radici del sistema $F(x)=0$. Permette di globalizzare il metodo di Newton per sistemi non lineari con una line search, anche se non c'è una funzione da minimizzare.

## Definizione / enunciato
Dato $F:\mathbb R^n\to\mathbb R^n$, la funzione di merito è
$$f(x)=\tfrac12\|F(x)\|_2^2=\tfrac12\sum_iF_i(x)^2,\qquad \nabla f(x)=J_F(x)^TF(x).$$
Proprietà:
1. se $F(x^*)=0$, allora $f(x^*)=0$ e $\nabla f(x^*)=0$, quindi $x^*$ è minimo globale di $f$, perché $f\ge0$;
2. il viceversa è falso: un minimo locale $\hat x$ di $f$ con $f(\hat x)>0$ non è radice di $F$. Solo i minimi globali (con valore 0) sono soluzioni;
3. la direzione di Newton-tangente $p^{(k)}$, che risolve $J_F(x^{(k)})p=-F(x^{(k)})$, è di discesa per $f$ se $F(x^{(k)})\ne0$.

## Formule chiave
Discesa della direzione di Newton:
$$p^{(k)T}\nabla f(x^{(k)})=\big(J_F(x^{(k)})p^{(k)}\big)^TF(x^{(k)})=-F(x^{(k)})^TF(x^{(k)})=-\|F(x^{(k)})\|^2<0.$$
Metodo di Newton con line search: $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p^{(k)}$, con $\alpha^{(k)}$ scelto con backtracking e condizione di Armijo applicata a $f$.

## Intuizione
Il metodo di Newton per sistemi converge quadraticamente vicino alla soluzione, ma soffre molto la scelta di $x^{(0)}$, e $J_F$ può essere singolare. La funzione di merito fornisce un criterio per accettare o accorciare il passo, come nella minimizzazione.

## Come si usa
- **Armijo con il passo di Newton esatto:** si può usare $\nabla f^Tp=-\|F\|^2$, senza calcolare $J_F^TF$.
- **Con il Newton inesatto** questo trucco non vale più, perché $p_{IN}\ne p_N$.
- **Criteri di arresto:** combinare un criterio sul residuo $\|F(x^{(k)})\|$ e uno sulla distanza tra iterati. Se $F$ è molto piatta, $\|F\|$ può essere piccolo lontano da $x^*$; se è molto ripida, la distanza tra iterati può ingannare.
- **Sistemi sovradeterminati** ($m>n$): la stessa funzione diventa l'obiettivo dei minimi quadrati non lineari.

## Nei corsi
- **Numerical opt** (magistrale): parte 4 delle lezioni Pieraccini e laboratorio 8 di Della Santa ("Newton-tangent method", per distinguerlo dal Newton per ottimizzazione). Fonti: `magistrale/Numerical opt/Pieraccini/Part_4_Nonlinear_equations_and_Nonlinear_Least_Squares.pdf` (p. 6-9); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§8.1, eq. 45-48); codice d'esempio `DellaSanta/labs/newtonsolve_bcktrck.m`.

## Prerequisiti
- [[Metodo di Newton per sistemi]]: la direzione che si globalizza
- [[Matrice jacobiana]]: compare nel gradiente $J_F^TF$

## Porta a
- [[Metodo di Gauss-Newton]]: stessa funzione $\frac12\|F\|^2$ per sistemi sovradeterminati
- [[Backtracking line search]]: Armijo applicata alla funzione di merito

## Collegati
- [[Metodo di Newton inesatto]]: versione inesatta di Newton-tangente con termini forzanti su $\|F\|$
