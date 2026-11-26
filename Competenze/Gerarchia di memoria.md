---
tipo: competenza
area: informatica
corsi: [Informatica, Data science tecnologie basi di dati, Programmazione e calcolo scientifico, Base di dati]
livello: [triennale, magistrale]
aliases: [RAM, cache, SRAM, DRAM, memoria flash, memoria di massa, indirizzamento, volatile]
tags: [competenza, area/informatica]
---

# Gerarchia di memoria

> Organizzazione della memoria in livelli, dai più veloci, costosi e volatili vicino al processore ai più lenti, economici e permanenti lontano.

## Definizione / enunciato
La memoria conserva dati e istruzioni: serve per motivi intrinseci (memoria di massa) e di efficienza. Caratteristiche:
- **indirizzamento**: la memoria è divisa in **celle**, la minima unità accessibile, ciascuna con un indirizzo numerico univoco;
- **parallelismo**: ogni cella contiene una quantità fissa di bit (word), uguale per tutte, multipla del byte, di solito pari alla dimensione dei registri;
- **accesso** sequenziale o casuale;
- **struttura gerarchica**.

La memoria ideale (grande, economica, veloce, non volatile) non esiste: le memorie veloci costano e sono volatili, quelle non volatili sono economiche ma lente. Si organizza quindi a livelli per ottimizzare tempo medio di accesso e costo medio: più vicino al processore le più veloci e costose.

## Intuizione
Tabella delle slide (valori indicativi): SRAM (cache) 1-16 MB, 1-5 ns, volatile; DRAM 4-16 GB, 50-150 ns, volatile; FLASH 16-512 GB, circa 10 ms (con un asterisco nella slide, la cui nota non è riportata), non volatile; disco oltre 1 TB, circa 10 ms, non volatile; il costo per byte scende passando dalla cache al disco ($10^{-5}$, $10^{-8}$, $10^{-9}$, $10^{-10}$ dollari per byte).

## Come si usa
Domanda tipica: perché serve una gerarchia e come si confrontano i livelli per dimensione, velocità, costo e persistenza. Collegamento pratico: un programma deve essere portato in memoria (RAM) per essere eseguito, mentre i file restano sulla memoria di massa.

## Nei corsi
- **Informatica** (triennale): unità T2. Fonti: `triennale/ANNO 1/informatica/Unita T2 - Architettura.pdf` (p. 23-28).
- **Data science tecnologie basi di dati** (magistrale): il buffer del DBMS è un blocco di memoria centrale preallocato, organizzato in pagine grandi quanto il blocco di I/O del sistema operativo; il buffer manager trasferisce le pagine tra disco e memoria centrale sfruttando la località dei dati. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/02 - 13-BufferManager.pdf` (pp. 3-5).
- **Programmazione e calcolo scientifico** (triennale): lezione 2 di M. Cicuttin. CPU e memorie si sono evolute a velocità diverse, da cui le architetture a livelli (northbridge, southbridge, bus PCI); la cache è una memoria piccola ma veloce, la cui introduzione è suggerita dal principio di località. Ordini di grandezza: L1 32-128 kB e L2 512 kB a $O(1)$ TB/s, L3 6-128 MB a $O(400)$ GB/s, memoria principale 8-128 GB a $O(100)$ GB/s. Le slide mostrano una cache a mappatura diretta e ne ricavano la regola che gli algoritmi devono essere cache-aware. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 24-27).
- **Base di dati** (triennale): una riga nell'introduzione: le basi di dati hanno dimensioni molto maggiori della memoria centrale disponibile, quindi il DBMS gestisce i dati in memoria secondaria. Fonti: `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (p. 11).

## Prerequisiti
- [[Componenti di un elaboratore]]: dettaglia il blocco memoria

## Porta a
- [[Bus di sistema]]: il bus indirizzi seleziona le celle
- [[Codice cache-aware]]: gli algoritmi devono sfruttare la cache (Programmazione e calcolo scientifico)

## Collegati
- [[Unità centrale di elaborazione]]: registri e cache sono il livello più vicino alla CPU
- [[Buffer manager]]: pagine tra memoria centrale e disco
- [[DBMS]]: dati più grandi della memoria centrale, gestiti in memoria secondaria
