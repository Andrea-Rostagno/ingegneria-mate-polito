---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["congestion games", "gioco di congestione", "potenziale di Rosenthal", "Rosenthal potential", "teorema di Rosenthal", "resource selection games"]
tags: [competenza, area/network]
---

# Giochi di congestione

> Giochi in cui ogni giocatore sceglie risorse condivise e paga un costo che dipende solo da quanti le usano: sono sempre potenziali esatti, quindi hanno equilibri puri.

## Definizione / enunciato
**Versione base.** Giocatori $\mathcal V$, azioni $\mathcal A$ (risorse), costi $c_a:\mathbb Z_+\to\mathbb R$. Per $x\in\mathcal X$, $n^x_a=|\{i:x_i=a\}|$ e
$$u_i(x)=-c_{x_i}\big(n^x_{x_i}\big).$$
**Estensione.** Insieme di risorse $\mathcal E$ (ad esempio i link di una rete di trasporto) con costi $c_e:\mathbb Z_+\to\mathbb R_+$; le azioni sono sottoinsiemi di risorse, $\mathcal A\subseteq2^{\mathcal E}$ (ad esempio cammini); $n^x_e=|\{i:e\in x_i\}|$ e
$$u_i(x)=-\sum_{e\in x_i}c_e(n^x_e).$$

**Teorema.** I giochi di congestione sono potenziali esatti con potenziale
$$\Phi(x)=-\sum_{e\in\mathcal E}\sum_{h=1}^{n^x_e}c_e(h).$$

## Formule chiave
Prova: se $y$ e $x$ differiscono solo per il giocatore $i$, le risorse in $y_i\setminus x_i$ guadagnano un utente e quelle in $x_i\setminus y_i$ ne perdono uno, quindi
$$\Phi(y)-\Phi(x)=-\sum_{e\in y_i\setminus x_i}c_e(n^y_e)+\sum_{e\in x_i\setminus y_i}c_e(n^x_e)=-\sum_{e\in y_i}c_e(n^y_e)+\sum_{e\in x_i}c_e(n^x_e)=u_i(y)-u_i(x).$$

## Intuizione
Con costi non decrescenti, più giocatori usano una risorsa, peggio va (esternalità di congestione). Il potenziale somma i costi "come se gli utenti arrivassero uno alla volta": ogni nuovo utente aggiunge proprio il costo che subisce.

## Come si usa
Modello discreto del traffico: i giocatori sono guidatori, le risorse i link, le azioni i cammini; l'equilibrio esiste e si trova massimizzando $\Phi$ o con dinamiche di miglioramento. Al limite di infiniti guidatori la somma $\sum_{h\le n}c_e(h)$ diventa l'integrale $\int_0^{f_e}\tau_e$ del problema di Wardrop.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "Congestion games", "Congestion games are exact potential games". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 93-95).

## Prerequisiti
- [[Gioco potenziale]]: definizione di potenziale esatto

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Equilibrio di Wardrop]]: versione con un continuo di guidatori
- [[Proprietà di miglioramento finito]]: come ogni potenziale finito, ha la FIP
