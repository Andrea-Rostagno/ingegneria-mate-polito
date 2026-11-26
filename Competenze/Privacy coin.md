---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [Monero, XMR, ring signature, firma ad anello, RingCT, Ring Confidential Transaction, stealth address, indirizzo invisibile, Kovri, RandomX, privacy di Bitcoin, pseudonimato]
tags: [competenza, area/informatica]
---

# Privacy coin

> Criptovaluta che nasconde mittente, importo e destinatario, a differenza di Bitcoin dove le transazioni sono in chiaro e la privacy si regge solo sulla difficoltà di collegare indirizzi e persone; l'esempio del corso è Monero.

## Definizione / enunciato
**Privacy in Bitcoin**: tutte le transazioni sono registrate in chiaro; si sanno gli indirizzi di input e output ma non a chi appartengono (pseudonimato, non anonimato). Rischi:
- **locali**: cronologia del browser, cookie, client;
- **di rete**: IP (da nascondere con VPN o proxy), ISP, Wi-Fi pubblici, man-in-the-middle;
- **di blockchain**: riuso degli indirizzi; gli input di una transazione sono di solito della stessa persona e spesso anche l'output più piccolo (il resto); analisi a ritroso.

**Monero** (2014, fork di Bytecoin), la privacy coin per eccellenza, aggiunge:
- **ring signature**: firma mescolando chiavi pubbliche di più utenti, così il vero mittente resta segreto;
- **RingCT**: chi paga dimostra di avere il denaro senza indicare in chiaro l'importo;
- **stealth address**: rende difficile risalire ai wallet coinvolti;
- **Kovri**: nasconde l'indirizzo IP.

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
La blockchain pubblica è un archivio di tutte le transazioni: un solo collegamento indirizzo-persona può svelare molto della storia. Le privacy coin rompono proprio i collegamenti usati dall'analisi (mittente, importo, destinatario).

## Come si usa
Monero usa come consenso la PoW **RandomX**, ottimizzata per CPU e finora resistente agli ASIC, e aggiornabile per mantenere la resistenza in futuro. Per le slide di confutazione, Bitcoin, essendo tracciabile, non è uno strumento particolarmente adatto al riciclaggio.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/07-Altcoin.pdf` (pp. 7-9); `03-Bitcoin.pdf` (pp. 146-147); `02-Introduzione.pdf` (p. 9); `04-Denaro.pdf` (p. 47).

## Prerequisiti
- [[Altcoin]]: Monero è un'altcoin
- [[Bitcoin]]: limiti di privacy da superare

## Porta a
- Nessuno.

## Collegati
- [[Firma digitale]]: la ring signature è una firma che nasconde il firmatario
- [[Transazione Bitcoin]]: input, output e resto in chiaro
