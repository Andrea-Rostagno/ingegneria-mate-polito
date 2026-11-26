---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["schema snowflake", "schema a fiocco di neve", "snowflaking", "normalizzazione delle dimensioni"]
tags: [competenza, area/informatica]
---

# Snowflake schema

> Variante dello schema a stella che spezza (alcune) gerarchie dimensionali in più tabelle collegate da chiavi esterne.

## Definizione / enunciato
Lo **snowflake schema** separa alcune dipendenze funzionali frazionando i dati di una dimensione in più tabelle: si introduce una nuova tabella che divide in due rami una gerarchia dimensionale (taglio su un attributo della gerarchia), e una nuova chiave esterna esprime il legame tra la dimensione e la nuova tabella.

Effetti:
- lo spazio per memorizzare la dimensione si riduce, ma la riduzione non è significativa;
- aumenta il costo di ricostruire l'informazione della dimensione, perché servono uno o più join.

## Formule chiave
Esempio delle slide (taglio sulla città e sul tipo):
- Negozi(ID_Negozi, Negozio, **ID_Città**, Rappresentante), Città(ID_Città, Città, Stato)
- Prodotti(ID_Prodotti, Prodotto, **ID_Tipo**, Fornitore), Tipi(ID_Tipo, Tipo, Categoria)

## Intuizione
È la normalizzazione delle dimensioni. Conviene poco perché lo spazio è dominato dalla tabella dei fatti, di alcuni ordini di grandezza più grande delle dimensioni, mentre i join in più costano a ogni interrogazione.

## Come si usa
Star o snowflake? Le slide concludono che lo snowflake è **normalmente sconsigliato** e raramente usato nella progettazione di data mart: il risparmio di spazio è scarso e il costo dei join aggiuntivi può essere significativo. In un esercizio si sceglie la stella, salvo motivi espliciti.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 38-40).
- **Business intelligence per big data** (magistrale): stesse slide (esempio con Fornitore e Tipo, scelta fra star e snowflake). Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 39-41).

## Prerequisiti
- [[Schema a stella]]: normalizza le tabelle delle dimensioni
- [[Dimensional Fact Model]]: le dipendenze delle gerarchie diventano tabelle

## Porta a
- Nessuno.

## Collegati
- [[Forma normale di Boyce-Codd]]: lo snowflaking è una normalizzazione delle dimensioni
