---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [f-string, stringhe formattate, operatore di formattazione %, specificatori di formato, print sep end, format]
tags: [competenza, area/informatica]
---

# Output formattato

> Inserire valori in stringhe con un formato controllato (larghezza, allineamento, cifre decimali) tramite f-string o l'operatore %.

## Definizione / enunciato
Metodi visti (P3 p. 8-9): concatenazione di stringhe, **f-string**, operatore `%`, metodo `.format()` (gli ultimi due non approfonditi).

**f-string**: stringa preceduta da `f` con campi `{espressione}` valutati in esecuzione; `{result=}` stampa anche il nome (utile per debug). Specificatori dopo i due punti: `{valore:riempimento allineamento segno larghezza , .precisione tipo}`. Allineamenti `<` (sinistra, default per le stringhe), `>` (destra, default per i numeri), `^` (centro), `=`; tipi `s`, `d`, `f`, `e`, `g`, `b`, `o`, `x`, `%`.

**Operatore %**: `"stringa con specificatori" % (valore, ...)`, specificatori `%s`, `%d`, `%f`, `%.2f`, `%10.2f`, `%-10s`, `%x`; ogni specificatore è sostituito nell'ordine dal valore corrispondente.

**print**: i parametri nominali `sep=` (separatore, default spazio) ed `end=` (terminatore, default `'\n'`): `print("00", end="")` seguito da `print(3 + 4)` stampa `007`.

## Formule chiave
```python
print(f'The area of a circle of radius {r} is {area}')
print("Price per liter %.2f" % (price))      # 1.22
print("%-10s%10.2f" % ("Total: ", price))
f'{n:5d} {a:7.2f} {s:>10s}'                  # dal prontuario
```

## Intuizione
Larghezza e precisione fissate permettono di incolonnare i numeri: è ciò che serve per stampare tabelle e report leggibili.

## Come si usa
Esempi: stampa della tabella delle potenze con `end=""` (P4 `powertable.py`), stampa di una tabella di medaglie con `"%8d"` (P6 p. 133), report con nomi allineati a sinistra e numeri a destra (P7, densità di popolazione), stampa di record con `f"{record['country']:20} {record['population']:10}"` (P8 p. 76).

## Nei corsi
- **Informatica** (triennale): unità P3 sezione 2.5 (le f-string non sono nel libro di testo); parametri di print in P4 sezione 4.7. Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 7-27), `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 76-77), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 1-2).

## Prerequisiti
- [[Stringa in Python]]: costruisce stringhe con valori inseriti

## Porta a
- [[Scrittura su file di testo]]: le righe scritte si formattano come le stampe

## Collegati
- [[Argomenti posizionali e nominali]]: sep ed end di print sono parametri nominali
- [[Sistema di numerazione posizionale]]: i formati b, o, x stampano in base 2, 8, 16
