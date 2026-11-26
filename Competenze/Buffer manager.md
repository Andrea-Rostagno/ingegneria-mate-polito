---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["gestore del buffer", "buffer pool", "fix", "unfix", "set dirty", "force", "flush", "località dei dati"]
tags: [competenza, area/informatica]
---

# Buffer manager

> Modulo del DBMS che trasferisce le pagine tra disco e memoria centrale e gestisce il buffer condiviso tramite le primitive fix, unfix, set dirty, force e flush.

## Definizione / enunciato
Il **buffer** è un grande blocco di memoria centrale preallocato al DBMS e condiviso dalle transazioni in esecuzione, organizzato in **pagine** la cui dimensione dipende dal blocco di I/O del sistema operativo. La gestione efficiente del buffer è decisiva per le prestazioni.

Per ogni pagina il buffer manager conserva: la posizione fisica su disco (identificatore del file, numero di blocco) e due variabili di stato, **Count** (numero di transazioni che usano la pagina) e **Dirty** (bit a 1 se la pagina è stata modificata).

**Primitive** (offerte ai metodi di accesso; richiedono il permesso del controllo della concorrenza):
- **Fix**: una transazione chiede una pagina. Se è già nel buffer (caso frequente per la località) se ne restituisce l'indirizzo; altrimenti si cerca posto prima tra le pagine libere, poi tra le **pagine vittima** con Count = 0; se la vittima ha Dirty = 1 viene scritta in modo sincrono su disco. Alla fine Count aumenta di 1. Richiede I/O solo se la pagina non è nel buffer.
- **Unfix**: la transazione non usa più la pagina; Count diminuisce di 1.
- **Set dirty**: segnala la modifica; Dirty = 1.
- **Force**: trasferimento sincrono su disco; la transazione resta sospesa; comporta sempre una scrittura.
- **Flush**: interna al buffer manager, scrive su disco in modo asincrono, nei tempi morti della CPU, pagine non valide (Count = 0) e non usate da tempo.

## Formule chiave
Legge empirica della località: **20-80**, il 20% dei dati è letto/scritto dall'80% delle transazioni.

## Intuizione
È una cache specializzata: a differenza del sistema operativo, il DBMS sa quando una transazione termina e quali pagine servono, quindi sceglie meglio cosa tenere e quando scrivere.

## Come si usa
Si appoggia ai servizi del file system: creazione/cancellazione e apertura/chiusura di file, lettura diretta di un blocco (file, numero di blocco, pagina di buffer) e lettura sequenziale di un numero fissato di blocchi, con le analoghe scritture. Le scelte su quali pagine scrivere e quando definiscono le strategie steal/force.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): mazzo "Buffer manager". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/02 - 13-BufferManager.pdf` (pp. 3-15, 19-20); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/01 - 12-IntroductionDBMS.pdf` (p. 7).

## Prerequisiti
- [[Architettura di un DBMS]]: modulo dell'architettura

## Porta a
- [[Strategie steal e force]]: politiche di scrittura delle pagine

## Collegati
- [[Gerarchia di memoria]]: pagine tra memoria centrale e disco
