---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["GCM", "Galois Counter Mode", "Galois/Counter Mode", "AEAD", "authenticated encryption", "cifratura autenticata", "AAD", "CCM", "Counter CBC-MAC"]
tags: [competenza, area/informatica]
---

# Modalità GCM

> Galois Counter Mode: cifratura in modalità CTR più un tag $t$ di 128 bit, calcolato con moltiplicazioni in un campo di Galois, che autentica il messaggio e dei dati in chiaro (AAD). È un esempio di cifratura autenticata (AEAD).

## Definizione / enunciato
- **Requisito:** serve un cifrario a blocchi con blocchi di 128 bit. Il nome "Galois" viene dal fatto che ogni blocco si vede come elemento di un campo finito.
- **Mittente:** deve spedire $P=B_N\|\cdots\|B_1$, con blocchi di 128 bit. Cifra i blocchi in modalità CTR, ottenendo $C_N,\dots,C_1$. Poi, con un blocco in chiaro detto **AAD** (*authentication additional data*: indirizzi IP, parametri di protocollo), calcola il tag $t$.
- **Pacchetto spedito:** $(C_N,\dots,C_1,t,AAD)$.

## Formule chiave
Algoritmo 5.4.13 della dispensa ($\times$ è la moltiplicazione nel campo di Galois):
$$H=\mathrm{Enc}_k(0),\qquad g_0=AAD\times H,$$
$$g_j=(g_{j-1}\oplus C_j)\times H\quad (j=1,\dots,N),$$
$$t=(g_N\times H)\oplus\mathrm{Enc}_k(T_1-1).$$
La dispensa scrive "$128=2^8$ bits" e "campo finito $GF(2^8)$"; per blocchi da 128 bit ci si aspetterebbe $2^7$ e $GF(2^{128})$. È verosimilmente un refuso, da verificare sul PDF.

## Intuizione
- Il tag è un MAC polinomiale: l'hash $g_N$ è un polinomio in $H$ con coefficienti i blocchi cifrati e l'AAD.
- Mascherato con $\mathrm{Enc}_k(T_1-1)$, il tag può essere prodotto solo da chi conosce $k$.
- Così la modalità dà insieme confidenzialità (da CTR) e integrità/autenticità.

## Come si usa
- Il destinatario decifra in modalità CTR e ricalcola $t'$ con lo stesso algoritmo, usando l'AAD.
- Se $t=t'$, il cifrato e l'AAD non sono stati manomessi e provengono da chi condivide la chiave $k$.

Variante affine **CCM** (Counter CBC-MAC):
- combina CBC (per il tag) e CTR (per cifrare tag e messaggio), con un nonce $N$;
- il nonce non ripetuto garantisce che tutti i contatori e tutti i CBC-MAC usati durante la vita della chiave siano distinti.

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.4.6 (Di Scala, 2020); Crypto 5 §5.1.6, §5.1.7 (CCM) e §5.3.1 (AEAD, solo rimando a Wikipedia). Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (p. 21); `magistrale/Crittografia/Slide/slides week 1-14/week5/Crypto5.pdf` (pp. 9-10, 12).

## Prerequisiti
- [[Modalità CTR]]: GCM cifra in CTR
- [[Campo finito]]: il tag usa la moltiplicazione nel campo di Galois

## Porta a
- [[Message authentication code]]: il tag GCM è un MAC

## Collegati
- [[AES]]: il tipico cifrario con blocchi di 128 bit
- [[Modalità CBC]]: CCM usa un CBC-MAC
- [[Attacco bit flipping]]: un tag impedisce manipolazioni non rilevate
