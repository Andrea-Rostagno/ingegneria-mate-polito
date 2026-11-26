---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [man-in-the-middle attack, MitM, uomo nel mezzo, avversario attivo, active adversary, attacco di impersonificazione, impersonation attack]
tags: [competenza, area/informatica]
---

# Attacco man-in-the-middle

> Attacco attivo in cui l'avversario si interpone tra due parti oneste che eseguono un protocollo e intercetta e modifica i loro messaggi, senza che se ne accorgano.

## Definizione / enunciato
Le dispense (`Critto_week1.pdf` §1.4.3, pagina tratta da Katz-Lindell) distinguono tra:
- **avversario passivo** (eavesdropper): si limita ad ascoltare. È il caso più comune;
- **avversario attivo**: invia messaggi propri a una o a entrambe le parti. Due casi:
  - **impersonificazione**: solo una delle parti oneste esegue il protocollo e l'avversario impersona l'altra;
  - **man-in-the-middle**: entrambe le parti oneste eseguono il protocollo, e l'avversario intercetta e modifica i messaggi che si scambiano.

Ogni protocollo usato in pratica deve resistere anche agli attacchi attivi.

## Formule chiave
Il risultato tipico, per un protocollo di scambio di chiavi, è che le due parti finiscono con chiavi diverse:
$$k_A\neq k_B,\qquad k_A,\ k_B\ \text{entrambe note all'avversario}$$
e né Alice né Bob si accorgono dell'attacco.

## Intuizione
Lo scambio di chiavi non autenticato non può distinguere Bob da qualcuno che "fa finta" di essere Bob. L'avversario esegue il protocollo con Alice e, separatamente, con Bob, e poi inoltra i messaggi ricifrandoli.

Le dispense osservano che una definizione di sicurezza contro gli attacchi attivi non si ottiene senza che le parti condividano **qualche** informazione in anticipo: una password, una chiave pubblica certificata o una firma.

## Come si usa
Il caso studiato è **Diffie-Hellman**, "completamente insicuro" contro il man-in-the-middle: l'avversario può far terminare Alice e Bob con chiavi $k_A$ e $k_B$ diverse, entrambe note a lui (la verifica è lasciata come esercizio). Restano importanti:
- l'idea del protocollo, prima dimostrazione che tecniche asimmetriche risolvono la distribuzione delle chiavi;
- le sue estensioni autenticate, che resistono all'attacco.

## Nei corsi
- **Crittografia** (magistrale): lezione 1, §1.4.3 (pagina-immagine letta dal render). Fonte: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, p. 21).

## Prerequisiti
- [[Modelli di attacco crittografico]]: estende gli scenari passivi con l'avversario attivo
- [[Crittografia a chiave pubblica]]: le chiavi pubbliche vanno autenticate

## Porta a
- [[Scambio di chiavi Diffie-Hellman]]: esempio classico di protocollo vulnerabile

## Collegati
- [[Attacco meet-in-the-middle]]: contrasto, stessa sigla MITM ma è un KPA sulla doppia cifratura
