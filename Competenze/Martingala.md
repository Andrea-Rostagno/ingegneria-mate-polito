---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Financial engineering]
livello: [magistrale]
aliases: [martingale, supermartingala, submartingala, supermartingale, submartingale, Poisson compensato, prezzo scontato martingala]
tags: [competenza, area/probabilita]
---

# Martingala

> Processo adattato e integrabile il cui valore atteso futuro, data l'informazione presente, è il valore attuale: il modello matematico del gioco equo.

## Definizione / enunciato
$(X_i)_{i\in I}$ è una martingala rispetto alla filtrazione $(\mathcal F_i)_{i\in I}$ se: (1) $X_i$ è $\mathcal F_i$-misurabile; (2) $\mathbb E[|X_i|]<\infty$; (3) $\mathbb E[X_j\mid\mathcal F_i]=X_i$ q.c. per ogni $i<j$. Con $\ge$ si ha una **submartingala** (gioco favorevole), con $\le$ una **supermartingala** (gioco sfavorevole). Senza filtrazione esplicita si intende quella naturale.

Lemma (tempo discreto): basta verificare il passo singolo $\mathbb E[X_{n+1}\mid\mathcal F_n]=X_n$; il caso $n+m$ segue per induzione con la tower property.

## Formule chiave
$$\mathbb E[X_j]=\mathbb E\big[\mathbb E[X_j\mid\mathcal F_i]\big]=\mathbb E[X_i]\quad(i<j)$$
$$W_t=M_t-\int_0^t\lambda(s)\,ds\ \text{ è martingala se } M \text{ è Poisson non omogeneo}$$

## Intuizione
Se $X_i$ è la ricchezza al tempo $i$ in un gioco equo, il guadagno atteso futuro, sapendo tutto il passato, è nullo. Le sub/super-martingale sono giochi in cui la deriva attesa ha segno fisso.

## Come si usa
Ricetta d'esame (dal `.tex`): specificare la filtrazione, verificare adattamento e integrabilità, calcolare $\mathbb E[X_{n+1}\mid\mathcal F_n]$. Esempi delle slide: passeggiata aleatoria simmetrica $X_n=X_0+\sum B_i$ (martingala; con $p<1/2$ supermartingala, $p>1/2$ submartingala); prodotto $X_n=\prod_{i\le n}(1+B_i)$; Poisson compensato; Poisson di tasso $\lambda$ è submartingala perché $\mathbb E[X_{t+h}\mid\mathcal F_t]=X_t+\lambda h$; esempio non markoviano $X_n=X_{n-1}+B_n\sum_{i<n}X_i$ con $X_0\sim\mathrm{Pois}(10)$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 11. Le slide definiscono con $i<j$ generici e danno il lemma del passo singolo; il `.tex` usa direttamente la condizione a un passo. Fonti: `magistrale/Processi stocastici/Lezione_16_11_11.pdf` (lezione 16), `magistrale/Processi stocastici/Lezione_17_17_11.pdf` (lezione 17), `riassunto_del_corso.tex` §Martingale, `suggested_exercises_martingales.pdf` (es. B, G).
- **Financial engineering** (magistrale): definizione in tempo continuo con filtrazione (def. c11-martingala); Markov e martingala sono proprietà indipendenti (un browniano con drift è di Markov ma non martingala; una martingala che ricorda tutta la storia non è di Markov) e la martingalità dipende dalla **misura**. Ruolo centrale nel pricing: nel binomiale il prezzo scontato $S(n)/(1+r)^n$ è una $\mathbb Q$-martingala perché $q_uu+q_dd=1+r$, e sotto $\mathbb P$ una submartingala; il valore scontato di una strategia autofinanziante è una $\mathbb Q$-martingala; in Black-Scholes $e^{-rt}S_t$ è martingala sotto $\mathbb Q$. L'integrale di Itô di un integrando in $M^2$ è una martingala. Fonti: `Libri/Financial engineering/capitoli/cap10.tex`, `cap11.tex`, `cap12.tex`, `cap16.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/34 - 15 aprile - Lesson 1 -WP-SC_Italiano.pdf`.

## Prerequisiti
- [[Speranza condizionata]]: definita tramite attesa condizionata
- [[Filtrazione]]: processo adattato all'informazione

## Porta a
- [[Martingala chiusa]]: generata da una variabile terminale
- [[Incrementi ortogonali delle martingale]]: martingale di quadrato integrabile
- [[Trasformata di martingala]]: integrale discreto di una strategia
- [[Decomposizione di Doob]]: parte martingala della decomposizione
- [[Teorema di optional sampling]]: proprietà di martingala ai tempi d'arresto
- [[Disuguaglianza di upcrossing]]: vale per sub e supermartingale
- [[Martingale a tempo continuo]]: estensione al tempo continuo

## Collegati
- [[Disuguaglianza di Jensen condizionata]]: funzione convessa di martingala è submartingala
- [[Processo di Poisson]]: Poisson compensato è martingala
- [[Ricorrenza della passeggiata aleatoria]]: passeggiata simmetrica è martingala
- [[Misura neutrale al rischio]]: prezzi scontati martingala sotto $\mathbb Q$ (Financial engineering)
- [[Martingala locale]]: nozione più debole, ottenuta per localizzazione (Financial engineering)
- [[Isometria di Itô]]: l'integrale di Itô in $M^2$ è una martingala (Financial engineering)
