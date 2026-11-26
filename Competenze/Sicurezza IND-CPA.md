---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [IND-CPA, CPA-IND, CPA security, indistinguibilità, indistinguishability, IND, CCA-IND, IND-CCA, non malleabilità, non-malleability, NM, cifratura probabilistica, probabilistic encryption, esperimento IND]
tags: [competenza, area/informatica]
---

# Sicurezza IND-CPA

> Un cifrario è IND-CPA sicuro se nessun avversario, pur potendo cifrare testi a sua scelta, riesce a distinguere quale di due messaggi è stato cifrato con probabilità significativamente maggiore di $1/2$. Ne segue che la cifratura deve essere probabilistica.

## Definizione / enunciato
**Esperimento IND** (1.4.1), per un crittosistema simmetrico $(\mathrm{Gen},\mathrm{Enc},\mathrm{Dec})$:
1. L'avversario $A$ sceglie $P_0,P_1\in\mathcal P$.
2. Il crittografo estrae un bit casuale $b\in\{0,1\}$, genera $k=\mathrm{Gen}$ e consegna $C=\mathrm{Enc}_k(P_b)$.
3. $A$ restituisce $b'\in\{0,1\}$. Se $b=b'$, l'avversario distingue.

Il cifrario è sicuro in termini di indistinguibilità se nessun $A$ indovina $b$ con probabilità significativamente maggiore di $1/2$.

**CPA-IND** (Nota 1.4.2): al passo 2 l'avversario riceve, oltre a $C$, un certo numero di accessi all'oracolo $\mathrm{Enc}_k$. **CCA-IND** è l'obiettivo più alto: l'avversario può interrogare anche $\mathrm{Dec}_k$, ma ovviamente non sul crittogramma "challenge" $C$.

**Malleabilità (NM):** un cifrario è malleabile se un intruso può trasformare $C$, senza conoscere $P$, in un altro crittogramma $\tilde C$ di cui conosce il testo in chiaro.

## Formule chiave
$$\Pr[b'=b]\approx\tfrac12;\qquad C\leftarrow\mathrm{Enc}_k(P)\ \text{ al posto di }\ C=\mathrm{Enc}_k(B\|P)$$

## Intuizione
Un cifrario **deterministico** non può essere CPA-IND: l'avversario cifra da sé $P_0$ con l'oracolo e confronta il risultato con $C$. Servono quindi cifrari con una componente casuale (**probabilistic encryption**), così che due cifrature dello stesso $P$ diano crittogrammi diversi.

## Come si usa
Esempio delle dispense: per cifrare $P$ si scelgono 100 bit casuali $B=[b_1\cdots b_{100}]$ e si calcola $C=\mathrm{Enc}_k(B\|P)$. Una seconda cifratura di $P$ usa bit $B$ diversi e produce un altro crittogramma. Poiché $B$ è trasparente per l'utente, si scrive $C\leftarrow\mathrm{Enc}_k(P)$.

L'esercizio 1.10.3 chiede se i "baby cipher" (Vernam, Cesare, rot con chiave fissa) siano CPA-sicuri. Sono deterministici, quindi no (conclusione nostra dalla Nota 1.4.2).

## Nei corsi
- **Crittografia** (magistrale): lezione 1, §1.4.1-1.4.2. La versione inglese definisce lo stesso esperimento per i cifrari a chiave pubblica ($\mathrm{PubK}^{eav}_{A,\Pi}$, tratto da Katz-Lindell). In lezione 2 il teorema "perfect secrecy = perfettamente indistinguibile" motiva la definizione IND. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, pp. 19-20); `magistrale/Crittografia/Slide/slides week 1-14/week1/Crypto1.pdf` (§1.8, p. 18; §1.10, p. 23); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (§2.2.2, p. 16).

## Prerequisiti
- [[Modelli di attacco crittografico]]: CPA e CCA definiscono gli oracoli
- [[Segretezza perfetta]]: l'indistinguibilità perfetta è la versione "senza limiti di calcolo"

## Porta a
- Nessuno.

## Collegati
- [[Crittografia a chiave pubblica]]: stesso esperimento con $pk$ nota all'avversario
- [[Attacco bit flipping]]: esempio concreto di malleabilità
- [[Schema di cifratura simmetrica]]: l'esperimento è formulato su $(\mathrm{Gen},\mathrm{Enc},\mathrm{Dec})$
