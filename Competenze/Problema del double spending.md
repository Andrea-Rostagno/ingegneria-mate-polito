---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [double spending, doppia spesa, double-spending problem, scarsità digitale, digital scarcity]
tags: [competenza, area/informatica]
---

# Problema del double spending

> Un'unità digitale firmata si può copiare e spendere più volte; la blockchain risolve il problema registrando una sola storia pubblica degli output spesi, e questo crea la scarsità digitale.

## Definizione / enunciato
Prima della blockchain esistevano già modi crittografici per provare una transazione di valore (la firma digitale). Il problema è che un utente può usare due o più volte la stessa prova crittografica e spendere ripetutamente lo stesso denaro: è il **double spending**. Le slide definiscono la sua soluzione "la vera innovazione della tecnologia blockchain"; la **scarsità digitale** si basa sulla struttura stessa della blockchain e sulla sua immodificabilità.

## Formule chiave
Nessuna formula. Scenario delle slide: Alice firma due transazioni con lo stesso input AddressA (1 BTC) e output AddressB o AddressC; separatamente entrambe sono valide.

## Intuizione
La firma dice *chi* ha autorizzato un pagamento, non *se* quei fondi sono già stati spesi. Serve un ordine condiviso delle transazioni: la prima incluse in un blocco valido vince, l'altra diventa invalida.

## Come si usa
In Bitcoin il controllo avviene in due fasi. Nella **verifica** delle transazioni i nodi consultano l'UTXO set e rifiutano in mempool una transazione che usa un input già usato da un'altra. Ma la rete è asincrona, quindi Alice potrebbe far arrivare le due transazioni a nodi diversi: decide la **validazione del blocco** (mining), che fissa in modo definitivo quali transazioni entrano. Una transazione con molte conferme non viene più annullata da una fork. Nella PoS il "nothing at stake" riapre il rischio di spendere due volte in una riorganizzazione.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (p. 10); `03-Bitcoin.pdf` (pp. 46-50); dispensa §2.4.

## Prerequisiti
- [[Blockchain]]: storia pubblica e immodificabile
- [[Firma digitale]]: prova crittografica già disponibile ma insufficiente

## Porta a
- [[Modello UTXO]]: si tiene traccia degli output non spesi
- [[Mining]]: la validazione del blocco decide la transazione definitiva

## Collegati
- [[Precursori di Bitcoin]]: RPoW e Bit gold affrontavano la riusabilità dei token
- [[Fork della blockchain]]: una riorganizzazione può annullare transazioni con poche conferme
