---
tipo: competenza
area: analisi
corsi: [Matematica discreta, Matematica per l'AI]
livello: [triennale]
aliases: ["logistic map", "mappa logistica", "modello logistico discreto", "equazione logistica", "x_{n+1} = alpha x_n (1 - x_n)", "dinamica di popolazioni"]
tags: [competenza, area/analisi]
---

# Equazione logistica discreta

> Modello di popolazione con risorse limitate: $x_{n+1}=\alpha x_n(1-x_n)$. È l'esempio guida delle ricorrenze non lineari, e i suoi punti fissi sono $0$ e $\frac{\alpha-1}{\alpha}$.

## Definizione / enunciato
**Il modello lineare non basta.** $p_{n+1}=p_n+\lambda p_n=(1+\lambda)p_n$, con tasso di natalità $\lambda>0$, dà una crescita esponenziale che "non è realistica".

**Ipotesi del modello logistico.** Le risorse non consentono di superare un numero $N$ di individui ($p_n\le N$). Se $p_n$ è basso rispetto a $N$, la popolazione tende a crescere. Se è alto, gli individui competono per le risorse e l'accrescimento diminuisce:
$$p_0=c,\qquad p_{n+1}=\alpha\,p_n\Big(1-\frac{p_n}N\Big),$$
dove il coefficiente $1-p_n/N$ scende al crescere di $p_n$. Con la variabile $x_n=p_n/N$ si ottiene l'**equazione logistica**
$$x_{n+1}=\alpha\,x_n(1-x_n).$$
È non lineare, perché a destra compare $x_n^2$. Il vincolo del modello è $x\in[0,1]$.

## Formule chiave
I punti fissi di $f(x)=\alpha x(1-x)$ risolvono $\alpha x(1-x)=x$:
$$x=0\qquad\text{oppure}\qquad \alpha(1-x)=1\ \Rightarrow\ x_1=\frac{\alpha-1}{\alpha}.$$
Per $\alpha=2$ i punti fissi sono $0$ e $\frac12$.

## Intuizione
Vicino a 0 la mappa è quasi lineare con fattore $\alpha$ e la popolazione cresce. Vicino a 1 il fattore $1-x_n$ frena la crescita. L'equilibrio non nullo $\frac{\alpha-1}\alpha$ è il livello in cui natalità e competizione si compensano.

## Come si usa
**Caso $\alpha=2$, $a_0=a$** (lezione 6):
- se $a=0$ oppure $a=\frac12$, la successione è costante (punti fissi). Se $a=1$, poiché $f(1)=0$ la successione vale 0 da $n=1$ in poi (osservazione immediata, non scritta nella lezione);
- se $a\in(0,1)\setminus\{\frac12\}$, allora $a_1=f(a)\in(0,\frac12)$. L'intervallo $(0,\frac12)$ è invariante, $f$ vi è strettamente crescente e $f(x)>x$;
- per induzione $0<a_n<a_{n+1}<\frac12$ per $n\ge1$. La successione è crescente e limitata, quindi converge a un punto fisso, che non può essere 0. Quindi $a_n\to\frac12$.

Per $a_0<0$ la successione diverge a $-\infty$ (esercizio 1). Per $a_0>1$ (esercizio 2) l'intervallo $(1,+\infty)$ non è invariante, la successione è decrescente e diverge a $-\infty$.

## Nei corsi
- **Matematica discreta** (triennale): apre la lezione 6 come motivazione delle ricorrenze non lineari; il caso $\alpha=2$ è l'esempio svolto. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/06 - Successioni ricorsive non lineari.pdf` (lezione 6, pp. 1, 4-6, 8, manoscritto).
- **Matematica per l'AI** (triennale): mappa logistica $x_{n+1}=\mu x_n(1-x_n)$, $\mu\in[0,4]$, come esempio di sequenza "aleatoria" generata da una regola deterministica. $[0,1]$ è invariante perché il massimo di $F_\mu$ è $\mu/4$ in $x=\frac12$. Caso $\mu=2$, $x_0=\frac13$: $x_1=\frac49$, $x_2=\frac{40}{81}$, $x_3=\frac{3280}{6561}$, crescente verso $\frac12$; rappresentazione a ragnatela (parabola e bisettrice); preimmagini $F_2^{-1}(z)=\frac{1\mp\sqrt{1-2z}}2$. Punti fissi $0$ e $\tilde x=1-\frac1\mu$ (in $[0,1]$ solo per $\mu>1$), $F'_\mu(x)=\mu-2\mu x$: 0 attrae per $\mu\le1$, $\tilde x$ attrae per $1<\mu<3$ ($F'(\tilde x)=2-\mu$); a $\mu=3$ raddoppio del periodo con $x_{3,4}=\frac1{2\mu}\big[1+\mu\mp\sqrt{\mu^2-2\mu-3}\big]$, stabile fino a $1+\sqrt6$; cascata $2^n$ completa a $\mu\approx3.57$, periodo 3 da $1+2\sqrt2$. Per $\mu=4$ misura invariante ergodica $\rho(x)=1/(\pi\sqrt{x-x^2})$ e coniugio con lo shift binario (caos). Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 10-21).

## Prerequisiti
- [[Punto di equilibrio di una successione ricorsiva]]: si cercano prima i punti fissi
- [[Monotonia delle successioni ricorsive]]: insieme invariante e $f$ crescente su $(0,\frac12)$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Relazioni ricorsive lineari del primo ordine]]: il modello lineare di popolazione da cui si parte
- [[Biforcazione]]: cascata di raddoppi del periodo al crescere di $\mu$ (Matematica per l'AI)
- [[Caos deterministico]]: per $\mu=4$ la dinamica è uno shift binario (Matematica per l'AI)
- [[Misura invariante di un sistema dinamico]]: densità invariante per $\mu=4$ (Matematica per l'AI)
