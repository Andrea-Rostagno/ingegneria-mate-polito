---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["homogeneous linear recurrence", "ricorrenza lineare omogenea del secondo ordine", "equazione caratteristica di una ricorrenza", "characteristic equation", "sistema fondamentale di soluzioni", "ricorrenza lineare di ordine k", "sistemi di relazioni ricorsive"]
tags: [competenza, area/algebra-geometria]
---

# Relazioni ricorsive lineari omogenee

> Ricorrenze $a_n=\alpha a_{n-1}+\beta a_{n-2}$ (o di ordine $k$) a coefficienti costanti. Si risolvono cercando soluzioni $x^n$: le radici dell'equazione caratteristica danno una base dello spazio delle soluzioni.

## Definizione / enunciato
Sia $a_n=\alpha a_{n-1}+\beta a_{n-2}$ per $n\ge2$, con $\beta\ne0$. Sostituendo $a_n=x^n$ con $x\ne0$ e dividendo per $x^{n-2}$ si ottiene l'**equazione caratteristica**
$$x^2=\alpha x+\beta,\qquad \Delta=\alpha^2+4\beta.$$
**Teorema 3.2.1** (Tilli).
- (a) Con due radici distinte $x_\pm$: $a_n=Ax_+^n+Bx_-^n$.
- (b) Con una radice doppia $x$: $a_n=Ax^n+Bn\,x^n$.

Si verifica che $nx^n$ è soluzione usando $\alpha x+2\beta=0$, che vale quando $\Delta=0$. Le costanti $A,B$ si fissano con i due dati iniziali $a_k$, $a_{k+1}$. Il sistema lineare ha un'unica soluzione perché il determinante è diverso da 0 (nel caso (b), $x^{2k+1}\ne0$).

**Caso $\Delta<0$** (lezione 5). Se $\lambda=\rho e^{i\theta}$ è radice, allora $\frac{\lambda^n+\bar\lambda^n}2=\rho^n\cos n\theta$ e $\frac{\lambda^n-\bar\lambda^n}{2i}=\rho^n\sin n\theta$ sono soluzioni reali:
$$a_n=\rho^n\,(A\cos n\theta+B\sin n\theta).$$

**Sistema fondamentale.** $\{A_n,B_n\}$ è un sistema fondamentale se $A_0=1$, $A_1=0$, $B_0=0$, $B_1=1$. Allora $A_n,B_n$ sono linearmente indipendenti e ogni soluzione si scrive $c_n=c_0A_n+c_1B_n$ (per induzione, perché le due soluzioni hanno gli stessi dati iniziali). Le soluzioni formano uno spazio vettoriale di dimensione 2.

## Formule chiave
**Ordine $k$:** $a_n=\alpha_1a_{n-1}+\dots+\alpha_ka_{n-k}$, con equazione caratteristica $x^k=\alpha_1x^{k-1}+\dots+\alpha_k$. L'insieme delle soluzioni è un sottospazio di dimensione $k$ dello spazio delle successioni. Se le radici $x_1,\dots,x_k$ sono distinte, $a_n=A_1x_1^n+\dots+A_kx_k^n$.

## Intuizione
La ricorrenza è lineare, quindi le combinazioni lineari di soluzioni sono soluzioni. I due dati iniziali fissano due parametri, come per un'EDO del secondo ordine: Tilli osserva che le ricorrenze lineari sono la controparte discreta delle equazioni differenziali lineari a coefficienti costanti.

## Come si usa
Esempi della lezione 5:
- $a_n=a_{n-1}+2a_{n-2}$, $a_0=1$, $a_1=2$: le radici sono $2$ e $-1$, si ottiene $A=1$, $B=0$, quindi $a_n=2^n$;
- $a_n=4a_{n-1}-4a_{n-2}$, $a_0=0$, $a_1=1$: radice doppia $2$, quindi $a_n=n\,2^{n-1}$;
- $a_n=2\sqrt3\,a_{n-1}-4a_{n-2}$: $c_n=2^n[A\cos\frac{n\pi}6+B\sin\frac{n\pi}6]$;
- **ordine 3:** $a_n=6a_{n-1}-11a_{n-2}+6a_{n-3}$, $a_0=2$, $a_1=5$, $a_2=15$. Le radici sono 1, 2, 3 e si ottiene $a_n=1-2^n+2\cdot3^n$;
- Tilli Es. 3.2.2: $a_1=1$, $a_2=3$, $a_n=a_{n-1}+2a_{n-2}$ dà $a_n=\frac{2^{n+1}+(-1)^n}3$.

**Sistemi** (lezione 5, cenno): un'equazione di ordine $k$ equivale a un sistema di $k$ equazioni del primo ordine ponendo $b_n=a_{n-1}$ e così via. Un sistema $2\times2$ con matrice $M=STS^{-1}$, con $T$ triangolare superiore, si disaccoppia.

## Nei corsi
- **Matematica discreta** (triennale): parte centrale della lezione 5 (casi $\Delta>0$, $=0$, $<0$, ordine $k$, sistemi). Fonti: `triennale/ANNO 1/Matematica discreta/teoria/05 - Successioni ricorsive lineari.pdf` (lezione 5, pp. 8-18, 23-26); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§3.2, Teor. 3.2.1, pp. 45-52).

## Prerequisiti
- [[Successione definita per ricorrenza]]: due dati iniziali determinano la successione
- [[Dipendenza e indipendenza lineare]]: il sistema fondamentale è una base
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: radici $\rho e^{\pm i\theta}$ nel caso $\Delta<0$

## Porta a
- [[Relazioni ricorsive lineari non omogenee]]: soluzione generale = omogenea + particolare
- [[Numeri di Fibonacci]]: caso $\alpha=\beta=1$
- [[Conteggio con relazioni ricorsive]]: tassellazioni e stringhe

## Collegati
- [[Equazioni lineari del secondo ordine a coefficienti costanti]]: stessa teoria, nel continuo
- [[Spazio vettoriale]]: le soluzioni formano un sottospazio di dimensione $k$
