---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [positional parameters, named parameters, keyword arguments, valori di default, parametri opzionali, args]
tags: [competenza, area/informatica]
---

# Argomenti posizionali e nominali

> Le due modalità di associare gli argomenti ai parametri (per posizione o per nome), i valori di default e le liste di argomenti variabili.

## Definizione / enunciato
- **Posizionali** (default): il primo argomento inizializza il primo parametro, il secondo il secondo, e così via.
- **Nominali**: si indica il nome del parametro, `complex(real = 3, imag = 5)`, in qualsiasi ordine.
- Regola: i posizionali devono **precedere** i nominali.
- **Valori di default**: `def complex(real = 0.0, imag = 0.0)` rende i parametri opzionali; si usa il default se nessun argomento è assegnato.
- **Argomenti variabili**: `*args` (es. `*objects` di `print`) raccoglie un numero variabile di argomenti, sempre posizionali e senza nome.

## Formule chiave
```python
x = complex(3, 5)               # 3+5j  posizionali
x = complex(imag = 5, real = 3) # 3+5j  nominali, ordine libero
x = complex(imag = 5)           # 5j    real prende il default 0.0
print(hour, min, sec, sep=':')  # sep ed end sono nominali
```

## Intuizione
I parametri nominali con default rendono le funzioni flessibili senza obbligare il chiamante a fornire tutto: è il motivo per cui `print`, `sort` e `open` hanno tanti parametri opzionali.

## Come si usa
Esempi d'uso nel corso: `print(..., sep=..., end=..., file=...)`, `sorted(values, reverse=True)`, `lista.sort(key=itemgetter('nome'))`, `open(nome, 'r', encoding='utf-8')`, `dictionary.get(key, default)`.

## Nei corsi
- **Informatica** (triennale): unità P5 sezione 5.3 (parametri posizionali o nominali); `sep`/`end` in P4. Fonti: `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 33-37), `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 76).

## Prerequisiti
- [[Passaggio di parametri]]: regole per associare argomenti e parametri

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Output formattato]]: sep ed end di print sono parametri nominali
- [[Ordinamento di liste]]: reverse e key sono parametri nominali
