---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Financial engineering]
livello: [magistrale]
aliases: [Gaussian characterization, Gaussian process, "covarianza min(s,t)", definizione equivalente del moto browniano]
tags: [competenza, area/probabilita]
---

# Caratterizzazione gaussiana del moto browniano

> Definizione equivalente: il moto browniano è il processo gaussiano centrato (con traiettorie continue) di covarianza $\min(s,t)$.

## Definizione / enunciato
**Teorema.** $(W_t)_{t\ge0}$ è un moto browniano unidimensionale se e solo se per ogni $t_1<\dots<t_k$ il vettore $(W_{t_1},\dots,W_{t_k})$ è gaussiano $k$-dimensionale con
$$\mu=0,\qquad\Sigma_{ij}=\min\{t_i,t_j\}$$
(oltre a $W_0=0$ e continuità delle traiettorie, che fanno parte della definizione).

Richiamo sui vettori gaussiani: $X\sim N(\mu,\Sigma)$ se e solo se ogni combinazione lineare $\sum\theta_iX_i\sim N(\sum\theta_i\mu_i,\sum_{i,j}\theta_i\theta_j\Sigma_{ij})$; le componenti di un vettore **congiuntamente** gaussiano sono indipendenti se e solo se incorrelate.

## Formule chiave
($\Leftarrow$) Gli incrementi sono gaussiani congiunti e incorrelati, quindi indipendenti:
$$\mathrm{Cov}(W_{t_j}-W_{t_{j-1}},W_{t_i}-W_{t_{i-1}})=t_i-t_{i-1}-t_i+t_{i-1}=0\quad(i<j).$$
($\Rightarrow$) Ogni combinazione lineare si riscrive come somma di incrementi indipendenti gaussiani:
$$\sum_i a_iW_{t_i}=(a_1+\dots+a_k)W_{t_1}+(a_2+\dots+a_k)(W_{t_2}-W_{t_1})+\dots+a_k(W_{t_k}-W_{t_{k-1}}),$$
e per $i\le j$: $\Sigma_{ij}=\mathrm{Var}(W_{t_i})+\mathrm{Cov}(W_{t_i},W_{t_j}-W_{t_i})=t_i$.

## Intuizione
Una legge gaussiana multivariata è determinata da media e covarianza: per verificare che un processo continuo sia browniano basta controllare che sia gaussiano, centrato e con covarianza $\min(s,t)$. Attenzione: due gaussiane incorrelate ma non congiuntamente gaussiane possono essere dipendenti ($X\sim N(0,1)$, $Y=BX$ con $B=\pm1$).

## Come si usa
È lo strumento operativo per dimostrare che un processo trasformato è ancora browniano: nella costruzione di Lévy si mostra con la funzione caratteristica che $\sum\theta_\ell X_{t_\ell}\sim N(0,\sum\theta_\ell\theta_m\min\{t_\ell,t_m\})$; nell'inversione si calcola $\mathrm{Cov}(sW_{1/s},tW_{1/t})=\min\{s,t\}$. Esercizi A-B e J-K (combinazioni lineari di browniani indipendenti).

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 16 ("definizioni equivalenti"). Fonti: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `magistrale/Processi stocastici/Lezione_23_09_12.pdf` (lezione 23), `riassunto_del_corso.tex` §Moto browniano, `suggested_exercises_brownian_motion.pdf` (es. A, J, K).
- **Financial engineering** (magistrale): processo gaussiano in generale (def. c11-gaussiano, c19-gaussiano): ogni vettore $(X_{t_1},\dots,X_{t_m})$ è normale multivariato, e la legge è determinata da media $m(t)$ e covarianza $c(s,t)$. Il browniano ha $m=0$, $c(s,t)=\min(s,t)$, $\mathrm{Corr}(W_s,W_t)=\sqrt{\min/\max}$; anche l'Ornstein-Uhlenbeck ($\mathrm{Cov}=\frac{\sigma^2}{2\theta}[e^{-\theta(t-s)}-e^{-\theta(t+s)}]$) e l'integrale di Wiener $\int f\,dW$ sono gaussiani, il GBM no. Le marginali non bastano: $X_k=k\xi$ e $Y_k=k\xi_k$ hanno le stesse leggi a un tempo ma covarianze diverse. Fonti: `Libri/Financial engineering/capitoli/cap11.tex`, `cap19.tex`.

## Prerequisiti
- [[Moto browniano]]: definizione equivalente via processo gaussiano

## Porta a
- [[Esistenza del moto browniano]]: la costruzione verifica le covarianze
- [[Invarianze del moto browniano]]: verifica delle covarianze dopo la trasformazione

## Collegati
- [[Vettore gaussiano]] e [[Funzione caratteristica]] (Prob e statistica, triennale): i vettori finito-dimensionali del processo sono gaussiani, determinati da media e covarianza
- [[Processo di Ornstein-Uhlenbeck]]: altro processo gaussiano, con covarianza esponenziale (Financial engineering)
- [[Integrale di Wiener]]: processo gaussiano a incrementi indipendenti (Financial engineering)
