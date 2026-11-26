---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [Bitcoin transaction, input e output, resto, lock time, In-Counter, Out-Counter, transazioni con più input e output]
tags: [competenza, area/informatica]
---

# Transazione Bitcoin

> Documento firmato che consuma output non spesi di transazioni precedenti (input) e crea nuovi output verso indirizzi; la differenza fra input e output è la fee.

## Definizione / enunciato
Protocollo Alice → Bob (1 BTC):
1. Bob crea una coppia $(d_B,d_BG)$ con l'ECC fissata e calcola l'indirizzo $\text{Address}_B$;
2. Bob invia ad Alice l'indirizzo;
3. Alice scrive la transazione con input $\text{Address}_A$ (dove ha ricevuto 1 BTC) e output $\text{Address}_B$;
4. Alice la firma con ECDSA e la invia; Bob verifica la firma e Alice non può ripudiare l'impegno.

**Struttura** (p. 32): Versione (4 byte), In-Counter, lista degli input (UTXO di transazioni precedenti), Out-Counter, lista degli output, **Lock time** (4 byte).

## Formule chiave
Con più input si raggiunge l'importo; con due output si paga Bob e si rimanda il **resto** ad Alice:
$$\text{fee}=\sum\text{input}-\sum\text{output}.$$

## Intuizione
Non c'è un saldo da aggiornare: si "smontano" monete ricevute e se ne "coniano" di nuove. Così non è pubblico l'estratto conto di nessuno.

## Come si usa
**Lock time**: se è 0 la transazione è subito eseguibile; altrimenti indica un'altezza di blocco o un timestamp prima del quale non può entrare in un blocco. Serve per pagamenti a scadenza, ma non dà garanzie al ricevente: se nel frattempo il mittente spende i fondi, alla scadenza la transazione viene rifiutata. Da non confondere con il **Timelock**, che sposta subito i fondi ma li blocca. Prima di diventare effettiva la transazione passa per la verifica (UTXO set, mempool) e la validazione del blocco.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 16-18, 31-34, 36-41, tabella di p. 32 vista sulla pagina renderizzata); dispensa §3.7-3.8.

## Prerequisiti
- [[Firma digitale]]: Alice firma la transazione
- [[ECDSA]]: algoritmo di firma usato
- [[Indirizzo Bitcoin]]: destinazione degli output

## Porta a
- [[Modello UTXO]]: gli input sono output non spesi
- [[Fee di transazione]]: differenza input meno output
- [[Coinbase transaction]]: transazione speciale senza input reali
- [[Hashed Timelock Contract]]: condizioni di spesa più ricche
- [[Canale di pagamento]]: transazioni scambiate fuori catena

## Collegati
- [[Privacy coin]]: in Bitcoin input e output sono in chiaro
