---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Nash's theorem", "teorema di Nash", "Nash existence theorem", "strategie miste", "mixed strategies", "mixed strategy Nash equilibrium", "equilibrio di Nash in strategie miste", "teorema del punto fisso di Kakutani", "Kakutani fixed point theorem", "teorema di Brouwer", "corrispondenza di miglior risposta"]
tags: [competenza, area/network]
---

# Teorema di esistenza di Nash

> Ogni gioco finito ammette un equilibrio di Nash in strategie miste; la prova applica il teorema di punto fisso di Kakutani alla corrispondenza di miglior risposta.

## Definizione / enunciato
Gioco finito $(\mathcal V,\{\mathcal A_i\},\{u_i\})$. Una **strategia mista** di $i$ è una distribuzione $z_i\in\mathcal P(\mathcal A_i)$; $z_{ia}$ = probabilità di giocare $a$; l'azione $a$ corrisponde alla strategia pura $\delta^a$. Spazio dei profili $\mathcal Z=\prod_i\mathcal P(\mathcal A_i)$, utilità multilineari (giocate indipendenti):
$$u_i(z)=\sum_{x}\Big(\prod_jz_{jx_j}\Big)u_i(x).$$
Un **equilibrio misto** è $z^*\in\mathcal Z$ con $u_i(z^*)\ge u_i(z)$ per ogni $i$ e ogni $z$ con $z_{-i}=z^*_{-i}$.

**Teorema (Nash, 1950).** Ogni gioco finito ammette un equilibrio di Nash in strategie miste.

## Formule chiave
Corrispondenza di miglior risposta $\mathcal B:\mathcal Z\rightrightarrows\mathcal Z$, $\mathcal B(z)_i=\arg\max_{\vartheta\in\mathcal P(\mathcal A_i)}u_i(\vartheta,z_{-i})$; gli equilibri misti sono i punti fissi $z^*\in\mathcal B(z^*)$.
**Teorema di Kakutani.** $\mathcal Z$ non vuoto, convesso, compatto in uno spazio euclideo finito-dimensionale; $T:\mathcal Z\rightrightarrows\mathcal Z$ con $T(z)\neq\emptyset$ e convesso per ogni $z$, e grafo chiuso (se $(z_n,w_n)\to(z,w)$ con $w_n\in T(z_n)$ allora $w\in T(z)$). Allora esiste $z_0\in T(z_0)$.
Brouwer ($f$ continua da un compatto convesso in sé ha un punto fisso) non si applica direttamente perché $\mathcal B$ è una corrispondenza; la prova originale di Nash usa comunque Brouwer.

## Intuizione
Giochi come matching pennies o sasso-carta-forbici non hanno equilibri puri, ma randomizzando in modo uniforme nessuno può sfruttare l'altro. La convessificazione delle strategie rende la miglior risposta "abbastanza regolare" per un teorema di punto fisso.

## Come si usa
Garantisce l'esistenza ma non dice come trovare l'equilibrio né se è unico. Restano aperti, come dicono le slide: esistenza di equilibri **puri**, unicità, meccanismi con cui un equilibrio viene raggiunto e selezionato (apprendimento, teoria evolutiva dei giochi).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 9, "Mixed strategies", "Existence of mixed strategy Nash equilibria", "Kakutani's theorem", "The crucial issues". Fonti: `magistrale/Dinamiche su network/slide/Slides-9-Games-(con-commenti).pdf` (pp. 29-46).

## Prerequisiti
- [[Equilibrio di Nash]]: definizione nel caso puro

## Porta a
- [[Teorema di Debreu-Glicksberg-Fan]]: equilibri puri nei giochi continui, stessa tecnica

## Collegati
- [[Teorema del punto fisso di Banach]]: altro teorema di punto fisso, per contrazioni
- [[Insieme convesso]]: lo spazio dei profili misti è un prodotto di simplessi
