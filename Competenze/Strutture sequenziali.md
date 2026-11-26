---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["heap file", "entry sequenced", "struttura sequenziale ordinata", "organizzazione di una pagina su disco", "access method"]
tags: [competenza, area/informatica]
---

# Strutture sequenziali

> Strutture fisiche in cui le tuple sono memorizzate in un ordine sequenziale: in ordine di inserimento (heap file) o secondo una chiave di ordinamento (struttura sequenziale ordinata).

## Definizione / enunciato
Il **gestore dei metodi di accesso** trasforma il piano dell'ottimizzatore in richieste di accesso fisico a pagine del disco. Un **metodo di accesso** è un modulo software specializzato per una sola struttura fisica: sceglie i blocchi da caricare, li chiede al buffer manager e conosce l'organizzazione dei dati nella pagina. Una **pagina su disco** contiene spazio per i dati, spazio di controllo del metodo di accesso e spazio di controllo del file system; le tuple possono avere lunghezza variabile (varchar, null) e una tupla può occupare più pagine (BLOB, CLOB).

**Heap file (entry sequenced).** Le tuple sono in ordine di inserimento; l'inserimento è di solito un append in fondo al file e lo spazio di un blocco è usato tutto prima di passare al successivo. Cancellazioni e aggiornamenti possono lasciare spazio inutilizzato (una tupla aggiornata più lunga può non starci più). Lettura e scrittura sequenziali sono molto efficienti. È molto usato nei DBMS relazionali insieme a **indici secondari** (unclustered) per ricerche e ordinamenti.

**Struttura sequenziale ordinata.** L'ordine fisico dipende dal valore di una **chiave di ordinamento** (uno o più attributi, eventualmente la chiave primaria). È adatta a sort e group by sulla chiave, ricerche sulla chiave e join sulla chiave (quando il join usa l'ordinamento). Problema: mantenere l'ordine con inserimenti (e aggiornamenti). Soluzioni: lasciare una percentuale di spazio libero in ogni blocco alla creazione e riordinare dinamicamente in memoria le tuple del blocco; in alternativa un **file di overflow** per le tuple che non entrano nel blocco giusto. Si usa tipicamente con un indice B+-tree **clustered** (primario) con chiave uguale alla chiave di ordinamento, e per i risultati intermedi delle operazioni.

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
L'heap file ottimizza le scritture e la scansione completa; la struttura ordinata ottimizza le operazioni che sfruttano l'ordine, pagando la manutenzione dell'ordine.

## Come si usa
Nella progettazione fisica: tabella con molti inserimenti e accessi tramite indici secondari, heap; tabella interrogata per intervalli o raggruppata sulla stessa chiave, struttura ordinata con indice clustered.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Physical access structures", parte sulle strutture sequenziali. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/03 - 14-PhysicalAccess.pdf` (pp. 3-14).

## Prerequisiti
- [[Architettura di un DBMS]]: il gestore dei metodi di accesso è un modulo dell'architettura

## Porta a
- [[B+-tree]]: struttura ad albero sopra i dati
- [[Indice hash]]: accesso diretto per chiave

## Collegati
- Nessuno.
