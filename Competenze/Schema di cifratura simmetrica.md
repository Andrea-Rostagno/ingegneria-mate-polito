---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [symmetric cipher, symmetric encryption scheme, cifrario simmetrico, cifrario a chiave privata, "(Gen, Enc, Dec)", spazio delle chiavi, testo in chiaro, plaintext, crittogramma, ciphertext]
tags: [competenza, area/informatica]
---

# Schema di cifratura simmetrica

> Un cifrario simmetrico è una terna di algoritmi efficienti $(\mathrm{Gen},\mathrm{Enc},\mathrm{Dec})$ in cui mittente e destinatario usano la **stessa** chiave $k$, scambiata prima su un canale protetto.

## Definizione / enunciato
Il gergo di base (`Critto_week1.pdf` §1.2):
- $P\in\mathcal P$ è il testo in chiaro (a volte $M$, messaggio);
- $k\in\mathcal K$ è la chiave, prodotta dall'algoritmo $\mathrm{Gen}$;
- $C\in\mathcal C$ è il crittogramma;
- $\mathrm{Enc}$ cifra e $\mathrm{Dec}$ decifra.

La **dimensione della chiave** è $\log_2|\mathcal K|$, cioè il numero di bit necessari e sufficienti per scriverla. La dimensione di $\mathcal C$ è uguale o leggermente maggiore di quella di $\mathcal P$.

**Formulazione matematica (1.2.6).** Serve un'applicazione $f:\mathcal K\to\mathrm{inj}(\mathcal P,\mathcal C)$, dove $\mathrm{inj}(\mathcal P,\mathcal C)$ è l'insieme delle funzioni iniettive $\mathcal P\to\mathcal C$. Si pone $\mathrm{Enc}_k:=f_k$ e $\mathrm{Dec}_k=f_k^{-1}$. Gli algoritmi che calcolano $f_k$ da $k$, $f_k(P)$ e $f_k^{-1}(C)$ devono essere efficienti.

## Formule chiave
$$C=\mathrm{Enc}_k(P),\qquad P=\mathrm{Dec}_k(C)=\mathrm{Enc}_k^{-1}(C),\qquad \text{dim. chiave}=\log_2|\mathcal K|\ \text{bit}$$

## Intuizione
Chi conosce $k$ cifra e decifra; chi non la conosce deve affrontare un problema "computazionalmente infeasible", cioè di costo finito ma impossibilmente grande in tempo o memoria [DH76]. Il punto debole è la distribuzione della chiave: serve un canale protetto. È questo il problema che la crittografia asimmetrica elimina.

## Come si usa
**Protocollo del cifrario simmetrico (1.2.13).**
1. Il mittente genera $k=\mathrm{Gen}_n$ e la spedisce sul canale protetto.
2. Cifra $C=\mathrm{Enc}_k(P)$ e spedisce $C$ sul canale insicuro.
3. Il destinatario calcola $P=\mathrm{Dec}_k(C)$.

Per sentire il costo della forza bruta, le dispense fanno eseguire un ciclo Python che prova tutte le $2^{30}$ chiavi di 30 bit e chiedono quanto durerebbe con 64 bit. I cifrari si indicano con il loro nome: $\mathrm{Cesare}_k$, $\mathrm{DES}_k$, $\mathrm{DES}^{-1}_k$.

## Nei corsi
- **Crittografia** (magistrale): prima lezione. Introduce la notazione usata in tutto il corso e la confronta con il cifrario asimmetrico ($g_{sk}\circ f_{pk}=\mathrm{Id}_{\mathcal P}$). Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, pp. 5-10, 14); `magistrale/Crittografia/Slide/slides week 1-14/week1/Crypto1.pdf` (§1.2-1.3, pp. 4-9).

## Prerequisiti
- [[Classi di resto modulo n]]: chiavi e messaggi sono stringhe di bit o elementi di $\mathbb Z_n$

## Porta a
- [[Principio di Kerckhoffs]]: la sicurezza deve stare tutta nella chiave
- [[Modelli di attacco crittografico]]: cosa può fare il crittanalista
- [[Segretezza perfetta]]: il cifrario secondo Shannon aggiunge probabilità su $\mathcal P$ e $\mathcal K$
- [[Cifrario di Cesare]]: primo esempio storico
- [[One-time pad]]: cifrario simmetrico perfettamente sicuro

## Collegati
- [[Crittografia a chiave pubblica]]: contrasto, coppia $(sk,pk)$ al posto della chiave condivisa
