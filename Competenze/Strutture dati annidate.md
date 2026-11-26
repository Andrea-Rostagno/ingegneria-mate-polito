---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [strutture dati complesse, dizionario di insiemi, dizionario di liste, lista di dizionari, indice analitico]
tags: [competenza, area/informatica]
---

# Strutture dati annidate

> Combinare liste, insiemi, dizionari e tuple, uno dentro l'altro, per rappresentare dati con un'organizzazione più ricca.

## Definizione / enunciato
In Python liste e dizionari possono contenere qualsiasi tipo di dato, compresi altri contenitori; combinando liste, insiemi, dizionari e tuple si ottengono strutture più complesse che organizzano meglio le informazioni. Schemi visti:
- **dizionario di insiemi**: chiave univoca → insieme di valori senza duplicati;
- **dizionario di liste**: chiave univoca → lista di valori (una riga di tabella con nome);
- **lista di dizionari**: tabella di record con campi nominati;
- dizionari con chiavi tupla o valori lista/tupla.

La scelta segue i vincoli del problema: unicità → chiave di dizionario o insieme; ordine → lista o `sorted`; informazione associata → dizionario.

## Formule chiave
```python
def addWord(entries, term, page) :
    # If the term is already in the dictionary, add the page to the set.
    if term in entries :
        pageSet = entries[term]
        pageSet.add(page)
    # Otherwise, create a new set that contains the page and add an entry.
    else :
        pageSet = set([page])
        entries[term] = pageSet
```
(da `buildindex.py`, P8 p. 100; `main` parte da `indexEntries = {}` e legge i record `pagina:termine` con `extractRecord`, p. 98-99)

## Intuizione
Ogni livello della struttura risponde a un requisito: nell'indice analitico i termini devono essere unici e ordinati (chiavi del dizionario, iterate con `sorted`), le pagine di un termine uniche (insieme), e alle pagine non è associata altra informazione (quindi insieme, non dizionario).

## Come si usa
Esempi: **indice analitico** da un file `6:type`, `7:example`, ... con output `example: 7, 10` ecc. (`buildindex.py`); **vendite di gelati** da righe `vanilla:8580.0:7201.25:8900.0` (gusto → lista delle vendite per negozio, report con totali di riga e colonna, `icecreamsales.py`, poi diviso nei moduli `tabulardata.py` e `salesreport.py`).

## Nei corsi
- **Informatica** (triennale): unità P8 sezione 8.3. Fonti: `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 91-109, 120).

## Prerequisiti
- [[Dizionario in Python]]: contenitore esterno tipico
- [[Insieme in Python]]: valori univoci dentro un dizionario

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Tabelle bidimensionali]]: il dizionario di liste è una tabella con righe nominate
- [[Elaborazione di file di record]]: la lista di dizionari rappresenta un file di record
