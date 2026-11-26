---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [one time pad, cifrario di Vernam, Vernam cipher, ⊕-cipher, xor cipher, blocco monouso, cifrario di Vernam-Mauborgne]
tags: [competenza, area/informatica]
---

# One-time pad

> Si cifra sommando (xor) al messaggio una chiave casuale uniforme, lunga quanto il messaggio e usata una volta sola. È l'unico cifrario del corso con segretezza perfetta dimostrata.

## Definizione / enunciato
I bit sono gli elementi di $\mathbb Z_2$ e i byte quelli di $\mathbb Z_2^8$; gli informatici chiamano **xor** la somma in $\mathbb Z_2$ (`Critto_week3.pdf` §3.1).

Nel 1919 Gilbert Vernam brevetta un dispositivo elettromeccanico con $\mathcal P=\mathcal K=\mathbb Z_2^5$: la chiave arriva da un nastro perforato e il messaggio dalla tastiera.
$$\mathrm{Enc}_k(P)=k+P,\qquad \mathrm{Dec}_k(C)=k+C.$$
Joseph Mauborgne propone che il nastro contenga informazione **casuale**, cioè una distribuzione (uniforme) su $\mathcal K$. Insieme aggiungono il requisito che la chiave non sia **riutilizzabile**, per evitare ad esempio la sovrapposizione di Kerckhoffs: nasce l'OTP.

## Formule chiave
$$C=P\oplus k,\qquad P=C\oplus k,\qquad k\sim\mathrm{Unif}(\mathbb Z_2^n)\ \text{usata una sola volta}$$

## Intuizione
- **Nota 3.1.1:** con distribuzione uniforme su $\mathcal K$, il teorema di Shannon dà la segretezza perfetta. Fissato $P$, ogni $C$ si ottiene da una e una sola chiave, quindi la tabella $\mathrm{Enc}$ è un quadrato latino.
- Il prezzo è che la chiave è lunga quanto il messaggio e va distribuita in anticipo.
- Se la stessa chiave è usata due volte, $C_1\oplus C_2=P_1\oplus P_2$ e la sicurezza crolla. È un passaggio algebrico nostro: l'attacco è sviluppato nelle slide di Basile.

## Come si usa
**Vernam "baby" (`Crypto1.pdf` §1.3.1).** Alice e Bob concordano $k=[01010]$, cioè il numero 10, e codificano $A=0,\dots,Z=25$ più alcuni simboli fino a 31. Si cifra con $C=P\oplus k$ e si decifra con $P=C\oplus k$.

L'esercizio 1.3.2 mostra il pericolo di una chiave corta e fissa: con lo stesso messaggio cifrato con una nuova chiave di 5 bit, si chiede di ritrovarla. È un KPA immediato, perché $k=P\oplus C$.

## Nei corsi
- **Crittografia** (magistrale): "⊕-cipher" nella lezione 1, poi OTP nella lezione 3 come realizzazione fisica del cifrario di Shannon. Nella versione inglese compare tra le "Security Notions" (Perfect Secrecy and One Time Pad). Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, p. 2); `magistrale/Crittografia/Slide/slides week 1-14/week1/Crypto1.pdf` (§1.3.1, pp. 7-8; §1.11.2, p. 25).

## Prerequisiti
- [[Segretezza perfetta]]: il teorema di Shannon garantisce la sicurezza
- [[Classi di resto modulo n]]: lo xor è la somma in $\mathbb Z_2$

## Porta a
- [[Cifrario a flusso]]: sostituisce la chiave casuale con un keystream pseudocasuale
- [[Riuso del keystream]]: cosa succede se la chiave viene riusata

## Collegati
- [[Cifrario di Vigenère]]: un Vigenère con chiave casuale non ripetuta
- [[Cifrario di Cesare]]: stesso schema con $\boxplus$ e chiave costante
