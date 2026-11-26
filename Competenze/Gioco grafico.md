---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["graphical game", "G-game", "gioco su rete", "network game", "gioco grafico rispetto a G"]
tags: [competenza, area/network]
---

# Gioco grafico

> Un gioco in cui l'utilità di ogni giocatore dipende solo dalla propria azione e da quelle dei suoi vicini in un grafo $\mathcal G$: è il formalismo base dei giochi su rete.

## Definizione / enunciato
Grafo $\mathcal G=(\mathcal V,\mathcal E,W)$ senza cappi, $W_{ij}>0\iff(i,j)\in\mathcal E$, $N_i=\{j:W_{ij}>0\}$, $w_i=\sum_jW_{ij}$. Il gioco $(\mathcal V,\{\mathcal A_i\},\{u_i\})$ è **grafico rispetto a $\mathcal G$** (un $\mathcal G$-gioco) se
$$x,y\in\prod_i\mathcal A_i,\ \ x_{|\{i\}\cup N_i}=y_{|\{i\}\cup N_i}\ \Longrightarrow\ u_i(x)=u_i(y),$$
cioè $u_i(x_i,x_{-i})=u_i(x_i,x_{|N_i})$.

## Formule chiave
Esempio: $u_i(x_i,x_{-i})=u_i(x_i,x_{j_1},x_{j_2},x_{j_3})$ se $N_i=\{j_1,j_2,j_3\}$. La miglior risposta $\mathcal B_i$ dipende solo da $x_{|N_i}$, quindi un equilibrio di Nash è una configurazione "localmente stabile" in ogni vicinato. Caso notevole: i **giochi separabili a coppie**, $u_i=\rho_i(x_i)+\sum_jW_{ij}\varphi_{(i,j)}(x_i,x_j)$.

## Intuizione
La rete codifica chi influenza chi nella decisione: un agente guarda solo i suoi contatti (amici, concorrenti vicini, nodi adiacenti). Da qui la teoria dei giochi incontra la scienza delle reti: adozione di tecnologie, imitazione, comportamenti a soglia, cooperazione tra agenti di AI.

## Come si usa
Due grafi da non confondere: il grafo $\mathcal G$ dei giocatori e i grafi sullo spazio delle configurazioni (ipercubo, grafo di miglioramento, grafo di best response) usati per studiare le dinamiche di apprendimento. Esempi del corso: gioco di maggioranza, coordinazione su rete, minoranza e colorazione, beni pubblici best-shot.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 10, "Notation", "Graphical games"; motivazione in Slides 0. Fonti: `magistrale/Dinamiche su network/slide/Slides-10-NetworkGames.pdf` (pp. 2-4, 59); `magistrale/Dinamiche su network/slide/Slides-0-Dinamiche.pdf` (p. 8).

## Prerequisiti
- [[Equilibrio di Nash]]: gioco in forma strategica e miglior risposta
- [[Grafo]]: rete delle interazioni

## Porta a
- [[Giochi separabili a coppie]]: caso con utilità somma di interazioni a coppie
- [[Gioco dei beni pubblici best-shot]]: esempio di gioco grafico non separabile

## Collegati
- [[Dinamica di best response]]: dinamica di apprendimento sui giochi grafici
