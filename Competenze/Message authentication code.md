---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [MAC, codice di autenticazione del messaggio, tag, keyed digest, keyed-digest, Gen Mac Vrfy, sicurezza di un MAC]
tags: [competenza, area/informatica]
---

# Message authentication code

> Algoritmo simmetrico che, con una chiave condivisa, produce un **tag** del messaggio. Il destinatario ricalcola il tag e verifica così autenticità e integrità, ma non la confidenzialità.

## Definizione / enunciato
Un MAC è una terna di algoritmi (Crypto 7, §7.4.1):
- $\mathrm{Gen}(n)$: dal parametro di sicurezza $n$ genera una chiave $k$ di $n$ bit;
- $\mathrm{Mac}_k(m)$: dato il messaggio $m$ produce il tag $t$;
- $\mathrm{Vrfy}_k(m,t)$: restituisce 1 se il tag è valido e 0 altrimenti.

**Sicurezza.** Un avversario che non conosce $k$ ma vede tag validi $(m_1,t_1),\dots,(m_\ell,t_\ell)$ non deve riuscire a produrre una coppia valida $(m,t)$ con $m\neq m_i$ per ogni $i$.

## Formule chiave
Costruzione ingenua, da evitare: $t=\mathrm{Hash}(k\|P)$. È insicura se la hash è Merkle-Damgård, per l'attacco length extension. Bazzanella cita attacchi noti anche contro $H(M\|key)$ e $H(key\|M)$.

## Intuizione
È la versione simmetrica della firma: chi ha la chiave può sia generare sia verificare i tag. Per questo il MAC non dà **non ripudio**: il destinatario potrebbe aver creato lui stesso il tag (Critto 9, p. 23).

## Come si usa
- Ricezione: si ricalcola il MAC sul messaggio ricevuto in chiaro con la stessa chiave. Se i due tag coincidono, il messaggio è autentico e integro.
- Esercizio di lezione (Crypto 7, Ex. 7.4.2): dato un cifrario a blocchi, decidere se sono sicuri:
  - $t=\mathrm{Enc}_k(B_1)\oplus\mathrm{Enc}_k(B_2)$;
  - $t=\mathrm{Enc}_k([1]\|B_1)\oplus\mathrm{Enc}_k([2]\|B_2)$;
  - $t=(r\|\mathrm{Enc}_k(r)\oplus\mathrm{Enc}_k(B_1))$.
- In OpenSSL l'unico MAC disponibile è HMAC (`HMAC_Init`, `HMAC_Update`, `HMAC_Final`). Il tag va confrontato con `CRYPTO_memcmp`, a tempo costante, e non con `memcmp`, che è esposto a timing attack (Basile).
- Nei cifrari autenticati il tag accompagna il testo cifrato ("Why MACs and tags?", Crypto 5, §5.2.2).

## Nei corsi
- **Crittografia** (magistrale): §7.4 delle dispense inglesi; slide 22-23 di Bazzanella; implementazione in C nelle slide di Basile. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (pp. 15-16); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto9.pdf` (pp. 22-23); `magistrale/Crittografia/Slide/presentations/presentations/200319_03LPYOV_openssl_hash_mac_random_1X.pdf` (pp. 22, 26-32).

## Prerequisiti
- [[Schema di cifratura simmetrica]]: stessa logica di chiave condivisa (Gen)
- [[Funzione hash crittografica]]: modo standard per costruire un MAC

## Porta a
- [[HMAC]]: MAC basato su hash con prova di sicurezza
- [[Attacco length extension]]: rompe il MAC ingenuo $\mathrm{Hash}(k\|P)$
- [[Modalità GCM]]: cifratura autenticata con tag

## Collegati
- [[Firma digitale]]: analogo asimmetrico, che dà anche non ripudio
- [[Checksum e CRC]]: controllo d'integrità senza chiave
