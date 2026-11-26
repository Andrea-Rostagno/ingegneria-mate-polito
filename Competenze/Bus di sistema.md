---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [bus, bus dati, bus degli indirizzi, bus di controllo, DBus, ABus, CBus, massima memoria indirizzabile]
tags: [competenza, area/informatica]
---

# Bus di sistema

> La linea di connessione condivisa tra CPU, memoria e controllori di I/O, divisa in bus dati, indirizzi e controllo; la sua ampiezza fissa la memoria indirizzabile.

## Definizione / enunciato
Collegare $n$ unità con connessioni punto-punto non è pratico: il numero di connessioni cresce con il quadrato di $n$. Si usa un'unica linea condivisa, il **bus**, a cui i componenti sono agganciati.
- **Vantaggi**: costi ridotti, estendibilità (aggiungere dispositivi è semplice), standardizzazione delle regole di comunicazione.
- **Svantaggi**: lentezza (uso in mutua esclusione) e sovraccarico della CPU, che fa da master.

Caratteristiche: un solo dato per volta; **frequenza** = dati trasportati al secondo; **ampiezza** = bit di un singolo dato; se mal dimensionato è un collo di bottiglia. Un bus si divide in **bus dati** (DBus), **bus degli indirizzi** (ABus) e **bus di controllo** (CBus).

## Formule chiave
$$\text{max mem} = 2^{|\text{ABus}|} \times |\text{DBus}| \text{ bit}$$

## Intuizione
L'ampiezza del bus indirizzi fissa quante celle si possono distinguere ($2^{|ABus|}$ indirizzi), quella del bus dati quanto è grande ciascuna cella.

## Come si usa
Esempio delle slide: ABus da 20 bit e DBus da 16 bit danno $2^{20} \times 2$ byte $= 2$ MB, cioè 1 M celle di memoria da 2 byte ciascuna.

## Nei corsi
- **Informatica** (triennale): unità T2. Fonti: `triennale/ANNO 1/informatica/Unita T2 - Architettura.pdf` (p. 30-37).
- **Programmazione e calcolo scientifico** (triennale): lezione 2 di M. Cicuttin. La memoria contiene solo bit e la sua organizzazione (8×1, 4×2, 2×4 bit) fissa la **word size**; una parola si seleziona con un indirizzo. Esempio: la memoria 62256 degli anni '80, 256 kbit organizzati 32k × 8 bit, con 15 pin di indirizzo (A0-A14). Nel bus dell'8088 ogni operazione trasferisce un byte; dal Pentium in poi il bus dati dei PC è a 64 bit (anche sulle architetture a 32 bit), il bus indirizzi è a 32 bit sulle macchine a 32 bit, mentre sulle macchine a 64 bit l'indirizzo fisico è largo tra 39 e 48 bit. Dal punto di vista del software la memoria è un enorme array di byte e l'indirizzo è l'indice in questo array (la stringa "Hello" che parte dall'indirizzo 2): concetto da avere chiarissimo per il C++. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 9-23).

## Prerequisiti
- [[Componenti di un elaboratore]]: collega CPU, memoria e I/O
- [[Gerarchia di memoria]]: il bus indirizzi seleziona le celle

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Unità centrale di elaborazione]]: la CPU fa da master del bus
- [[Array in C++]]: memoria indirizzabile al byte, l'array è una fetta contigua (Programmazione e calcolo scientifico)
