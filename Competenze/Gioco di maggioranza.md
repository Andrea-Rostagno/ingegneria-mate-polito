---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["majority game", "gioco della maggioranza", "insieme coeso", "cohesive set", "teorema di Morris", "Morris cohesiveness"]
tags: [competenza, area/network]
---

# Gioco di maggioranza

> Ogni nodo sceglie $\pm1$ e guadagna quanti vicini concordano meno quanti discordano: la miglior risposta è seguire la maggioranza dei vicini. I consensi sono sempre equilibri, ma possono essercene altri, caratterizzati da insiemi coesi.

## Definizione / enunciato
Gioco separabile a coppie su $\mathcal G$ non pesato con $\mathcal A_i=\{-1,+1\}$, $\varphi_{(i,j)}(x,y)=xy$, $\rho_i=0$:
$$u_i(x_i,x_{-i})=\sum_jW_{ij}x_ix_j=|\{j\in N_i:x_j=x_i\}|-|\{j\in N_i:x_j\neq x_i\}|=2\Big(|\{j\in N_i:x_j=x_i\}|-\frac{w_i}2\Big).$$
$$\mathcal B_i(x_{-i})=\begin{cases}\{+1\}&|\{j\in N_i:x_j=+1\}|>w_i/2\\ \{\pm1\}&=w_i/2\\ \{-1\}&<w_i/2.\end{cases}$$
Equilibrio di Nash: ognuno gioca come la maggioranza dei propri vicini.

## Formule chiave
- I consensi $+\mathbb 1$ e $-\mathbb 1$ sono sempre equilibri.
- $\mathcal S\subseteq\mathcal V$ è **coeso** se $|N_i\cap\mathcal S|\ge|N_i\cap(\mathcal V\setminus\mathcal S)|$ per ogni $i\in\mathcal S$.
- **Fatto (Morris, 2000):** $x$ è Nash se e solo se $\mathcal S=\{i:x_i=-1\}$ e $\mathcal S^c$ sono entrambi coesi.
- Trovare tutti gli equilibri di un gioco di maggioranza è NP-difficile.
- Potenziale esatto $\Phi(x)=\frac12\sum_{i,j}W_{ij}x_ix_j$ (caso $c_i=0$ della coordinazione).

## Intuizione
È la coordinazione giocata con tutti i vicini. Gruppi "chiusi in sé" (ogni membro ha più amici dentro che fuori) possono mantenere un'opinione minoritaria anche all'equilibrio.

## Come si usa
Per verificare un equilibrio si controlla la coesione dei due schieramenti. Esempio delle slide sul 4-ciclo: grafo di best response sulle 16 configurazioni, con equilibri stretti (consensi, assorbenti) e non stretti; esiste un equilibrio stretto che non è massimo del potenziale, dove la best response si blocca. Nel limite di campo medio sul grafo completo con dinamica logit compare una biforcazione a $\beta=1$ (polarizzazione).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "The majority game", "Cohesiveness and Nash", "Majority game on the 4-cycle"; Slides 11 per il campo medio. Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 10-16, 60-70); `magistrale/Dinamiche su network/slide/Slides-11-Meanfield.pdf` (pp. 56, 59-62).

## Prerequisiti
- [[Giochi separabili a coppie]]: struttura dell'utilità e potenziale

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Gioco di coordinazione su rete]]: versione con bias e soglie individuali
- [[Dinamica logit di campo medio]]: limite su grafo completo e polarizzazione
- [[Giochi 2x2 simmetrici]]: il gioco su ciascun arco è di coordinazione
