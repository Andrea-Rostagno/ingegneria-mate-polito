---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [meet-in-the-middle attack, attacco meet in the middle, doppia cifratura, double encryption, prodotto di cifrari, composizione di cifrari, algebra dei cifrari, combinazione convessa di cifrari]
tags: [competenza, area/informatica]
---

# Attacco meet-in-the-middle

> Attacco KPA alla doppia cifratura $C=R_{k_r}(T_{k_t}(P))$: si cifra $P$ con tutte le chiavi di $T$, si decifra $C$ con tutte le chiavi di $R$ e si cerca una collisione nel mezzo. Il costo è circa il doppio di una forza bruta singola, non il suo quadrato.

## Definizione / enunciato
**Algebra dei cifrari** (Shannon, `Critto_week2.pdf` §2.3.2).
- **Combinazione convessa:** dati $T_1,\dots,T_l$ sullo stesso $\mathcal P$ e pesi $p_i\ge0$ con $\sum p_i=1$, si forma $p_1T_1+\dots+p_lT_l$. Lo spazio delle chiavi è l'unione, con le probabilità combinate.
- **Prodotto (double encryption):** $R\cdot T$ richiede che $\mathcal C_T\subseteq\mathcal P_R$. Lo spazio delle chiavi è il prodotto cartesiano, quindi la dimensione in bit della chiave è la **somma** delle due.

**Meet-in-the-middle (KPA).** Sia nota $(P,C)$ con $C=R_{k_r}(T_{k_t}(P))$:
1. si calcolano $T_{k_1}(P),\dots,T_{k_n}(P)$ per tutte le chiavi di $T$;
2. si calcolano $R^{-1}_s(C)$ per tutte le chiavi $s$ di $R$;
3. se $T_{k_j}(P)=R_s^{-1}(C)$, è molto probabile che $(k_r,k_t)=(s,k_j)$.

La coppia trovata potrebbe essere spuria: con un'altra coppia nota $(P_2,C_2)$ si verifica che $C_2=R_s(T_{k_j}(P_2))$.

## Formule chiave
Da Basile (slide 3), per un cifrario con chiavi di $N$ bit:
- doppia cifratura: costo computazionale doppio, ma forza pari a $N+1$ bit (forza bruta in $2^{N+1}$);
- tripla cifratura: costo triplo, forza che nel caso migliore arriva a $2N$ bit (forza bruta in $2^{2N}$).

## Intuizione
Ci si aspetterebbe che la composizione di due cifrari sia molto più difficile da attaccare dei due isolati. Invece l'attacco è molto simile ad attaccare **separatamente** ciascun cifrario per forza bruta, più il costo di confrontare le due liste. In uno scenario KPA la composizione di due cifrari attaccabili per forza bruta non è sicura. Per questo si ricorre alla tripla cifratura.

## Come si usa
Lo schema di Basile ha due direzioni:
- "try all the $k_1$": encrypt(plaintext, $k_E$) su tutte le $2^N$ chiavi;
- "try all the $k_2$": decrypt(ciphertext, $k_D$) su tutte le $2^N$ chiavi.

Quando due artefatti intermedi coincidono, si controlla se $k_E$ e $k_D$ sono le chiavi corrette. L'esercizio 2.3.5 mostra che ogni cifrario è combinazione convessa dei cifrari con una sola chiave, con $p_i=\Pr_2[k_i]$.

## Nei corsi
- **Crittografia** (magistrale): appendice della lezione 2 (teoria) e prima esercitazione di Basile sugli attacchi simmetrici. Ritorna nella lezione 4 inglese come "Double encryption & Meet-in-the-Middle". Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (Critto 2, pp. 33-34); `magistrale/Crittografia/Slide/presentations/presentations/200409_03LPYOV_symmetric_attacks.pdf` (pp. 3-5).

## Prerequisiti
- [[Modelli di attacco crittografico]]: è un KPA e confronta con la forza bruta
- [[Schema di cifratura simmetrica]]: composizione di due $\mathrm{Enc}$

## Porta a
- [[Data Encryption Standard|DES]]: motiva il 3DES al posto del doppio DES

## Collegati
- [[Attacco man-in-the-middle]]: contrasto, stessa sigla MITM ma è un attacco attivo ai protocolli
- [[Distanza di unicità]]: le chiavi spurie della collisione
