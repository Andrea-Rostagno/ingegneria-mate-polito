---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Metodi matematici e probabilità]
livello: [magistrale, triennale]
aliases: ["memoryless property"]
tags: [competenza, area/probabilita]
---

# Proprietà di assenza di memoria

> La distribuzione esponenziale «dimentica» il tempo già trascorso; è il motivo per cui Poisson e CTMC ripartono da capo in ogni istante.

## Definizione / enunciato
$\tau\sim\exp(\lambda)$ se ha densità $f_\tau(t)=\lambda e^{-\lambda t}$ per $t\ge0$ (0 altrimenti), cioè $\mathbb P(\tau>t)=e^{-\lambda t}$. **Assenza di memoria**: per $t,s\ge0$
$$\mathbb P(\tau>t+s\mid\tau>s)=\mathbb P(\tau>t).$$
L'esponenziale è l'unica v.a. continua con questa proprietà; la geometrica è l'unica discreta.

## Formule chiave
$$F_\tau(t)=1-e^{-\lambda t},\qquad \mathbb E[\tau]=1/\lambda,\qquad \mathrm{Var}(\tau)=1/\lambda^2.$$

## Intuizione
Sapere che l'evento non è ancora avvenuto non cambia la legge del tempo residuo. Per questo, condizionando su $\{\tau>s\}$, $\tau-s$ ha ancora legge $\exp(\lambda)$.

## Come si usa
- Lezione 3: clienti Poisson con tasso 3/h. L'impiegato arriva alle 10 invece che alle 8, e l'attesa del primo cliente è ancora $\exp(3)$.
- Durrett 2.3 (soluzione in `suggested_exercises_PP.pdf`): $\tau_1,\tau_2\sim\exp(2)$ indipendenti. Usando che $\tau_1-1/2$ dato $\tau_1>1/2$ ha la legge di $\tau_1$, si ottiene $\mathbb E[T]=\tfrac12(1+e^{-1})\approx0.6839$.
- Durrett 2.4: $\mathbb P(\tau_2+t<\tau_1)=\dfrac{\lambda_2}{\lambda_1+\lambda_2}e^{-\lambda_1 t}$.
- Nelle CTMC (costruzione 1, lezione 10) il tempo di permanenza residuo in $x$ è ancora $\exp(\lambda(x))$.

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 2-3 ("A review of the Exponential distribution", "Memoryless property"). Fonti principali: `magistrale/Processi stocastici/Lezione_02_25_09 (1).pdf` (lezione 2), `magistrale/Processi stocastici/Lezione_03_29_09.pdf` (lezione 3); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processo di Poisson.
- **Metodi matematici e probabilità** (triennale): dimostrata due volte negli appunti manoscritti, per la geometrica in forma discreta, $\mathbb P(T>n+m\mid T>n)=\mathbb P(T>m)$ con $S_T(n)=(1-p)^n$ (esempio del lotto: niente vantaggio sui numeri ritardatari), e per l'esponenziale, $\mathbb P(X>s+t\mid X>s)=\mathbb P(X>t)$ con $S_X(x)=e^{-\lambda x}$ (tempi di vita di oggetti non soggetti a usura). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione10(04-05-23) (1).pdf` (lezione 10, p. 2), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione14(08-06-23).pdf` (lezione 14, pp. 9-10).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Corsa di esponenziali]]: il minimo riparte senza memoria
- [[Processo di Poisson]]: inter-arrivi esponenziali senza memoria

## Collegati
- [[Distribuzione esponenziale]] e [[Distribuzione geometrica]]: richiami di probabilità di base
