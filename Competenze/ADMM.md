---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["alternating direction method of multipliers", "metodo dei moltiplicatori a direzioni alternate", "ADMM in forma scalata", "scaled ADMM", "soft thresholding", "operatore di soft thresholding"]
tags: [competenza, area/ottimizzazione]
---

# ADMM

> Applicazione del metodo della lagrangiana aumentata ai problemi separabili $\min f_1(x)+f_2(z)$ con $Ax+Bz=c$: si minimizza $\mathcal L_A$ prima in $x$, poi in $z$, e si aggiorna il moltiplicatore. Il caso tipico è il LASSO.

## Definizione / enunciato
Problema (parzialmente) separabile:
$$\min_{x\in\mathbb R^{n_1},\,z\in\mathbb R^{n_2}}f_1(x)+f_2(z)\quad\text{s.t.}\quad Ax+Bz=c,$$
con $A\in\mathbb R^{m\times n_1}$, $B\in\mathbb R^{m\times n_2}$, $c\in\mathbb R^m$. Esempi delle note: $\min x+z^2$ con $x+z=2$ è separabile; $\min xz^2$ non lo è. La lagrangiana aumentata è
$$\mathcal L_A(x,z;\lambda,\mu)=f_1(x)+f_2(z)-\lambda^T(Ax+Bz-c)+\frac\mu2\|Ax+Bz-c\|_2^2.$$

## Formule chiave
Iterazione, dati $x_0,z_0,\lambda_0,\mu_0$:
$$x_{k+1}=\arg\min_x\mathcal L_A(x,z_k;\lambda_k,\mu_k),\qquad z_{k+1}=\arg\min_z\mathcal L_A(x_{k+1},z;\lambda_k,\mu_k),$$
$$\lambda_{k+1}=\lambda_k-\mu_k(Ax_{k+1}+Bz_{k+1}-c).$$
**Forma scalata**, con $\sigma=\lambda/\mu$:
$$x_{k+1}=\arg\min_xf_1(x)+\tfrac{\mu_k}2\|Ax+Bz_k-c-\sigma_k\|^2,\qquad z_{k+1}=\arg\min_zf_2(z)+\tfrac{\mu_k}2\|Ax_{k+1}+Bz-c-\sigma_k\|^2,$$
$$\sigma_{k+1}=\sigma_k-(Ax_{k+1}+Bz_{k+1}-c).$$

## Intuizione
Grazie alla separabilità ciascun sottoproblema coinvolge una sola delle due funzioni. Sotto ipotesi molto blande non è garantito che $x_k\to x^*$ e $z_k\to z^*$, ma valgono:
- $Ax_k+Bz_k-c\to0$;
- $f_1(x_k)+f_2(z_k)\to f_1(x^*)+f_2(z^*)$;
- $\lambda_k\to\lambda^*$.

La convergenza si comporta come quella di un metodo del primo ordine.

## Come si usa
**LASSO:** $\min_x\frac12\|Ex-b\|_2^2+\tau\|x\|_1$. Si introduce $z=x$, cioè $A=I$, $B=-I$, $c=0$. In forma scalata:
- **passo in $x$:** $\min\frac12\|Ex-b\|^2+\frac{\mu_k}2\|x-z_k-\sigma_k\|^2$ è un unico problema ai minimi quadrati $\min\frac12\|Dx-d\|^2$, con $D=\begin{pmatrix}E\\\sqrt{\mu_k}I\end{pmatrix}$ e $d=\begin{pmatrix}b\\\sqrt{\mu_k}(z_k+\sigma_k)\end{pmatrix}$, da risolvere con le equazioni normali $D^TDx=D^Td$;
- **passo in $z$:** si fa componente per componente con il soft thresholding
$$T(v;\tau)=\begin{cases}v-\tau,&v>\tau\\ v+\tau,&v<-\tau\\ 0,&|v|\le\tau,\end{cases}$$
che risolve in forma chiusa $\min_z\tau|z|+\frac12(v-z)^2$. Le note riscalano con $z'=\sqrt{\mu_k}z$, $v'=\sqrt{\mu_k}v$, $\tau'=\tau/\sqrt{\mu_k}$ e ottengono $T(\sqrt{\mu_k}v;\tau/\sqrt{\mu_k})$. Tornando a $z$ ciò equivale a $z=T(v;\tau/\mu_k)$ con $v=x_{k+1}-\sigma_k$: è un calcolo mio, fatto sui passaggi delle note;
- **aggiornamento:** $\sigma_{k+1}=\sigma_k-(x_{k+1}-z_{k+1})$.

## Nei corsi
- **Numerical opt** (magistrale): ultima lezione Pieraccini, con il LASSO svolto in Matlab. Fonti: `magistrale/Numerical opt/Pieraccini/Part_7_Constrained_Optimization_Penalty_methods.pdf` (p. 9-14).

## Prerequisiti
- [[Metodo della lagrangiana aumentata]]: ADMM ne è la versione a blocchi alterni

## Porta a
- [[Regressione regolarizzata]]: risolve il LASSO (penalità $\ell_1$)

## Collegati
- [[Problema dei minimi quadrati]]: il passo in $x$ del LASSO è un problema ai minimi quadrati
- [[Subgradiente]]: il passo in $z$ minimizza la funzione non differenziabile $|z|$ (collegamento concettuale)
