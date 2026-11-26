---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["selezione delle viste", "view selection", "vincolo di spazio", "costo di aggiornamento"]
tags: [competenza, area/informatica]
---

# Scelta delle viste da materializzare

> Problema di progetto: fra le moltissime aggregazioni possibili, scegliere l'insieme di viste materializzate che minimizza i costi rispettando i vincoli di spazio, aggiornamento, risposta e freschezza.

## Definizione / enunciato
Le combinazioni di aggregazioni sono moltissime e quasi tutte eleggibili. Si cerca l'insieme "ottimo" di viste minimizzando funzioni di costo:
- costo di **esecuzione delle interrogazioni** del carico di lavoro;
- costo di **aggiornamento** delle viste materializzate;

con i **vincoli**:
- spazio disponibile;
- tempo disponibile per l'aggiornamento;
- tempo di risposta;
- freschezza dei dati.

**Viste candidate**: le viste potenzialmente utili a ridurre il costo di esecuzione del carico di lavoro, cioè i nodi del reticolo da cui le query $q_1,q_2,q_3$ sono derivabili (slide 6).

## Formule chiave
Nessuna formula esplicita: le slide confrontano, per diverse scelte, tre grandezze, **spazio su disco**, **tempo di aggiornamento** e **costo di esecuzione**, mostrando tre obiettivi alternativi (pp. 7-9):
1. minimizzazione di spazio e tempo di aggiornamento;
2. minimizzazione del costo di esecuzione;
3. rispetto dei vincoli.

## Intuizione
Più viste si materializzano, più le query sono veloci ma più crescono spazio e tempo di aggiornamento: è un compromesso, e il materializzare solo la tabella dei fatti e il materializzare tutto il reticolo sono i due estremi.

## Come si usa
Procedimento: (1) si collocano le query frequenti nel reticolo multidimensionale; (2) si individuano le viste candidate; (3) si sceglie il sottoinsieme che rispetta i vincoli, privilegiando le viste che servono più interrogazioni insieme (criterio generale della progettazione fisica del DW). Ogni vista scelta va poi mantenuta: il tipo di refresh disponibile incide sul costo di aggiornamento.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/05 - DSTBD_5-DWprogFisAlim-IT.pdf` (pp. 5-9; criteri di scelta delle strutture p. 12). I grafici delle pp. 6-9 sono figure tratte da Golfarelli-Rizzi senza valori numerici leggibili nel testo estratto.
- **Business intelligence per big data** (magistrale): stesse slide (numero enorme di combinazioni, minimizzazione dei costi di esecuzione e aggiornamento sotto vincoli di spazio, tempo di aggiornamento, tempo di risposta e freschezza; viste candidate). Fonti: `magistrale/Business intelligence per big data/11-DWprogFis.pdf` (pp. 5-9).

## Prerequisiti
- [[Reticolo multidimensionale]]: si scelgono nodi del reticolo

## Porta a
- Nessuno.

## Collegati
- [[Refresh delle viste materializzate]]: il costo di aggiornamento limita la scelta
