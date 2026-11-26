---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["finite difference method", "FDM", "differenze finite per problemi ai limiti", "schema alle differenze finite", "griglia computazionale", "mesh", "nodi fittizi", "ordine sperimentale di convergenza", "EOC"]
tags: [competenza, area/numerica]
---

# Metodo delle differenze finite

> Per risolvere un problema ai limiti si colloca l'equazione nei nodi interni di una griglia, si sostituiscono le derivate con differenze finite centrate e si risolve il sistema (tridiagonale) risultante.

## Definizione / enunciato
Per $u''=f(x,u,u')$, $u(a)=\alpha$, $u(b)=\beta$:
1. griglia $x_n=a+nh$, $h=(b-a)/N$, $n=0,\dots,N$;
2. equazione collocata nei nodi interni $x_n$, $n=1,\dots,N-1$;
3. per $u\in C^4$: $u'(x_n)=\frac{u(x_{n+1})-u(x_{n-1})}{2h}+O(h^2)$, $u''(x_n)=\frac{u(x_{n+1})-2u(x_n)+u(x_{n-1})}{h^2}+O(h^2)$;
4. si trascurano gli $O(h^2)$:
$$\frac{u_{n+1}-2u_n+u_{n-1}}{h^2}=f\Big(x_n,u_n,\frac{u_{n+1}-u_{n-1}}{2h}\Big),\quad u_0=\alpha,\ u_N=\beta;$$
5. si risolve il sistema, in generale non lineare (con Newton la jacobiana è tridiagonale).

**Robin** $u'(a)+\gamma u(a)=0$, $u'(b)+\delta u(b)=0$: nodi fittizi $x_{-1}$, $x_{N+1}$, equazione collocata anche in $x_0$ e $x_N$, con $u_{-1}=u_1+2h\gamma u_0$ e $u_{N+1}=u_{N-1}-2h\delta u_N$.

## Formule chiave
- **Filo elastico** $-u''=f$, $u(0)=u(1)=0$: $A_h\mathbf u=\mathbf b$ con $A_h=\frac1{h^2}\mathrm{tridiag}(-1,2,-1)$ di ordine $N-1$, $\mathbf b=(f(x_1),\dots,f(x_{N-1}))^T$; $A_h$ è tridiagonale, simmetrica e definita positiva; $K(A_h)$ cresce al diminuire di $h$; se $f\in C^2$, $\max_n|u(x_n)-u_n|=O(h^2)$.
- **Diffusione-trasporto-reazione**: righe $\frac1{h^2}[c_nu_{n-1}+d_nu_n+e_nu_{n+1}]=r(x_n)$ con $c_n=-(1+\frac h2p(x_n))$, $d_n=2+h^2q(x_n)$, $e_n=-(1-\frac h2p(x_n))$; con $q>0$ e $h<2/\|p\|_\infty$ la matrice è a diagonale dominante, quindi il sistema ha un'unica soluzione.
- Ordine sperimentale: $\mathrm{EOC}=\log_2\big(\|u-u_h\|_\infty/\|u-u_{h/2}\|_\infty\big)$.

## Intuizione
Ogni equazione discreta lega un nodo ai due vicini: per questo la matrice è tridiagonale e sparsa. L'errore del metodo è quello delle formule di derivazione, $O(h^2)$.

## Come si usa
Filo elastico con $f=1$: $u=\frac12x(1-x)$ è un polinomio di grado 2, quindi lo schema è esatto. Con $f=\sin x$ ($u=\sin x-x\sin1$) l'errore passa da $3.07\cdot10^{-4}$ ($N=4$) a $2.98\cdot10^{-10}$ ($N=4096$), EOC $\approx2$. Diffusione-reazione $-u''+u=-x$, $u(0)=u(1)=0$: errore da $2.65\cdot10^{-4}$ a $6.57\cdot10^{-11}$, EOC $\approx2$. Con soluzioni non uniformi conviene un passo variabile.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_08_ode_valori_limiti_print.pdf` (p. 12-32).

## Prerequisiti
- [[Problema ai limiti]]: il problema da discretizzare
- [[Formule di derivazione numerica]]: differenze centrate del secondo ordine

## Porta a
- [[Numero di Péclet]]: instabilità dello schema centrato a trasporto dominante
- [[Schema upwind]]: discretizzazione alternativa del termine di trasporto

## Collegati
- [[Matrice simmetrica definita positiva]]: $A_h$ del filo elastico è sdp
- [[Matrice a diagonale dominante]]: garantisce l'unicità con trasporto e reazione
- [[Matrice sparsa]]: il sistema è tridiagonale
- [[Metodo di Newton per sistemi]]: caso non lineare, con jacobiana tridiagonale
- [[Condizionamento di un sistema lineare]]: $K(A_h)$ cresce al diminuire di h
