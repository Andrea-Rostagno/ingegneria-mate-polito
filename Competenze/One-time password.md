---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [OTP, One Time Password, password usa e getta, catena di hash per password, hash chain password, protocollo di autenticazione con password, autenticazione challenge-response]
tags: [competenza, area/informatica]
---

# One-time password

> Protocollo di autenticazione in cui la password cambia a ogni accesso. Così una password intercettata non serve a entrare una seconda volta.

## Definizione / enunciato
**Autenticazione con password (protocollo base):**
1. l'utente invia username e password;
2. il server calcola l'hash della password e lo confronta con il database degli hash memorizzati.

Il server conserva solo le immagini hash, quindi chi lo viola ottiene solo l'elenco codificato. Restano due debolezze:
- l'**attacco del dizionario**, mitigato concatenando una stringa casuale (salt) alla password prima dell'hash (nei sistemi UNIX la stringa è di 12 bit);
- la password viaggia **in chiaro**.

**Autenticazione con chiave pubblica:**
1. il server manda una sequenza casuale $c$;
2. l'utente risponde con $(f_A^{-1}(c),\ \text{username}_A)$;
3. il server applica la chiave pubblica $f_A$ e confronta il risultato con $c$.

**OTP:** la password cambia a ogni accesso. Le slide elencano quattro modi:
- un **token** sincronizzato con un server: codice unico, mai ripetuto, personale;
- **algoritmi matematici** (catena di hash);
- una **challenge**: il server manda una stringa casuale, l'utente la cifra con la chiave o password condivisa, il server fa lo stesso e confronta;
- un **certificato più SMS**: l'utente inserisce il PIN, chiede l'OTP dal PC con il certificato e la riceve sul telefono.

## Formule chiave
OTP con catena di hash. L'utente sceglie un seme $s$ e condivide con il server $h^{1000}(s)$:
$$\text{accesso }1:\ h^{999}(s),\qquad \text{accesso }2:\ h^{998}(s),\ \dots$$
Il server applica $h$ al valore ricevuto e verifica che coincida con l'ultimo valore memorizzato.

## Intuizione
La funzione hash è facile da calcolare in avanti e difficile da invertire. Chi intercetta $h^{k}(s)$ può calcolare solo i valori già usati, $h^{k+1}(s),\dots$, e non il prossimo, $h^{k-1}(s)$.

## Come si usa
È lo schema usato dal Politecnico, tramite InfoCert, per firmare i registri d'esame: certificato più OTP via SMS (`Critto10.pdf` p. 39). La variante challenge-response è anche la base della validazione delle chiavi nei protocolli di scambio autenticato.

## Nei corsi
- **Crittografia** (magistrale): protocolli di autenticazione nelle slide di Bazzanella "Protocolli di base". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (pp. 30-39).

## Prerequisiti
- [[Funzione hash crittografica]]: catena $h^k(s)$ e hash delle password
- [[Funzione one-way]]: l'inversione della catena è impraticabile

## Porta a
- [[Encrypted Key Exchange]]: autenticazione basata su password senza esporla agli attacchi offline
- [[Secure Remote Password]]: il server conserva solo un verificatore

## Collegati
- [[Tabelle rainbow]]: attacco del dizionario agli hash delle password, contrastato dal salt
- [[Crittografia a chiave pubblica]]: autenticazione con $f_A^{-1}(c)$
- [[Prova a conoscenza nulla]]: autenticazione senza inviare il segreto
