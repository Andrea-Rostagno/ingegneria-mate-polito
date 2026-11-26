---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["pairwise separable games", "gioco separabile a coppie", "pairwise separable potential games", "giochi potenziali separabili a coppie", "utilità standalone", "standalone utility", "utilità di interazione"]
tags: [competenza, area/network]
---

# Giochi separabili a coppie

> Giochi su rete in cui ogni giocatore somma un'utilità individuale e le utilità di tanti giochi a due giocati con ciascun vicino; se ogni gioco a due è potenziale simmetrico, l'intero gioco è potenziale esatto.

## Definizione / enunciato
Grafo $\mathcal G=(\mathcal V,\mathcal E,W)$ senza cappi, azioni $\mathcal A_i$, utilità individuali $\rho_i:\mathcal A_i\to\mathbb R$, utilità di interazione $\varphi_{(i,j)}:\mathcal A_i\times\mathcal A_j\to\mathbb R$ per $(i,j)\in\mathcal E$:
$$u_i(x_i,x_{-i})=\rho_i(x_i)+\sum_jW_{ij}\,\varphi_{(i,j)}(x_i,x_j).$$
Con $\mathcal G$ non orientato, per ogni arco $\{i,j\}$ i termini $\varphi_{(i,j)}$ e $\varphi_{(j,i)}$ sono le utilità di un gioco a due tra $i$ e $j$: ogni giocatore usa la stessa azione contro tutti i vicini e incassa la somma pesata.

**Teorema.** Se $\mathcal G$ è non orientato, $\mathcal A_i=\mathcal A$ per tutti, e per ogni arco esiste un gioco a due simmetrico potenziale esatto con $\varphi_{(i,j)}(a,b)=\varphi_{(j,i)}(a,b)$ e potenziale $\phi_{\{i,j\}}$, allora il gioco è potenziale esatto con
$$\Phi(x)=\sum_i\rho_i(x_i)+\frac12\sum_{i,j}W_{ij}\,\phi_{\{i,j\}}(x_i,x_j).$$

## Formule chiave
Prova: per $x_{-h}=y_{-h}$,
$$u_h(y)-u_h(x)=\rho_h(y_h)-\rho_h(x_h)+\sum_jW_{hj}[\phi_{\{h,j\}}(y_h,x_j)-\phi_{\{h,j\}}(x_h,x_j)],$$
e spezzando la somma a metà fra i termini $(h,j)$ e $(j,h)$ (grafo non orientato) si ottiene $\Phi(y)-\Phi(x)$.
Esempi: coordinazione $u_i=\sum_jW_{ij}x_ix_j+c_ix_i$ con $\Phi=\frac12\sum_{i,j}W_{ij}x_ix_j+\sum_ic_ix_i$; minoranza con $\Phi=-\frac12\sum_{i,j}W_{ij}x_ix_j$; colorazione con $\Phi=-\frac12\sum_{i,j}W_{ij}\mathbb 1_{\{x_i=x_j\}}$.

## Intuizione
Ogni arco contribuisce al potenziale una volta sola (il fattore $\frac12$ compensa il doppio conteggio). È l'analogo, su rete, del fatto che ogni $2\times2$ simmetrico è potenziale.

## Come si usa
Per avere equilibri puri e dinamiche convergenti in un gioco su rete si verifica che sia separabile a coppie con interazioni simmetriche potenziali; allora si studiano gli equilibri come massimi (locali) di $\Phi$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "Pairwise separable games", "Pairwise separable potential games" e prova. Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 6-7, 32-38, 45).

## Prerequisiti
- [[Gioco grafico]]: utilità che dipendono dai vicini
- [[Gioco potenziale]]: definizione di potenziale esatto

## Porta a
- [[Gioco di maggioranza]]: $\varphi(x,y)=xy$
- [[Gioco di coordinazione su rete]]: maggioranza con bias individuali
- [[Gioco di colorazione]]: penalità per colori uguali, e minoranza

## Collegati
- [[Giochi 2x2 simmetrici]]: i giochi a due su ciascun arco
