---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["hierarchical locking", "ISL", "IXL", "SIXL", "SL", "XL", "lock di intenzione", "granularità dei lock", "matrice di compatibilità"]
tags: [competenza, area/informatica]
---

# Locking gerarchico

> Estensione del locking che permette di bloccare risorse a diversi livelli di granularità (tabella, frammento, tupla, campo) usando anche lock di "intenzione" sui nodi antenati.

## Definizione / enunciato
I lock possono essere acquisiti a granularità diverse, organizzate ad albero: base di dati → tabella → gruppo di tuple (frammento, secondo criteri fisici come la pagina o logici come le tuple che soddisfano una proprietà) → tupla → campo. Il locking gerarchico consente di chiedere il lock al livello appropriato, con un insieme più ricco di primitive:
- **SL** (Shared Lock) e **XL** (eXclusive Lock);
- **ISL** (Intention of Shared Lock): intenzione di bloccare in modo condiviso un discendente;
- **IXL** (Intention of eXclusive Lock): analogo per il lock esclusivo;
- **SIXL**: lock condiviso del nodo corrente e intenzione di lock esclusivo su uno o più discendenti.

**Protocollo di richiesta**:
1. i lock si chiedono partendo dalla radice e scendendo;
2. si rilasciano partendo dal nodo bloccato di granularità più fine e risalendo;
3. per chiedere SL o ISL su un nodo serve un ISL (o IXL) sul padre;
4. per chiedere XL, IXL o SIXL su un nodo serve un IXL o SIXL sul padre.

## Formule chiave
Matrice di compatibilità (richiesta / stato della risorsa):

| | ISL | IXL | SL | SIXL | XL |
|---|---|---|---|---|---|
| ISL | Ok | Ok | Ok | Ok | No |
| IXL | Ok | Ok | No | No | No |
| SL | Ok | No | Ok | No | No |
| SIXL | Ok | No | No | No | No |
| XL | No | No | No | No | No |

Grafo di precedenza dei lock (dal più forte): XL → SIXL → SL, IXL → ISL.

## Intuizione
I lock di intenzione sono "cartelli" sugli antenati: chi vuole bloccare un'intera tabella vede subito che qualcuno sta lavorando su una sua tupla, senza esaminare tutte le tuple.

## Come si usa
**Scelta della granularità**: dipende dall'applicazione; letture o aggiornamenti localizzati su pochi oggetti → livelli bassi (granularità fine); letture o aggiornamenti massivi → livelli alti (granularità grossa). Granularità troppo grossa riduce la concorrenza (molti conflitti); troppo fine sovraccarica il lock manager. Il predicate locking (blocco di tutti i dati che soddisfano un predicato, realizzato bloccando gli indici) è l'estensione che risolve il ghost update da insert.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Hierarchical locking". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (pp. 58-70).

## Prerequisiti
- [[Locking a due fasi]]: lock a più granularità

## Porta a
- Nessuno.

## Collegati
- [[Livelli di isolamento SQL]]: granularità dei lock e predicate locking
