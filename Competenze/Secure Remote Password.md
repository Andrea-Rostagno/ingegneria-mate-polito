---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [SRP, protocollo SRP, asymmetric key exchange, AKE, verifier-based authentication, autenticazione basata su verificatore, plaintext-equivalent]
tags: [competenza, area/informatica]
---

# Secure Remote Password

> Protocollo client-server di autenticazione con password, **basato su un verificatore**: il server conserva $v=g^x$, da cui la password non si può ricavare, e insieme le parti generano una chiave di sessione.

## Definizione / enunciato
Due tipi di protocollo di autenticazione:
- **plaintext-equivalent:** il server conserva $P$, o qualcosa da cui ricavare $P$ è computazionalmente fattibile;
- **verifier-based:** il server conserva un verificatore $V$ da cui $P$ non è ricavabile, ma con cui si può verificare.

SRP è del secondo tipo: limita i danni di un trojan sul server.

**AKE.** Servono:
- una funzione one-way $P(x)$;
- due funzioni di mescolamento $Q$ e $R$;
- una funzione $S$ che genera la chiave.

Devono soddisfare l'identità qui sotto. Il client invia $P(w)$ e il server $P(y)$, con $w$ e $y$ casuali.

## Formule chiave
$$S(R(P(w),P(A)),Q(y,S))=S(R(P(y),P(S)),Q(w,A)).$$
SRP lavora in $GF(p)$, con $p$ primo grande e $g$ generatore:
$$P(x)=g^x,\quad Q(w,x)=w+u\,x,\quad R(w,x)=w\cdot x^{u}(w,x),\quad S(w,x)=w^x.$$
La forma di $R$ è come stampata a p. 7, da verificare sul PDF.

**Set-up:** Alice sceglie un salt $s$, calcola $x=H(s\|A)$ e consegna al server, in modo sicuro, $s$ e $v=g^x$.

**Protocollo:**
1. il server riceve l'identità di Alice e le manda $s$;
2. Alice invia $g^{a}$;
3. il server sceglie $b$ e $u$ casuali e invia $B=v+g^{b}$ e $u$;
4. le chiavi:
$$\text{server: } S=(g^{a}v^{u})^{b},\qquad \text{Alice: } S=(B-g^{x})^{a+ux},\qquad K=\mathrm{Hash}(S);$$
5. conferma: Alice invia $M_1=\mathrm{Hash}(g^a\|B\|K)$, il server risponde con $M_2=\mathrm{Hash}(g^a\|M_1\|K)$.

## Intuizione
Entrambe le chiavi valgono $g^{b(a+ux)}$:
- lato server, $g^a v^u=g^{a+ux}$;
- lato Alice, $B-g^x=g^b$.

Questo controllo è un calcolo nostro sulle formule delle dispense. La somma $B=v+g^b$ lega la risposta del server al verificatore. Il server rivela $u$ solo dopo aver ricevuto $g^a$: altrimenti un intruso che conosce $v$ invierebbe $g^a v^{-u}$ (esercizio 14.2.8).

## Come si usa
A differenza di EKE, dove entrambe le parti conservano lo stesso segreto $P$, AKE è una "password a conoscenza nulla". Domande d'esame tipiche (esercizio 14.2.8):
- perché non porre $B=g^b$;
- perché non porre $B=v\oplus g^b$ (partition attack).

## Nei corsi
- **Crittografia** (magistrale): dispense di Di Scala, settimana 14. Esiste anche il paper di T. Wu in `week13/the remote password protocol.pdf`, che qui non è stato usato. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week14/Crypto14.pdf` (§14.2 pp. 5-8; formule lette sulle pagine renderizzate).

## Prerequisiti
- [[Problema del logaritmo discreto]]: $v=g^x$ non rivela $x$
- [[Funzione hash crittografica]]: $x=H(s\|A)$, $K$, $M_1$, $M_2$
- [[Encrypted Key Exchange]]: autenticazione con password resistente ai dizionari

## Porta a
- Nessuno.

## Collegati
- [[Scambio di chiavi Diffie-Hellman]]: lo scambio $g^a$, $g^b$ è di tipo DH
- [[Simultaneous Authentication of Equals]]: alternativa paritaria (peer-to-peer)
- [[Tabelle rainbow]]: il salt $s$ contro gli attacchi precalcolati
- [[Prova a conoscenza nulla]]: AKE come password a conoscenza nulla
