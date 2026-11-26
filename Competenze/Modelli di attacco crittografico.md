---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [attack models, COA, ciphertext-only attack, KPA, known-plaintext attack, CPA, chosen-plaintext attack, CCA, chosen-ciphertext attack, attacco a forza bruta, brute force attack, security level, livello di sicurezza, crib]
tags: [competenza, area/informatica]
---

# Modelli di attacco crittografico

> Classificano gli attacchi in base a ciò che il crittanalista possiede: solo crittogrammi (COA), coppie note (KPA), un oracolo di cifratura (CPA) o di decifratura (CCA). Il livello di sicurezza misura in bit il costo del miglior attacco.

## Definizione / enunciato
Nelle dispense $\mathrm{Enc}_k$ è il cifrario e $k$ la chiave incognita.
- **COA** (ciphertext-only): dati $C_1=\mathrm{Enc}_k(P_1),\dots,C_l=\mathrm{Enc}_k(P_l)$, si cercano $P_1,\dots,P_l$ e $k$, oppure un algoritmo per dedurre $P_{l+1}$.
- **KPA** (known-plaintext): date le coppie $(P_i,C_i=\mathrm{Enc}_k(P_i))$, $i=1,\dots,l$, e $C_{l+1}$, si cerca $k$ o un algoritmo per $P_{l+1}$. I testi in chiaro noti sono detti *crib*, ad esempio l'intestazione di un file.
- **CPA** (chosen-plaintext): il crittanalista sceglie $P_1,\dots,P_l$ e ne ottiene i cifrati. Interagisce cioè con $\mathrm{Enc}_k$ senza conoscere $k$, per poi dedurre $P_{l+1}$ da $C_{l+1}$.
- **CCA** (chosen-ciphertext): il crittanalista sceglie $C_1,\dots,C_l$, ottiene $P_i=\mathrm{Dec}_k(C_i)$ e cerca $k$.

**Attacco a forza bruta:** provare tutte le chiavi possibili.

**Security level:** un algoritmo ha un livello di sicurezza di $n$ bit se il miglior attacco noto richiede $O(2^n)$ passi. Serve a confrontare algoritmi e a trovare l'anello debole quando si combinano primitive in un crittosistema ibrido.

## Formule chiave
$$\text{security level } n\ \text{bit}\iff\text{miglior attacco in }O(2^n)\text{ passi}$$

## Intuizione
Gli scenari sono in ordine crescente di potere dell'avversario, quindi un cifrario sicuro contro CCA lo è anche contro gli scenari più deboli. La tabella di Paar & Pelzl riportata nelle soluzioni stima la durata di un attacco di forza bruta a un cifrario simmetrico:
- 56-64 bit: ore o giorni;
- 112-128 bit: decenni, in assenza di computer quantistici;
- 256 bit: decenni anche con i computer quantistici.

## Come si usa
Esempio delle dispense (esercizio 1.5.8):
- se il testo in chiaro di Cesare è una frase di senso compiuto, la forza bruta è un **COA**, perché si riconosce la chiave quando il testo diventa leggibile;
- se il testo è una stringa casuale, serve una coppia nota e l'attacco diventa **KPA**.

I cifrari a trasposizione cadono subito con KPA. Con CPA o CCA basta cifrare o decifrare la stringa che contiene tutti i caratteri.

## Nei corsi
- **Crittografia** (magistrale): lezione 1, §1.4 "Attacchi e Sicurezza". Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, pp. 7, 18; tabella Paar a p. 13); `magistrale/Crittografia/Slide/slides week 1-14/week1/Crypto1.pdf` (§1.9.1, p. 22).

## Prerequisiti
- [[Schema di cifratura simmetrica]]: definisce $\mathrm{Enc}_k$, $\mathrm{Dec}_k$ e $\mathcal K$
- [[Principio di Kerckhoffs]]: l'avversario conosce il cifrario

## Porta a
- [[Sicurezza IND-CPA]]: obiettivi di sicurezza formulati negli scenari CPA e CCA
- [[Attacco meet-in-the-middle]]: esempio di KPA sulla doppia cifratura
- [[Indice di coincidenza]]: strumento statistico per il COA ai polialfabetici

## Collegati
- [[Distanza di unicità]]: quanto crittogramma serve in un COA per avere una sola chiave
- [[Attacco man-in-the-middle]]: attacco attivo, oltre il semplice ascolto
- [[Cifrario di Cesare]]: esempio di forza bruta COA
