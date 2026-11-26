---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [KDC, centro di distribuzione delle chiavi, key transport, key establishment, Needham-Schroeder, attacco di Denning-Sacco, replay attack, perfect forward secrecy, PFS, key derivation function, KDF, chiave di sessione, session key]
tags: [competenza, area/informatica]
---

# Key Distribution Center

> Un server fidato da tutti gli utenti, che condivide con ognuno una chiave a lungo termine e la usa per distribuire chiavi di sessione.

## Definizione / enunciato
**Stabilire una chiave** significa creare un segreto condiviso fra due o più parti. Ci sono due approcci: **trasporto** della chiave e **accordo** sulla chiave.

Le chiavi di sessione (effimere) hanno tre vantaggi:
- meno danno se una chiave viene esposta;
- meno materiale per la crittanalisi;
- l'attaccante deve recuperare molte chiavi.

Si aggiornano rieseguendo il protocollo oppure con una **KDF** a partire da un segreto già condiviso.

**KDC.** Il server condivide con ogni utente $U$ una chiave $k_U$ (Key Encryption Key).
1. Alice chiede $\mathrm{RQST}(ID_{Alice},ID_{Bob})$.
2. Il KDC genera una chiave di sessione casuale $R$ e invia $y_A$ ad Alice e $y_B$ a Bob.
3. Ciascuno decifra con la propria chiave: $R=Dec_{k_A}(y_A)=Dec_{k_B}(y_B)$.

## Formule chiave
$$y_A=Enc_{k_A}(R),\quad y_B=Enc_{k_B}(R);\qquad \text{KDF con nonce: } R=Enc_P(r)\ \text{ oppure }\ R=\mathrm{HMAC}_P(r).$$
Con un contatore al posto del nonce, $R=Enc_P(cnt)$, si risparmia un messaggio, ma il contatore va sincronizzato. La KDF deve essere one-way, così una chiave di sessione compromessa non rivela $P$.

## Intuizione
Il KDC protegge dagli attacchi passivi ma è debole contro quelli attivi:
- **replay** (Denning e Sacco): un vecchio $R$ compromesso viene riproposto rigiocando $y_A$ o $y_B$;
- **mancata conferma della chiave**: un utente legittimo ma malevolo, Oscar, intercetta la richiesta di Alice, cambia $ID_{Bob}$ e impersona il KDC.

**Perfect forward secrecy (PFS):** compromettere le chiavi a lungo termine non rivela le chiavi di sessione passate. Per ottenerla servono tecniche asimmetriche, che il KDC puramente simmetrico non ha.

## Come si usa
**Needham-Schroeder** aggiunge al KDC un handshake challenge-response finale. Il suo schema completo è una figura delle dispense, da verificare sul PDF. Lo attacca il Denning-Sacco: chi cattura la chiave di sessione di una sessione intercettata può impersonare l'utente o fare un attacco esaustivo sulla sua password.

## Nei corsi
- **Crittografia** (magistrale): dispense di Di Scala, settimana 13. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week13/Crypto13.pdf` (§13.1 pp. 2-6, §13.3 pp. 11-13).

## Prerequisiti
- [[Schema di cifratura simmetrica]]: $Enc_{k_U}$ per trasportare $R$
- [[HMAC]]: possibile KDF $R=\mathrm{HMAC}_P(r)$

## Porta a
- [[Encrypted Key Exchange]]: accordo autenticato da password, con PFS

## Collegati
- [[Scambio di chiavi Diffie-Hellman]]: accordo invece di trasporto, base della PFS
- [[Attacco man-in-the-middle]]: attacco attivo come quello del KDC impersonato
