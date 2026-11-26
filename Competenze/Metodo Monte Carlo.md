---
tipo: competenza
area: numerica
corsi: [Informatica, Prob e statistica, Prova finale, Statistica computazionale, Modelli statistici, Ottimizzazione in condizione di incertezza, Financial engineering]
livello: [triennale, magistrale]
aliases: [Monte Carlo method, simulazione Monte Carlo, stima di pi greco, integrazione Monte Carlo, Monte Carlo integration, stimatore Monte Carlo]
tags: [competenza, area/numerica]
---

# Metodo Monte Carlo

> Metodo che approssima una quantità difficile da calcolare con la frequenza di un evento in molte prove casuali.

## Definizione / enunciato
Il metodo Monte Carlo trova soluzioni approssimate a problemi che non si risolvono in modo semplice, ripetendo molte prove casuali e usando la frazione di successi. Esempio del corso: stimare $\pi$ come rapporto tra l'area del cerchio unitario e quella del quadrato $[-1,1]\times[-1,1]$ che lo contiene (area 4).

## Formule chiave
Si genera un punto $(x, y)$ uniforme in $[-1,1]^2$; è un *hit* se $x^2 + y^2 \le 1$. Con *tries* prove:
$$\frac{\text{hits}}{\text{tries}} \approx \frac{\pi}{4} \quad\Rightarrow\quad \pi \approx 4\cdot\frac{\text{hits}}{\text{tries}}$$

## Intuizione
La frazione di punti che cade nel cerchio tende al rapporto delle aree: la probabilità di un evento si stima con la sua frequenza relativa su molte prove.

## Come si usa
Codice della slide (P4 p. 98):
```python
from random import random
TRIES = 10000
hits = 0
for i in range(TRIES) :
    r = random(); x = -1 + 2 * r
    r = random(); y = -1 + 2 * r
    if x * x + y * y <= 1 :
        hits = hits + 1
piEstimate = 4.0 * hits / TRIES
```
L'esecuzione mostrata nella slide stampa `Estimate for pi: 3.1464`. Nota: `-1 + 2 * random()` trasforma un numero in $[0,1)$ in uno in $[-1,1)$.

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.9, come esempio di simulazione con numeri casuali. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 97-98).
- **Prob e statistica** (triennale): applicazione della legge forte dei grandi numeri al calcolo di $\int_0^1f(x)dx$ per $f\in L^1([0,1])$ senza primitiva: con $U_m$ i.i.d. $U([0,1])$ e $X_m=f(U_m)$ (i.i.d., in $L^1$, $\mathbb E[X_m]=\int_0^1f$), la LFGN di Kolmogorov dà $\frac1n\sum_{i=1}^nf(U_i)\to\int_0^1f(x)dx$ q.c.: basta generare numeri casuali uniformi su $(0,1)$. Nelle slide di statistica le simulazioni in R mostrano empiricamente che la media campionaria tende alla media vera. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione16(10-11-2023).pdf` (p. 11); `triennale/ANNO 3/prob e statistica/statistica/statistica campionionaria lez2.pdf` (Simulazione I).
- **Prova finale** (triennale): simulazione Monte Carlo di un portafoglio long su 252 giorni con 10000 scenari generati da una copula gaussiana; dalla distribuzione simulata del valore finale si stimano valore atteso (107.76 partendo da 100), VaR 5% (106.32) e CVaR 5% (105.96). Il metodo MCMC estende l'idea a campioni dipendenti. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§6.1.1, p. 94; §6.1.3, pp. 101-104; §5.2.8, p. 56).
- **Statistica computazionale** (magistrale): **integrazione Monte Carlo** di $E(h(X))=\int_{\mathcal X}h(x)f(x)\,d\lambda(x)$, con $\lambda$ misura di Lebesgue, di conteggio o ibrida (variabili miste). Per $(X_1,\dots,X_n)$ identicamente distribuite, anche non indipendenti, $\bar h_n=\frac1n\sum_{i=1}^nh(X_i)\to E(h(X))$ q.c.; se $h^2(X)$ ha attesa finita $v_n=\mathrm{var}(\bar h_n)=\frac1{n^2}\bigl(\sum_{i=1}^n\mathrm{var}(h(X_i))+\sum_{i=1}^n\sum_{j=1}^n\mathrm{cov}(h(X_i),h(X_j))\bigr)$ come scritto nella slide (la doppia somma su tutti gli $i,j$ conterebbe due volte le varianze: va intesa per $i\ne j$), che con indipendenza diventa $\frac1n\int(h(x)-E(h(X)))^2f(x)\,d\lambda(x)$, stimata da $v_n=\frac1{n^2}\sum_i(h(x_i)-\bar h_n)^2$; quest'ultimo "non è uno stimatore Monte Carlo" ed è distorto (non distorto con $n-1$). Vale anche per funzioni di più variabili e, con $h(X)=\mathbf 1_a(X)$, stima la funzione di ripartizione (ECDF). **Stima di densità marginale**: se si conosce $f(x\mid y)$ e si sa campionare $Y\sim G$, $f(x^*)\approx\frac1n\sum_if(x^*\mid Y_i)$; esempio $Y\sim\mathrm{Exp}(\lambda)$, $X\mid Y=y\sim G(e^y,1)$ con $n=1000$, $\lambda=2$ (codice R nella slide). Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 7-12, 17-19); `magistrale/Statistica computazionale/esercitazioni/Monte Carlo.R`.
- **Modelli statistici** (magistrale): stima $\hat\mu_N=\frac1N\sum_jg(X_j)$ di $\mathbb E[g(X)]$, non distorta, consistente per la legge dei grandi numeri e approssimativamente $N(\mu_g,\sigma_g^2/N)$ per il TLC; **errore Monte Carlo** $\sigma_g/\sqrt N$ stimato con $s_g/\sqrt N$, e $\sqrt{\hat p(1-\hat p)/N}$ per una probabilità (libro, cap. 4, Prop. 4.3). Esempi: $P(N_A\ge1,N_B\ge1)$ per una multinomiale di controllo qualità con `rmultinom`; due proporzioni a posteriori ($\mathrm{Beta}(27,15)$ e $\mathrm{Beta}(19,23)$), $P(p_A>p_B\mid\text{dati})\approx0.962$ con $100\,000$ estrazioni. Con catene MCMC l'errore usa la dimensione campionaria effettiva. Fonti: `Libri/Modelli statistici/capitoli/cap04.tex` (§4.2, p. 59).
- **Ottimizzazione in condizione di incertezza** (magistrale): il Monte Carlo come **integrazione numerica per campionamento casuale**: $I=\int_0^1g(x)\,dx=\mathbb E[g(U)]$ stimato da $\hat I_m=\frac1m\sum_{i=1}^mg(U_i)$, convergente con probabilità 1 per la legge forte; esempio $\int_0^1e^x\,dx=e-1\approx1.7183$ (con 10 campioni 1.8318, 2.0358, 1.3703; con $10^6$ 1.7189, 1.7178, 1.7174). Distinzione fra *campionamento* statico (statistica, ottimizzazione globale, generazione di scenari nella programmazione stocastica a due stadi) e *simulazione* di traiettorie (Wiener, GBM, AR/ARMA, catene di Markov, code). Struttura del simulatore: generatore di uniformi, trasformazione in variabili aleatorie, traiettorie, analisi dell'output; errore $\sigma/\sqrt n$, per cui serve riduzione della varianza (antitetiche, numeri comuni, variabili di controllo, stratificazione, condizionamento, importance sampling, ipercubi latini). Nelle lezioni l'integrazione Monte Carlo serve ad approssimare $\mathbb E[Q(\mathbf x,\xi)]$ della programmazione stocastica, e nella policy evaluation nel reinforcement learning si stima $V_\pi(s)=\mathbb E_\pi[G_t\mid S_t=s]$ con medie di ritorni. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 3, 14, 33, 41-43); `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 30); `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 36-39).
- **Financial engineering** (magistrale): prezzo di un'opzione con lo stimatore $c_{M,h}=\frac1M\sum_ie^{-rT}\varphi(S_N^{(i)})$ su traiettorie di Euler-Maruyama; intervallo di confidenza al 95% $c_{M,h}\pm1.96s/\sqrt M$. **Decomposizione dell'errore** (prop. c18-errore-mc): $\mathbb E[(c-c_{M,h})^2]=(c-\mathbb E c_h)^2+\mathrm{Var}(c_h)/M\le C_1^2h^2+\mathrm{Var}(c_h)/M$: errore statistico $\propto M^{-1/2}$, bias $\propto h$; l'intervallo misura solo l'errore statistico. Esempio del libro: call con $S_0=K=100$, $r=5\%$, $\sigma=20\%$, $T=1$ (Black-Scholes 10.4506): con $M=10^3,10^4,10^5$ stime 10.493, 10.297, 10.441 e semiampiezze 0.91, 0.28, 0.09 (fattore $\sqrt{10}$). Riduzione della varianza (cenno): antitetiche, variabile di controllo $Y-b(X-\mathbb EX)$ con $b^*=\mathrm{Cov}(X,Y)/\mathrm{Var}X$. Fonti: `Libri/Financial engineering/capitoli/cap18.tex`; dispensa `magistrale/Financial engineering/esercitazioni/Discretizzazione SDEs e metodo Monte Carlo.pdf` (T. Vanzan).

## Prerequisiti
- [[Legge dei grandi numeri]]: giustifica la convergenza della media delle simulazioni (Prob e statistica)
- [[Numeri pseudo-casuali]]: genera i punti casuali
- [[Ciclo for]]: ripete le prove un numero fissato di volte

## Porta a
- Nessun seguito diretto nel corso (Informatica, Prob e statistica).
- [[Simulazione da una copula]]: scenari congiunti per il portafoglio (Prova finale)
- [[Algoritmo di Metropolis-Hastings]]: Monte Carlo con catene di Markov (Prova finale)
- [[Campionamento per importanza]]: stesso stimatore con campioni da un'altra densità (Statistica computazionale)
- [[Teorema di Rao-Blackwell]]: stimatore Monte Carlo condizionato con varianza minore (Statistica computazionale)
- [[Dimensione campionaria effettiva]]: errore Monte Carlo con campioni autocorrelati (Modelli statistici)
- [[Campione casuale]]: la funzione di ripartizione empirica è una stima Monte Carlo di $F$ (Statistica computazionale)
- [[Gibbs sampler]]: Monte Carlo con campioni dipendenti da una catena di Markov (Statistica computazionale)
- [[Sample average approximation]]: il valore atteso del ricorso sostituito da una media su scenari (Ottimizzazione in condizione di incertezza)
- [[Campionamento antitetico]]: prima tecnica di riduzione della varianza (Ottimizzazione in condizione di incertezza)
- [[Valutazione Monte Carlo di una policy]]: media dei ritorni osservati negli episodi (Ottimizzazione in condizione di incertezza)
- [[Successioni a bassa discrepanza]]: versione quasi-Monte Carlo con errore $O((\ln N)^m/N)$ (Ottimizzazione in condizione di incertezza)

## Collegati
- [[Campionamento per importanza]]: stesso principio, con analisi dell'errore (varianza dello stimatore) e sua riduzione (Statistica computazionale)
- [[Valutazione neutrale al rischio]]: simulazione Monte Carlo nel corso di financial engineering, il prezzo di un derivato è un'attesa sotto $\mathbb Q$ stimata per simulazione (Financial engineering)
- [[Metodo di Euler-Maruyama]]: simulazione delle traiettorie, bias di discretizzazione (Financial engineering)
- [[Opzione asiatica]]: prezzo senza formula chiusa (Financial engineering)
