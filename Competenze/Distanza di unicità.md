---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [unicity distance, distanza d'unicità, chiavi spurie, spurious keys, ridondanza della lingua, redundancy of a language, entropia per lettera, entropy per letter]
tags: [competenza, area/informatica]
---

# Distanza di unicità

> Il numero minimo $N_0$ di lettere di crittogramma oltre il quale, in un attacco COA, la chiave è determinata univocamente, cioè l'equivocazione della chiave si annulla. Dipende dall'entropia della chiave e dalla ridondanza della lingua.

## Definizione / enunciato
**Chiavi spurie** (`Critto_week2.pdf` §2.3.1). Per un crittogramma $C_0$ sia $\mathcal K(C_0)\subset\mathcal P\times\mathcal K$ l'insieme delle coppie $(P_0,k_0)$ con $\mathrm{Enc}_{k_0}(P_0)=C_0$. Se $|\mathcal K(C_0)|>1$, oltre alla chiave giusta ci sono chiavi **spurie**.

Per messaggi di $N$ lettere di una lingua $L$, l'equivocazione $H(k\mid C^N)=H(k)+H(P^N)-H(C^N)$ è monotona decrescente in $N$. Si assume:
- $H(P^N)\cong N\cdot H_L$, dove $H_L$ è l'**entropia per lettera** della lingua;
- $H(C^N)\cong N\log_2|A_L|$, dove $A_L$ è l'alfabeto.

La **distanza di unicità** è il minimo $N_0$, se esiste, con $H(k\mid C^{N_0})=0$.

## Formule chiave
$$N_0\cong\frac{H(k)}{\log_2|A_L|-H_L}\ \overset{\text{chiavi equiprobabili}}{=}\ \frac{\log_2|\mathcal K|}{\log_2|A_L|-H_L}=\frac{\log_2|\mathcal K|}{R_L\log_2|A_L|},\qquad R_L:=1-\frac{H_L}{\log_2|A_L|}$$
Numero medio di chiavi spurie $s$ per un messaggio di $N$ lettere (da [Welsh89] e [Stinson06]):
$$s\ge\frac{2^{NH_L}|\mathcal K|}{|\mathcal C|}-1,\qquad s\ge\frac{|\mathcal K|}{|A_L|^{N R_L}}-1.$$

## Intuizione
Ogni lettera di crittogramma porta circa $R_L\log_2|A_L|$ bit di "equazioni" sulla chiave, quindi $N_0R_L\log_2|A_L|$ è il numero di equazioni necessarie per trovare $k_0$.

Comprimere il messaggio riduce la ridondanza e rende $N_0$ grande a piacere: è un'idea utile nello scenario di Shannon (COA). In uno scenario CCA, al contrario, la ridondanza aiuta, perché rende più difficile scegliere un crittogramma valido (Nota 2.3.3).

## Come si usa
- **Esempio 2.3.1:** $C=\mathrm{WNAJW}$, cifrato con Cesare a partire da una parola inglese, dà ARENA (chiave W) e RIVER (chiave F). Una delle due chiavi è spuria. Dopo l'intercettazione l'equivocazione cala comunque.
- **Esercizio 2.3.4:** stimare $s$ per un Vigenère con chiavi di 80 lettere e crittogrammi di 100 lettere.
- **Nota 2.3.2:** il concetto è utile per le *session key*. Una chiave usata per cifrare un grosso flusso di messaggi si espone alla crittanalisi, ad esempio differenziale.

## Nei corsi
- **Crittografia** (magistrale): appendice della lezione 2. Il tema "Unicity Distance & Block Ciphers" ritorna nell'appendice della lezione 5. Fonte: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (Critto 2, pp. 32-33).

## Prerequisiti
- [[Entropia di Shannon]]: $H(k)$, $H_L$ ed equivocazione
- [[Cifrario di Cesare]]: esempio delle chiavi spurie

## Porta a
- Nessuno.

## Collegati
- [[Indice di coincidenza]]: altra statistica della lingua usata nel COA
- [[Modelli di attacco crittografico]]: la distanza di unicità ha senso nello scenario COA
- [[Segretezza perfetta]]: nel caso perfetto la chiave non si determina mai
