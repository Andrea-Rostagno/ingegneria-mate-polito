---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Equazioni di fisica matematica, Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["heat equation", "equazione di diffusione", "diffusion equation", "nucleo del calore", "heat kernel", "u_t = u_xx", "trasporto a velocità infinita", "operatore del calore"]
tags: [competenza, area/analisi]
---

# Equazione del calore

> L'equazione $u_t=u_{xx}$ su tutta la retta si risolve con la trasformata di Fourier in $x$: diventa un'ODE in $t$ per ogni frequenza, e la soluzione è la convoluzione del dato iniziale con un nucleo gaussiano.

## Definizione / enunciato
Problema (5.58)-(5.59): trovare $u(t,x)$ con
$$\frac{\partial u}{\partial t}=\frac{\partial^2u}{\partial x^2},\quad(t,x)\in\,]0,+\infty[\times\mathbb R,\qquad u(0,x)=u_0(x).$$
$u(t,x)$ è la temperatura nel punto $x$ all'istante $t$ di un corpo unidimensionale con temperatura iniziale $u_0$.

## Formule chiave
Con $v(t,\nu)=\mathcal F(u)(t,\nu)$ (trasformata nella sola $x$):
$$\frac{dv}{dt}(t,\nu)=-4\pi^2\nu^2v(t,\nu),\quad v(0,\nu)=\mathcal F(u_0)(\nu)\ \Rightarrow\ v(t,\nu)=e^{-4\pi^2\nu^2t}\mathcal F(u_0)(\nu).$$
Poiché $\mathcal F(e^{-x^2/4t})(\nu)=\sqrt{4\pi t}\,e^{-4\pi^2\nu^2t}$, antitrasformando (5.66):
$$u(t,x)=\frac1{\sqrt{4\pi t}}e^{-x^2/4t}*u_0(x)=\frac1{2\sqrt{\pi t}}\int_{-\infty}^{+\infty}e^{-y^2/4t}\,u_0(x-y)\,dy.$$

## Intuizione
La derivata seconda in $x$ diventa la moltiplicazione per $-4\pi^2\nu^2$: le alte frequenze si smorzano esponenzialmente, cioè il calore liscia il profilo. Il nucleo $\frac1{\sqrt{4\pi t}}e^{-x^2/4t}$ è una densità gaussiana di varianza $2t$ che si allarga col tempo (osservazione nostra, confrontando con la densità $\mathcal N(0,2t)$).

## Come si usa
Schema generale per PDE lineari a coefficienti costanti su $\mathbb R$: trasformare in $x$, risolvere il problema di Cauchy dell'ODE in $t$, riconoscere il prodotto di trasformate come trasformata di una convoluzione, antitrasformare. Il testo assume dato e soluzione abbastanza regolari da giustificare i passaggi.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §5.7 "L'equazione del calore". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 5 (3).pdf` (pp. 27-28 del PDF).
- **Equazioni alle derivate parziali** (triennale): cap. 6, in $\mathbb R^n$: $\partial_tu-\Delta_xu=f$ (6.1), equazione parabolica prototipica e lineare ($u$ temperatura, $f$ sorgente). Invece di Fourier si usa la soluzione fondamentale cercata per riscalamento parabolico, $U(x,t)=(4\pi t)^{-n/2}e^{-\|x\|^2/4t}$; seguono le formule di rappresentazione per forzante e dato iniziale (velocità di propagazione infinita, effetto regolarizzante), la proprietà di media sulle palle di calore e il principio del massimo con unicità anche per metodo energetico. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 57-67).
- **Equazioni di fisica matematica** (triennale): $\partial_tu-D\Delta u=0$ in $\Omega\times(0,+\infty)$ con $D>0$. Convenzione diversa da quella di Metodi matematici: $\hat u(\xi,t)=\int_{-\infty}^{+\infty}u(x,t)e^{-i\xi x}dx$ e coefficiente $D$ (là: frequenza $\nu$ e $D=1$).
  - **Derivazione** da una passeggiata aleatoria: $u(x,t)$ è la densità della posizione $X_t$ di una particella.
  - **Soluzione fondamentale** (dato $u_0=\delta_0$, $n=1$), ricavata con Fourier: $\partial_t\hat u+D\xi^2\hat u=0$, $\hat u(\xi,0)=\mathcal F[\delta_0]=1$, quindi $\hat u=e^{-D\xi^2t}$. Da $\mathcal F(e^{-(ax)^2})(\xi)=\frac{\sqrt\pi}ae^{-\xi^2/4a^2}$ con $\frac1{4a^2}=Dt$:
$$u(x,t)=\frac1{\sqrt{4\pi Dt}}e^{-\frac{x^2}{4Dt}},$$
    densità gaussiana di media 0 e varianza $2Dt$. Pur essendo $\mathrm{supp}\,u_0=\{0\}$, per ogni $t>0$ si ha $\mathrm{supp}\,u(\cdot,t)=\mathbb R$: **trasporto a velocità infinita**.
  - **Dato generale** $u_0\in L^1$, $u_0\ge0$, $\int u_0=1$: $u(x,t)=\int_{-\infty}^{+\infty}\frac1{\sqrt{4\pi Dt}}e^{-\frac{(x-y)^2}{4Dt}}u_0(y)\,dy$, che è $C^\infty$ in $x$ per ogni $t>0$ qualunque sia la regolarità di $u_0$.
  - È una **legge di conservazione** con flusso $F=-D\nabla u$; su domini limitati il corso studia la condizione di Neumann, la soluzione per serie e l'unicità.
  Fonti: `triennale/ANNO 3/eq fisica matematica/26 - Lezione 12_12_23.pdf` (pp. 1-6); `triennale/ANNO 3/eq fisica matematica/27 - Lezione 13_12_23.pdf` (pp. 1-4).

## Prerequisiti
- [[Trasformata di Fourier di distribuzioni temperate]]: trasformata nella variabile spaziale
- [[Convoluzione]]: soluzione come convoluzione con il nucleo
- [[Equazione alle derivate parziali]]: PDE lineare, del secondo ordine in spazio e del primo in tempo (Equazioni di fisica matematica)
- [[Legge di conservazione]]: ∂ₜu + div F = 0 con F = −D∇u (Equazioni di fisica matematica)
- [[Limite diffusivo della passeggiata aleatoria]]: derivazione microscopica (Equazioni di fisica matematica)

## Porta a
- [[Equazione del calore su un dominio limitato]]: Neumann omogeneo, conservazione della massa e positività (Equazioni di fisica matematica)
- [[Soluzione per serie di autofunzioni]]: soluzione su domini limitati (Equazioni di fisica matematica)
- [[Metodo dell'energia]]: unicità con condizione di Neumann (Equazioni di fisica matematica)

## Collegati
- [[Distribuzione normale]]: il nucleo del calore è una gaussiana
- [[Problema di Cauchy]]: ODE nella variabile $t$ per ogni frequenza
- [[Delta di Dirac]]: dato iniziale della soluzione fondamentale (Equazioni di fisica matematica)
- [[Soluzione fondamentale dell'equazione del calore]]: il nucleo gaussiano come soluzione di $\partial_tU-\Delta U=\delta$ (Equazioni alle derivate parziali)
- [[Formule di rappresentazione per l'equazione del calore]]: soluzioni con forzante e dato iniziale (Equazioni alle derivate parziali)
- [[Principio del massimo per l'equazione del calore]]: massimo sulla frontiera parabolica e unicità (Equazioni alle derivate parziali)
