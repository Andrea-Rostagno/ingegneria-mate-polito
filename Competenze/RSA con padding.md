---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [padded RSA, RSA randomizzato, RSA probabilistico, PKCS, Public Key Cryptography Standards, RSA textbook non IND-CPA]
tags: [competenza, area/informatica]
---

# RSA con padding

> Variante probabilistica di RSA: si concatena al messaggio una stringa casuale prima di cifrare. Serve perché RSA "textbook" è deterministico e quindi non è IND-CPA, ed è malleabile.

## Definizione / enunciato
Padded RSA (`Crypto9.pdf` §9.2.4, p. 12):
- lo spazio dei messaggi si restringe alle stringhe $m$ di $l=2\lambda-r$ bit;
- per cifrare si sceglie una stringa casuale $s$ di $r$ bit e si calcola $C$;
- per decifrare si calcola $C^d\bmod N$ e si scartano i primi $r$ bit.

## Formule chiave
$$C=\mathrm{Enc}_{pk}(m)=(s\,\|\,m)^e \pmod N$$

**Attacco CCA al textbook RSA** (`Crypto9.pdf` p. 12; `Critto8.pdf` p. 18):
1. data $C=m^e$, l'attaccante sceglie $r$ a caso;
2. fa decifrare $C_1=r^eC$;
3. ottiene $C_1^d\equiv r\,m\pmod N$;
4. moltiplica per $r^{-1}\bmod N$ e ricava $m$.

## Intuizione
Un cifrario deterministico non è IND-CPA: chi ha la chiave pubblica cifra i candidati e confronta i risultati. La stringa casuale $s$ rende diverse due cifrature dello stesso $m$.

RSA è anche moltiplicativo, $(r^e)(m^e)=(rm)^e$: è la malleabilità che rende possibile l'attacco CCA. Molti attacchi di protocollo si evitano con il padding prescritto dagli standard PKCS (`Crypto9.pdf` pp. 11-12).

Bazzanella ricorda che questa malleabilità diventa utile nella firma cieca, dove però si applica un hash prima di decifrare (`Critto8.pdf` p. 19).

## Come si usa
**Regola pratica** (`Critto8.pdf` p. 18): mai decifrare e rinviare al mittente un messaggio ricevuto via RSA.

Il padding casuale protegge anche dagli attacchi di Håstad. Il padding corto però non basta: l'attacco di Coppersmith "short pad" recupera $m$ da due cifrature $m\|r_1$ e $m\|r_2$ se il padding è troppo breve (`200528_03LPYOV_RSA_attacks_Python2.pdf` p. 6).

## Nei corsi
- **Crittografia** (magistrale): Di Scala introduce il padded RSA nelle cifrature a chiave pubblica, Bazzanella l'attacco chosen-ciphertext. Fonti:
  - `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (§9.2.3-9.2.4, pp. 11-12);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto8.pdf` (pp. 18-19);
  - `magistrale/Crittografia/Slide/presentations/presentations/200528_03LPYOV_RSA_attacks_Python2.pdf` (p. 6).

## Prerequisiti
- [[RSA]]: lo schema textbook che si modifica
- [[Sicurezza IND-CPA]]: il requisito che il textbook RSA non soddisfa

## Porta a
- [[Cifratura ibrida]]: in pratica RSA cifra solo chiavi di sessione

## Collegati
- [[Modelli di attacco crittografico]]: l'attacco moltiplicativo è un CCA
- [[Attacco di Håstad]]: il padding casuale lo neutralizza
- [[Firma cieca]]: usa positivamente la malleabilità di RSA
