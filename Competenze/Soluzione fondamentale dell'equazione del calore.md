---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["fundamental solution of the heat equation", "nucleo gaussiano del calore", "riscalamento parabolico", "parabolic scaling", "U(x,t)"]
tags: [competenza, area/analisi]
---

# Soluzione fondamentale dell'equazione del calore

> $U(x,t)=(4\pi t)^{-n/2}e^{-\|x\|^2/4t}$ per $t>0$ (nulla per $t<0$): risolve $\partial_tU-\Delta_xU=\delta_{(0,0)}$ e parte dalla delta, $U(\cdot,0)=\delta_0$.

## Definizione / enunciato
$$U(x,t):=\begin{cases}\dfrac1{(4\pi t)^{n/2}}e^{-\|x\|^2/4t} & x\in\mathbb R^n,\ t>0,\\ 0 & x\in\mathbb R^n,\ t<0.\end{cases}\qquad(6.9)$$
**Lemma 6.1.1.** $\int_{\mathbb R^n}U(x,t)\,dx=1$ per ogni $t>0$ (6.10), e $U\in L^1_{\rm loc}(\mathbb R^{n+1})$.
**Prop. 6.1.2.** $\partial_tU-\Delta_xU=\delta_{(0,0)}$ in $\mathcal D'(\mathbb R^{n+1})$ (6.11) e $U(x,0)=\delta_0$ in $\mathcal D'(\mathbb R^n)$, cioè $\lim_{t\to0^+}U(\cdot,t)=\delta_0$ (6.12).

## Formule chiave
**Riscalamento parabolico:** se $u$ risolve $\partial_tu-\Delta_xu=0$, anche $v_\lambda(x,t)=u(\lambda x,\lambda^2t)$ la risolve (6.6); il rapporto $\|x\|^2/t$ è invariante. Si cerca allora
$$u(x,t)=\frac1{t^{n/2}}v\Big(\frac{\|x\|}{\sqrt t}\Big)\qquad(6.7)$$
e con $y=\|x\|/\sqrt t$ l'equazione diventa $\big(2y^{n-1}v'(y)+y^nv(y)\big)'=0$, cioè $2y^{n-1}v'+y^nv=c$ (6.8); con $v(0)=\alpha$, $v'(0)=0$ si ha $c=0$ e
$$v'+\frac y2v=0\ \Rightarrow\ v(y)=\alpha e^{-y^2/4}=\alpha e^{-\|x\|^2/4t}.$$
Verifica di (6.11): $\langle\partial_tU-\Delta_xU,\varphi\rangle=\lim_{\varepsilon\to0^+}\int_{\mathbb R^n}U(x,\varepsilon)\varphi(x,\varepsilon)\,dx=\varphi(0,0)$, con il cambio $z=x/\sqrt{4\varepsilon}$ e convergenza dominata.

## Intuizione
Per $x\ne0$, $U(x,t)\to0$ per $t\to0^+$; in $x=0$, $U\to+\infty$: l'unità di calore concentrata nell'origine al tempo $0$ si sparpaglia come una gaussiana che si allarga col tempo, conservando la massa totale 1.

## Come si usa
Per Prop. 5.4.3 la soluzione con forzante è $U*_{(x,t)}f$ e quella con dato iniziale è $U*_xu_0$. Il calcolo di (6.10): $\int\frac{e^{-\|z\|^2}}{\pi^{n/2}}dz=\frac1{\pi^{n/2}}\prod_{i=1}^n\int_{\mathbb R}e^{-z_i^2}dz_i=1$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §6.1 "Ricerca della soluzione fondamentale" (6.2)-(6.12), Lemma 6.1.1, Prop. 6.1.2 (Lezioni 14-15). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 57-60).
- **Equazioni di fisica matematica** (triennale): ricavata in 1D con la trasformata di Fourier invece che per riscalamento. Con $\hat u(\xi,t)=\int u\,e^{-i\xi x}dx$ e dato $u_0=\delta_0$ si ha $\hat u=e^{-D\xi^2t}$, e antitrasformando $u(x,t)=\frac1{\sqrt{4\pi Dt}}e^{-x^2/4Dt}$, con coefficiente di diffusione $D$. È interpretata come densità di probabilità della posizione di una particella (gaussiana di media 0 e varianza $2Dt$); ne seguono il supporto pieno per ogni $t>0$ (velocità infinita) e la regolarità $C^\infty$ della convoluzione con $u_0$. Fonti: `triennale/ANNO 3/eq fisica matematica/26 - Lezione 12_12_23.pdf` (pp. 5-6); `triennale/ANNO 3/eq fisica matematica/27 - Lezione 13_12_23.pdf` (pp. 1-3).

## Prerequisiti
- [[Soluzione fondamentale di un operatore differenziale]]: definizione per $L=\partial_t-\Delta_x$, $L^*=-\partial_t-\Delta_x$
- [[Equazioni a variabili separabili]]: l'ODE $v'+\frac y2v=0$
- [[Convergenza di distribuzioni]]: $U(\cdot,t)\to\delta_0$ per $t\to0^+$

## Porta a
- [[Formule di rappresentazione per l'equazione del calore]]: convoluzione con forzante e dato iniziale
- [[Proprietà di media per l'equazione del calore]]: le palle di calore sono insiemi di livello di $U$

## Collegati
- [[Equazione del calore]]: nucleo della soluzione
- [[Distribuzione normale]]: $U(\cdot,t)$ è la densità gaussiana di varianza $2t$ per componente (osservazione nostra dal confronto delle formule)
- [[Soluzione fondamentale del laplaciano]]: analogo ellittico
- [[Limite diffusivo della passeggiata aleatoria]]: giustifica l'interpretazione come densità di una particella (Equazioni di fisica matematica)
