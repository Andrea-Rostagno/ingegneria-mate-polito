---
tipo: competenza
area: informatica
corsi: [Crittografia, Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [zero-knowledge proof, ZKP, dimostrazione a conoscenza nulla, protocollo di Fiat-Shamir, Fiat-Shamir identification, identificazione a conoscenza nulla, prover e verifier]
tags: [competenza, area/informatica]
---

# Prova a conoscenza nulla

> Protocollo con cui il dimostratore $P$ (Peggy) convince il verificatore $V$ (Victor) di possedere un segreto senza rivelare nient'altro.

## Definizione / enunciato
Di solito l'unico modo per dimostrare di sapere una cosa è dirla. Usando funzioni one-way, $P$ può invece fornire una prova senza rivelare altro.

**Esempio di Waldo:**
1. Victor firma ripetutamente il retro di una stampa della pagina;
2. Peggy ritaglia Waldo;
3. Victor vede che l'ha trovato e, dalle firme, che il foglio è proprio quello, ma non ne conosce la posizione.

**Identificazione di Fiat e Shamir.** L'utente sceglie $n=pq$, con $p$ e $q$ primi, e un intero $s<n$. Calcola $t=s^2\bmod n$, pubblica $(n,t)$ e tiene segreti $(p,q,s)$. Il protocollo si ripete $k$ volte:
1. l'utente sceglie un intero casuale $r<n$ e invia $u=r^2\bmod n$;
2. il server invia un bit casuale $e\in\{0,1\}$;
3. l'utente invia $z=r\,s^{e}\bmod n$;
4. il server calcola $x=z^2\bmod n$ e, se $x=u\,t^{e}\bmod n$, ripete dal passo 1; altrimenti blocca il protocollo.

## Formule chiave
$$t=s^2,\quad u=r^2,\quad z=rs^e,\quad z^2\equiv u\,t^e\pmod n,\qquad P(\text{identità corretta})=1-\frac1{2^k}.$$

## Intuizione
- Con $e=0$ il server controlla che l'utente sappia fare il quadrato modulo $n$.
- Con $e=1$ controlla che conosca $s$, senza impararlo lui stesso.

Un impostore che conoscesse $e$ in anticipo saprebbe barare:
- per $e=0$ invia $u=r^2$ e poi $r$;
- per $e=1$ invia $u=r^2t^{-1}$ e poi $r$.

Senza conoscere $s$ indovina quindi circa il 50% delle volte. Dopo $k$ ripetizioni riuscite, la probabilità che l'utente sia chi dice è $1-1/2^k$. Il problema sottostante è estrarre radici quadrate modulo $n=pq$ senza conoscerne la fattorizzazione.

## Come si usa
- Autenticazione senza inviare la password: né il server né terzi imparano il segreto.
- Le slide citano anche il protocollo di Schnorr, basato sul logaritmo discreto.
- Nel denaro elettronico, il "taglia e scegli" su 100 assegni è uno schema dello stesso tipo.

## Nei corsi
- **Crittografia** (magistrale): slide di Bazzanella "Protocolli avanzati". Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto12.pdf` (pp. 10-17; formule lette sulla pagina renderizzata, p. 15).
- **Blockchain e criptoeconomia** (magistrale): i "sistemi di prova a conoscenza zero" sono citati nel *Crypto Anarchist Manifesto* (1992) fra le tecnologie del cripto-anarchismo. Nelle applicazioni la Self Sovereign Identity verifica le credenziali senza accedere ai dati originali (il termine ZKP lì non compare). Fonti: `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (p. 17); `09-Applicazioni.pdf` (p. 54).

## Prerequisiti
- [[Residui quadratici]]: $t=s^2\bmod n$ e difficoltà delle radici quadrate modulo $pq$
- [[Funzione one-way]]: base della conoscenza nulla
- [[Bit commitment]]: $u$ impegna l'utente prima della sfida $e$

## Porta a
- [[Denaro elettronico]]: verifica degli importi senza perdere l'anonimato

## Collegati
- [[Firma di Schnorr]]: protocollo di identificazione basato sul logaritmo discreto
- [[One-time password]]: altro modo di non esporre la password
- [[Secure Remote Password]]: AKE come password a conoscenza nulla
- [[Self Sovereign Identity]]: verificare credenziali senza rivelare i dati (Blockchain e criptoeconomia)
