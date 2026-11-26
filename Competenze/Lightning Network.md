---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [LN, rete Lightning, protocollo di livello 2, layer 2 protocol, rete di canali di pagamento, atomic transaction, routing dei pagamenti]
tags: [competenza, area/informatica]
---

# Lightning Network

> Protocollo di pagamento di livello 2 sopra Bitcoin: una rete di canali di pagamento in cui un pagamento viaggia lungo un cammino di canali, reso atomico da HTLC con lo stesso hash; offre micropagamenti veloci e con fee minime.

## Definizione / enunciato
Obiettivo: (micro)transazioni veloci ed economiche, come risposta alla scalabilità di Bitcoin e alle fee alte per piccoli importi. Molti utenti e **hub** aprono canali fra loro, finché ogni utente è collegato a ogni altro da un cammino di canali. Lightning sceglie il cammino con le fee più basse e ribilancia tutti i canali coinvolti. Tutte le fee le paga il mittente.

**Atomic transaction** (Carl paga Dean lungo Carl-Alice-Bob-Eve-Dean):
1. Dean sceglie un segreto $S$ e pubblica $H=\text{Hash}(S)$;
2. tutti i canali creano commitment con il nuovo saldo (fee comprese) bloccate da $H$ (HTLC);
3. Dean usa $S$ per incassare da Eve; Eve, che ora conosce $S$, incassa da Bob; Bob da Alice; Alice da Carl.

## Formule chiave
Vincolo di capacità: in ogni momento lo sbilanciamento di un canale deve restare inferiore al capitale apportato da ciascuno dei due creatori. Bitcoin on-chain: massimo 7 tx/s, media circa 3-4; Lightning: potenzialmente migliaia al secondo.

## Intuizione
Essendo tutte le commitment bloccate dallo stesso $H$, o non succede nulla o, se Dean incassa, si sbloccano a cascata all'indietro tutti i passaggi. Le fee si autoregolano per legge di mercato: troppo alte, il canale viene evitato; troppo basse, molti passaggi ma poco guadagno.

## Come si usa
**Limiti**: capacità dei canali (adatta solo a micropagamenti); sbilanciamento (al massimo un canale funziona in un solo verso); nodi che si disconnettono interrompono i canali; servono grandi liquidità, con rischio di grandi hub e centralizzazione; il routing richiede sempre di trovare un cammino dal pagante al ricevente.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03B-Lightning Network.pdf` (pp. 3, 17-26); `03-Bitcoin.pdf` (p. 149); dispensa §4.

## Prerequisiti
- [[Canale di pagamento]]: mattone della rete
- [[Hashed Timelock Contract]]: rende atomico il pagamento multi-hop
- [[Grafo]]: la rete di canali è un grafo, il pagamento un cammino

## Porta a
- Nessuno.

## Collegati
- [[Fee di transazione]]: fee off-chain molto più basse
- [[Bitcoin]]: soluzione di livello 2 alla scarsa scalabilità
