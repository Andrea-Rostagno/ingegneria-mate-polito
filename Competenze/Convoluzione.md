---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Prob e statistica, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["convolution", "prodotto di convoluzione", "convoluzione di distribuzioni", "convoluzione di funzioni", "f*g", "regolarità della convoluzione"]
tags: [competenza, area/analisi]
---

# Convoluzione

> Il prodotto di convoluzione $f*g(x)=\int f(t)g(x-t)\,dt$ "media" una funzione con le traslate dell'altra; si estende alle distribuzioni quando almeno una ha supporto compatto, e la delta ne è l'unità.

## Definizione / enunciato
Per funzioni: $(f*g)(x)=\int_{-\infty}^{+\infty}f(t)g(x-t)\,dt$. Scambiando gli integrali:
$$\langle T_{f*g}(x),\varphi(x)\rangle=\big\langle T_f(t),\langle T_g(x),\varphi(x+t)\rangle\big\rangle.$$
Per distribuzioni $T,S$ (4.22):
$$\langle T*S,\varphi\rangle=\big\langle T(t),\langle S(x),\varphi(x+t)\rangle\big\rangle,$$
ben definita se almeno una delle due ha supporto compatto: $t\mapsto\langle S(x),\varphi(x+t)\rangle$ è $C^\infty$ (Prop. 4.48) e serve che abbia supporto compatto (Prop. 4.49).

## Formule chiave
- Prop. 4.50 (con almeno due su tre a supporto compatto): $S*T=T*S$, $S*(T*U)=(S*T)*U$, linearità.
- Es. 4.51: $\delta_{x_0}*T=T*\delta_{x_0}=T(x-x_0)$.
- Prop. 4.52: $(S*T)(x-x_0)=S(x-x_0)*T=S*T(x-x_0)$.
- Prop. 4.53: $(S*T)'=S'*T=S*T'$; Es. 4.54: $\delta_0^{(q)}*T=T^{(q)}$.
- Prop. 4.55: se $T_n\to T$ in $\mathcal D'$ e $S$ ha supporto compatto, $T_n*S\to T*S$.

## Intuizione
Convolvere con $\delta_{x_0}$ trasla, convolvere con $\delta'$ deriva: la convoluzione rappresenta i sistemi lineari invarianti per traslazione, e la delta è il segnale "neutro".

## Come si usa
Per calcolare una convoluzione con delta e derivate di delta si usano le regole 4.51-4.54 senza integrali. Con la trasformata di Fourier la convoluzione diventa un prodotto, $\mathcal F(f*g)=\mathcal F(f)\mathcal F(g)$ (citato in §5.5 come estensione del teorema di Fubini); la soluzione dell'equazione del calore è una convoluzione con il nucleo gaussiano.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §4.8 "Convoluzione di distribuzioni". Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 4 (1).pdf` (pp. 33-38 del PDF); `Capitolo 5 (3).pdf` §5.5.
- **Prob e statistica** (triennale): convoluzione di densità come legge della somma di v.a. indipendenti: $p_{X+Y}(t)=\sum_{k=0}^tp_X(k)p_Y(t-k)=(p_X*p_Y)(t)$ (convoluzione discreta) e $f_{X+Y}(t)=\int_{\mathbb R}f_X(x)f_Y(t-x)dx=(f_X*f_Y)(t)$; esempi: somma di due uniformi su $[0,1]$ (legge triangolare), di due $\mathrm{Exp}(\lambda)$ ($\Gamma(2,\lambda)$), di due Poisson. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione07(18-10-2023).pdf` (p. 14); `2023Lezione09(20-10-2023).pdf` (pp. 6-15).

- **Equazioni alle derivate parziali** (triennale): in $\mathbb R^n$, $(f*g)(x)=\int_{\mathbb R^n}f(x-y)g(y)\,dy$ (4.1); commutativa e associativa (Prop. 4.1.1); $\operatorname{spt}(f*g)\subseteq\operatorname{spt}f+\operatorname{spt}g$ (4.6); $f\in C_c$, $g\in L^1_{\rm loc}$ danno $f*g$ continua (Prop. 4.1.8), e $f\in C^k_c$ dà $f*g\in C^k$ con $D^\alpha(f*g)=(D^\alpha f)*g$ (Teor. 4.1.9): la convoluzione ha la regolarità migliore. Fra distribuzioni (§5.3) la definizione è per dualità con $\check\psi(x)=\psi(-x)$: $\langle u*\psi,\varphi\rangle:=\langle u,\check\psi*\varphi\rangle$ (5.14), poi $\langle u*w,\varphi\rangle:=\langle u,\check w*\varphi\rangle$ con $w$ a supporto compatto (5.17); $\delta_0*\psi=\psi$, $u*\delta_0=u$, $D^\alpha(u*w)=(D^\alpha u)*w=u*(D^\alpha w)$ (5.19). Es. 4.0.1: $-u''+u=f$ ha soluzione $u=f*\frac{e^{-|\cdot|}}2$ via Fourier. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 39-44, 52-54).

## Prerequisiti
- [[Supporto di una distribuzione]]: una delle due a supporto compatto
- [[Operazioni sulle distribuzioni]]: costruita con le traslazioni

## Porta a
- [[Equazione del calore]]: soluzione come convoluzione
- [[Somma di variabili aleatorie indipendenti]]: densità della somma come convoluzione (Prob e statistica)
- [[Disuguaglianza di Young per la convoluzione]]: stima $L^1*L^p\subset L^p$ (Equazioni alle derivate parziali)
- [[Mollificatori]]: regolarizzazione per convoluzione (Equazioni alle derivate parziali)
- [[Soluzione fondamentale di un operatore differenziale]]: $u=U*f$ risolve $Lu=f$ (Equazioni alle derivate parziali)
- [[Formule di rappresentazione per l'equazione del calore]]: convoluzione in spazio e spazio-tempo (Equazioni alle derivate parziali)

## Collegati
- [[Trasformata di Fourier]]: trasforma la convoluzione in prodotto
