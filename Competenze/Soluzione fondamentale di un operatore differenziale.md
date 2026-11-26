---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["fundamental solution", "soluzione fondamentale", "LU = δ", "operatore aggiunto formale", "formal adjoint"]
tags: [competenza, area/analisi]
---

# Soluzione fondamentale di un operatore differenziale

> Una distribuzione $U$ con $LU=\delta_0$: convolvendola con la forzante si ottiene una soluzione particolare di $Lu=f$.

## Definizione / enunciato
Per $L=\sum_{|\alpha|\le N}c_\alpha D^\alpha$ lineare a coefficienti costanti, l'**operatore aggiunto** è
$$L^*:=\sum_{|\alpha|\le N}(-1)^{|\alpha|}c_\alpha D^\alpha,\qquad\langle Lu,\varphi\rangle=\langle u,L^*\varphi\rangle\ \ \forall u\in\mathcal D'(\mathbb R^n),\ \varphi\in\mathcal D(\mathbb R^n).\qquad(5.20)$$
**Def. 5.4.2.** $U\in\mathcal D'(\mathbb R^n)$ con $LU=\delta_0$ in $\mathcal D'(\mathbb R^n)$ è una **soluzione fondamentale** di $L$.

**Prop. 5.4.3.** Per $Lu=f$ in $\mathcal D'(\mathbb R^n)$ (5.21), con $f\in\mathcal D(\mathbb R^n)$ o $f\in\mathcal D'$ a supporto compatto, una soluzione è $\bar u=U*f$.

## Formule chiave
$$L\bar u=L(U*f)=(LU)*f=\delta_0*f=f,$$
usando $D^\alpha(u*w)=(D^\alpha u)*w=u*(D^\alpha w)$ (5.19) e $\delta_0*\psi=\psi$, $u*\delta_0=u$ (5.16), (5.18).
Aggiunti (Es. 5.4.1): $L=\Delta\Rightarrow L^*=\Delta$; $L=\partial_t-\Delta\Rightarrow L^*=-\partial_t-\Delta$; $L=\square=\partial^2_{tt}-\Delta\Rightarrow L^*=\square$ (laplaciano e dalambertiano autoaggiunti).
**Es. 5.4.4** ($n=1$): $U''=\delta_0=H'$ equivale a $(U'-H)'=0$; con il teorema della derivata nulla due volte
$$U(x)=\begin{cases}ax+b & x<0\\(1+a)x+b & x\ge0\end{cases},\qquad b=0,\ a=-\tfrac12:\ U(x)=\frac{|x|}2 .$$
Così $u''=f$ ha la soluzione particolare $\bar u=\frac{|\cdot|}2*f$, cui si somma $u_h$ con $u_h''=0$.

## Intuizione
La delta è l'unità della convoluzione e la convoluzione commuta con le derivate: se si sa invertire $L$ su una "sorgente puntiforme", per linearità e invarianza per traslazione lo si sa invertire su ogni sorgente, sovrapponendo le risposte. La soluzione fondamentale non è unica: si somma qualunque soluzione dell'omogenea.

## Come si usa
Schema: (1) trovare $U$ risolvendo l'equazione omogenea fuori dall'origine e verificando $\langle U,L^*\varphi\rangle=\varphi(0)$; (2) scrivere $u=U*f$; (3) aggiungere la soluzione generale dell'omogenea ($u=u_h+u_p$, Cor. 5.2.5). Esempi del corso: laplaciano ($G$ con $-\Delta G=\delta_0$) e operatore del calore ($\partial_tU-\Delta_xU=\delta_{(0,0)}$).

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §5.4 "Applicazioni alla soluzione di EDP" (5.20)-(5.21), Es. 5.4.1, Def. 5.4.2, Prop. 5.4.3, Es. 5.4.4. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 53-56).

## Prerequisiti
- [[Convoluzione]]: convoluzione fra distribuzioni e regola di derivazione (5.19)
- [[Delta di Dirac]]: secondo membro di $LU=\delta_0$ e unità della convoluzione
- [[Derivata distribuzionale]]: derivate per dualità e operatore aggiunto
- [[Equazione alle derivate parziali]]: operatori lineari a coefficienti costanti

## Porta a
- [[Soluzione fondamentale del laplaciano]]: caso $L=-\Delta$
- [[Soluzione fondamentale dell'equazione del calore]]: caso $L=\partial_t-\Delta_x$

## Collegati
- [[Funzioni a derivata nulla]]: il teorema della derivata nulla in $\mathcal D'$ risolve l'Es. 5.4.4
