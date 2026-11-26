---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["network coordination game", "coordinazione su rete", "gioco di coordinazione con bias", "modello a soglia", "threshold model", "soglia di un giocatore", "complementi strategici", "strategic complements", "increasing differences"]
tags: [competenza, area/network]
---

# Gioco di coordinazione su rete

> Gioco di maggioranza con una preferenza individuale $c_i$ per una delle due azioni: ogni giocatore sceglie $+1$ se la frazione (pesata) di vicini che giocano $+1$ supera una soglia $\theta_i$.

## Definizione / enunciato
$\mathcal A_i=\{-1,+1\}$, $\varphi_{(i,j)}(x,y)=xy$, $\rho_i(x_i)=c_ix_i$:
$$u_i(x_i,x_{-i})=\sum_jW_{ij}x_ix_j+c_ix_i .$$
Con $w^+_i(x)=\sum_{j:x_j=+1}W_{ij}$ e $\theta_i=\frac12-\frac{c_i}{2w_i}$:
$$\mathcal B_i(x_{-i})=\begin{cases}\{+1\}&w^+_i(x)/w_i>\theta_i\\ \{\pm1\}&=\theta_i\\ \{-1\}&<\theta_i.\end{cases}$$

## Formule chiave
- $u_i(+1,x_{-i})-u_i(-1,x_{-i})=2\sum_jW_{ij}x_j+2c_i$, crescente in $x_{-i}$: **differenze crescenti**, cioè complementi strategici (più gli altri alzano l'azione, più conviene alzarla).
- $\sum_jW_{ij}x_j=2w^+_i(x)-w_i$, quindi la condizione $\sum_jW_{ij}x_j\ge-c_i$ diventa $w^+_i(x)/w_i\ge\theta_i$.
- $c_i>w_i\Rightarrow\theta_i<0$: gioca sempre $+1$; $c_i<-w_i\Rightarrow\theta_i>1$: gioca sempre $-1$. In entrambi i casi il giocatore è **testardo**.
- Se $-w_i\le c_i\le w_i$ per ogni $i$: $\theta_i\in[0,1]$, $\pm\mathbb 1$ sono equilibri, e sono i massimi del potenziale $\Phi(x)=\frac12\sum_{i,j}W_{ij}x_ix_j+\sum_ic_ix_i$; $+\mathbb 1$ domina in senso di Pareto se $c_i>0$.
- $c_i=cw_i$ dà la stessa soglia per tutti.

## Intuizione
È il modello a soglia dell'adozione di un'innovazione: si adotta se abbastanza contatti hanno adottato. La soglia combina la pressione sociale (la rete) e il gusto personale ($c_i$).

## Come si usa
Per capire se un'innovazione si diffonde si confrontano le soglie con la struttura dei vicinati: esempio delle slide con tutti i giocatori a soglia $3/5$ e un equilibrio misto $+1/-1$ in cui l'adozione resta confinata a un gruppo coeso.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "Network coordination games", "Pairwise separable potential games". Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 17-27, 34-35).

## Prerequisiti
- [[Giochi separabili a coppie]]: struttura e potenziale

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Gioco di maggioranza]]: caso $c_i=0$, soglia $1/2$
- [[Agenti testardi]]: testardi anche nei modelli di opinione lineari
