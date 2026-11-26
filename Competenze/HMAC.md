---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [keyed-hash message authentication code, HMAC, ipad, opad, inner hash, outer hash, HMAC-SHA1, HMAC-MD5]
tags: [competenza, area/informatica]
---

# HMAC

> MAC costruito da una qualunque funzione hash con due passate annidate, una interna e una esterna, con la chiave mascherata da due costanti diverse. Resiste all'attacco length extension e ha una prova di sicurezza.

## Definizione / enunciato
Dati una hash $H$ con blocco di $j$ bit e una chiave $K$, si porta la chiave a lunghezza $j$ e si ottiene $K'$, detta $k^+$ nelle dispense inglesi. Se $K$ è più lunga di $j$ si applica $H$; se è più corta si aggiungono zeri. Le due costanti sono (Critto 9, p. 25; Crypto 7, p. 17):
$$\text{ipad}=\texttt{0x36}\ \text{ripetuto},\qquad \text{opad}=\texttt{0x5c}\ \text{ripetuto},$$
cioè $00110110$ e $01011100$ ripetuti $j/8$ volte.

## Formule chiave
$$\mathrm{HMAC}_K(M)=H\big((K'\oplus \text{opad})\ \|\ H((K'\oplus\text{ipad})\ \|\ M)\big).$$
La figura di Crypto 7 (p. 17, Bellare-Canetti-Krawczyk 1996) ha:
- hash interna su $S_i\|x_1\cdots x_n$ con $S_i=k^+\oplus\text{ipad}$;
- hash esterna su $S_o\|h(S_i\|x)$ con $S_o=k^+\oplus\text{opad}$.

L'equazione stampata sotto la figura riporta opad anche nella hash interna: è un refuso, perché figura e slide di Bazzanella usano ipad.

## Intuizione
La costruzione ingenua $\mathrm{Hash}(k\|P)$ con hash Merkle-Damgård si estende senza conoscere $k$. Nell'HMAC il digest interno viene ri-hashato con una chiave diversa, $K'\oplus$opad, quindi l'attaccante non può continuare la catena. Vale una **prova di sicurezza**: se l'HMAC non è sicuro, allora non lo è la hash $h$.

## Come si usa
- Si può usare con qualunque hash. Le slide citano MD5 e SHA-1 come le più usate, ormai considerate poco sicure.
- **OpenSSL** (Basile): HMAC è l'unico MAC offerto. Si usa in due modi:
  - in un colpo solo con `HMAC(type, key, keylen, data, datalen, hash, hashlen)`;
  - in modo incrementale con `HMAC_CTX_new`, `HMAC_Init(ctx,key,keylen,EVP_md5())`, `HMAC_Update` e `HMAC_Final`.
  
  La verifica confronta il tag ricalcolato con `CRYPTO_memcmp`.
- HMAC-MD4 è tra gli usi deprecati citati dall'RFC 6150 (Crypto 8, p. 3).

## Nei corsi
- **Crittografia** (magistrale): §7.4.1 delle dispense inglesi, slide 24-25 di Bazzanella, uso in C con OpenSSL nelle slide di Basile. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (pp. 16-17); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto9.pdf` (pp. 24-25); `magistrale/Crittografia/Slide/presentations/presentations/200319_03LPYOV_openssl_hash_mac_random_1X.pdf` (pp. 27-32).

## Prerequisiti
- [[Message authentication code]]: HMAC è un MAC
- [[Costruzione di Merkle-Damgård]]: struttura delle hash di cui corregge il difetto
- [[Funzione hash crittografica]]: la hash $H$ sottostante

## Porta a
- Nessuno.

## Collegati
- [[Attacco length extension]]: l'attacco che HMAC neutralizza
- [[Protocolli WEP e WPA]]: altri meccanismi di integrità (CRC-32, Michael)
