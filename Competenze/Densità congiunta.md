---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Prova finale]
livello: [triennale]
aliases: ["joint density", "densità discreta congiunta", "joint probability mass function", "vettore aleatorio assolutamente continuo", "vettore aleatorio discreto", "densità marginali", "marginal density"]
tags: [competenza, area/probabilita]
---

# Densità congiunta

> Funzione che descrive la legge di un vettore aleatorio discreto (densità discreta congiunta) o assolutamente continuo (derivata di Radon-Nikodym rispetto a Lebesgue); dalle sue somme o integrali parziali si ottengono le marginali.

## Definizione / enunciato
**Caso discreto.** $Z=(X,Y)$ è discreto se $Z(\Omega)\subseteq X(\Omega)\times Y(\Omega)=\{(x_i,y_j)\}$ è al più numerabile (cioè $X$ e $Y$ discrete). La **densità discreta congiunta** è $p_Z(x,y)=\mathbb P(X=x,Y=y)$ e $\mathbb P_Z(B)=\sum_{(x_i,y_j)\in B}p_Z(x_i,y_j)$.
**Caso continuo.** $Z$ è **assolutamente continuo** se $\mathbb P_Z\ll\mathbf m=m\otimes m$; la **densità congiunta** è $f_Z=\frac{d\mathbb P_Z}{d\mathbf m}\ge0$ e $\mathbb P(Z\in C)=\int_Cf_Z\,d\mathbf m$, con $\int_{\mathbb R^2}f_Z=1$.

## Formule chiave
$$p_X(x_i)=\sum_{j}p_Z(x_i,y_j),\qquad p_Y(y_j)=\sum_ip_Z(x_i,y_j);$$
**Proposizione.** Se $Z$ è a.c., allora $X$ e $Y$ sono a.c. con densità marginali
$$f_X(x)=\int_{\mathbb R}f_Z(x,y)\,dy,\qquad f_Y(y)=\int_{\mathbb R}f_Z(x,y)\,dx .$$
Non vale il viceversa: $X$, $Y$ a.c. non implica $Z$ a.c.

## Intuizione
Le marginali si ottengono "sommando via" l'altra coordinata. La dimostrazione continua usa Fubini-Tonelli: $\mathbb P_X(A)=\mathbb P_Z(A\times\mathbb R)=\int_A\big(\int f_Z(x,y)dy\big)dx$.

## Come si usa
Esercizi svolti a lezione: con $f_{(X,Y)}(x,y)=2e^{-(x+2y)}$ su $(0,\infty)^2$ si trova $\mathbb P(X>1,Y<1)=e^{-1}(1-e^{-2})$, $\mathbb P(X<Y)=\frac13$, $X\sim\mathrm{Exp}(1)$, $Y\sim\mathrm{Exp}(2)$. Con $f=kxy$ su $\{0<x\le y<1\}$ la normalizzazione dà $k=8$. Urna con 3 bianche, 4 nere, 5 rosse, 3 estrazioni senza reimmissione: $p_Z(i,j)=\binom3i\binom4j\binom5{3-i-j}/\binom{12}3$ e le marginali sono ipergeometriche.

## Nei corsi
- **Prob e statistica** (triennale): lezioni 3-5. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione03(06-10-2023).pdf` (pp. 7-8); `2023Lezione04(11-10-2023) .pdf` (pp. 1-8); `2023Lezione05(12-10-2023).pdf` (esercizi 3, 4, 11, 13).
- **Prova finale** (triennale): per Sklar la densità congiunta si fattorizza come $f(\mathbf x;\theta)=c(F_1(x_1),\dots,F_d(x_d);\theta)\prod_jf_j(x_j)$, base della stima di massima verosimiglianza delle copule. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.1, p. 42).

## Prerequisiti
- [[Vettore aleatorio]]: legge congiunta e marginali
- [[Teorema di Radon-Nikodym]]: densità come derivata rispetto a $\mathbf m$
- [[Teorema di Fubini]]: integrazione per sezioni delle marginali

## Porta a
- [[Indipendenza di variabili aleatorie]]: fattorizzazione della densità
- [[Distribuzione condizionata]]: $f_{X|Y=y}=f_Z/f_Y$
- [[Metodo dello jacobiano]]: densità di trasformazioni di $Z$
- [[Funzione di verosimiglianza]]: la congiunta del campione vista come funzione del parametro
- [[Densità di una copula]]: fattore di dipendenza della densità congiunta

## Collegati
- [[Distribuzione ipergeometrica]]: marginali dell'esempio dell'urna
